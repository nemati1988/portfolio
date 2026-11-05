Build the complete CASE STUDY DETAIL PAGE for my personal Product Designer portfolio website.

Use the attached reference screenshot as the PRIMARY visual and structural reference.

The page shown in the reference is the detail page for the "Me Time Case Study" project.

The implementation must feel like a natural continuation of the main portfolio website that has already been designed.

Preserve the same:
- Minimal visual language
- Spacious layout
- Typography hierarchy
- shadcn/ui foundation
- #2563EB accent color
- Border treatment
- Corner radius
- Header
- Footer
- Navigation
- Motion language
- Responsive behavior

This must feel like the same website, not a separate case study microsite.

==================================================
CRITICAL CONTENT RULE
==================================================

Do NOT rewrite, paraphrase, improve, shorten, expand, rename, or invent any content.

Use the exact text currently shown in the reference.

The screenshot is the source of truth for:
- Project title
- Breadcrumb
- Metadata
- Project overview
- Labels
- Footer
- Navigation

Do not add additional case-study sections that do not exist in the reference.

Do not invent:
- Research results
- Metrics
- User personas
- User flows
- Testimonials
- Business results
- Quotes
- Additional copy

The page is intentionally visual-first.

==================================================
NO PARALLAX
==================================================

There must be NO PARALLAX anywhere on this page.

Do not use:
- Scroll-linked parallax
- Different scrolling speeds
- Scroll-based transforms
- Floating layers
- Depth-based scrolling
- Scroll-jacking
- Pinned image sections
- Scroll-controlled image movement

Use normal page scrolling.

Motion should come only from:
- Entrance animations
- Subtle exit transitions
- Hover interactions
- Smooth navigation
- Sticky navigation blur

==================================================
GLOBAL DESIGN SYSTEM
==================================================

Use shadcn/ui as the foundation.

Use:
- shadcn-style spacing
- shadcn-style cards
- shadcn-style borders
- shadcn-style badges
- shadcn-style buttons
- accessible focus states
- consistent radius
- neutral color tokens

Use the default shadcn/ui font stack.

Primary accent:

#2563EB

Use #2563EB selectively for:
- Highlighted words
- Links
- Interactive states
- Selected states
- Small visual emphasis

Do not overuse blue.

The majority of the page should remain:
- White
- Near-white
- Neutral gray
- Near-black

==================================================
PAGE CONTAINER
==================================================

Use the same content container as the main portfolio.

Desktop:
- Maximum width approximately 1200–1280px
- Generous horizontal margins
- Approximately 28–40px horizontal page padding

Tablet:
- Reduce margins proportionally.

Mobile:
- Approximately 20–24px horizontal padding.

Every major element should align to the same content grid.

Do not allow sections to randomly change width.

==================================================
GLOBAL HEADER
==================================================

Reuse the EXACT SAME Header / Navigation system from the main portfolio.

Keep:

AMIN NEMATI

Navigation:
Work
Experience
What I Do
Process
Contact

And preserve the existing theme control and Resume action shown in the original portfolio.

Do not create a new case-study-specific header.

The header should remain visually identical to the portfolio.

At the top:
- Clean white background
- Minimal border
- Small typography

When scrolling:
- Header becomes sticky
- Background becomes subtly translucent
- Add backdrop blur
- Add a very subtle bottom border

Use a restrained effect such as:

background:
rgba(255,255,255,0.8)

backdrop-filter:
blur(10px–16px)

Do not create heavy glassmorphism.

==================================================
BREADCRUMB
==================================================

At the beginning of the page content create the exact breadcrumb:

"Home"

/

"Me Time Case Study"

Use the same breadcrumb structure shown in the reference.

Visual style:
- Very small
- Muted gray
- Minimal
- Compact
- Low visual emphasis

Include the same back/arrow icon shown in the reference.

Do not use a large breadcrumb component.

The breadcrumb should appear above the project title.

==================================================
BREADCRUMB INTERACTION
==================================================

The "Home" breadcrumb should be clickable.

On click:
- Navigate back to the main portfolio page.
- If same-page navigation is being used, smoothly return to the main Work section or Home section based on the existing site routing.

On hover:
- Slightly increase contrast.
- Optionally shift color toward #2563EB.
- Keep the transition subtle.

Do not animate the breadcrumb aggressively.

==================================================
PROJECT TITLE
==================================================

Create the main heading:

"Me Time Case Study"

Use exact wording.

Do not change capitalization.

The word:

"Me Time"

must use:

#2563EB

"Case Study"

must remain near-black.

Typography:
- Large
- Bold
- Confident
- Editorial
- Similar scale to the main portfolio headings
- Strong visual hierarchy

The title should be one of the strongest elements on the page.

Do not add a subtitle.

Do not add additional marketing text.

==================================================
TITLE ENTRANCE ANIMATION
==================================================

When the page loads:

1. Breadcrumb fades in.
2. Title appears shortly afterward.
3. The blue "Me Time" portion should be revealed as part of the same heading.

Use:

opacity 0 → 1

translateY(12px–20px) → 0

Use a smooth ease-out.

Do not use bounce.

==================================================
PROJECT METADATA CARD
==================================================

Directly below the title create the metadata panel shown in the reference.

Use a horizontal six-column information structure on desktop.

The metadata content is:

SPECIALTIES
"Research, Strategy, UI Design"

PLATFORMS
"Mobile Application"

DELIVERABLES
"Conceptual, UI Design, Case Study"

DATE
"2026"

DURATION
"2 Weeks"

WEBSITE
"View project"

Do not change these values.

==================================================
METADATA CARD DESIGN
==================================================

The entire metadata area should look like a refined shadcn/ui Card.

Use:
- White background
- Very subtle neutral border
- Small/medium corner radius
- Minimal shadow or no shadow
- Generous internal padding

Divide columns with very subtle vertical separators.

Each column should contain:

Small icon
↓
Small uppercase label
↓
Value

Keep the labels muted.

Keep the values darker.

==================================================
METADATA ICONS
==================================================

Preserve the exact icon concepts visible in the reference:

SPECIALTIES:
Use the same icon shown in the screenshot.

PLATFORMS:
Use the same platform/mobile-related icon shown in the screenshot.

DELIVERABLES:
Use the same icon shown in the screenshot.

DATE:
Use the same calendar icon shown in the screenshot.

DURATION:
Use the same clock/duration icon shown in the screenshot.

WEBSITE:
Use the same globe/link icon shown in the screenshot.

Do not replace the icon family.

Use small, minimal line icons.

The icons should not become decorative focal points.

==================================================
WEBSITE LINK
==================================================

The Website metadata value is:

"View project"

The text must remain exactly unchanged.

Include the same external-link icon visible in the reference.

The link should use #2563EB.

On hover:
- Slightly increase contrast.
- Move the external-link icon a few pixels toward the right.
- Use a smooth 180–250ms transition.

Use the actual project URL already associated with the existing implementation.

Do not invent a new URL.

==================================================
METADATA RESPONSIVE BEHAVIOR
==================================================

Desktop:
Six columns in one horizontal row.

Tablet:
Reduce column widths and allow controlled wrapping if needed.

Mobile:
Convert the metadata panel into a stacked or responsive multi-row layout.

Possible mobile structure:

SPECIALTIES
Research, Strategy, UI Design

PLATFORMS
Mobile Application

DELIVERABLES
Conceptual, UI Design, Case Study

DATE
2026

DURATION
2 Weeks

WEBSITE
View project

Do not hide any metadata.

Do not put it inside an accordion.

Do not require interaction to reveal important information.

==================================================
METADATA HOVER
==================================================

The metadata card itself should remain mostly static.

Individual interactive elements, especially "View project", may respond to hover.

Do not animate every metadata column.

Keep the panel calm and informational.

==================================================
HERO PROJECT IMAGE
==================================================

Immediately below the metadata panel, display the main project hero image from the reference.

Use the exact image shown in the supplied case study screenshot.

Do not replace it.

Do not use stock photography.

Do not generate a new image.

Do not alter the core project composition.

The hero image should:

- Span the full content width
- Have the same aspect ratio as the reference
- Use rounded corners
- Be visually dominant
- Preserve its original composition
- Remain sharp
- Avoid distortion

==================================================
HERO IMAGE STYLE
==================================================

Use a large rounded media container.

Suggested:
- border-radius consistent with the portfolio
- overflow: hidden
- subtle border if needed
- no heavy shadow

Keep the image itself clean.

Do not add text overlays unless the text is already part of the image.

==================================================
HERO IMAGE ENTRANCE
==================================================

When the hero image enters the viewport:

- Fade from opacity 0 to 1.
- Move upward approximately 16–24px.
- Optionally use a very subtle clip reveal.

Do not use:
- Zoom-heavy reveals
- Parallax
- 3D motion
- Rotation

The reveal should feel elegant and editorial.

==================================================
PROJECT OVERVIEW SECTION
==================================================

After the hero image, create a generous amount of whitespace.

Then create the Project Overview section.

Use the exact eyebrow:

"EXPERIENCE"

Use the exact title:

"Project Overview"

The word:

"Project"

should use #2563EB.

"Overview"

should remain near-black.

Then use the exact paragraph:

"Me Time is a conceptual feature designed for LinkedIn to help users make better use of their saved content. The project addresses a common challenge: while users frequently save valuable posts and articles, they often never return to read them. By introducing personalized reading schedules and timely reminders, Me Time bridges the gap between saving content and actually consuming it, encouraging a more intentional and consistent learning experience."

Do not modify this paragraph.

==================================================
PROJECT OVERVIEW TYPOGRAPHY
==================================================

Eyebrow:
- Small
- Uppercase
- Muted
- Slight letter spacing

Title:
- Large
- Bold
- Strong

Description:
- Small/medium
- Neutral gray
- Comfortable line height
- Wide enough for readability
- Not excessively narrow

Keep the entire block left aligned.

==================================================
PROJECT OVERVIEW ANIMATION
==================================================

When this section enters the viewport:

1. Eyebrow fades in.
2. Title fades in and moves upward.
3. Paragraph follows with a very small stagger.

Use:
opacity
+
translateY

Keep movement subtle.

==================================================
CASE STUDY VISUAL GALLERY
==================================================

After Project Overview, create the exact visual gallery structure shown in the reference.

The gallery consists of:

1. One large full-width image.
2. Two images side-by-side.
3. One final large full-width image.

Structure:

Large Image
↓
┌──────────────┬──────────────┐
│    Image     │    Image     │
└──────────────┴──────────────┘
↓
Large Image

Do not change this visual sequence.

==================================================
LARGE IMAGE 01
==================================================

Use the exact large project visual shown directly beneath Project Overview.

Use the provided project asset from the original case study.

Display:
- Full content width
- Same aspect ratio as reference
- Rounded corners
- Overflow hidden
- No unnecessary border
- No heavy shadow

==================================================
TWO-COLUMN IMAGE GRID
==================================================

Below the first large image, create two equal-width images.

Desktop:
- Two equal columns
- Small consistent gap
- Identical corner radius
- Same visual height where appropriate

Tablet:
- Keep two columns if sufficient width exists.

Mobile:
- Stack the two images vertically.

Do not crop the images so aggressively that important UI is lost.

Preserve the project presentation from the reference.

==================================================
FINAL LARGE IMAGE
==================================================

After the two-column row, add the final large full-width image from the reference.

Use:
- Full content width
- Same visual ratio
- Rounded corners
- Clean presentation
- No unnecessary overlays

This final image should provide a strong visual conclusion to the case study.

==================================================
IMAGE INTERACTION
==================================================

Project images should have a very subtle hover interaction.

On desktop hover:
- Slight image scale, approximately 1.01–1.015
- Keep the outer container fixed
- Slight increase in visual depth
- Smooth transition

Do not:
- Zoom aggressively
- Rotate
- Tilt
- Add glow
- Add heavy shadow
- Use parallax

The images remain primarily content, not interactive toys.

==================================================
IMAGE CLICK BEHAVIOR
==================================================

Do not automatically create a gallery lightbox unless the existing site architecture already uses one.

If image clicking is implemented:
- Use a subtle lightbox or image preview only if it is already consistent with the portfolio.
- Do not add unnecessary UI.

The case study should remain clean and focused.

==================================================
GALLERY SPACING
==================================================

Maintain consistent vertical spacing:

Hero image
↓
Project Overview
↓
Large image
↓
Two-column gallery
↓
Final image
↓
Footer

Use generous whitespace between the major content groups.

Within the two-column gallery use a smaller, tighter gap.

This creates the visual rhythm visible in the reference.

==================================================
CASE STUDY MOTION LANGUAGE
==================================================

Use a restrained sequence:

Page Load:
Breadcrumb
→ Title
→ Metadata
→ Hero Image

Scroll:
Project Overview reveals
→ Large image reveals
→ Two-column images reveal
→ Final image reveals

Hover:
Subtle image movement
→ Link interaction
→ Header/footer interactions

No parallax.

No continuous movement.

No scroll-jacking.

==================================================
SECTION EXIT ANIMATION
==================================================

Do not create dramatic exit animations.

Content should naturally leave the viewport during normal scrolling.

A very subtle opacity transition may be used if appropriate, but do not make the case study content disappear before the user has finished reading it.

==================================================
RESPONSIVE DESIGN
==================================================

Desktop:
- Maximum width around 1200–1280px.
- Large project title.
- Six-column metadata panel.
- Full-width images.
- Two-column gallery.

Tablet:
- Reduce typography proportionally.
- Metadata may wrap into two rows.
- Preserve large image presentation.
- Keep the gallery visually balanced.

Mobile:
- Single-column page.
- Smaller heading.
- Metadata becomes stacked.
- All images become full width.
- Two-column gallery becomes a vertical stack.
- Keep generous horizontal padding.
- Maintain readable text width.
- Keep rounded corners.
- Reduce animation intensity.

Do not:
- Hide case study information
- Create horizontal scrolling
- Use tiny metadata text
- Crop important visual content

==================================================
ACCESSIBILITY
==================================================

Ensure:

- Proper heading hierarchy
- Semantic landmarks
- Accessible links
- Keyboard navigation
- Visible focus states
- Sufficient color contrast
- Accessible breadcrumb navigation
- Meaningful alt text for project images
- prefers-reduced-motion support

When reduced motion is enabled:
- Remove translation movement.
- Remove image hover scale.
- Keep content immediately visible.
- Keep only minimal opacity transitions or no animation.

==================================================
PERFORMANCE
==================================================

Keep all motion lightweight.

Prefer:
- opacity
- transform
- CSS transitions

Avoid:
- Continuous scroll listeners
- Heavy JavaScript animation
- Layout-changing animations
- Continuous image transforms

Images should be optimized appropriately.

==================================================
FOOTER
==================================================

Reuse the EXACT SAME Footer from the main portfolio website.

Do not create a separate Case Study Footer.

Preserve:
- AMIN NEMATI
- Social icons
- Work
- Experience
- What I Do
- Process
- Contact
- © 2024 Amin Nemati. All Rights Reserved.
- Designed with Figma. Built with Framer.

Do not alter any Footer copy.

The Footer should feel like the natural end of the Case Study.

==================================================
OVERALL VISUAL HIERARCHY
==================================================

The hierarchy should be:

1. Me Time Case Study
2. Project Metadata
3. Hero Image
4. Project Overview
5. Visual Gallery
6. Footer

Avoid adding competing visual elements.

The project visuals should remain the primary focus after the title.

==================================================
FINAL PAGE EXPERIENCE
==================================================

The complete page should feel like:

Global Header
↓
Breadcrumb
↓
Me Time Case Study
↓
Project metadata
↓
Hero project image
↓
Project Overview
↓
Large project visual
↓
Two-column visual gallery
↓
Final project visual
↓
Global Footer

The page should feel:

- Minimal
- Premium
- Editorial
- Visual-first
- Spacious
- Professional
- Product-design focused
- Highly polished
- Responsive
- Accessible
- shadcn/ui-based

==================================================
FINAL QUALITY BAR
==================================================

Prioritize:

1. Exact visual fidelity to the attached screenshot
2. Exact preservation of all existing content
3. Consistency with the main portfolio
4. Strong visual hierarchy
5. Generous whitespace
6. shadcn/ui foundations
7. #2563EB accent
8. Subtle entrance animations
9. Refined hover states
10. Responsive behavior
11. Accessibility
12. Performance

Do not add unnecessary sections.

Do not add unnecessary text.

Do not invent content.

Do not change the existing project story.

Do not use parallax.

Do not use scroll-jacking.

Do not replace the existing images.

Build the Case Study page as a polished extension of the existing personal portfolio website.