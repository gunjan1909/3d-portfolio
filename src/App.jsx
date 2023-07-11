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
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <div className="relative z-0">
          <Tech />
          <StarsCanvas />
        </div>
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        {/* scroll to top button */}
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <div className="relative z-0">
            <button
              className="fixed bottom-4 right-4 bg-[#ff5454] text-white rounded-full p-2 shakeit"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {/* <img style={{ height: "25px" }} src={arrow} alt="UP" /> */}
              <FontAwesomeIcon
                icon={faArrowUp}
                beat
                size="lg"
                style={{ color: "black" }}
              />
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
