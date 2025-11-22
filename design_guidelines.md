# Design Guidelines for Thuisonderwijs Website

## Design Philosophy
A calm, editorial-style website inspired by modern minimal magazines (The Gentlewoman, Kinfolk, Cerealmag). The site should feel like a quiet online magazine—warm, simple, text-focused, and visually balanced for Dutch-speaking parents exploring homeschooling.

## Typography System
**Headlines**: Cormorant Garamond or Playfair Display (serif) - elegant, editorial feel
**Body Text**: Inter or Manrope (sans-serif) - clean, highly readable
**Hierarchy**: Large, spacious headlines with generous line-height for breathing room

## Color Palette
- **Primary Text**: Soft black (#1E1E1E)
- **Background**: Off-white (#FAF9F7)
- **Accent**: Warm beige (#EDE9E3) or muted olive (#B6B29E)
- **Dividers**: Subtle, matching accent colors

No bright colors or heavy contrasts—maintain editorial restraint throughout.

## Layout System
**Spacing**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
**Container**: Wide margins with centered content blocks (max-w-4xl for reading, max-w-6xl for wider sections)
**Sections**: Generous vertical padding (py-16 to py-24) between major sections
**Dividers**: Thin horizontal lines (1px, accent color) between content sections for subtle separation

## Component Library

### Navigation
**Header**: Minimalist navbar that starts transparent, becomes solid (#FAF9F7) on scroll with subtle shadow
- Logo/site name on left in serif typeface
- Main menu items on right: Wat & Waarom, Beginnen, Blog, Contact
- Mobile: Hamburger menu, clean slide-in navigation

**Footer**: Clean, minimal design
- Small centered tagline: "over rust, richting & groei"
- Optional links to privacy/about
- No heavy elements, keeping editorial simplicity

### Content Sections

**Wat & Waarom & Beginnen Pages**:
- Long-form scrollable pages with sidebar navigation (sticky on desktop, collapsible on mobile)
- Sidebar shows section anchors for quick jumping
- Smooth scroll behavior with offset for fixed header
- Each section clearly divided with subtle horizontal lines
- Large section headings in serif, body in sans-serif
- Wide margins, centered text blocks for optimal reading

**Blog Section**:
- Editorial card layout for article previews
- Large typography for post titles
- Category tags in muted accent colors
- Archive/filter options displayed cleanly (dropdown or tabs)
- Subcategories: Ervaringen, Thema's/Seizoenen, Printables, Opvoeding & balans
- Individual posts: full-width hero area for featured image, centered reading column below

**Contact Page**:
- Simple, centered form with generous spacing
- Fields: Name, Email, Message (textarea)
- Minimal styling, matching site aesthetic
- Small introductory text above form explaining purpose
- Submit button in accent color with hover state

## Images
**Approach**: Minimal, purposeful imagery
- No large hero images—focus on typography and whitespace
- Blog posts may include featured images, but kept tasteful and understated
- Images (when used) should be high-quality, muted tones, lifestyle-oriented
- Avoid stock photography feel—aim for authentic, real moments

## Interactive Elements
**Buttons**: Minimal design with accent background, dark text, subtle hover transition (slight darkening)
**Links**: Underline on hover, smooth transition
**Scroll Navigation**: Smooth scrolling with proper offset for fixed header
**No animations**: Keep interactions calm—no flashy effects, parallax, or heavy motion

## Responsive Behavior
**Desktop**: Full sidebar navigation, wide margins, 2-column layouts where appropriate (blog archive)
**Tablet**: Collapsible sidebar, adjusted margins
**Mobile**: Single column, hamburger menu, stacked content, generous tap targets

## Accessibility
- Maintain strong text contrast despite soft palette
- Proper heading hierarchy throughout
- Focus states on all interactive elements
- Semantic HTML structure
- Skip-to-content link for keyboard navigation

## Final Notes
This is a text-first, editorial experience. Every design decision should support readability, calm, and clarity. No clutter, no distractions—just thoughtful, warm, accessible content presentation.