import React from "react";
import About from "../components/about";
import CitiesBanners from "../components/citybanner";
import Testimonials from "./testimonials";

const HomePage: React.FC = () => (
  <div>
    {/* About SAM Section */}
    <div id="about">
      <About />
    </div>
    {/* City Banners Section */}
    <div id="cities">
      <CitiesBanners />
    </div>
    <div>
      <Testimonials />
    </div>
  </div>
);

export default HomePage;
