import Hero from "../components/Hero";
import Status from "../components/Status";
import Marquees from "../components/StatesSection";
import About from "../components/About";
import WhyAttend from "../components/WhyAttend";
import BookStand from "../components/BookStand";
import OurSpeakers from "../components/OurSpeakers";
import Sectors from "../components/Sectors";
import PartnersExhibitorsMedia from "../components/SectionComingSoon";
import CardShow from "../components/CardShow";

export default function Home() {
  return (
    <>
      <CardShow />
      <Hero />
      <Status />
      <Marquees />
      <About />
      <WhyAttend />
      <BookStand />
      {/* <OurSpeakers /> */}
      <Sectors />
      <PartnersExhibitorsMedia />
    </>
  );
}
