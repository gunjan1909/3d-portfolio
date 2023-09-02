//MAIN APP COMPONENT

import { BrowserRouter } from "react-router-dom";
//import { arrow } from "./assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Footer,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {/* Navbar */}
          <Navbar />
          {/* Main hero section with head titles and pc model */}
          <Hero />
        </div>
        {/* About me component */}
        <About />
        {/* Experience component */}
        <Experience />
        <section className="relative z-0">
          {/* My technologies with the moving star background */}
          <Tech />
          <StarsCanvas />
        </section>
        {/* My works */}
        <Works />
        {/* Feedbacks */}
        <Feedbacks />
        <section className="relative z-0">
          {/* Contact me component with moving star background */}
          <Contact />
          <StarsCanvas />
        </section>
        {/* scroll to top button */}
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <div className="relative z-0">
            <button
              className="fixed bottom-4 right-4 bg-[#ff5454] text-white rounded-full p-2 shakeit"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <FontAwesomeIcon
                icon={faArrowUp}
                beat
                size="lg"
                style={{ color: "black" }}
              />
            </button>
          </div>
        </div>
        {/* Footer section */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
