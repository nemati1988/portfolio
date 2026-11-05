GENERAL DESIGN DIRECTION
- Keep the entire section extremely minimal, clean, editorial, and premium.
- Use generous white space throughout the layout.
- Do not introduce unnecessary decorative elements, gradients, illustrations, patterns, blobs, glassmorphism, or visual noise.
- The design should feel like a high-end Product Designer portfolio, not a generic SaaS landing page.
- Use the shadcn/ui design system as the base design system for the website.
- Use shadcn/ui conventions for buttons, cards, borders, typography, spacing, interaction states, and accessibility.
- Use the default shadcn/ui font stack as the project font. Do not introduce a custom font.
- Primary accent / secondary brand color: #2563EB.
- Use #2563EB only for important emphasis, links, selected states, highlighted words, subtle icons, and primary actions.
- Use neutral black, dark gray, light gray, and white for the rest of the visual system.
- Keep borders extremely subtle and elegant.
- Use soft rounded corners consistent with shadcn/ui.
- Avoid excessive shadows. Prefer subtle borders and very soft elevation when necessary.
- The overall visual language should feel calm, sophisticated, precise, and highly intentional.

PAGE STRUCTURE / SCROLL BEHAVIOR
- This is NOT a static page where all content simply sits in place.
- The website should feel like a layered scrolling experience with subtle parallax behavior.
- The hero content should move naturally at different speeds while the page scrolls.
- The hero section itself must remain part of the normal page flow.
- Do not create a permanently fixed hero.
- As the user scrolls down, the hero content should gradually move upward and slightly fade out.
- At the same time, the next section should begin entering the viewport with its own entrance animation.
- The transition between Hero and the next section must feel cinematic, smooth, and premium.
- Avoid dramatic or distracting animations.
- Motion should feel like refined product interaction design rather than marketing-site animation overload.
- Use smooth easing curves and natural timing.
- Prefer transform + opacity animations instead of expensive layout animations.

HERO SECTION LAYOUT
- Use a centered max-width desktop container similar to the reference.
- The hero should occupy approximately 80–90vh on desktop while still remaining part of the normal document flow.
- Do not force the hero to exactly 100vh if that creates awkward spacing.
- Maintain generous top and bottom whitespace.
- Desktop layout should use a two-column composition.
- Left side: text, introduction, metadata, and CTAs.
- Right side: personal portrait image.
- The image should visually balance the text and occupy approximately 40–45% of the hero width.
- Keep the left content slightly narrower than the right image.
- The overall composition should remain visually close to the attached screenshot.

HERO CONTENT — DO NOT CHANGE THE COPY
Use the content below exactly as provided. Do not rewrite, shorten, paraphrase, reorder, or replace any wording.

Main heading:
"Hi, I am Amin"

Role:
"User Interface Designer"

Introduction paragraph:
"I am passionate about designing B2B products and I use every opportunity to expand my skills and expertise in this field."

Second paragraph:
"To achieve this goal, I have focused on building a strong portfolio, networking in the product design community, participating in specialized courses and workshops, offering design-related events, and updating my knowledge."

Do not modify this content.

HEADING DESIGN
- Make "Hi, I am" dark/near-black.
- Highlight the word "Amin" using #2563EB.
- The heading should be large, bold, confident, and highly readable.
- Typography should closely resemble the reference screenshot.
- Use a strong but elegant heading scale, approximately 56–64px on desktop depending on the generated layout.
- Use tight but natural letter spacing.
- Avoid overly futuristic or experimental typography.
- The heading should visually dominate the hero text.
- On smaller screens reduce the size intelligently while preserving hierarchy.
- Use a subtle reveal animation for the heading when the page loads.

ROLE
- Place "User Interface Designer" directly under the heading.
- Use a dark neutral color.
- Make it clearly secondary to the main heading but still prominent.
- Use medium/semibold weight.
- Keep the spacing between heading and role compact and intentional.

BODY COPY
- Use the exact provided paragraphs.
- Use a readable neutral gray for paragraph text.
- Keep the text width constrained so the lines do not become too long.
- Use comfortable line-height.
- Preserve the editorial feeling of the reference screenshot.
- Do not justify the text.
- Do not add any additional descriptive text.

METADATA INFORMATION BLOCK
Below the descriptive paragraphs, create a compact horizontal information card exactly in the style of the reference.

The card should contain three equal information columns:

1. CURRENT COMPANY
Value:
"Golrang System"

2. SPECIALIZATION
Value:
"UI/UX, Design System, Figma, Prototyping"

3. LOCATION
Value:
"Mashhad, Iran"

Important:
- Keep the information exactly as written.
- Do not invent additional metadata.
- Use very subtle borders.
- Use a white background.
- Use a small border radius.
- Keep the card visually lightweight.
- The labels should be small uppercase or compact metadata typography.
- Use muted neutral gray for labels.
- Use slightly darker text for values.
- Add very subtle separators between columns.
- Do not use heavy shadows.

METADATA MICRO-INTERACTION
- Each metadata column may have a very subtle hover interaction.
- On hover, slightly increase contrast and apply a very small upward movement such as translateY(-2px).
- Do not make the entire card bounce or scale dramatically.
- Use a fast and subtle transition.
- Maintain accessibility and pointer feedback.

PRIMARY CTA
Create the primary button:
"View Selected Work"

- This should be the strongest CTA.
- Use #2563EB as the button background.
- Use white text.
- Follow shadcn/ui button conventions.
- Use a compact but premium size.
- Include the same arrow / directional icon style visible in the reference design.
- Do not replace it with a different icon.
- On hover, use a slightly darker blue state or subtle elevation.
- Add a tiny translateY(-1px) interaction.
- Include a smooth icon movement of only a few pixels on hover.
- On click, smoothly scroll to the Selected Work section.
- The scroll should feel smooth and slightly eased.
- Do not create an abrupt jump.

SECONDARY CTA
Create the secondary button:
"Get in touch"

- Keep it visually quieter than the primary CTA.
- Use white or transparent background.
- Use a subtle border.
- Use dark text.
- Follow shadcn/ui secondary/outline button behavior.
- Preserve the same icon style visible in the reference.
- On hover, subtly increase border contrast and slightly change background tone.
- Do not make it visually compete with the primary CTA.
- On click, smoothly scroll to the Contact section.

BUTTON GROUP
- Place both buttons horizontally next to each other on desktop.
- Keep a small consistent gap between them.
- Align them to the left content column.
- On mobile, stack them vertically or allow them to wrap naturally while preserving spacing.
- Ensure both remain comfortably tappable.

PORTRAIT IMAGE
Use my attached portrait image from the reference design as the hero image.

Important:
- Do not replace the portrait with an unrelated stock image.
- Preserve the identity, overall appearance, and visual character of the provided portrait.
- Use the same portrait composition as the reference.
- Crop the image elegantly within a rounded rectangle.
- Use a border radius consistent with the reference screenshot.
- Do not apply unnecessary filters or dramatic color grading.
- Keep the image natural.
- The image should feel integrated into the overall minimal composition.

IMAGE INTERACTION
- Give the portrait a very subtle hover interaction.
- On hover, allow an extremely small scale increase such as 1.015–1.02.
- Optionally create a subtle parallax movement based on cursor position, but keep it extremely restrained.
- Do not create a 3D tilt effect.
- Do not use dramatic image transformations.
- On page entry, the image should fade in and move upward very slightly.
- Use smooth easing.

HERO ENTRANCE ANIMATION
When the page initially loads:

1. The left content container should fade in from opacity 0 to 1.
2. The heading should move upward slightly while fading in.
3. The role should appear shortly after the heading.
4. The body paragraphs should appear with a small stagger.
5. The metadata card should fade and slide upward slightly.
6. The CTA buttons should appear last.
7. The portrait should fade in independently with a very subtle upward movement.
8. Do not animate everything simultaneously.
9. Use staggered timing so the content feels intentionally revealed.
10. Avoid excessive animation duration.

Suggested motion sequence:
- Heading: 0ms–500ms
- Role: 100ms–500ms
- Paragraphs: 180ms–650ms
- Metadata: 300ms–700ms
- CTA group: 400ms–800ms
- Image: 150ms–700ms

Use smooth professional easing, such as an ease-out curve.

PARALLAX BEHAVIOR
Implement subtle scroll-based parallax:

- Heading and primary text move slightly slower than the page.
- Metadata and CTA move at a slightly different speed.
- Portrait moves slightly slower than the overall scroll position.
- Do not overdo the effect.
- The goal is depth, not distraction.
- As the user scrolls downward, the hero gradually moves upward.
- The hero should also gradually reduce opacity toward the end of its scroll range.
- The image can move a few additional pixels vertically to create depth.
- All motion must remain smooth at normal scrolling speeds.

HERO EXIT TRANSITION
As the user approaches the end of the Hero section:

- The hero content should gradually fade out.
- The portrait should slightly move upward and fade.
- The text should slightly shift upward.
- Do not abruptly hide the content.
- Maintain visual continuity.
- The next section should begin appearing before the Hero completely disappears.
- The transition should feel like one continuous visual composition.
- Use overlapping motion and opacity rather than a hard section boundary.
- Do not pin the entire Hero indefinitely.

NEXT SECTION ENTRY PREVIEW
Although only the Hero section is being implemented now, prepare the Hero transition for the next section:

- The next section is "Featured Projects" / "Selected Work".
- As the Hero exits, the next section should begin appearing from below.
- Its section label should fade upward first.
- Its heading should follow.
- Project visuals should begin entering afterward.
- The transition should be seamless.
- Do not add placeholder content that changes the actual next section design.
- Only make sure the Hero's exit behavior works properly with the upcoming section.

TOP NAVIGATION BEHAVIOR
The navigation shown in the reference must remain visually minimal.

- Keep the navigation lightweight and unobtrusive.
- At the top of the page, it should have a clean transparent / white appearance.
- When the user scrolls, transform it into a subtle sticky navigation bar.
- Add a very light background blur.
- Use backdrop-filter blur.
- Use an almost transparent white background.
- Add an extremely subtle bottom border.
- Do not create a strong glassmorphism effect.
- Keep the same typography and spacing as the reference.
- Navigation links should have subtle hover feedback.
- On hover, slightly change color toward #2563EB.
- Active/current section can use subtle accent treatment.
- The Resume button should remain visually clear.
- Do not make the navigation oversized.
- It should feel like a refined floating layer over the content.

RESPONSIVE BEHAVIOR
Desktop:
- Two-column hero.
- Text on the left.
- Portrait on the right.
- Generous whitespace.
- Metadata in a horizontal row.
- CTA buttons horizontally aligned.

Tablet:
- Preserve two-column layout if there is enough space.
- Reduce typography and spacing proportionally.
- Keep image visually balanced.

Mobile:
- Switch to a single-column layout.
- Text first, portrait second.
- Center or left-align content based on the strongest responsive interpretation of the reference.
- Preserve the same hierarchy.
- Keep comfortable horizontal padding.
- Metadata card should stack vertically.
- CTA buttons should become full-width or stacked when necessary.
- Reduce motion intensity on mobile.
- Do not remove the important content.
- Do not create horizontal scrolling.

ACCESSIBILITY
- Maintain strong color contrast.
- Do not rely only on color to communicate interactive states.
- Buttons must have clear focus states.
- Navigation links must remain keyboard accessible.
- Respect prefers-reduced-motion.
- If reduced motion is enabled, greatly reduce or disable parallax and entrance animations while keeping the layout intact.
- All interactive elements should have meaningful accessible labels.

VISUAL QUALITY
- Use a refined 8px-style spacing logic where appropriate.
- Keep alignment extremely precise.
- Maintain consistent left and right page margins.
- Use a max-width container similar to a premium editorial portfolio.
- Avoid excessive UI density.
- Preserve generous breathing room.
- Keep all UI elements visually related to the shadcn/ui aesthetic.
- Do not add random decorative components simply to fill empty space.
- The empty space is intentional and should remain.

IMPORTANT CONTENT RULE
Do not rewrite, rename, replace, improve, shorten, paraphrase, or invent any of the provided content.
Recreate the Hero section using the exact content and structure from my screenshot.
Do not change the terminology.
Do not add extra sections inside the Hero.
Do not add additional marketing copy.
Do not replace the portrait.
Do not replace or reinterpret the icons used in the reference.
Use the same icon concepts and keep them visually consistent with the reference.

FINAL RESULT
The final Hero section should feel like a premium, minimalist personal portfolio for an experienced digital product designer:
- minimal
- spacious
- highly polished
- editorial
- professional
- interactive
- subtle motion
- elegant parallax
- refined shadcn/ui implementation
- strong typography hierarchy
- blue accent #2563EB
- smooth scroll transitions
- sophisticated hover states
- seamless entrance and exit animations
- responsive across desktop, tablet, and mobile

Prioritize visual fidelity to the attached screenshot over introducing new creative directions.