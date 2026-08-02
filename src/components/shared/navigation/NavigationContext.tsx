"use client";

/**
 * Purpose: Context provider and hook for managing mobile navigation drawer open/close state, keyboard ESC handling, and focus restoration.
 * Used By: Navigation, MobileMenuButton, MobileNavigation, DesktopNavigation.
 * Accessibility: Manages screen-reader visibility, focus traps, and keyboard ESC key dismissal.
 * Notes: Restores keyboard focus to the MobileMenuButton trigger upon menu closure.
 */

import * as React from "react";

export interface NavigationContextValue {
  /**
   * Indicates if the mobile slide-over drawer is open
   */
  isOpen: boolean;
  /**
   * Opens mobile drawer
   */
  open: () => void;
  /**
   * Closes mobile drawer and restores focus to menu button trigger
   */
  close: () => void;
  /**
   * Toggles mobile drawer state
   */
  toggle: () => void;
  /**
   * Ref object pointing to the menu button trigger element for focus restoration
   */
  triggerRef: React.RefObject<HTMLButtonElement>;
}

const NavigationContext = React.createContext<NavigationContextValue | undefined>(
  undefined
);

export interface NavigationProviderProps {
  children: React.ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const open = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = React.useCallback(() => {
    setIsOpen(false);
    // Restore focus to trigger button after state update
    requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  }, []);

  const toggle = React.useCallback(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [isOpen, open, close]);

  // Handle ESC key listener for mobile drawer dismissal
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent background scrolling when mobile menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  const value = React.useMemo(
    () => ({
      isOpen,
      open,
      close,
      toggle,
      triggerRef,
    }),
    [isOpen, open, close, toggle]
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

/**
 * Custom hook to access navigation context state
 */
export const useNavigationContext = (): NavigationContextValue => {
  const context = React.useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "useNavigationContext must be used within a NavigationProvider"
    );
  }
  return context;
};
