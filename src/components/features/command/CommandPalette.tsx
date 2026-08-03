"use client";

import * as React from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  FolderCode,
  Zap,
  GraduationCap,
  Award,
  UserCheck,
  Mail,
  Github,
  Linkedin,
  Code2,
  Download,
  Copy,
  Check,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Database,
  Server,
  Atom,
  Globe,
  BrainCircuit,
  GitBranch,
  Container,
  FileCode,
  Terminal,
  Milestone,
} from "lucide-react";

import { projects } from "@/content/projects";
import { skillCategories } from "@/content/skills";
import { education, hackathons } from "@/content/education";
import { journeyMilestones } from "@/content/journey";
import { siteConfig } from "@/content/site";
import { socialLinks } from "@/content/social";

import { CommandSearch } from "./CommandSearch";
import { CommandResults } from "./CommandResults";
import { CommandGroup } from "./CommandGroup";
import { CommandItem } from "./CommandItem";

export interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * CommandPalette Component
 * Global keyboard-first dialog modal for navigation, case studies, skills search, and quick actions.
 * Built with cmdk, framer-motion, and Obsidian Violet design system tokens.
 */
export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = React.useState("");
  const [copiedEmail, setCopiedEmail] = React.useState(false);
  const previousFocusRef = React.useRef<HTMLElement | null>(null);

  // Focus management: capture active element when opening, restore focus when closing
  React.useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
    } else if (previousFocusRef.current) {
      previousFocusRef.current.focus();
    }
  }, [isOpen]);

  // Handle ESC key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Helper action: navigate to section anchor
  const handleNavigate = (hashUrl: string) => {
    onClose();
    window.location.href = hashUrl;
  };

  // Helper action: copy email to clipboard
  const handleCopyEmail = () => {
    const email = siteConfig.author.email || "balarajmp@gmail.com";
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      onClose();
    }, 1000);
  };

  // Helper action: open external link
  const handleOpenLink = (url: string) => {
    onClose();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const resumeUrl = siteConfig.recruiter.primaryResumeUrl || siteConfig.author.resumePdfUrl;
  const githubUrl = socialLinks.find((s) => s.platform === "github")?.url || "https://github.com/balarajmp";
  const linkedinUrl = socialLinks.find((s) => s.platform === "linkedin")?.url || "https://linkedin.com/in/balarajmp";
  const leetcodeUrl = socialLinks.find((s) => s.platform === "leetcode")?.url || "https://leetcode.com/u/balarajmp";

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-modal flex items-start justify-center pt-16 sm:pt-24 px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Command Palette"
        >
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/65 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[720px] rounded-2xl bg-bg-surface1/95 border border-border-glass shadow-glass overflow-hidden z-modal"
          >
            <Command
              className="w-full bg-transparent"
              label="Global Search & Navigation"
            >
              <CommandSearch value={search} onValueChange={setSearch} onClose={onClose} />

              <CommandResults>
                {/* Quick Actions Group */}
                <CommandGroup heading="Quick Actions">
                  <CommandItem
                    value="Download Resume CV"
                    onSelect={() => handleOpenLink(resumeUrl)}
                    title="Download Official Resume PDF"
                    description="Verified single-page engineering resume for recruiters"
                    category="Actions"
                    icon={Download}
                    actionText="Open / PDF"
                  />
                  <CommandItem
                    value="Copy Candidate Email"
                    onSelect={handleCopyEmail}
                    title={copiedEmail ? "Email Copied to Clipboard!" : "Copy Candidate Email Address"}
                    description="balarajmp@gmail.com"
                    category="Actions"
                    icon={copiedEmail ? Check : Copy}
                    actionText={copiedEmail ? "Copied" : "Copy"}
                  />
                </CommandGroup>

                {/* Social Profiles Group */}
                <CommandGroup heading="Social & Developer Profiles">
                  <CommandItem
                    value="Open GitHub Profile balarajmp"
                    onSelect={() => handleOpenLink(githubUrl)}
                    title="GitHub Profile (@balarajmp)"
                    description="View open source repositories, commits, and project code"
                    category="Social"
                    icon={Github}
                    actionText="External"
                  />
                  <CommandItem
                    value="Open LinkedIn Profile balarajmp"
                    onSelect={() => handleOpenLink(linkedinUrl)}
                    title="LinkedIn Network Profile"
                    description="Connect professionally and review endorsed achievements"
                    category="Social"
                    icon={Linkedin}
                    actionText="External"
                  />
                  <CommandItem
                    value="Open LeetCode Profile balarajmp"
                    onSelect={() => handleOpenLink(leetcodeUrl)}
                    title="LeetCode Profile"
                    description="Review algorithmic problem-solving track record"
                    category="Social"
                    icon={Code2}
                    actionText="External"
                  />
                </CommandGroup>

                {/* Navigation Group */}
                <CommandGroup heading="Navigation">
                  <CommandItem
                    value="Navigate to Hero Top Section"
                    onSelect={() => handleNavigate("/#hero")}
                    title="Hero Overview"
                    description="Platform introduction, summary metrics, and hero stack"
                    category="Navigation"
                    icon={Compass}
                    actionText="Scroll to"
                  />
                  <CommandItem
                    value="Navigate to Recruiter Command Center"
                    onSelect={() => handleNavigate("/#recruiter")}
                    title="Recruiter Command Center"
                    description="Role fit matrix, candidate snapshot, and decision engine"
                    category="Navigation"
                    icon={UserCheck}
                    actionText="Scroll to"
                  />
                  <CommandItem
                    value="Navigate to Projects Section"
                    onSelect={() => handleNavigate("/#projects")}
                    title="Featured Projects Catalog"
                    description="Production case studies, architecture diagrams, and live demos"
                    category="Navigation"
                    icon={FolderCode}
                    actionText="Scroll to"
                  />
                  <CommandItem
                    value="Navigate to Skills Matrix Section"
                    onSelect={() => handleNavigate("/#skills")}
                    title="Technical Skills Matrix"
                    description="Categorized backend, ML, database, and dev tool competencies"
                    category="Navigation"
                    icon={Zap}
                    actionText="Scroll to"
                  />
                  <CommandItem
                    value="Navigate to Engineering Journey Section"
                    onSelect={() => handleNavigate("/#journey")}
                    title="Engineering Growth Journey"
                    description="Chronological timeline of technical learning and breakthroughs"
                    category="Navigation"
                    icon={Milestone}
                    actionText="Scroll to"
                  />
                  <CommandItem
                    value="Navigate to Education Section"
                    onSelect={() => handleNavigate("/#education")}
                    title="Education & Academic Records"
                    description="CMR Institute of Technology B.E. credentials & hackathons"
                    category="Navigation"
                    icon={GraduationCap}
                    actionText="Scroll to"
                  />
                  <CommandItem
                    value="Navigate to About Section"
                    onSelect={() => handleNavigate("/#about")}
                    title="About Candidate"
                    description="Engineering philosophy, methodology, and work ethics"
                    category="Navigation"
                    icon={Award}
                    actionText="Scroll to"
                  />
                  <CommandItem
                    value="Navigate to Contact Section"
                    onSelect={() => handleNavigate("/#contact")}
                    title="Contact & Availability"
                    description="Direct contact details, availability status, and message form"
                    category="Navigation"
                    icon={Mail}
                    actionText="Scroll to"
                  />
                </CommandGroup>

                {/* Featured Projects Group */}
                <CommandGroup heading="Production Case Studies">
                  {projects.map((project) => {
                    const ProjectIcon =
                      project.id === "cognitoshield-ai"
                        ? ShieldCheck
                        : project.id === "smart-agriculture-portal"
                        ? Sprout
                        : TrendingUp;

                    return (
                      <CommandItem
                        key={project.id}
                        value={`${project.title} ${project.tagline} ${project.techStack.map((t) => t.name).join(" ")}`}
                        onSelect={() => handleNavigate(`/#projects`)}
                        title={project.title}
                        description={project.tagline}
                        category="Projects"
                        icon={ProjectIcon}
                        actionText="View Project"
                      />
                    );
                  })}
                </CommandGroup>

                {/* Technical Skills Group */}
                <CommandGroup heading="Technical Skills & Tools">
                  {skillCategories.flatMap((category) =>
                    category.skills.map((skill) => {
                      let SkillIcon = Code2;
                      if (skill.slug.includes("fastapi")) SkillIcon = Zap;
                      else if (skill.slug.includes("node")) SkillIcon = Server;
                      else if (skill.slug.includes("react")) SkillIcon = Atom;
                      else if (skill.slug.includes("next")) SkillIcon = Globe;
                      else if (skill.slug.includes("sql")) SkillIcon = Database;
                      else if (skill.slug.includes("learn") || skill.slug.includes("boost")) SkillIcon = BrainCircuit;
                      else if (skill.slug.includes("git")) SkillIcon = GitBranch;
                      else if (skill.slug.includes("docker")) SkillIcon = Container;
                      else if (skill.slug.includes("python")) SkillIcon = FileCode;
                      else if (skill.slug.includes("c") || skill.slug.includes("java")) SkillIcon = Terminal;

                      return (
                        <CommandItem
                          key={skill.id}
                          value={`Skill ${skill.name} ${category.name} ${skill.proficiency}`}
                          onSelect={() => handleNavigate("/#skills")}
                          title={skill.name}
                          description={`${category.name} • ${skill.yearsOfExperience} yrs exp (${skill.proficiency})`}
                          category="Skills"
                          icon={SkillIcon}
                          actionText="View Skill"
                        />
                      );
                    })
                  )}
                </CommandGroup>

                {/* Education & Achievements Group */}
                <CommandGroup heading="Academic Records & Hackathons">
                  {education.map((edu) => (
                    <CommandItem
                      key={edu.id}
                      value={`${edu.degree} ${edu.institution.name} ${edu.fieldOfStudy}`}
                      onSelect={() => handleNavigate("/#education")}
                      title={`${edu.degree} — ${edu.institution.name}`}
                      description={`${edu.fieldOfStudy} (${edu.gradeLabel}: ${edu.gradeOrCgpa})`}
                      category="Education"
                      icon={GraduationCap}
                      actionText="View Credentials"
                    />
                  ))}
                  {hackathons.map((hack) => (
                    <CommandItem
                      key={hack.id}
                      value={`Hackathon ${hack.name} ${hack.organizer}`}
                      onSelect={() => handleNavigate("/#education")}
                      title={hack.name}
                      description={`${hack.organizer} (${hack.date})`}
                      category="Education"
                      icon={Award}
                      actionText="View Record"
                    />
                  ))}
                </CommandGroup>

                {/* Engineering Growth Timeline Group */}
                <CommandGroup heading="Growth Milestones">
                  {journeyMilestones.map((milestone) => (
                    <CommandItem
                      key={milestone.id}
                      value={`Milestone ${milestone.title} ${milestone.summary}`}
                      onSelect={() => handleNavigate("/#journey")}
                      title={milestone.title}
                      description={`${milestone.date} • ${milestone.summary}`}
                      category="Journey"
                      icon={Milestone}
                      actionText="View Milestone"
                    />
                  ))}
                </CommandGroup>
              </CommandResults>
            </Command>

            {/* Command Palette Keyboard Hints Footer */}
            <div className="flex items-center justify-between border-t border-border-subtle/80 px-4 py-2.5 bg-bg-surface2/60 text-xs text-fg-muted">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-border-subtle bg-bg-surface1 px-1.5 py-0.5 font-mono text-[10px]">↑</kbd>
                  <kbd className="rounded border border-border-subtle bg-bg-surface1 px-1.5 py-0.5 font-mono text-[10px]">↓</kbd>
                  <span className="ml-1">Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-border-subtle bg-bg-surface1 px-1.5 py-0.5 font-mono text-[10px]">↵</kbd>
                  <span className="ml-1">Select</span>
                </span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="rounded border border-border-subtle bg-bg-surface1 px-1.5 py-0.5 font-mono text-[10px]">ESC</kbd>
                <span>Close</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
