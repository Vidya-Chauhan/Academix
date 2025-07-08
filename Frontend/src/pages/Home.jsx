
import ImageSlider from "../compo/ImageSlider";
import Navbar from "../compo/Navbar";
import Footer from "../compo/Footer";
import SectionCard from "../compo/SectionCard";
import { FaBook, FaStore, FaStickyNote, FaCalendarAlt, FaSearch, FaPenNib } from "react-icons/fa";


// ✅ Import the Section Components
import Library from "../Sections/Library";
import BookMarket from "../Sections/BookMarket";
import Notes from "../Sections/Notes";
import Calendar from "../Sections/Calendar";
import LostAndFound from "../Sections/LostAndFound";
import StudentBlog from "../Sections/StudentBlog";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-[#F5EFE8]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Slider */}
      <div className="flex justify-center items-center bg-[#F5EFE8] px-4 sm:px-10 py-6">
        <div className="w-full max-w-6xl aspect-[16/7] rounded-lg overflow-hidden shadow-md">
          <ImageSlider />
        </div>
      </div>

      {/* Section Cards */}

   <div className="bg-[#F5EFE8] px-4 sm:px-10 py-12">
  <h2 className="text-3xl font-bold text-center mb-8 text-[#2F4156]">Explore Modules</h2>

  {/* First Row: 3 Cards */}
  <div className="flex flex-wrap justify-center gap-20 mb-6">
    <SectionCard icon={<FaBook />} label="Library" path="/library" />
    <SectionCard icon={<FaStore />} label="Campus-Mart" path="/BookMarket" />
    <SectionCard icon={<FaStickyNote />} label="Notes" path="/notes" />
  </div>

  {/* Second Row: 2 Cards Centered */}
  <div className="flex justify-center gap-20">
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
