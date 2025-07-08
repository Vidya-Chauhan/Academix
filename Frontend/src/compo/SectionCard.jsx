import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBook, FaStore, FaStickyNote, FaCalendarAlt, FaSearch, FaPenNib } from "react-icons/fa";


const SectionCard = ({ icon, label, path }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className="w-[180px] h-[200px] bg-white rounded-xl border border-[#C9D9E6]
      flex flex-col items-center justify-center cursor-pointer 
      text-[#2F4156] shadow-md transition-transform duration-300 
      hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:border-[#567C8D] hover:bg-gradient-to-b hover:from-[#ffffff] hover:to-[#99bacf]"
    >
      <div className="bg-[#C9D9E6] text-[#2F4156] rounded-full p-4 mb-4 shadow-sm">
        <div className="text-3xl">{icon}</div>
      </div>
      <p className="text-base font-semibold">{label}</p>
    </div>
  );
};


export default SectionCard;
