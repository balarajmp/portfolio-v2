/**
 * Purpose: Central barrel export for all navigation system components.
 * Used By: AppShell, Root Layout, Page Headers, Mobile Menus.
 * Accessibility: Re-exports WCAG AA compliant navigation components.
 * Notes: Single entry point for navigation components (@/components/shared/navigation).
 */

export { Navigation, type NavigationProps } from "./Navigation";
export { DesktopNavigation, type DesktopNavigationProps } from "./DesktopNavigation";
export { MobileNavigation, type MobileNavigationProps } from "./MobileNavigation";
export { NavigationItem, type NavigationItemProps } from "./NavigationItem";
export { Logo, type LogoProps } from "./Logo";
export { ResumeButton, type ResumeButtonProps } from "./ResumeButton";
export { SocialLinks, type SocialLinksProps } from "./SocialLinks";
export { MobileMenuButton, type MobileMenuButtonProps } from "./MobileMenuButton";
export {
  NavigationProvider,
  useNavigationContext,
  type NavigationContextValue,
} from "./NavigationContext";
