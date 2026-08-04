import type { NavigationConfig } from "@/types";

/**
 * Configuration-Driven Global Navigation Structure
 * Sourced from verified candidate links for Balaraj M P.
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
      label: "Journey",
      url: "/#engineering-journey",
      shortcut: "G J",
      ariaLabel: "Navigate to Journey & Education",
    },
    {
      id: "nav-skills",
      label: "Tech Stack",
      url: "/#skills-matrix",
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
      id: "mob-journey",
      label: "Journey",
      url: "/#engineering-journey",
      iconName: "Briefcase",
    },
    {
      id: "mob-skills",
      label: "Skills",
      url: "/#skills-matrix",
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
        { id: "cmd-journey", label: "Go to Journey & Education", url: "/#engineering-journey", shortcut: "G J" },
        { id: "cmd-skills", label: "Go to Tech Radar", url: "/#skills-matrix", shortcut: "G S" },
        { id: "cmd-about", label: "Go to About & Mindset", url: "/#about", shortcut: "G A" },
      ],
    },
    {
      id: "sec-recruiter",
      title: "Recruiter Quick Actions",
      items: [
        { id: "cmd-resume", label: "Download Resume PDF", url: "/resume.pdf", isPrimaryCTA: true, shortcut: "D R" },
        { id: "cmd-email", label: "Send Direct Email", url: "mailto:balarajmp05@gmail.com", isExternal: true, shortcut: "C E" },
      ],
    },
    {
      id: "sec-social",
      title: "Developer Profiles",
      items: [
        { id: "cmd-github", label: "GitHub Profile", url: "https://github.com/balaraj_m_p", isExternal: true },
        { id: "cmd-linkedin", label: "LinkedIn Profile", url: "https://www.linkedin.com/in/balaraj-m-p/", isExternal: true },
        { id: "cmd-leetcode", label: "LeetCode Profile", url: "https://leetcode.com/u/bapacmr/", isExternal: true },
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
        { id: "ft-nav-journey", label: "Journey", url: "/#engineering-journey" },
        { id: "ft-nav-skills", label: "Tech Stack", url: "/#skills-matrix" },
      ],
    },
    {
      id: "ft-recruiter",
      title: "Recruiter Assets",
      items: [
        { id: "ft-rec-resume", label: "PDF Resume", url: "/resume.pdf" },
        { id: "ft-rec-email", label: "Direct Email", url: "mailto:balarajmp05@gmail.com", isExternal: true },
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
