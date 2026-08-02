/**
 * Purpose: Internal Design System Playground page for visual testing and auditing of all UI primitives.
 * Used By: Developers / UI Architects (Internal sandbox - not linked in public portfolio navigation).
 * Accessibility: WCAG AA compliant semantic headings, landmark region navigation, and high-contrast token presentation.
 * Notes: React Server Component demonstrating every component variant, size, and layout state.
 */

import * as React from "react";
import { AppShell } from "@/components/shared/layout/AppShell";
import {
  Typography,
  Button,
  Badge,
  Chip,
  Link,
  Icon,
  Section,
  Grid,
  Stack,
  Surface,
  Divider,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  StatCard,
  Avatar,
  Skeleton,
  EmptyState,
  CodeBlock,
  Input,
  TextArea,
  FormField,
  SearchInput,
} from "@/components/ui";
import {
  Logo,
  DesktopNavigation,
  ResumeButton,
  SocialLinks,
  MobileMenuButton,
  NavigationProvider,
} from "@/components/shared/navigation";
import {
  Terminal,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Code2,
  CheckCircle2,
  ExternalLink,
  FolderGit2,
  Mail,
} from "lucide-react";

export const metadata = {
  title: "Design System Playground | Engineering Portfolio",
  description: "Internal component audit sandbox and design system primitive playground.",
};

export default function PlaygroundPage() {
  const sampleCodeSnippet = `import { Button } from "@/components/ui/Button";

export function HeroCTA() {
  return (
    <Button variant="primary" size="lg">
      View Architecture Specs
    </Button>
  );
}`;

  return (
    <AppShell container={true} containerSize="wide">
      {/* Playground Page Title Banner */}
      <Section spacing="sm">
        <Stack direction="col" gap={4}>
          <div className="flex items-center gap-3">
            <Badge variant="accent" icon={Terminal}>
              Developer Sandbox
            </Badge>
            <Badge variant="info">Internal Only</Badge>
          </div>
          <Typography variant="display">Design System Playground</Typography>
          <Typography variant="lead">
            Comprehensive audit matrix and interactive testbed for all Obsidian Violet UI primitives, layout structures, form controls, and composite components.
          </Typography>
          <Divider orientation="horizontal" variant="accent" />
        </Stack>
      </Section>

      {/* 1. TYPOGRAPHY SECTION */}
      <Section spacing="md">
        <Stack direction="col" gap={6}>
          <div className="flex flex-col gap-1">
            <Typography variant="h2" id="typography-section">
              1. Typography Hierarchy
            </Typography>
            <Typography variant="small">
              Obsidian Violet typographic scale mapped to semantic HTML tag element hierarchy.
            </Typography>
          </div>

          <Surface level={1} rounded="lg" className="p-6">
            <Stack direction="col" gap={4}>
              <div className="flex flex-col gap-1">
                <Typography variant="caption">Display Variant (4xl/5xl Bold)</Typography>
                <Typography variant="display">Obsidian Violet System</Typography>
              </div>
              <Divider orientation="horizontal" variant="muted" />
              <div className="flex flex-col gap-1">
                <Typography variant="caption">H1 Variant (3xl/4xl Bold)</Typography>
                <Typography variant="h1">Engineering Portfolio Architecture</Typography>
              </div>
              <Divider orientation="horizontal" variant="muted" />
              <div className="flex flex-col gap-1">
                <Typography variant="caption">H2 Variant (2xl/3xl Semibold)</Typography>
                <Typography variant="h2">Distributed Systems & Technical Leadership</Typography>
              </div>
              <Divider orientation="horizontal" variant="muted" />
              <div className="flex flex-col gap-1">
                <Typography variant="caption">H3 Variant (xl/2xl Semibold)</Typography>
                <Typography variant="h3">Performance & Zero-CLS Layout Optimization</Typography>
              </div>
              <Divider orientation="horizontal" variant="muted" />
              <div className="flex flex-col gap-1">
                <Typography variant="caption">H4 Variant (base/lg Medium)</Typography>
                <Typography variant="h4">Component API Contracts & WCAG AA Accessibility</Typography>
              </div>
              <Divider orientation="horizontal" variant="muted" />
              <div className="flex flex-col gap-1">
                <Typography variant="caption">Body Variant (base Regular)</Typography>
                <Typography variant="body">
                  Primary paragraph text crafted for maximum legibility against dark canvas surfaces with high contrast ratios.
                </Typography>
              </div>
              <Divider orientation="horizontal" variant="muted" />
              <div className="flex flex-col gap-1">
                <Typography variant="caption">Lead Variant (lg/xl Muted)</Typography>
                <Typography variant="lead">
                  Featured intro text leading section headers and technical case study overviews.
                </Typography>
              </div>
              <Divider orientation="horizontal" variant="muted" />
              <div className="flex flex-col gap-1">
                <Typography variant="caption">Small / Caption / Code / Muted</Typography>
                <div className="flex flex-wrap items-center gap-4">
                  <Typography variant="small">Small text label</Typography>
                  <Typography variant="caption">Caption metadata text</Typography>
                  <Typography variant="code">const status = &quot;OK&quot;;</Typography>
                  <Typography variant="muted">Muted secondary text</Typography>
                </div>
              </div>
            </Stack>
          </Surface>
        </Stack>
      </Section>

      {/* 2. BUTTONS SECTION */}
      <Section spacing="md">
        <Stack direction="col" gap={6}>
          <div className="flex flex-col gap-1">
            <Typography variant="h2" id="buttons-section">
              2. Button Primitives
            </Typography>
            <Typography variant="small">
              Action triggers supporting primary, secondary, ghost, outline, and danger variants across size boundaries.
            </Typography>
          </div>

          <Surface level={1} rounded="lg" className="p-6">
            <Stack direction="col" gap={6}>
              {/* Variants */}
              <div className="flex flex-col gap-2">
                <Typography variant="h4">Button Variants</Typography>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="danger">Danger Button</Button>
                </div>
              </div>

              {/* Sizes */}
              <div className="flex flex-col gap-2">
                <Typography variant="h4">Button Sizes</Typography>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="primary" size="sm">Small (sm)</Button>
                  <Button variant="primary" size="md">Medium (md)</Button>
                  <Button variant="primary" size="lg">Large (lg)</Button>
                  <Button variant="outline" size="icon" aria-label="Icon only button">
                    <Zap className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Icons & Loading States */}
              <div className="flex flex-col gap-2">
                <Typography variant="h4">Icons & Loading States</Typography>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="primary" leftIcon={Code2}>Left Icon</Button>
                  <Button variant="secondary" rightIcon={ExternalLink}>Right Icon</Button>
                  <Button variant="primary" loading>Loading State</Button>
                  <Button variant="outline" disabled>Disabled State</Button>
                </div>
              </div>
            </Stack>
          </Surface>
        </Stack>
      </Section>

      {/* 3. BADGES & CHIPS SECTION */}
      <Section spacing="md">
        <Stack direction="col" gap={6}>
          <div className="flex flex-col gap-1">
            <Typography variant="h2" id="badges-chips-section">
              3. Badges & Chips
            </Typography>
            <Typography variant="small">
              Categorical pills, status indicators, and interactive filter chips.
            </Typography>
          </div>

          <Surface level={1} rounded="lg" className="p-6">
            <Stack direction="col" gap={6}>
              {/* Badges */}
              <div className="flex flex-col gap-2">
                <Typography variant="h4">Badges (Status & Tech Stack Tags)</Typography>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="accent">Accent</Badge>
                  <Badge variant="success" dot>Success Dot</Badge>
                  <Badge variant="warning" dot>Warning Dot</Badge>
                  <Badge variant="error" dot>Error Dot</Badge>
                  <Badge variant="info" icon={ShieldCheck}>Info Icon</Badge>
                </div>
              </div>

              <Divider orientation="horizontal" variant="muted" />

              {/* Chips */}
              <div className="flex flex-col gap-2">
                <Typography variant="h4">Chips (Filter Controls)</Typography>
                <div className="flex flex-wrap items-center gap-3">
                  <Chip selected>Selected Chip</Chip>
                  <Chip>Unselected Chip</Chip>
                  <Chip selected>Accent Filter</Chip>
                  <Chip>Interactive Tag</Chip>
                </div>
              </div>
            </Stack>
          </Surface>
        </Stack>
      </Section>

      {/* 4. LINKS & ICONS SECTION */}
      <Section spacing="md">
        <Stack direction="col" gap={6}>
          <div className="flex flex-col gap-1">
            <Typography variant="h2" id="links-icons-section">
              4. Links & Icon System
            </Typography>
            <Typography variant="small">
              Accessible navigational links and Lucide vector icon wrappers.
            </Typography>
          </div>

          <Surface level={1} rounded="lg" className="p-6">
            <Grid cols={2} gap={6}>
              {/* Links */}
              <Stack direction="col" gap={2}>
                <Typography variant="h4">Links</Typography>
                <div className="flex flex-col gap-2">
                  <Link href="#typography-section" variant="default">Default Internal Link</Link>
                  <Link href="#buttons-section" variant="accent">Accent Highlight Link</Link>
                  <Link href="#badges-chips-section" variant="muted">Muted Secondary Link</Link>
                  <Link href="https://github.com" external variant="accent">
                    External GitHub Link
                  </Link>
                </div>
              </Stack>

              {/* Icons */}
              <Stack direction="col" gap={2}>
                <Typography variant="h4">Icons</Typography>
                <div className="flex flex-wrap items-center gap-4">
                  <Icon icon={Layers} size={16} color="accent" />
                  <Icon icon={Cpu} size={20} color="primary" />
                  <Icon icon={ShieldCheck} size={24} color="success" />
                  <Icon icon={Terminal} size={32} color="warning" />
                  <Icon icon={Zap} size={20} color="error" />
                </div>
              </Stack>
            </Grid>
          </Surface>
        </Stack>
      </Section>

      {/* 5. LAYOUT PRIMITIVES SECTION */}
      <Section spacing="md">
        <Stack direction="col" gap={6}>
          <div className="flex flex-col gap-1">
            <Typography variant="h2" id="layout-section">
              5. Layout System (Grid, Stack, Surface, Divider)
            </Typography>
            <Typography variant="small">
              Structural layout primitives enforcing uniform 8px grid boundaries.
            </Typography>
          </div>

          <Surface level={1} rounded="lg" className="p-6">
            <Stack direction="col" gap={4}>
              <Typography variant="h4">Responsive Grid System (3 Columns)</Typography>
              <Grid cols={3} gap={4}>
                <Surface level={2} rounded="md" className="p-4 text-center">
                  <Typography variant="small" className="font-mono">Grid Cell 1</Typography>
                </Surface>
                <Surface level={2} rounded="md" className="p-4 text-center">
                  <Typography variant="small" className="font-mono">Grid Cell 2</Typography>
                </Surface>
                <Surface level={2} rounded="md" className="p-4 text-center">
                  <Typography variant="small" className="font-mono">Grid Cell 3</Typography>
                </Surface>
              </Grid>
            </Stack>
          </Surface>
        </Stack>
      </Section>

      {/* 6. COMPOSITE CARDS & STAT CARDS SECTION */}
      <Section spacing="md">
        <Stack direction="col" gap={6}>
          <div className="flex flex-col gap-1">
            <Typography variant="h2" id="cards-section">
              6. Composite Cards & Stat Cards
            </Typography>
            <Typography variant="small">
              Content containers for technical projects, metrics, and architecture case studies.
            </Typography>
          </div>

          <Grid cols={2} gap={6}>
            {/* Interactive Card */}
            <Card interactive>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="accent">Case Study</Badge>
                  <Typography variant="caption" className="font-mono">2026</Typography>
                </div>
                <CardTitle>Distributed Microservices Engine</CardTitle>
                <CardDescription>High-throughput telemetry ingestion pipeline handling 50k req/sec.</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body">
                  Architected with Rust, Next.js, and Apache Kafka. Includes automated failover and zero-data-loss guarantees.
                </Typography>
              </CardContent>
              <CardFooter className="justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="default">Rust</Badge>
                  <Badge variant="default">Kafka</Badge>
                </div>
                <Button variant="ghost" size="sm" rightIcon={ExternalLink}>View</Button>
              </CardFooter>
            </Card>

            {/* Glass Card */}
            <Card glass>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="success" dot>Live Production</Badge>
                  <Typography variant="caption" className="font-mono">99.99% SLA</Typography>
                </div>
                <CardTitle>SaaS Telemetry Radar</CardTitle>
                <CardDescription>Real-time distributed tracing and observability platform.</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body">
                  Provides unified metrics dashboards, custom anomaly alerts, and automated incident triage workbenches.
                </Typography>
              </CardContent>
              <CardFooter className="justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="default">TypeScript</Badge>
                  <Badge variant="default">GraphQL</Badge>
                </div>
                <Button variant="outline" size="sm">Details</Button>
              </CardFooter>
            </Card>
          </Grid>

          {/* Stat Cards Grid */}
          <Grid cols={3} gap={4}>
            <StatCard
              title="System Throughput"
              value="54.2K req/s"
              trend={{ direction: "up", value: "+18.4%", label: "vs last sprint" }}
              icon={Zap}
              description="Sustained API requests processed per second"
            />
            <StatCard
              title="P99 Latency SLA"
              value="12ms"
              trend={{ direction: "up", value: "-4.2ms", label: "p99 latency" }}
              icon={CheckCircle2}
              description="End-to-end response latency at 99th percentile"
            />
            <StatCard
              title="Test Coverage"
              value="98.5%"
              trend={{ direction: "neutral", value: "0.0%", label: "stable" }}
              icon={ShieldCheck}
              description="Unit and integration test suite branch coverage"
            />
          </Grid>
        </Stack>
      </Section>

      {/* 7. AVATAR, SKELETON & EMPTY STATE SECTION */}
      <Section spacing="md">
        <Stack direction="col" gap={6}>
          <div className="flex flex-col gap-1">
            <Typography variant="h2" id="avatar-skeleton-empty-section">
              7. Avatar, Skeleton & Empty State Primitives
            </Typography>
            <Typography variant="small">
              User identity avatars, loading placeholder skeletons, and fallback empty states.
            </Typography>
          </div>

          <Surface level={1} rounded="lg" className="p-6">
            <Stack direction="col" gap={6}>
              {/* Avatars */}
              <div className="flex flex-col gap-2">
                <Typography variant="h4">Avatar Sizes & Status Badges</Typography>
                <div className="flex flex-wrap items-center gap-4">
                  <Avatar alt="Balaraj M P" fallback="BM" size="xs" status="online" />
                  <Avatar alt="Balaraj M P" fallback="BM" size="sm" status="away" />
                  <Avatar alt="Balaraj M P" fallback="BM" size="md" status="busy" />
                  <Avatar alt="Balaraj M P" fallback="BM" size="lg" status="offline" />
                  <Avatar alt="Balaraj M P" fallback="BM" size="xl" status="online" />
                </div>
              </div>

              <Divider orientation="horizontal" variant="muted" />

              {/* Skeletons */}
              <div className="flex flex-col gap-2">
                <Typography variant="h4">Skeleton Loading Placeholders</Typography>
                <div className="flex items-center gap-4">
                  <Skeleton variant="circle" width={48} height={48} />
                  <div className="flex flex-col gap-2 flex-1 max-w-sm">
                    <Skeleton variant="text" width="80%" height={16} />
                    <Skeleton variant="text" width="60%" height={14} />
                  </div>
                </div>
              </div>

              <Divider orientation="horizontal" variant="muted" />

              {/* Empty State */}
              <div className="flex flex-col gap-2">
                <Typography variant="h4">Empty State Component</Typography>
                <EmptyState
                  icon={FolderGit2}
                  title="No Architecture Specs Found"
                  description="Try adjusting your filter search criteria or explore our featured open-source repositories."
                  primaryAction={{
                    label: "Reset Search Filters",
                  }}
                  className="py-8"
                />
              </div>
            </Stack>
          </Surface>
        </Stack>
      </Section>

      {/* 8. CODE BLOCK SECTION */}
      <Section spacing="md">
        <Stack direction="col" gap={6}>
          <div className="flex flex-col gap-1">
            <Typography variant="h2" id="codeblock-section">
              8. Code Block Component
            </Typography>
            <Typography variant="small">
              Syntax-highlighted code container with copy button and line numbering.
            </Typography>
          </div>

          <CodeBlock
            code={sampleCodeSnippet}
            language="typescript"
            filename="src/components/HeroCTA.tsx"
            lineNumbers={true}
          />
        </Stack>
      </Section>

      {/* 9. FORM SYSTEM SECTION */}
      <Section spacing="md">
        <Stack direction="col" gap={6}>
          <div className="flex flex-col gap-1">
            <Typography variant="h2" id="forms-section">
              9. Form Controls & Validation System
            </Typography>
            <Typography variant="small">
              Accessible input controls, text areas, search fields, and compound form field containers.
            </Typography>
          </div>

          <Surface level={1} rounded="lg" className="p-6">
            <Stack direction="col" gap={6}>
              <Grid cols={2} gap={6}>
                {/* Text Input */}
                <FormField label="Full Name" required description="Enter your official contact name">
                  <Input type="text" placeholder="e.g. Alex Morgan" leadingIcon={<Mail className="h-4 w-4" />} />
                </FormField>

                {/* Search Input */}
                <FormField label="Search Tech Stack" description="Filter by framework or language">
                  <SearchInput placeholder="Search Rust, React, Next.js..." />
                </FormField>
              </Grid>

              {/* Error State Input */}
              <FormField label="Work Email Address" required error="Please enter a valid work email address">
                <Input type="email" placeholder="alex@company.com" invalid leadingIcon={<Mail className="h-4 w-4" />} defaultValue="invalid-email" />
              </FormField>

              {/* Text Area */}
              <FormField label="Project Scope & Message" required description="Max 500 characters">
                <TextArea
                  placeholder="Describe your project requirement or technical inquiry..."
                  maxLength={500}
                  showCharacterCount
                  rows={4}
                />
              </FormField>
            </Stack>
          </Surface>
        </Stack>
      </Section>

      {/* 10. NAVIGATION PREVIEW SECTION */}
      <Section spacing="md">
        <Stack direction="col" gap={6}>
          <div className="flex flex-col gap-1">
            <Typography variant="h2" id="navigation-section">
              10. Navigation System Components
            </Typography>
            <Typography variant="small">
              Header logo mark, desktop links bar, CTA buttons, and social profile groups.
            </Typography>
          </div>

          <Surface level={1} rounded="lg" className="p-6">
            <Stack direction="col" gap={6}>
              <NavigationProvider>
                <div className="flex items-center justify-between p-4 bg-bg-glass rounded-md border border-border-glass">
                  <Logo />
                  <DesktopNavigation />
                  <div className="flex items-center gap-3">
                    <ResumeButton size="sm" />
                    <MobileMenuButton />
                  </div>
                </div>
              </NavigationProvider>

              <Divider orientation="horizontal" variant="muted" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Typography variant="caption" className="font-mono">Social Profile Links:</Typography>
                  <SocialLinks size="md" />
                </div>
                <Typography variant="caption" className="text-fg-muted">
                  End of Design System Audit Matrix
                </Typography>
              </div>
            </Stack>
          </Surface>
        </Stack>
      </Section>
    </AppShell>
  );
}
