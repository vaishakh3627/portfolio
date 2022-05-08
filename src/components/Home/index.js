import React from "react";

import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Footer from "./components/Footer";

import "./style.scss";

const HomePage = () => {
  return (
    <div className="main">
      <Banner />
      <About />
      <Skills />
      <Resume />
      <Services />
      <Footer />
    </div>
  );
};
export default HomePage;
