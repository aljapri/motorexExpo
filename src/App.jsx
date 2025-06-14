import About from "./components/About"
import Auth from "./components/Auth"
import BookStand from "./components/BookStand"
import CardShow from "./components/CardShow"
import CategorySlider from "./components/CategorySlider"
import FeaturedBrands from "./components/FeaturedBrands"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import OurSpeakers from "./components/OurSpeakers"
import PartnersExhibitorsMedia from "./components/SectionComingSoon"
import Sectors from "./components/Sectors"
import Marquees from "./components/StatesSection"
import Status from "./components/Status"
import Testimonials from "./components/Testimonials"
import WhatsAppButton from "./components/WhatsAppButton"
import WhyAttend from "./components/WhyAttend"

function App() {
  

  return (
    <>
      <div className="min-h-screen flex flex-col overflow-hidden" >
        <Header/>
        <CardShow/>
        <main className="flex-grow">
          <Hero/>
          {/* <FeaturedBrands/> */}
          <Status/>
          <Marquees/>
          <About/>
          <WhyAttend/>
          <BookStand/>
          {/* <Testimonials/> */}
          <OurSpeakers/>
          <Sectors/>
          <PartnersExhibitorsMedia/>
        </main>
        <Footer/>
        <Auth/>
        <WhatsAppButton /> {/* 👈 Add the WhatsApp Button here */}

      </div>
    </>
  )
}

export default App
