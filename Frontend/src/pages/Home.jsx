import React from "react";
import ImageSlider from "../compo/ImageSlider";
import Navbar from "../compo/Navbar";
import Footer from "../compo/Footer";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-[#F5EFE8]">
      {/* Navbar */}
      <Navbar />

      {/* Slider with full flexibility */}
      <div className="flex-grow p-4">
        <ImageSlider />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
