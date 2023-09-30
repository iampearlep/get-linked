import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Rules from "./components/Rules"
import Attributes from "./components/Attributes"
import Faq from "./components/Faq"
import Timeline from "./components/Timeline"
import Prices from "./components/Prices"
import Patners from "./components/Patners"
export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Rules />
      <Attributes />
      <Faq/>
      <Timeline />
      <Prices /> 
      <Patners />
    </main>
  )
}
