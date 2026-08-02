import type { NavigationConfig } from "@/types";

/**
 * Configuration-Driven Global Navigation Structure
 */
export const navigation: NavigationConfig = {
  headerNav: [
    {
      id: "nav-projects",
      label: "Projects",
      url: "/#projects",
      shortcut: "G P",
      ariaLabel: "Navigate to Projects showcase",
    },
    {
      id: "nav-experience",
      label: "Experience",
      url: "/#experience",
      shortcut: "G E",
      ariaLabel: "Navigate to Professional Experience",
    },
    {
      id: "nav-skills",
      label: "Tech Stack",
      url: "/#skills",
      shortcut: "G S",
      ariaLabel: "Navigate to Tech Radar Matrix",
    },
    {
      id: "nav-about",
      label: "About",
      url: "/#about",
      shortcut: "G A",
      ariaLabel: "Navigate to Engineering Philosophy and Bio",
    },
  ],
  mobileNav: [
    {
      id: "mob-home",
      label: "Home",
      url: "/",
      iconName: "Home",
    },
    {
      id: "mob-projects",
      label: "Projects",
      url: "/#projects",
      iconName: "FolderGit2",
    },
    {
      id: "mob-experience",
      label: "Experience",
      url: "/#experience",
      iconName: "Briefcase",
    },
    {
      id: "mob-skills",
      label: "Skills",
      url: "/#skills",
      iconName: "Cpu",
    },
    {
      id: "mob-contact",
      label: "Contact",
      url: "/#contact",
      iconName: "Mail",
    },
  ],
  commandPalette: [
    {
      id: "sec-nav",
      title: "Navigation",
      items: [
        { id: "cmd-home", label: "Go to Home Page", url: "/", shortcut: "G H" },
        { id: "cmd-projects", label: "Go to Featured Projects", url: "/#projects", shortcut: "G P" },
        { id: "cmd-experience", label: "Go to Career Experience", url: "/#experience", shortcut: "G E" },
        { id: "cmd-skills", label: "Go to Tech Radar", url: "/#skills", shortcut: "G S" },
        { id: "cmd-about", label: "Go to About & Mindset", url: "/#about", shortcut: "G A" },
      ],
    },
    {
      id: "sec-recruiter",
      title: "Recruiter Quick Actions",
      items: [
        { id: "cmd-resume", label: "Download Resume PDF", url: "/resume.pdf", isPrimaryCTA: true, shortcut: "D R" },
        { id: "cmd-email", label: "Send Direct Email", url: "mailto:balarajmp@gmail.com", isExternal: true, shortcut: "C E" },
        { id: "cmd-call", label: "Schedule Intro Call", url: "https://calendly.com", isExternal: true, shortcut: "S C" }, // TODO: Fill with real Calendly link
      ],
    },
    {
      id: "sec-social",
      title: "Developer Profiles",
      items: [
        { id: "cmd-github", label: "GitHub Profile", url: "https://github.com/balarajmp", isExternal: true },
        { id: "cmd-linkedin", label: "LinkedIn Profile", url: "https://linkedin.com/in/balarajmp", isExternal: true }, // TODO: Fill with real LinkedIn URL
      ],
    },
  ],
  footerNav: [
    {
      id: "ft-pages",
      title: "Navigation",
      items: [
        { id: "ft-nav-home", label: "Home", url: "/" },
        { id: "ft-nav-projects", label: "Projects", url: "/#projects" },
        { id: "ft-nav-experience", label: "Experience", url: "/#experience" },
        { id: "ft-nav-skills", label: "Tech Stack", url: "/#skills" },
      ],
    },
    {
      id: "ft-recruiter",
      title: "Recruiter Assets",
      items: [
        { id: "ft-rec-resume", label: "PDF Resume", url: "/resume.pdf" },
        { id: "ft-rec-email", label: "Direct Email", url: "mailto:balarajmp@gmail.com", isExternal: true },
        { id: "ft-rec-status", label: "Availability Status", url: "/#contact" },
      ],
    },
    {
      id: "ft-architecture",
      title: "Architecture Specs",
      items: [
        { id: "ft-arch-repo", label: "GitHub Repository", url: "https://github.com/balarajmp/portfolio-v2", isExternal: true },
        { id: "ft-arch-tokens", label: "Design Tokens", url: "https://github.com/balarajmp/portfolio-v2/blob/main/DESIGN_SYSTEM.md", isExternal: true },
      ],
    },
  ],
};
