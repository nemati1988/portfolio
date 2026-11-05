import Hero from '@/components/Hero'
import SelectedWork from '@/components/SelectedWork'
import Experience from '@/components/Experience'
import Capabilities from '@/components/Capabilities'
import Process from '@/components/Process'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main data-figma-id="main">
      <Hero />
      <SelectedWork />
      <Experience />
      <Capabilities />
      <Process />
      <Contact />
    </main>
  )
}
