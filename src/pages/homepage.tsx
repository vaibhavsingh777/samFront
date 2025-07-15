import React from "react";
import About from "../components/about";
import CitiesWithMapLayout from "../components/CitiesWithMapLayout";
import Testimonials from "./testimonials";
import FAQs from "./FAQs";
import Carousel from "../components/carousel";

const HomePage: React.FC = () => (
  <div style={{ margin: 0, padding: 0 }}>
    <div id="about">
      <About />
    </div>
    <div id="cities">
      <CitiesWithMapLayout />
    </div>
    <div id="testimonials">
      <Testimonials />
    </div>
    <Carousel />
    <div id="faqs">
      <FAQs />
    </div>

    <div id="contacts"></div>
  </div>
);

export default HomePage;
