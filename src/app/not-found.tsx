import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { socialLinks } from "@/content/social";
import { Button } from "@/components/ui/Button";
import { Home, FileText, Github, Compass } from "lucide-react";

/**
 * NotFound Component
 * Custom 404 page rendered when a user navigates to an invalid URL.
 * Displays stylized vector artwork, guidance message, key section navigation, resume, and GitHub links.
 */
export default function NotFound() {
  const githubLink = socialLinks.find((s) => s.platform === "github")?.url || "https://github.com/balarajmp";
  const resumeUrl = siteConfig.recruiter.primaryResumeUrl || siteConfig.author.resumePdfUrl;

  return (
    <div className="min-h-screen bg-bg-canvas text-fg-primary flex flex-col justify-between px-4 py-12 sm:py-16">
      <main className="max-w-2xl w-full mx-auto my-auto text-center space-y-8">
        {/* CSS/SVG 404 Architectural Vector Graphic */}
        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 bg-accent-primary/10 blur-3xl rounded-full max-w-xs mx-auto -z-10" />
          <svg
            className="w-56 h-36 mx-auto text-accent-primary"
            viewBox="0 0 240 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Grid Pattern Background */}
            <defs>
              <pattern id="404-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15" />
              </pattern>
              <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            <rect width="240" height="120" rx="16" fill="#121215" stroke="#27272a" strokeWidth="1.5" />
            <rect width="240" height="120" rx="16" fill="url(#404-grid)" />

            {/* Stylized 404 Text */}
            <text
              x="50%"
              y="55%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-mono text-6xl font-extrabold tracking-tighter"
              fill="url(#glow-grad)"
            >
              404
            </text>

            {/* Accent Glowing Dots */}
            <circle cx="30" cy="30" r="4" fill="#8b5cf6" className="animate-pulse" />
            <circle cx="210" cy="90" r="4" fill="#a78bfa" className="animate-pulse" />
          </svg>
        </div>

        {/* Heading & Explanatory Text */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-fg-primary sm:text-4xl">
            Route Not Found
          </h1>
          <p className="text-base text-fg-secondary leading-relaxed max-w-md mx-auto">
            The requested page URL does not exist or has been relocated within the engineering platform architecture.
          </p>
        </div>

        {/* Quick Actions (Homepage, Resume, GitHub) */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button variant="primary" leftIcon={Home} asChild>
            <Link href="/">Back to Home</Link>
          </Button>

          <Button variant="secondary" leftIcon={FileText} asChild>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </Button>

          <Button variant="outline" leftIcon={Github} asChild>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
          </Button>
        </div>

        {/* Helpful Navigation Links */}
        <div className="pt-8 border-t border-border-subtle max-w-md mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-fg-muted uppercase tracking-wider">
            <Compass className="h-4 w-4 text-accent-primary" aria-hidden="true" />
            Explore Key Sections
          </div>
          <nav aria-label="404 Navigation" className="flex flex-wrap justify-center gap-4 text-sm font-medium text-fg-secondary">
            <Link href="/#projects" className="hover:text-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded px-1.5 py-0.5">
              Projects Case Studies
            </Link>
            <span className="text-border-strong">•</span>
            <Link href="/#skills" className="hover:text-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded px-1.5 py-0.5">
              Skills Matrix
            </Link>
            <span className="text-border-strong">•</span>
            <Link href="/#journey" className="hover:text-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded px-1.5 py-0.5">
              Engineering Journey
            </Link>
            <span className="text-border-strong">•</span>
            <Link href="/#contact" className="hover:text-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded px-1.5 py-0.5">
              Contact & Availability
            </Link>
          </nav>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="text-center text-xs text-fg-muted pt-8">
        &copy; {new Date().getFullYear()} {siteConfig.author.name}. All rights reserved.
      </footer>
    </div>
  );
}
