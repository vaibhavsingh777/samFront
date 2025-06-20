import React from "react";
import About from "../components/about";
import CitiesBanners from "../components/citybanner";
import Testimonials from "./testimonials";
import FAQs from "./FAQs";

const HomePage: React.FC = () => (
  <div>
    <div id="about">
      <About />
    </div>
    <div id="cities">
      <CitiesBanners />
    </div>
    <div id="testimonials">
      <Testimonials />
    </div>
    <div id="faqs">
      <FAQs />
    </div>
    <div id="contacts"></div>
  </div>
);

export default HomePage;
