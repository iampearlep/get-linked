import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Rules from "./components/Rules"
import Attributes from "./components/Attributes"
import Faq from "./components/Faq"
import Timeline from "./components/Timeline"
export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Rules />
      <Attributes />
      <Faq/>
      <Timeline />
    </main>
  )
}
