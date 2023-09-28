import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Rules from "./components/Rules"
import Attributes from "./components/Attributes"
import Faq from "./components/Faq"
export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Rules />
      <Attributes />
      <Faq/>
    </main>
  )
}
