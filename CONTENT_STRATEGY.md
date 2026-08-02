# Content Strategy & Data Schema Blueprint

**Document Status:** Final Draft / Data Source of Truth  
**Role:** Content Architect, Lead Editor, Senior Staff Engineer  
**Project:** SaaS-Grade Developer Portfolio Website  

---

## SECTION 1 — Content Philosophy

### 1.1 Core Principles
- **Engineering-First Storytelling:** Content prioritizes concrete engineering reality over generic marketing buzzwords. Every accomplishment is framed around technical challenges, architecture choices, and measurable results.
- **The 5-Question Framework:** Every major section and project case study must explicitly answer:
  1. **What Problem?** (Business context & technical challenge)
  2. **What Solution?** (System design & implementation choice)
  3. **What Technologies?** (Tools, frameworks, data stores, protocols used)
  4. **What Impact?** (Quantified metrics: latency reduction, scale, cost savings, user growth)
  5. **What Did I Learn?** (Engineering trade-offs, retrospective insights, and lessons)
- **High Signal-to-Noise Ratio:** Eliminate fluff ("passionate developer", "hardworking self-starter"). Lead with data, role scope, and system scale.

---

## SECTION 2 — Homepage Content Model

### 2.1 Purpose
The homepage serves as an executive summary engineered to convert recruiters and hiring managers in under 15 seconds.

### 2.2 Section Breakdown & Specifications

#### 1. Hero Block
- **Purpose:** Immediate visual and role clarification above the fold.
- **Required Fields:** `headline` (Headline string), `subheadline` (Role scope & stack intro), `primaryCTA` (Label & target), `availabilityStatus` (Active status string).
- **Optional Fields:** `secondaryCTA` (Label & target), `heroBadgeText` (Tagline pill).
- **Validation Rules:** Headline max 80 chars; Subheadline max 160 chars.
- **Best Practices:** Use strong, active verbs. Clearly state role level (Senior/Staff Software Engineer).
- **Common Mistakes:** Vague statements like "Welcome to my portfolio".
- **Future Scalability:** Can support dynamic role headlines based on visitor URL parameters.

#### 2. Recruiter Action Bar
- **Purpose:** 1-click access to candidate assets.
- **Required Fields:** `resumeUrl` (PDF link), `email` (Copy target), `githubUrl`, `linkedInUrl`.
- **Optional Fields:** `phone`, `calendlyUrl` (15-min intro booking link).
- **Validation Rules:** Valid HTTPS links; valid email format.
- **Best Practices:** Place directly under hero headline for zero scrolling friction.
- **Common Mistakes:** Hiding resume links inside deep navigation menus.
- **Future Scalability:** Supports instant vCard (.vcf) contact card downloads.

#### 3. Featured Projects Showcase
- **Purpose:** Highlight top 2-3 production projects before biography details.
- **Required Fields:** List of project IDs (`featuredProjectIds`).
- **Optional Fields:** `sectionTitleOverride`, `sectionDescription`.
- **Validation Rules:** Maximum 3 featured projects to maintain focal hierarchy.
- **Best Practices:** Display real impact metrics on each project card.
- **Common Mistakes:** Showing 10+ projects at once, diluting flagship work.
- **Future Scalability:** Supports drag-and-drop display order configuration.

#### 4. Technical Radar Matrix
- **Purpose:** Categorized display of core engineering capabilities.
- **Required Fields:** `categories` (Grouped list of skills: Frontend, Backend, Systems, DevOps).
- **Optional Fields:** `level` (Proficiency indicator), `yearsOfExperience`.
- **Validation Rules:** Max 6 skills per category to prevent visual clutter.
- **Best Practices:** Group by functional engineering domain rather than an alphabetical list.
- **Common Mistakes:** Rating skills with arbitrary percentage bars (e.g., "React 90%").
- **Future Scalability:** Can link skills directly to projects where they were utilized.

#### 5. Quick Stats Counter
- **Purpose:** Immediate quantitative validation of experience scale.
- **Required Fields:** `yearsExperience`, `projectsShipped`, `uptimeManaged`.
- **Optional Fields:** `linesOfCodeWritten`, `openSourceContributions`.
- **Validation Rules:** Numerical values supported by verifiable career data.
- **Best Practices:** Use verifiable numbers (e.g., "99.99% Uptime Systems Managed").
- **Common Mistakes:** Inflated or unprovable stat numbers.
- **Future Scalability:** Can sync dynamically with GitHub API metrics.

#### 6. Engineering Philosophy Snippet
- **Purpose:** Establish software craftsmanship values.
- **Required Fields:** `coreTenet` (Primary philosophy quote), `briefBio` (Concise 2-sentence background).
- **Optional Fields:** `linkToFullAbout` (`/about` URL).
- **Validation Rules:** Max 300 characters.
- **Best Practices:** Focus on software principles (simplicity, performance, maintainability).
- **Common Mistakes:** Writing long personal biographical essays on the homepage.
- **Future Scalability:** Modular quote switcher for different engineering disciplines.

---

## SECTION 3 — Projects Content Model

### 3.1 Purpose
Detailed data schema for project case studies and system architecture inspector drawers.

### 3.2 Required & Optional Fields

```
Project Data Schema:
├── Identification: id (String), title (String), subtitle (String), displayOrder (Number)
├── Status & Flags: featured (Boolean), status ('production' | 'open-source' | 'archived')
├── Summary Text: shortDescription (Max 160 chars), longDescription (Markdown text)
├── 5-Question Framework:
│   ├── problemStatement (Text)
│   ├── requirements (Array of Strings)
│   ├── solution (Text)
│   ├── challenges (Array of Strings)
│   └── lessonsLearned (Array of Strings)
├── Technical Specs:
│   ├── techStack (Array of Tag Strings)
│   ├── database (String)
│   ├── apiDesign ('REST' | 'GraphQL' | 'gRPC' | 'tRPC')
│   ├── authentication ('OAuth2' | 'JWT' | 'Clerk' | 'Session')
│   └── architectureSummary (Text)
├── Metrics & Impact:
│   ├── performanceOptimizations (Array of Strings)
│   └── keyMetrics (Array of Metric Objects: { label, value })
├── Visuals & Links:
│   ├── githubUrl (URL), liveDemoUrl (URL), videoDemoUrl (URL)
│   ├── screenshots (Array of Image URIs)
│   └── architectureDiagramSvg (Inline SVG / Image URI)
└── Meta Info: projectDuration (String), teamSize (Number), myRole (String), tags (Array)
```

### 3.3 Validation Rules & Best Practices
- **Validation Rules:** `id` must be unique kebab-case; `shortDescription` max 160 chars; `techStack` minimum 3 items; `keyMetrics` minimum 1 item.
- **Best Practices:** Include at least one architectural trade-off or challenge in every project.
- **Common Mistakes:** Submitting a project with only a live link and no context or system breakdown.
- **Future Scalability:** Schema supports interactive live API mock endpoints and runnable embedded sandboxes.

---

## SECTION 4 — Experience Content Model

### 4.1 Purpose
Structured dataset detailing employment history, responsibilities, leadership scope, and Architecture Decision Records (ADRs).

### 4.2 Field Specifications
- **Required Fields:** `id`, `company`, `role`, `duration` (Start/End dates or "Present"), `location` (City/Remote), `responsibilities` (Array of Strings), `achievements` (Array of Strings with bolded metrics), `technologiesUsed` (Array of Strings), `displayOrder`.
- **Optional Fields:** `companyLogoUrl`, `teamSize`, `architectureDecisionRecords` (Array of ADR Objects: `{ adrTitle, context, decision, consequences }`), `companyUrl`.
- **Validation Rules:** `achievements` must contain at least 2 items with quantified metrics.
- **Best Practices:** Start achievement bullets with strong action verbs (*"Architected"*, *"Optimized"*, *"Led"*).
- **Common Mistakes:** Listing generic job descriptions instead of personal impact.
- **Future Scalability:** Supports verified employment badge integration.

---

## SECTION 5 — Education Content Model

### 5.1 Purpose
Educational qualifications, degree specializations, and academic honors.

### 5.2 Field Specifications
- **Required Fields:** `id`, `institution`, `degree`, `branch` (Field of Study), `duration` (Start/End years), `displayOrder`.
- **Optional Fields:** `cgpa` / `gpa`, `relevantCoursework` (Array of Strings), `achievements` (Academic honors), `activities` (Clubs/Leadership).
- **Validation Rules:** GPA format valid decimal (e.g., `3.9/4.0` or `8.8/10.0`).
- **Best Practices:** Highlight computer science fundamentals (Data Structures, Distributed Systems, Database Design).
- **Common Mistakes:** Listing high school background for senior engineering roles.
- **Future Scalability:** Supports verified diploma PDF attachments.

---

## SECTION 6 — Skills Content Model

### 6.1 Purpose
Structured tech radar organizing technical capabilities by domain, experience level, and real-world project proof.

### 6.2 Field Specifications
- **Required Fields:** `id`, `name`, `category` (`'frontend'` | `'backend'` | `'systems'` | `'devops'` | `'database'`), `experienceLevel` (`'expert'` | `'proficient'` | `'familiar'`), `displayPriority`.
- **Optional Fields:** `yearsUsed` (Number), `projectsUsedIn` (Array of Project IDs), `description` (Brief context note), `relatedTechnologies` (Array of Strings).
- **Validation Rules:** Category must match defined enum; `projectsUsedIn` should map to valid project IDs.
- **Best Practices:** Group technologies logically and connect them to real projects for proof of use.
- **Common Mistakes:** Listing 50+ obscure tools without real experience.
- **Future Scalability:** Dynamic skill proficiency filtering across projects.

---

## SECTION 7 — Certifications Content Model

### 7.1 Purpose
Industry-recognized technical certifications and cloud accreditations.

### 7.2 Field Specifications
- **Required Fields:** `id`, `certificateName`, `issuer` (e.g., AWS, CKA, Google Cloud), `issueDate`, `displayOrder`.
- **Optional Fields:** `expirationDate`, `credentialId`, `credentialUrl` (Verification link), `skillsCovered` (Array of Strings), `badgeImageUrl`.
- **Validation Rules:** Valid HTTPS verification link if `credentialUrl` is provided.
- **Best Practices:** Include active, high-value cloud and architecture credentials.
- **Common Mistakes:** Listing expired or trivial online completion certificates.
- **Future Scalability:** Dynamic API verification check for active badge status.

---

## SECTION 8 — Achievements Content Model

### 8.1 Purpose
Competitions, hackathons, open-source awards, and industry recognition.

### 8.2 Field Specifications
- **Required Fields:** `id`, `title`, `description`, `date`, `category` (`'hackathon'` | `'open-source'` | `'academic'` | `'industry'`), `displayPriority`.
- **Optional Fields:** `proofUrl` (Link to award/repo), `rankOrPosition` (e.g., *"1st Place out of 250 Teams"*), `mediaUrl`.
- **Validation Rules:** Date in ISO format `YYYY-MM`.
- **Best Practices:** Quantify the scale of the competition (number of participants, impact).
- **Common Mistakes:** Vague achievements without context or proof links.
- **Future Scalability:** Filterable achievement showcase by category.

---

## SECTION 9 — Coding Profiles Content Model

### 9.1 Purpose
Quantitative proof of problem-solving skills and open-source engagement across developer platforms.

### 9.2 Field Specifications
- **Required Fields:** `platform` (`'GitHub'` | `'LeetCode'` | `'CodeChef'` | `'Codeforces'` | `'StackOverflow'`), `username`, `profileUrl`.
- **Optional Fields:** `statistics` (Object: `{ solvedCount, rating, globalRank, contributionsThisYear }`), `keyAchievements` (Array of Strings).
- **Validation Rules:** Valid profile URL format matching target platform domain.
- **Best Practices:** Keep statistics updated via static scripts or cached API builds.
- **Common Mistakes:** Linking inactive or empty profiles.
- **Future Scalability:** Automated static build updater fetching platform APIs.

---

## SECTION 10 — Technical Blog & Writing Content Model

### 10.1 Purpose
Technical articles, architecture decision logs, and engineering write-ups.

### 10.2 Field Specifications
- **Required Fields:** `id`, `title`, `slug`, `category`, `publishedDate`, `summary`, `readTimeMinutes`, `author`.
- **Optional Fields:** `coverImageUrl`, `tags` (Array of Strings), `markdownContent`, `relatedArticleIds` (Array of Blog IDs).
- **Validation Rules:** Unique URL slug; summary max 200 characters.
- **Best Practices:** Write deeply technical case studies and architectural retrospectives.
- **Common Mistakes:** Publishing superficial tutorial snippets.
- **Future Scalability:** Full MDX support with interactive code runners.

---

## SECTION 11 — Testimonials & Recommendations Content Model

### 11.1 Purpose
Endorsements from former managers, staff engineers, and tech leads.

### 11.2 Field Specifications
- **Required Fields:** `id`, `authorName`, `authorRole`, `authorCompany`, `testimonialText`, `displayOrder`.
- **Optional Fields:** `authorAvatarUrl`, `linkedInProfileUrl`, `relationship` (e.g., *"Managed candidate directly at CloudScale"*).
- **Validation Rules:** Text max 500 characters.
- **Best Practices:** Highlight quotes that praise technical problem-solving, code quality, and collaboration.
- **Common Mistakes:** Generic praise without engineering context.
- **Future Scalability:** LinkedIn recommendation sync.

---

## SECTION 12 — FAQs Content Model (Recruiter & Technical Focused)

### 12.1 Purpose
Address immediate recruiter and hiring manager questions frictionlessly.

### 12.2 Standard FAQ Content Matrix

| FAQ Question | Recommended Answers Summary | Primary Target |
| :--- | :--- | :--- |
| **Can I download your resume?** | Yes, 1-click PDF download available at top of hero and header. | Recruiters |
| **What is your current availability?** | Clear statement of notice period, open roles (Senior/Staff), and work arrangement (Remote/Hybrid). | Recruiters / HR |
| **Where can I see your codebase?** | GitHub profile link and direct code snippet links in project drawers. | Senior Engineers |
| **What technologies are your core stack?** | TypeScript, React/Next.js, Node.js/Go, PostgreSQL, Redis, AWS. | Hiring Managers |
| **How do I schedule an intro call?** | 1-Click Calendly booking trigger or direct email link. | Founders / CTOs |

---

## SECTION 13 — Contact Content Model

### 13.1 Purpose
Direct contact channels, availability status, and preferred communication routes.

### 13.2 Field Specifications
- **Required Fields:** `email`, `location` (City, Country, Timezone), `availabilityStatus` (e.g., *"Open for Senior Roles"*), `preferredContactMethod` (`'email' | 'linkedin'`).
- **Optional Fields:** `linkedInUrl`, `githubUrl`, `twitterUrl`, `calendlyBookingUrl`, `typicalResponseTime` (e.g., *"Within 12 hours"*).
- **Validation Rules:** Valid email format; valid timezone identifier (e.g., `UTC+5:30`).
- **Best Practices:** Set realistic response expectations and clear location details.
- **Common Mistakes:** Requiring visitors to fill out a 10-field contact form with CAPTCHA.
- **Future Scalability:** Encrypted contact message dispatcher route handler.

---

## SECTION 14 — SEO & Open Graph Metadata Model

### 14.1 Purpose
Maximize search visibility, social link preview rendering, and structured search graph discovery.

### 14.2 Metadata Standards by Route

```
Route Metadata Mapping:
├── Global Defaults: siteName ("Name.dev"), twitterHandle ("@handle"), defaultOgImage ("/api/og")
├── Homepage (/): title ("Senior Software Engineer | High-Performance SaaS & Systems"), description (...)
├── Projects (/projects): title ("Engineering Systems & Case Studies | Name.dev"), description (...)
├── Project Case Study (/projects/[id]): dynamic title ("Project Title | System Architecture Case Study"), dynamic OG
└── Experience (/experience): title ("Career Matrix & Technical Impact | Name.dev"), description (...)
```

### 14.3 JSON-LD Structured Data Schemas
- **`Person` Schema:** Name, JobTitle, SameAs (GitHub, LinkedIn), AlumnusOf, WorksFor.
- **`SoftwareApplication` Schema:** Applied on project case studies (Name, ApplicationCategory, OperatingSystem, Offer).

---

## SECTION 15 — Future Expansion Schemas

The data strategy is modular—designed to support upcoming career expansions without breaking existing layout code.

### 15.1 Expansion Schema Specifications

1. **Open Source Contributions (`openSource`):** `repoName`, `role` (`'maintainer'` | `'contributor'`), `prUrl`, `starsCount`, `description`.
2. **Technical Speaking & Workshops (`talks`):** `eventName`, `title`, `date`, `location`, `slidesUrl`, `recordingUrl`.
3. **Podcasts & Interviews (`podcasts`):** `showName`, `episodeTitle`, `date`, `audioUrl`, `keyTopics`.
4. **Research & Publications (`publications`):** `paperTitle`, `publisher`, `publicationDate`, `doiUrl`, `abstract`.
5. **Awards & Grants (`awards`):** `awardTitle`, `grantingBody`, `date`, `description`.

---
