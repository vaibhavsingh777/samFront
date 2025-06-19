import React from "react";
import About from "../components/about";
import CitiesBanners from "../components/citybanner";

const HomePage: React.FC = () => (
  <div>
    {/* About SAM Section */}
    <About />
    {/* City Banners Section */}
    <CitiesBanners />
  </div>
);

export default HomePage;
