import { BannerSection } from "./components/BannerSection"
import { Header } from "./components/Header"
import { AboutMeSection } from "./components/AboutMeSection"
import './globalStyles/reset.css'
import { TechSection } from "./components/TechSection"
import { ProjectsSection } from "./components/ProjectsSection"
import { Footer } from "./components/Footer"
function App() {

  return (
    <>
      <Header />
      <BannerSection />
      <AboutMeSection />
      <TechSection />
      <ProjectsSection />
      <Footer />
    </>
  )
}

export default App
