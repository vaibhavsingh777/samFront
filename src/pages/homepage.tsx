import React from "react";
import About from "../components/about";
import CitiesBanners from "../components/citybanner";
import Testimonials from "./testimonials";
import FAQs from "./FAQs";
import { Carousel } from "./Carousel";
import downloadImg from "../assets/sarc.png";

const carouselItems = [
  <img src={downloadImg} alt="Slide 1" className="w-full h-full object-cover rounded-md" />,
  <img src={downloadImg} alt="Slide 2" className="w-full h-full object-cover rounded-md" />,
  <img src={downloadImg} alt="Slide 3" className="w-full h-full object-cover rounded-md" />,
  <img src={downloadImg} alt="Slide 4" className="w-full h-full object-cover rounded-md" />,
  <img src={downloadImg} alt="Slide 5" className="w-full h-full object-cover rounded-md" />,
  <img src={downloadImg} alt="Slide 6" className="w-full h-full object-cover rounded-md" />,
  <img src={downloadImg} alt="Slide 7" className="w-full h-full object-cover rounded-md" />,

];


const HomePage: React.FC = () => (
  <div>
    <div id="carousel">
      <Carousel items={carouselItems} autoPlay interval={4000} />
    </div>
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
