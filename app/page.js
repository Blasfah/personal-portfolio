import PageSection from "./components/PageSection"
import NavBar from "./components/NavBar"
import ScrollDown from "./components/ScrollDown"
import Hero from "./components/Hero"
import SelectedWorks from "./components/SelectedWorks"

export default function Home() {
  return (
    <PageSection>
      <header className="h-[100dvh] py-8 grid grid-rows-[auto_1fr_auto]">
        <NavBar animate={true} />
        <Hero />
        <ScrollDown />
      </header>
      <SelectedWorks />
    </PageSection>
  )
}
