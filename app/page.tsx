import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Rules from "./components/Rules"
import Attributes from "./components/Attributes"
import AccordionBox from "./components/AccordionBox"
export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Rules />
      <Attributes />
      <AccordionBox />
    </main>
  )
}
