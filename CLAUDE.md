# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a recreation of the BrightMont Montessori Academy website built with Next.js 15, TypeScript, and Tailwind CSS. The project recreates the original website (https://brightmontschool.com/) with identical content, layout, and functionality using modern web technologies.

**Target Audience:** Prospective and current parents of children ages 6 weeks to 6 years seeking Montessori education in Spring, Texas.

## Development Commands

```bash
# Start development server (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

Development server runs on http://localhost:3000

## Architecture Overview

### Tech Stack
- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Font:** Inter (Google Fonts)

### Project Structure
```
src/app/
├── layout.tsx          # Root layout with Header/Footer
├── page.tsx           # Homepage
├── components/        # Shared components
│   ├── Header.tsx     # Navigation with dropdown menus
│   └── Footer.tsx     # Site footer
├── about-us/          # About section with sub-pages
├── admissions/        # 4-step admission process
├── programs/          # Age-specific program pages
├── contact/           # Contact form and info
├── school-life/       # (To be implemented)
└── resource-center/   # (To be implemented)
```

### Navigation Structure
The site follows a hierarchical navigation pattern defined in `Header.tsx`:
- **About Us:** School info, principal's welcome, philosophy
- **Admissions:** Discover → Apply → Schedule → Fees (4-step process)
- **Programs:** Age-specific programs (Infant, Toddler, Pre-K, School Age, Summer Camp)
- **School Life:** Daily routines and activities
- **Resource Center:** Parent resources and forms
- **Contact:** Contact form and school information

### Key Design Patterns

**Layout Pattern:**
- Root layout (`layout.tsx`) provides consistent Header/Footer across all pages
- Each page is wrapped in a `min-h-screen` container
- Uses consistent color scheme: blue, green, purple, yellow gradients

**Page Structure Pattern:**
- Hero section with gradient background and large typography
- Content sections with max-width containers and responsive grid layouts
- Call-to-action sections with contrasting background colors

**Component Patterns:**
- Header uses responsive navigation with mobile hamburger menu
- Form components include validation and loading states
- Consistent icon usage with Heroicons-style SVGs

## School Information (Content Reference)

**Contact Details:**
- Address: 17710 S. Cypress Villas Dr, Spring, Texas 77379
- Phone: (281) 251-3851
- Email: info@brightmontschool.com
- Hours: 6:30 AM - 6:00 PM, Monday-Friday

**Programs:**
- Infant Program: 6 weeks - 18 months
- Toddler Program: 18 months - 3 years  
- Pre-K Program: 3 - 6 years
- School Age Program: 6+ years (after-school care)
- Summer Camp: All ages

## Form Implementation

The contact form (`/contact`) includes:
- Client-side validation
- Loading states during submission
- Success/error messaging
- Form fields: name, email, phone, inquiry type, child age, program interest, start date, message

Currently uses simulated submission - integrate with actual backend/email service for production.

## Responsive Design

All pages are mobile-first responsive using Tailwind's breakpoint system:
- Mobile: 320px+
- Tablet: 768px+ 
- Desktop: 1024px+

## SEO Configuration

**Implemented SEO Features:**
- Comprehensive metadata with page-specific titles and descriptions
- OpenGraph and Twitter Card meta tags for social media sharing
- JSON-LD structured data for local business and educational programs
- Automated sitemap.xml generation with all pages
- robots.txt configuration for search engine crawling
- Local business schema markup with complete contact information
- Schema.org EducationalOrganization markup with program details
- Semantic HTML structure throughout all pages
- Alt text for images (when implemented)

**SEO Benefits:**
- Enhanced local search visibility for Spring, TX area
- Rich snippets support for search results
- Social media preview optimization
- Complete search engine discoverability

## Content Management

Content is currently hardcoded in components. The site includes authentic Montessori education content, program details, admission processes, and pricing information that matches the original website.

## Current Development Status

**Project Phase:** Phase 3 Nearly Complete (as of current development session)

**Completed Pages (Fully Implemented):**
- ✅ Homepage with complete content sections
- ✅ About Us section (main + 3 sub-pages):
  - `/about-us` - Overview with navigation cards
  - `/about-us/school` - Detailed school information
  - `/about-us/principals-welcome` - Principal's message
  - `/about-us/philosophy` - Montessori philosophy explanation
- ✅ Programs section (main + 5 program pages):
  - `/programs` - Program overview with daily schedule
  - `/programs/infant` - Infant program (6 weeks-18 months)
  - `/programs/toddler` - Toddler program (18 months-3 years)
  - `/programs/primary` - Pre-K program (3-6 years)
  - `/programs/school-age` - After-school program (6+ years)
  - `/programs/summer-camp` - Summer camp (all ages)
- ✅ Admissions section (main + 4 step pages):
  - `/admissions` - Overview with 4-step process
  - `/admissions/discover` - Step 1: Tour information
  - `/admissions/apply` - Step 2: Application process
  - `/admissions/schedule` - Step 3: Review meetings
  - `/admissions/fees` - Step 4: Tuition and pricing
- ✅ Contact page with interactive form and maps integration
- ✅ `/school-life` - Daily routines, enrichment activities, community values
- ✅ `/resource-center` - Parent resources, forms, calendar, policies

**Phase 3 Completed Items:**
- ✅ `/school-life` page with daily schedule, enrichment activities, and community values
- ✅ `/resource-center` page with downloadable forms, school calendar, and parent resources
- ✅ Comprehensive SEO optimization:
  - Enhanced metadata with OpenGraph and Twitter Card support
  - JSON-LD structured data for local business and educational programs
  - Automated sitemap.xml generation
  - robots.txt configuration
  - Local business schema markup for Spring, TX location
- ✅ Visual assets implementation:
  - Custom SVG logo with brand colors and Montessori theme
  - Placeholder classroom illustrations for different age groups
  - School exterior illustration for homepage
  - OpenGraph social sharing image
  - Favicon and app icons

**Phase 3 Complete!** ✅

**Remaining Work for Production:**
- 🔲 Implement actual backend integration for contact form  
- 🔲 Replace placeholder visual assets with professional photography
- 🔲 Deploy to production hosting

**Development Complete!** 

The BrightMont Montessori Academy website recreation is now fully functional with:
- All 17 pages implemented with authentic content
- Complete navigation structure and user experience
- Responsive design for all devices
- Comprehensive SEO optimization
- Visual assets and branding elements
- Form functionality (ready for backend integration)

**Development Notes:**
- All implemented pages follow the established design patterns
- Content is based on original website analysis and PRD specifications
- Navigation structure is complete and functional
- Form validation and UI states are implemented but need backend integration
- Responsive design is implemented across all completed pages