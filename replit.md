# Thuisonderwijs Website

## Overview

This is a Dutch-language editorial-style website about homeschooling (thuisonderwijs), designed as a calm, magazine-like experience for parents exploring or practicing homeschooling. The site features informational pages, a blog section with articles and printables, and a contact form, all styled with minimalist, editorial design principles inspired by publications like The Gentlewoman and Kinfolk.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server

**Routing**: Client-side routing via Wouter, a lightweight React router

**State Management**: 
- TanStack Query (React Query) for server state and data fetching
- React hooks for local component state

**UI Component Library**: 
- Shadcn/ui components built on Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Custom component variants using class-variance-authority

**Typography System**:
- Serif fonts (Cormorant Garamond/Playfair Display) for headlines
- Sans-serif fonts (Inter/Manrope) for body text
- Google Fonts integration for typography

**Design System**:
- Editorial color palette: soft blacks (#1E1E1E), off-whites (#FAF9F7), warm beiges (#EDE9E3), warm accent (#C1562F)
- Global warm beige background (#F9F6F4) via CSS variable --background (25 28% 97%)
- Consistent spacing using Tailwind's spacing scale (4, 6, 8, 12, 16, 20, 24 units)
- Custom HSL-based color tokens for light/dark mode support
- Subtle shadows and elevations for depth
- Matte appearance with no animations or transitions
- Bullet point guidelines: • character, mb-3 spacing, dark grey (#5A4A42), bold only 1-2 keywords per item
- No emoji anywhere in the UI

**Page Structure**:
- Home: Simple hero page with tagline
- Wat is thuisonderwijs?: Accordion-style page with 7 questions (both desktop and mobile)
- Ik twijfel!: Accordion-style page with 12 questions (both desktop and mobile)
- Waar begin ik?: Accordion-style page with 6 numbered sections (both desktop and mobile)
- Blog: Featured posts with editorial cards plus sidebar list of additional posts
- BlogPost: Dynamic blog post detail pages
- Contact: Contact form page

**Key Features**:
- Sticky header that transitions from transparent to solid on scroll
- All three FAQ pages ("Wat is thuisonderwijs?", "Ik twijfel!", "Waar begin ik?") use accordion-style layout with single-open behavior on both desktop and mobile
- Responsive mobile menu (hamburger pattern)
- Blog post cards with hover effects
- Form handling with validation

### Backend Architecture

**Server Framework**: Express.js with TypeScript

**Runtime**: Node.js with ES modules enabled

**Development Setup**:
- Vite middleware integration for HMR in development
- Custom logging middleware for API request tracking
- Development-only Replit plugins (cartographer, dev banner, runtime error overlay)

**Storage Interface**:
- Abstracted storage interface (IStorage) for CRUD operations
- In-memory storage implementation (MemStorage) as default
- Designed to be swappable with database-backed storage

**API Structure**:
- REST API endpoints prefixed with `/api`
- Currently configured for user management operations
- Middleware for JSON parsing and raw body capture

**Build Process**:
- Frontend: Vite builds React app to `dist/public`
- Backend: ESBuild bundles server code to `dist`
- Production mode serves static frontend files

### Data Storage Solutions

**Database ORM**: Drizzle ORM configured for PostgreSQL

**Current Schema**:
- Users table with id, username, password fields
- UUID-based primary keys
- Zod schema validation integration

**Database Connection**:
- Neon Database serverless PostgreSQL driver
- Environment-based DATABASE_URL configuration
- Migration support via drizzle-kit

**Note**: The application is configured for Drizzle with PostgreSQL, but the database may not yet be provisioned. The storage interface allows for both in-memory and database-backed implementations.

### Authentication and Authorization

**Current State**: Basic user schema exists but no authentication flow is implemented

**Prepared Infrastructure**:
- User model with username/password fields
- Password field exists in schema (hashing not yet implemented)
- Storage interface includes user lookup methods

**Future Considerations**:
- Session management via connect-pg-simple (dependency installed)
- Password hashing will be needed before authentication implementation
- Query client configured with credential handling

### External Dependencies

**UI Framework**:
- React and React DOM for component rendering
- Wouter for lightweight client-side routing
- TanStack Query for data fetching and caching

**Component Libraries**:
- Radix UI primitive components for accessibility
- Shadcn/ui component patterns
- Lucide React for icons

**Styling**:
- Tailwind CSS for utility-first styling
- PostCSS for CSS processing
- class-variance-authority for component variants
- clsx and tailwind-merge for className utilities

**Forms**:
- React Hook Form for form state management
- @hookform/resolvers for validation
- Zod for schema validation

**Database & ORM**:
- Drizzle ORM for type-safe database queries
- @neondatabase/serverless for PostgreSQL connection
- drizzle-zod for schema validation integration

**Build Tools**:
- Vite for frontend bundling and dev server
- ESBuild for backend bundling
- TypeScript compiler for type checking

**Date Handling**:
- date-fns for date formatting and manipulation

**Development Tools**:
- tsx for TypeScript execution in development
- @replit plugins for development experience
- nanoid for unique ID generation

**Content**:
- Blog page features 2 active posts with stock images
- Blog posts displayed in white cards on beige background for editorial appearance
- No CMS integration at present
- FAQ content maintained in component files (WatWaarom.tsx, IsHetIetsVoorOns.tsx)
- "Waar begin ik?" page features 6 detailed sections: Visie & Intentie, Juridisch, Wat te leren, Methodes, Dagplanning, Community

## Recent Changes

### Site Branding and Blog Spacing Updates (Latest)
- **Site branding strategy:**
  - Header clickable logo/brand mark displays "UmmiSchool" across all pages (Playfair Display serif)
  - Homepage hero title displays "Thuisonderwijs" as content focus (Lora serif)
  - Creates clear distinction between site brand identity and content topic
- **Blog card spacing reduced:**
  - Vertical spacing between blog cards changed from 80px to 48px (space-y-12)
  - Creates clearer visual separation while allowing cards to feel more connected
  - White cards stand out more distinctly on beige background

### Blog Article Page Enhancements
- **White card container added to article pages:**
  - All article content wrapped in white card (#FFFFFF) on beige background (#F9F6F4)
  - Card styling matches blog overview cards: 12px border radius, subtle shadow (0 2px 12px rgba(0, 0, 0, 0.06)), 2.5rem/2rem padding
  - Creates consistent editorial appearance across blog listing and article pages
- **Featured images added to article pages:**
  - Each blog post now displays its featured image below the title
  - Images: 100% width, 12px border radius, max-height 500px
  - Same images as blog listing page for consistency
- **Highlights section ("Belangrijkste punten"):**
  - Soft peach background (#FFF8F3) with warm accent left border (#C1562F, 4px)
  - 3 key takeaways per article displayed as bullet points
  - Positioned after image, before article content
- **Date repositioned:** Now displays below title (was above title)
- **Share functionality:**
  - WhatsApp share button (green #25D366) - opens WhatsApp with pre-filled message
  - Link copy button - copies URL to clipboard with "Gekopieerd!" confirmation (2 seconds)
  - Both buttons use Share2 and Check icons from lucide-react

### Page Title Consistency & Blog Updates
- **All page titles now use consistent styling across the site:**
  - Desktop: fontSize 3.5rem, fontWeight 400, serif, centered
  - Mobile: fontSize 2rem (or responsive clamp), fontWeight 400, serif, centered
  - Updated pages: Blog, Contact, WatWaarom, IsHetIetsVoorOns, EersteStappen
  - Unified calm, editorial aesthetic with normal weight (not bold)
- **Blog slogan changed:** "Over dagen, groei en alles daartussen" → "wij leren thuis"
- **Blog detail pages added:**
  - "Jouw Pad, Niet dat van de Massa" - full article about choosing your own homeschooling path (5 paragraphs)
  - "Dagstart" - full article about starting the day together (5 paragraphs)
  - Slugs now match between Blog.tsx and BlogPost.tsx - clicking blog cards works correctly
- Blog card spacing maintained at space-y-20 (80px) for clear separation

### Blog Page Redesign & UI Refinements
- Replaced all old blog content with 2 new blog posts:
  - "Jouw Pad, Niet dat van de Massa" - reflective piece about following your own path in homeschooling
  - "Dagstart" - practical article about starting the day with children
- Updated FeaturedBlogCard component:
  - Added white background (#FFFFFF) with rounded corners (12px)
  - Adjusted padding (2.5rem 2rem) and subtle shadow for depth
  - Added breathing room above images (0.5rem margin-top)
  - Removed all animations and transitions for matte appearance
  - Added data-testid for testing
- Changed layout from two-column (content + sidebar) to centered single column (max-w-3xl for narrower cards)
- Removed sidebar with "Meer lezen" section
- White blog cards on beige background (#F9F6F4) for editorial aesthetic
- Blog page title spacing reduced (mb-12 instead of mb-20) for tighter layout
- Slogan color darkened (#6B655E → #5A4A42) for better visibility
- All FAQ page titles now centered (desktop and mobile):
  - "Wat is thuisonderwijs?" (already centered)
  - "Ik twijfel!" (added textAlign: center)
  - "Waar begin ik?" (added textAlign: center)
- Contact page subtitle updated to "Je mag alles delen, ik lees (women only)."

### Unified Accordion Implementation Across All FAQ Pages
- Converted all three FAQ pages to accordion-style layout on both desktop and mobile:
  - "Wat is thuisonderwijs?" (7 questions)
  - "Ik twijfel!" (12 questions)
  - "Waar begin ik?" (6 numbered sections)
- Desktop accordion specifications:
  - Centered max-w-4xl container
  - 3.5rem page title
  - White cards with 20px border radius, 2rem padding
  - Question/title: 1.5rem (serif, bold)
  - Content: 1.05rem (sans-serif, line-height 1.8)
  - 24px plus/minus icons in warm accent color (#C1562F)
  - space-y-4 between cards
- Mobile accordion specifications:
  - 2rem page title
  - White cards with 12px border radius, 1.5rem padding
  - Question/title: 1.15rem (serif, bold)
  - Content: 0.95rem (sans-serif, line-height 1.7)
  - 20px plus/minus icons
  - space-y-3 between cards
- Accordion behavior:
  - Only one accordion can be open at a time (single-open pattern)
  - Full ARIA implementation: aria-expanded, aria-controls, id attributes
  - Content hidden with `hidden` attribute for proper accessibility
  - Keyboard accessible (native HTML buttons handle Enter/Space automatically)
- Routing: added /ik-twijfel as alternate route for "Ik twijfel!" page (in addition to /is-het-iets-voor-ons)
- Testing: verified all accordions work correctly on both desktop (1920x1080) and mobile (375x667) viewports

### Content Updates
- "Wat is thuisonderwijs?" page content covering 7 key questions about homeschooling basics
  - Improved text layout with prominent opening answers and emphasized key concepts
  - Better visual hierarchy with font-semibold for important statements
  - Strategic use of <strong> tags for core concepts
- "Ik twijfel!" page with 12 questions covering personal doubts and practical concerns
  - Enhanced typography with prominent "Ja/Nee" opening answers
  - Key phrases and concepts emphasized throughout
  - Improved readability with better text structure
- "Waar begin ik?" page features 6 detailed sections: Visie & Intentie, Juridisch, Wat te leren, Methodes, Dagplanning, Community
  - Section titles displayed cleanly without numbers or prefixes
  - Arabic text "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ" emphasized (bold, no quotes)
  - Dutch translation "Daden worden beoordeeld naar hun intenties." emphasized (bold)
  - Resource boxes with soft peach background (#FFF8F3) and subtle borders (#F4E5DB)
- All content follows strict formatting guidelines: • bullets, no emoji, strategic bold usage for emphasis