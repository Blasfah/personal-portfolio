import PageSection from "./components/PageSection"
import NavBar from "./components/NavBar"
import ScrollDown from "./components/ScrollDown"
import Hero from "./components/Hero"
import SelectedWorks from "./components/SelectedWorks"
import Footer from "./components/Footer"
import AboutMe from "./components/AboutMe"

export default function Home() {
  return (
    <>
      <PageSection>
        <header className="h-[100dvh] py-8 grid grid-rows-[auto_1fr_auto]">
          <NavBar />
          <Hero />
          <ScrollDown />
        </header>
        <SelectedWorks />
        <AboutMe />
      </PageSection>
      <Footer />
    </>
  )
}
