import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import i18n from "./i18n"; // Make sure this path is correct

import Layout from "./Layout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Visitor from "./pages/Visitor";
import Conference from "./pages/Conference";
import Sponsors from "./pages/Sponsors";
import Media from "./pages/Media";
import ContactUs from "./pages/ContactUs";
import Sponsoring from "./pages/Sponsoring";

// Exhibitor Subpages
import AboutEvent from "./pages/exhibitors/AboutEvent";
import WhyExhibit from "./pages/exhibitors/WhyExhibit";
import Registration from "./pages/exhibitors/Registration";
import FloorPlan from "./pages/exhibitors/FloorPlan";
// import ExhibitorZone from "./pages/exhibitors/FloorPlan";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("i18nextLng")) {
      i18n.changeLanguage("en");
      localStorage.setItem("i18nextLng", "en");
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="visitor/why-visit" element={<Visitor />} />
          <Route path="conference" element={<Conference />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="media" element={<Media />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="sponsoring" element={<Sponsoring />} />

          {/* Exhibitors */}
          <Route path="exhibitors/about-event" element={<AboutEvent />} />
          <Route path="exhibitors/why-exhibit" element={<WhyExhibit />} />
          <Route path="exhibitors/registration" element={<Registration />} />
          <Route path="exhibitors/floor-plan" element={<FloorPlan />} />
          {/* <Route path="exhibitors/exhibitor-zone" element={<ExhibitorZone />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
