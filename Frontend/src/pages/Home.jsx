import ImageSlider from "../compo/ImageSlider";
import Navbar from "../compo/Navbar";
import Footer from "../compo/Footer";
import SectionCard from "../compo/SectionCard";
import {
  FaBook,
  FaStore,
  FaStickyNote,
  FaCalendarAlt,
  FaSearch,
} from "react-icons/fa";


const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-[#F5EFE8] overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Slider */}
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 py-6">
        <div className="w-full max-w-6xl rounded-lg overflow-hidden shadow-md">
          <ImageSlider />
        </div>
      </div>

      {/* Section Cards */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#2F4156]">
          Explore Modules
        </h2>

        {/* First Row: 3 Cards */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 mb-10">
          <SectionCard icon={<FaBook />} label="Library" path="/library" />
          <SectionCard icon={<FaStore />} label="Campus-Mart" path="/BookMarket" />
          <SectionCard icon={<FaStickyNote />} label="Notes" path="/notes" />
        </div>

        {/* Second Row: 2 Cards */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
          <SectionCard icon={<FaCalendarAlt />} label="Calendar" path="/calendar" />
          <SectionCard icon={<FaSearch />} label="Lost & Found" path="/lostfound" />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;




