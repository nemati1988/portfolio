Build the CONTACT ME section of my personal Product Designer portfolio website in Figma Make.

Use the attached portfolio screenshot as the primary visual reference for this section. The Contact section must continue directly after the "My Design Process" section and preserve the same visual language, typography system, spacing rhythm, border treatment, card styling, interaction patterns, and overall minimalist aesthetic established throughout the portfolio.

The Contact section should feel like a calm, confident, premium closing section of the portfolio. It should encourage direct communication without feeling like a traditional corporate contact page or SaaS lead-generation form.

==================================================
IMPORTANT GLOBAL RULES
==================================================

- Use the shadcn/ui design system as the foundation of the implementation.
- Use the default shadcn/ui font stack.
- Use #2563EB as the primary accent color.
- Keep the interface predominantly white and neutral.
- Preserve generous whitespace.
- Use subtle neutral borders.
- Use restrained rounded corners.
- Avoid heavy shadows.
- Avoid gradients.
- Avoid decorative blobs.
- Avoid illustrations.
- Avoid background patterns.
- Avoid excessive visual decoration.
- Keep the same minimalist editorial aesthetic as all previous sections.
- Do not introduce a different design language for the Contact section.
- Do not use parallax.
- Do not use scroll-jacking.
- Do not pin the Contact section.
- Use normal natural page scrolling.

==================================================
NO PARALLAX
==================================================

There must be NO PARALLAX EFFECT in this section.

Do not use:
- Scroll-linked movement
- Scroll-position-based transforms
- Different movement speeds
- Independent layer movement
- Floating content layers
- Depth-based scrolling
- Sticky contact cards

The section must follow normal page scrolling.

Only use:
- Viewport-triggered entrance animations
- Subtle exit animations
- Hover interactions
- Smooth anchor scrolling
- Sticky navigation with subtle backdrop blur

==================================================
CONTENT PRESERVATION — CRITICAL
==================================================

Do not change any content from the current design.

Do not:
- Rewrite
- Paraphrase
- Improve
- Shorten
- Expand
- Rename
- Replace
- Invent
- Add new text
- Remove existing text

The exact wording shown in the current portfolio screenshot is the source of truth.

Preserve all visible text exactly.

Do not create a Contact Form.

The Contact section must use direct contact methods only:
- Email
- Phone
- Telegram

==================================================
SECTION HEADER
==================================================

Use the exact following content:

Eyebrow:
"CONTACT ME"

Main heading:
"Let's build products together"

Supporting description:
"I'm always interested in discussing product design, enterprise software, Design Systems, and opportunities to create meaningful digital experiences. Let's start a conversation."

Do not modify these strings in any way.

==================================================
HEADER VISUAL STYLE
==================================================

The section header should match the visual treatment of previous sections.

Eyebrow:
- Small
- Uppercase
- Muted gray
- Slightly letter-spaced
- Lightweight
- Positioned above the main title

Main heading:
"Let's build products together"

- Large
- Bold
- Near-black
- Strong editorial hierarchy
- Similar visual weight to previous section headings

The word:

"products"

must use:

#2563EB

exactly as shown in the reference.

Do not highlight any other word.

Supporting description:
- Neutral gray
- Smaller than the heading
- Comfortable line-height
- Full-width but constrained to a readable line length
- Easy to scan
- No additional copy

==================================================
SECTION PURPOSE
==================================================

This section should communicate:

- I am available for conversations and opportunities.
- I am interested in product design work.
- I can be contacted directly.
- The contact process should be simple and frictionless.

Do not make the section feel like a lead-generation landing page.

Do not add a form.

Do not add unnecessary CTA buttons.

The contact cards themselves should function as the primary interaction.

==================================================
SECTION CONTAINER
==================================================

Use the same main content container as all previous sections.

Desktop:
- Approximately 1200–1280px maximum width.
- Approximately 28–40px horizontal page padding.
- Align with the same left and right grid used throughout the page.

Tablet:
- Reduce horizontal padding proportionally.

Mobile:
- Approximately 20–24px horizontal padding.
- Preserve comfortable margins.
- Never create horizontal overflow.

==================================================
CONTACT METHODS
==================================================

Create exactly three contact cards:

1. Email
2. Phone
3. Telegram

Arrange them horizontally in three equal columns on desktop.

Structure:

┌──────────────────────┬──────────────────────┬──────────────────────┐
│ Email                │ Phone                │ Telegram             │
│ contact details      │ contact details      │ contact details      │
│ supporting text      │ supporting text      │ supporting text      │
│ action               │ action               │ action               │
└──────────────────────┴──────────────────────┴──────────────────────┘

Do not add a fourth contact method.

Do not add a contact form.

==================================================
EMAIL CARD
==================================================

Use the exact content currently shown in the reference:

Title:
"Email"

Email address:
"amin_nemati@yahoo.com"

Supporting text:
"Best for project inquiries and collaborations"

Bottom action:
"Click to open"

Do not change any wording.

Do not replace the email address.

The Email card should use the same envelope icon already visible in the current design.

Do not replace the icon with a different icon.

==================================================
EMAIL INTERACTION
==================================================

The Email card should be clickable.

When clicked:
- Open the default email client using a mailto link.
- Do not open a custom form.
- Do not show a modal.
- Keep the interaction simple.

Suggested behavior:
mailto:amin_nemati@yahoo.com

On hover:
- Slightly increase the border contrast.
- Apply a subtle background change.
- Move the card upward by approximately 1–2px.
- Slightly increase icon contrast.
- Slightly increase the visibility of the "Click to open" action.
- Keep the motion subtle.

Do not:
- Add large shadows
- Add scale effects
- Add glow
- Rotate the icon

==================================================
PHONE CARD
==================================================

Use the exact content currently shown in the reference:

Title:
"Phone"

Phone number:
"(+98) 915 774 7024"

Supporting text:
"Available for professional conversations"

Bottom action:
"Click to call"

Do not modify the content.

Use the same phone icon visible in the current design.

Do not replace the icon.

==================================================
PHONE INTERACTION
==================================================

The Phone card should be clickable.

On supported devices:
- Use a tel link.

Suggested behavior:
tel:+989157747024

On desktop, do not create an unnecessary modal.

On hover:
- Slightly increase border contrast.
- Apply a very subtle neutral background shift.
- Move the card upward by 1–2px.
- Slightly increase icon contrast.
- Make the action text slightly more prominent.

Keep the interaction subtle and professional.

==================================================
TELEGRAM CARD
==================================================

Use the exact content currently shown in the reference:

Title:
"Telegram"

Telegram username:
"amin_nemati"

Supporting text:
"Quickest way to start a conversation"

Bottom action:
"Open chat"

Do not modify these texts.

Use the same Telegram/paper-plane icon shown in the reference.

Do not replace the icon.

==================================================
TELEGRAM INTERACTION
==================================================

The Telegram card should be clickable.

Use the existing Telegram username/link from the portfolio.

The interaction should:
- Open the Telegram profile/chat.
- Prefer opening Telegram directly when supported.
- Otherwise open the corresponding web destination.

On hover:
- Slight border contrast increase.
- Very subtle background change.
- Card moves upward approximately 1–2px.
- Icon contrast slightly increases.
- "Open chat" becomes subtly more prominent.

Do not add flashy Telegram-specific effects.

==================================================
CONTACT CARD VISUAL DESIGN
==================================================

Each contact card should use a refined shadcn/ui-inspired card structure.

Use:
- White background
- Very subtle neutral border
- Small/medium radius
- No heavy shadow
- Generous but controlled padding

Each card should contain:

1. Icon
2. Contact method title
3. Contact value
4. Supporting description
5. Small action text

The hierarchy should be clear.

==================================================
CONTACT ICONS
==================================================

Keep the exact icon concepts currently visible in the reference:

Email:
Envelope / Mail icon

Phone:
Phone / handset icon

Telegram:
Telegram / paper-plane icon

The icons should appear inside small rounded-square containers.

Use:
- #2563EB for the icon
- Very light neutral or subtle blue-tinted icon background
- Small rounded corners
- Compact dimensions

Do not:
- Replace icons
- Use emoji
- Use illustrated icons
- Use different icon styles
- Add oversized icons

==================================================
ICON HOVER
==================================================

On card hover:

- Slight increase in icon contrast.
- Optional translateY(-1px).
- Optional subtle background tint.
- Smooth transition.

Do not rotate the icons.

Do not create bounce animations.

Do not use 3D effects.

==================================================
CARD HOVER INTERACTION
==================================================

All three contact cards should use the same interaction language.

On hover:
- Border slightly darkens.
- Background changes subtly.
- Card moves upward by approximately 1–2px.
- Contact title becomes slightly more prominent.
- Action text becomes slightly more visible.
- Icon receives a very subtle emphasis.

Use approximately 200–300ms transition duration.

Keep all cards visually consistent.

==================================================
ACTION TEXT
==================================================

The bottom action inside each card should be visually subtle.

Use:

"Click to open"
"Click to call"
"Open chat"

respectively.

The action should look like a small interactive affordance rather than a large button.

If there is an arrow icon shown in the reference:
- Keep the same icon concept.
- Allow it to move slightly on hover.
- Use approximately 2–4px movement.
- Do not replace it.

==================================================
CONTACT CARDS — ACCESSIBILITY
==================================================

All three contact cards must be keyboard accessible.

Use:
- Proper link semantics
- Visible focus state
- Clear hover state
- Clear focus state
- Accessible labels

Use #2563EB subtly for the focus ring.

Do not rely exclusively on color to indicate interaction.

==================================================
CURRENTLY OPEN TO
==================================================

After the three contact cards, add the secondary subsection exactly as shown in the reference.

Heading:

"Currently Open To"

Do not change this wording.

==================================================
CURRENTLY OPEN TO TAGS
==================================================

Display the following exact tags:

"Full-time Opportunities"

"Remote Opportunities"

"Projects"

"Design Systems"

"B2B Products"

Do not add or remove any tags.

Do not modify the wording.

Do not change capitalization.

==================================================
OPEN TO TAG DESIGN
==================================================

Use small shadcn/ui-inspired pill badges.

Style:
- Very light background
- Subtle border
- Small text
- Rounded pill shape
- Neutral dark-gray text
- Compact horizontal padding

Do not use filled blue badges by default.

Keep the tags visually secondary.

==================================================
OPEN TO TAG HOVER
==================================================

On desktop hover:

- Slightly increase border contrast.
- Slightly shift text toward #2563EB.
- Apply a very subtle background tint.
- Smooth 180–250ms transition.

Do not:
- Scale aggressively
- Rotate
- Bounce
- Add shadows
- Add glow

==================================================
SECTION ENTRANCE ANIMATION
==================================================

When the Contact section enters the viewport, reveal its content progressively.

Animation order:

1. "CONTACT ME" eyebrow
2. "Let's build products together" heading
3. Supporting paragraph
4. Email card
5. Phone card
6. Telegram card
7. "Currently Open To"
8. Open-to tags

Use:

opacity: 0 → 1

and:

transform: translateY(16px–24px) → 0

Keep all motion subtle.

==================================================
ENTRANCE TIMING
==================================================

Suggested timing:

Eyebrow:
0–300ms

Heading:
70–420ms

Description:
150–500ms

Email:
230–600ms

Phone:
290–660ms

Telegram:
350–720ms

Currently Open To:
450–750ms

Tags:
500–820ms

Use a small stagger between contact cards.

Do not make the entrance sequence excessively slow.

The section should become readable immediately.

==================================================
CONTACT CARD STAGGER
==================================================

Cards should reveal in this order:

Email
→
Phone
→
Telegram

Each card:
- Fades in
- Moves upward approximately 20px
- Settles naturally into place

Use a short and refined stagger.

Do not make the cards fly in from different directions.

==================================================
CURRENTLY OPEN TO ANIMATION
==================================================

After the contact cards become visible:

"Currently Open To"

should fade in subtly.

Then the tags should appear with a small stagger:

Full-time Opportunities
→
Remote Opportunities
→
Projects
→
Design Systems
→
B2B Products

Do not delay this content excessively.

==================================================
SECTION EXIT
==================================================

The Contact section is near the bottom of the main content.

When the user reaches the footer:

- Let Contact naturally scroll away.
- Do not pin the Contact cards.
- Do not use parallax.
- Do not use dramatic scroll-based fade.
- Do not create a scroll-jacking effect.

A simple natural transition into the Footer is preferred.

==================================================
NO FORM
==================================================

DO NOT CREATE A CONTACT FORM.

Do not add:
- Name field
- Email field
- Message field
- Submit button
- Form validation
- Lead form
- Newsletter field

The contact methods are:

Email
Phone
Telegram

and these must remain the primary contact mechanism.

==================================================
NO EXTRA CTA
==================================================

Do not add an additional large "Contact Me" button.

The heading and contact cards are sufficient.

Do not add:
- Calendly button
- Book a call button
- Consultation button
- Schedule meeting CTA
- LinkedIn CTA
- WhatsApp CTA

Only use the contact methods already present in the current design.

==================================================
SHADCN/UI FOUNDATION
==================================================

Use shadcn/ui principles for:

- Card
- Badge
- Typography
- Borders
- Radius
- Focus states
- Links
- Interaction states
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

Do not make the Contact section look like a default shadcn documentation example.

Use the design system as the structural foundation while preserving the portfolio's custom editorial style.

==================================================
COLOR SYSTEM
==================================================

Primary text:
Near-black

Secondary text:
Neutral gray

Borders:
Very light neutral gray

Background:
White / near-white

Accent:
#2563EB

Icons:
#2563EB

Do not introduce any new brand colors.

Use the blue only where it provides meaningful emphasis.

==================================================
TYPOGRAPHY
==================================================

Use the default shadcn/ui font stack.

Do not import another font.

Hierarchy:

Eyebrow:
Very small / uppercase

Heading:
Large / bold

Description:
Small / regular

Card title:
Medium / semibold

Contact value:
Small / medium

Supporting description:
Small / muted

Action:
Small / muted but interactive

Subsection heading:
Medium / semibold

Open-to tags:
Small

Keep typography consistent with all previous sections.

==================================================
DESKTOP LAYOUT
==================================================

Desktop should closely resemble the reference screenshot.

Structure:

CONTACT ME

Let's build products together

Supporting description

[ Email ] [ Phone ] [ Telegram ]

Currently Open To

[ Full-time Opportunities ] [ Remote Opportunities ] [ Projects ] [ Design Systems ] [ B2B Products ]

Use three equal-width contact cards.

Keep a consistent gap between them.

Keep the contact card row aligned with the rest of the page.

==================================================
TABLET LAYOUT
==================================================

On tablet:

- Maintain three columns if sufficient width exists.
- Reduce card padding slightly.
- Reduce horizontal gaps proportionally.
- Keep contact information readable.

If the viewport becomes too narrow:
- Transition to a two-column layout first.
- Move the remaining card to the next row.
- Preserve visual balance.

Do not make cards too narrow.

==================================================
MOBILE LAYOUT
==================================================

On mobile:

Use a single-column layout for contact cards.

Order:

Email
↓
Phone
↓
Telegram

Each card:
- Full width
- Comfortable padding
- Clear hierarchy
- Large enough tap target
- No cramped content

The "Currently Open To" tags should wrap naturally into multiple rows.

Do not use:
- Horizontal scrolling
- Carousels
- Accordion
- Hidden contact information

All contact methods must remain visible.

==================================================
MOBILE INTERACTION
==================================================

On touch devices:
- Do not rely on hover.
- Use tap-friendly card areas.
- Keep cards visually static unless focused.
- Reduce motion intensity.
- Preserve clear action affordances.

==================================================
ACCESSIBILITY
==================================================

Ensure:

- Semantic heading hierarchy
- Accessible links
- Keyboard navigation
- Visible focus states
- Sufficient color contrast
- Proper aria-labels where necessary
- Screen-reader-friendly contact information
- prefers-reduced-motion support

Email should use a valid mailto link.

Phone should use a valid tel link.

Telegram should use the correct external Telegram destination.

When reduced motion is enabled:
- Remove translation-based entrance animations.
- Remove hover movement.
- Keep content immediately readable.
- Use minimal opacity transitions or none.

==================================================
PERFORMANCE
==================================================

Use lightweight animations.

Prefer:
- opacity
- transform

Avoid:
- Continuous scroll calculations
- Heavy JavaScript animation
- Layout animations
- Unnecessary DOM complexity

Use viewport-based animation triggers.

==================================================
STICKY NAVIGATION
==================================================

The existing site navigation should continue working.

When Contact is active:
- "Contact" should receive subtle active-state emphasis.
- Use #2563EB carefully.
- Do not change the navigation structure.

On scroll:
- Navigation remains sticky.
- Use a translucent white background.
- Apply a subtle backdrop blur.
- Add an extremely light border.

Suggested behavior:

background:
rgba(255,255,255,0.75–0.9)

backdrop-filter:
blur(10px–16px)

Do not create heavy glassmorphism.

==================================================
SMOOTH ANCHOR SCROLLING
==================================================

Clicking "Contact" in the navigation should smoothly scroll to this section.

The scroll should feel natural.

Do not use scroll-jacking.

Do not make the scroll excessively slow.

==================================================
RELATIONSHIP TO FOOTER
==================================================

The Contact section should naturally transition into the Footer.

After:

Currently Open To
+ tags

leave a generous but controlled amount of whitespace before the Footer.

Do not make the footer visually compete with the Contact section.

The Contact section should feel like the final major content section.

The Footer should feel like a quiet ending.

==================================================
VISUAL PRIORITY
==================================================

The hierarchy should be:

1. Let's build products together
2. Supporting description
3. Contact methods
4. Currently Open To
5. Open-to tags

The contact information should be immediately scannable.

Do not let decorative UI compete with the actual contact details.

==================================================
FINAL EXPERIENCE
==================================================

The complete experience should feel like:

Process ends
↓
CONTACT ME eyebrow appears
↓
Let's build products together reveals
↓
Supporting description appears
↓
Email / Phone / Telegram cards reveal progressively
↓
User can hover and interact with contact cards
↓
Currently Open To appears
↓
Open-to tags reveal
↓
Natural whitespace
↓
Footer begins

The motion language should be:

Subtle entrance
→
Natural scrolling
→
Refined hover
→
Natural transition to Footer

There must be NO PARALLAX.

==================================================
FINAL QUALITY BAR
==================================================

The final Contact section must be:

- Minimal
- Spacious
- Premium
- Professional
- Editorial
- Friendly but confident
- Highly scannable
- Responsive
- Accessible
- shadcn/ui-based
- Consistent with the rest of the portfolio
- Faithful to the attached screenshot

Most importantly:

DO NOT CHANGE THE EXISTING CONTENT.

DO NOT CREATE A CONTACT FORM.

DO NOT ADD EXTRA CONTACT METHODS.

DO NOT ADD NEW COPY.

DO NOT CHANGE THE ICON CONCEPTS.

DO NOT INTRODUCE PARALLAX.

DO NOT ADD UNNECESSARY DECORATION.

Use #2563EB as the controlled accent.

Use subtle entrance animations, refined hover states, accessible interactions, and responsive behavior.

Reproduce the current Contact section as faithfully as possible while turning it into a polished, responsive, interactive web experience.