import NavBar from './headers/NavBar'
import Footer from './Footer'
import HeroSection from './landing-page/HeroSection'
import FeaturesSection from './landing-page/FeaturesSection'
import CTASection from './landing-page/CTASection'

const LandingPage = () => {
  return (
    <>
      <NavBar />

      <main className="flex flex-1 flex-col items-center">
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>

      <Footer />
    </>
  )
}

export default LandingPage
