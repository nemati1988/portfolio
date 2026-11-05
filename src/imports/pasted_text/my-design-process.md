Build the PROCESS / MY DESIGN PROCESS section of my personal Product Designer portfolio website in Figma Make.

Use the attached portfolio screenshot as the primary visual reference for this section. This section must continue directly after the Capabilities section and maintain the same visual language, typography hierarchy, spacing rhythm, borders, card styling, color system, interaction language, and minimalist aesthetic used throughout the rest of the portfolio.

The final result should feel like a premium Product Designer portfolio: minimal, editorial, structured, spacious, highly readable, professional, and intentionally understated.

==================================================
IMPORTANT GLOBAL RULES
==================================================

- Use the shadcn/ui design system as the foundation of the implementation.
- Use the default shadcn/ui font stack.
- Use #2563EB as the primary accent color.
- Keep the overall page predominantly white and neutral.
- Preserve generous whitespace.
- Use subtle neutral borders.
- Use restrained rounded corners.
- Avoid excessive shadows.
- Avoid gradients.
- Avoid decorative blobs.
- Avoid illustrations.
- Avoid background patterns.
- Avoid unnecessary visual decoration.
- Keep the visual style consistent with the Hero, Selected Work, Experience, and Capabilities sections.
- Do not introduce a new visual language for this section.
- Do not use parallax.
- Do not use scroll-jacking.
- Do not pin the process cards.
- Do not create horizontally scrolling content on desktop or mobile unless absolutely necessary.
- Use normal natural page scrolling.

==================================================
NO PARALLAX
==================================================

There must be NO PARALLAX EFFECT in this section.

Do not implement:
- Scroll-linked movement
- Different scrolling speeds
- Scroll-position-based transforms
- Depth-based movement
- Floating layers
- Independent content movement
- Sticky process cards
- Scroll-controlled card animation

The section must behave as a normal webpage section.

Only use:
- Normal page scrolling
- Viewport-triggered entrance animations
- Very subtle section exit transitions
- Hover interactions
- Smooth anchor scrolling
- Sticky navigation with subtle backdrop blur

==================================================
CONTENT PRESERVATION — CRITICAL
==================================================

Do not change any content.

Do not:
- Rewrite
- Paraphrase
- Improve grammar
- Shorten
- Expand
- Rename
- Replace
- Add
- Remove
- Invent

The exact wording shown in the current portfolio reference must be preserved.

For every process step, use the exact current title and exact current description visible in the attached screenshot.

Do not generate new explanatory copy.

Do not create alternative wording.

Do not replace the process descriptions with generic UX terminology.

The screenshot is the source of truth for the current content.

==================================================
SECTION HEADER
==================================================

Use the following exact content:

Eyebrow:
"PROCESS"

Title:
"My Design Process"

Description:
"Every product is different, but my approach remains focused on understanding users, aligning business objectives, validating assumptions, and delivering scalable solutions. The process is flexible and iterative — adapting continuously based on research, collaboration, and feedback."

These strings must remain exactly unchanged.

==================================================
HEADER VISUAL STYLE
==================================================

Match the visual treatment already established across the portfolio.

Eyebrow:
- Small
- Uppercase
- Muted gray
- Slight letter spacing
- Minimal visual presence

Title:
"My Design Process"

- Large
- Bold
- Near-black
- Strong visual hierarchy
- Similar scale to "Selected Work", "Professional Journey", and "What I Do"

The word:

"Design"

should be highlighted using:

#2563EB

as shown in the reference.

Do not highlight additional words.

Description:
- Neutral gray
- Smaller than the heading
- Comfortable line-height
- Controlled width
- Easy to read
- No additional copy

==================================================
SECTION CONTAINER
==================================================

Use the same main max-width container as all previous sections.

Desktop:
- Approximately 1200–1280px max-width.
- Approximately 28–40px horizontal page padding.
- Align the section with the same vertical grid used across the rest of the site.

Tablet:
- Reduce horizontal padding proportionally.

Mobile:
- Approximately 20–24px horizontal padding.
- Preserve consistent page margins.
- Never create horizontal overflow.

==================================================
PROCESS STRUCTURE
==================================================

The Process section contains exactly five steps.

Use this exact sequence:

01
"Understand the Problem"

02
"Explore & Define"

03
"Design & Prototype"

04
"Validate & Iterate"

05
"Deliver & Improve"

Do not change the numbers.

Do not change the titles.

Do not reorder the steps.

==================================================
PROCESS CARD LAYOUT
==================================================

On desktop, create five cards arranged horizontally in one row.

The visual structure should closely match the reference:

┌────────────┬────────────┬────────────┬────────────┬────────────┐
│     01     │     02     │     03     │     04     │     05     │
│    Title   │    Title   │    Title   │    Title   │    Title   │
│ Description│ Description│ Description│ Description│ Description│
└────────────┴────────────┴────────────┴────────────┴────────────┘

The cards should appear as a continuous five-step process while still being visually separated.

Use:
- Equal width
- Consistent height
- Consistent gap
- Subtle border
- Small radius
- White background
- Generous but controlled internal padding

==================================================
CARD STYLE
==================================================

Each card should use a refined shadcn/ui-inspired appearance.

Card:
- White background
- Very subtle neutral border
- Small/medium radius
- No heavy shadow
- No gradient
- No decorative background
- Comfortable internal padding

The cards should not look like generic SaaS feature cards.

They should feel like sophisticated editorial content blocks.

==================================================
STEP NUMBER
==================================================

Each card begins with a step number:

01
02
03
04
05

Use:
- #2563EB
- Larger than the supporting text
- Medium/semibold weight
- Clear visual hierarchy
- Consistent placement

The number should be one of the strongest visual anchors inside each card.

Do not place the number inside a filled circle.

Do not introduce a timeline dot.

Do not use a vertical progress indicator.

Keep the number treatment minimal, exactly like the reference.

==================================================
STEP TITLE
==================================================

Use the exact titles:

"Understand the Problem"

"Explore & Define"

"Design & Prototype"

"Validate & Iterate"

"Deliver & Improve"

Typography:
- Medium/semibold
- Near-black
- Compact
- Highly readable

Keep the titles visually stronger than the descriptions.

Do not change capitalization.

==================================================
STEP DESCRIPTION
==================================================

Every card must use the exact current description already present in the reference screenshot.

IMPORTANT:
- Copy the existing description verbatim from the attached reference.
- Do not rewrite it.
- Do not summarize it.
- Do not correct its wording.
- Do not replace it with generated text.
- Preserve the same content for all five cards.

The five card descriptions are already part of the existing portfolio design and must remain unchanged.

==================================================
CARD INTERNAL SPACING
==================================================

Inside each card use a consistent hierarchy:

Step Number
↓
Small vertical gap
↓
Step Title
↓
Small vertical gap
↓
Description

Keep the vertical rhythm consistent across all five cards.

Do not make one card visually denser than another unless required by the original copy length.

==================================================
CARD HEIGHT
==================================================

All five cards should have the same visual height on desktop.

Allow the content to naturally wrap inside each card.

Use internal spacing rather than adding excessive empty space.

The cards should feel aligned across the entire row.

==================================================
CARD HOVER INTERACTION
==================================================

Add a very subtle desktop hover interaction.

On hover:

- Slightly increase border contrast.
- Apply a very subtle neutral background shift.
- Move the card upward by approximately 1–2px.
- Slightly strengthen the step number color.
- Slightly increase title contrast.
- Keep body text stable.

Use approximately 200–300ms transition duration.

Do not use:
- Large scale transformations
- Rotation
- 3D perspective
- Glow
- Strong shadows
- Bouncy animations
- Excessive movement

The interaction should feel premium and almost invisible.

==================================================
STEP NUMBER HOVER
==================================================

On card hover, the step number may subtly transition from:

#2563EB

to a slightly stronger blue tone or higher visual contrast.

Keep the original #2563EB as the main brand accent.

Do not animate the number dramatically.

No rotation.

No scaling larger than approximately 1.03.

==================================================
TITLE HOVER
==================================================

On hover:
- Slightly increase the contrast of the title.
- Optionally change the title color very subtly toward #2563EB.
- Keep the transition smooth.
- Do not permanently recolor the title.

The default resting state should remain neutral.

==================================================
CARD FOCUS STATE
==================================================

Provide a visible keyboard focus state using shadcn/ui conventions.

Use:
- Subtle #2563EB focus ring
- Accessible contrast
- No excessive outline thickness

Do not rely only on hover.

==================================================
SECTION ENTRANCE ANIMATION
==================================================

When the Process section enters the viewport, reveal the content progressively.

Animation sequence:

1. "PROCESS" eyebrow
2. "My Design Process" heading
3. Description
4. Process card 01
5. Process card 02
6. Process card 03
7. Process card 04
8. Process card 05

Use:

opacity: 0 → 1

and:

transform: translateY(16px–24px) → 0

The animation should feel smooth and sophisticated.

==================================================
ENTRANCE TIMING
==================================================

Suggested timing:

Eyebrow:
0–300ms

Heading:
80–420ms

Description:
150–500ms

Card 01:
250–600ms

Card 02:
320–670ms

Card 03:
390–740ms

Card 04:
460–810ms

Card 05:
530–880ms

Use a small stagger.

Do not make the animation too slow.

The user should be able to read the section almost immediately.

==================================================
PROCESS CARD STAGGER
==================================================

Cards should appear in sequence:

01 → 02 → 03 → 04 → 05

Each card:
- Starts at opacity 0
- Moves up approximately 20px
- Ends at its natural position
- Remains fully visible

The stagger should be short and controlled.

Avoid dramatic card reveals.

==================================================
SECTION EXIT
==================================================

As the user naturally scrolls toward the Contact section:

- Let the Process section leave the viewport naturally.
- Do not pin the cards.
- Do not move cards independently.
- Do not use parallax.
- Do not create a scroll-controlled animation.

A subtle opacity transition can be used as elements naturally leave the viewport, but it must not interfere with readability.

The next section should appear naturally below.

==================================================
NORMAL SCROLLING
==================================================

The Process section should use standard webpage scrolling.

Do not:
- Lock scrolling
- Snap to cards
- Force scroll positions
- Create scroll-jacking
- Convert the five cards into a carousel
- Make the cards sticky

The user should be able to stop and read every process step comfortably.

==================================================
SHADCN/UI FOUNDATION
==================================================

Use shadcn/ui principles for:

- Cards
- Typography
- Borders
- Radius
- Focus states
- Interaction states
- Spacing
- Accessibility

Use design tokens conceptually for:

Background
Foreground
Muted Foreground
Border
Card
Accent
Radius
Spacing

Primary accent:

#2563EB

Do not make this section look like a default shadcn documentation page.

Use shadcn as the structural foundation while preserving the portfolio's custom editorial look.

==================================================
COLOR SYSTEM
==================================================

Primary text:
Near-black

Secondary text:
Neutral gray

Step numbers:
#2563EB

Borders:
Very light neutral gray

Background:
White / near-white

Accent:
#2563EB

Do not introduce additional brand colors.

==================================================
TYPOGRAPHY
==================================================

Use the default shadcn/ui font stack.

Do not import external fonts.

Hierarchy:

Eyebrow:
Very small / uppercase

Heading:
Large / bold

Description:
Small / regular

Step number:
Medium / prominent / blue

Step title:
Medium / semibold

Step description:
Small / regular / muted

Keep typography consistent with all previous sections.

==================================================
DESKTOP LAYOUT
==================================================

Desktop should closely resemble the reference screenshot:

- Full-width section container
- Heading and description aligned to the left
- Five equal cards in a single row
- Small gap between cards
- Cards visually connected through consistent spacing
- Generous whitespace around the entire section

Avoid excessive card width.

Keep the full five-step process visible within the main content container.

==================================================
TABLET LAYOUT
==================================================

On tablet:

- Use two or three columns depending on available width.
- Preserve the order of the five steps.
- Maintain consistent card sizing.
- Avoid cards becoming too narrow.
- Keep readable line lengths.
- Reduce internal padding slightly if needed.

The grid can become:

Row 1:
01 / 02 / 03

Row 2:
04 / 05

or another balanced responsive configuration based on viewport width.

Do not reorder the process steps.

==================================================
MOBILE LAYOUT
==================================================

On mobile:

Use one column.

The cards should appear in the exact order:

01
Understand the Problem

02
Explore & Define

03
Design & Prototype

04
Validate & Iterate

05
Deliver & Improve

Each card should become full width.

Use:
- Comfortable vertical spacing
- Reduced card padding
- Readable body text
- Clear step number
- Strong title hierarchy

Do not hide descriptions.

Do not use an accordion.

Do not use tabs.

Do not use a horizontal carousel.

Do not create horizontal scrolling.

==================================================
MOBILE CARD INTERACTION
==================================================

On touch devices:

- Do not rely on hover.
- Keep cards static.
- Preserve readable content.
- Use subtle tap/focus states only where appropriate.

Reduce animation intensity on mobile.

==================================================
ACCESSIBILITY
==================================================

Ensure:

- Proper semantic heading hierarchy
- Sufficient color contrast
- Keyboard accessibility
- Visible focus states
- Accessible typography
- Screen-reader-friendly structure
- prefers-reduced-motion support

When prefers-reduced-motion is enabled:

- Remove movement from entrance animations.
- Keep content immediately visible.
- Disable hover movement.
- Use minimal or no animation.

==================================================
PERFORMANCE
==================================================

Keep animation implementation lightweight.

Prefer:
- opacity
- transform

Avoid:
- Continuous scroll listeners
- Heavy JavaScript animation
- Layout-changing animations
- Unnecessary DOM complexity

Use viewport-based entrance triggers such as Intersection Observer or an equivalent efficient mechanism.

==================================================
NAVIGATION COMPATIBILITY
==================================================

The existing sticky navigation should continue to work.

When the Process section is visible:
- "Process" should be subtly highlighted.
- Use #2563EB for active-state emphasis.
- Do not change the navigation structure.

The navigation should remain:
- Sticky
- Minimal
- Translucent when scrolling
- Subtly blurred
- Lightly bordered

Use a very restrained backdrop blur effect.

Do not use heavy glassmorphism.

==================================================
SMOOTH ANCHOR SCROLLING
==================================================

The "Process" navigation link should smoothly scroll to this section.

Use natural smooth scrolling.

Do not make scrolling excessively slow.

Do not lock or snap the scroll position.

==================================================
VISUAL RELATIONSHIP BETWEEN STEPS
==================================================

Although the five steps are separate cards, they should visually feel like one process.

Achieve this through:
- Consistent card dimensions
- Consistent spacing
- Consistent typography
- Consistent number styling
- Consistent borders
- Consistent internal padding

Do not add connector lines.

Do not add arrows between cards.

Do not create a timeline graphic.

The five cards themselves should communicate the process.

==================================================
VISUAL PRIORITY
==================================================

The hierarchy should be:

1. My Design Process
2. Introductory description
3. Step numbers
4. Step titles
5. Step descriptions

Keep all elements readable.

Do not let decoration compete with the content.

==================================================
SECTION SPACING
==================================================

Maintain the same vertical rhythm as the previous sections.

Create clear spacing between:

Capabilities
↓
PROCESS
↓
My Design Process
↓
Description
↓
Process Cards
↓
Contact Section

Do not introduce excessive empty areas.

Do not compress the section too much.

==================================================
FINAL EXPERIENCE
==================================================

The complete Process section should communicate that the designer has a structured but flexible approach to product design.

The visual experience should feel like:

Capabilities ends
↓
PROCESS eyebrow appears
↓
My Design Process reveals
↓
Description appears
↓
Five process cards reveal sequentially
↓
User can hover over individual cards
↓
User reads each step
↓
Section ends naturally
↓
Contact section begins

The motion language should be:

Subtle entrance
→
Natural scrolling
→
Refined hover
→
Natural exit

There must be NO PARALLAX.

==================================================
FINAL QUALITY BAR
==================================================

The final section must be:

- Minimal
- Clean
- Spacious
- Editorial
- Premium
- Professional
- Highly scannable
- Responsive
- Accessible
- shadcn/ui-based
- Consistent with the entire portfolio
- Faithful to the attached screenshot

Most importantly:

DO NOT CHANGE THE EXISTING CONTENT.

DO NOT REWRITE THE PROCESS DESCRIPTIONS.

DO NOT CHANGE THE FIVE PROCESS TITLES.

DO NOT CHANGE THE PROCESS ORDER.

DO NOT INTRODUCE PARALLAX.

DO NOT ADD EXTRA CONTENT.

DO NOT ADD DECORATIVE ELEMENTS THAT ARE NOT PRESENT IN THE REFERENCE.

Reproduce the current Process section as faithfully as possible while implementing it as a polished, responsive, interactive web experience using shadcn/ui and the #2563EB accent color.