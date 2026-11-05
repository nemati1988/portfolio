import { Reveal } from './shared'

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Understand the Problem',
    description:
      'Starting with the business context and user reality — gathering requirements, listening to stakeholders, and framing the real problem before proposing solutions.',
  },
  {
    number: '02',
    title: 'Explore & Define',
    description:
      'Mapping journeys, exploring directions, and defining scope. Turning ambiguity into a clear problem statement and a focused set of design opportunities.',
  },
  {
    number: '03',
    title: 'Design & Prototype',
    description:
      'Crafting flows, interfaces, and interactive prototypes grounded in a scalable design system, iterating quickly from low to high fidelity.',
  },
  {
    number: '04',
    title: 'Validate & Iterate',
    description:
      'Testing with real users, measuring against goals, and refining the design based on evidence rather than assumptions.',
  },
  {
    number: '05',
    title: 'Deliver & Improve',
    description:
      'Handing off with clear specs and close engineering collaboration, then monitoring outcomes to continuously improve the shipped product.',
  },
]

export default function Process() {
  return (
    <section data-figma-id="Process" id="process" className="mx-auto max-w-6xl px-6 py-20">
      {/* Header */}
      <div data-figma-id="process-header" className="w-full">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-muted-foreground/60 flex-none" />
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Process
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-1.5 text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-[-0.02em] text-foreground">
            My <span className="text-primary">Design</span> Process
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Every product is different, but my approach remains focused on
            understanding users, aligning business objectives, validating
            assumptions, and delivering scalable solutions. The process is
            flexible and iterative — adapting continuously based on research,
            collaboration, and feedback.
          </p>
        </Reveal>
      </div>

      {/* Steps */}
      <div data-figma-id="process-steps" className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {PROCESS_STEPS.map((step, i) => (
          <Reveal key={step.number} delay={250 + i * 70}>
            <article
              tabIndex={0}
              className="group h-full rounded-2xl border border-border bg-white dark:bg-zinc-900 p-6 transition-colors duration-300 hover:border-foreground/20 hover:bg-muted/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2"
            >
              <span className="block text-2xl font-semibold tracking-tight text-primary">
                {step.number}
              </span>
              <h3 className="mt-4 text-[15px] font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
