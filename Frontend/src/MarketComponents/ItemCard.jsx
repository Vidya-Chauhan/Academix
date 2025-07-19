import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";

const ItemCard = ({ item }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);
 const images = Array.isArray(item.images)
  ? item.images.map(img => img.startsWith("http") ? img : `http://localhost:5000${img}`)
  : item.images
    ? [`http://localhost:5000${item.images}`]
    : [];


  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(item.contactInfo);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-gradient-to-b from-[#80c6e3] to-[#ddd4c2] text-[#2F1D0E] rounded-3xl overflow-hidden shadow-xl w-full max-w-sm mx-auto hover:scale-[1.015] transition-all duration-300">
      
      {/* Image Section */}
      <div className="relative bg-[#fff9f3] h-52 flex justify-center items-center">
        <img
          src={images[currentImageIndex]}
          alt="item"
          className="object-contain h-full p-3"
        />
        {images.length > 1 && (
          <>
            <button onClick={handlePrev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 text-gray-700 px-2 py-1 rounded-full shadow">
              ‹
            </button>
            <button onClick={handleNext} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 text-gray-700 px-2 py-1 rounded-full shadow">
              ›
            </button>
          </>
        )}
      </div>

      {/* Content */}
      <div className="px-5 py-4 space-y-1">
        <h3 className="text-xl font-extrabold tracking-tight">{item.title}</h3>
        <span className="text-sm italic text-[#6b4e3d] bg-[#f0e6da] px-2 py-[2px] rounded-full inline-block w-fit mb-2">{item.category}</span>
        <p className="text-sm leading-tight mb-1">{item.description}</p>
        <p className="text-lg font-bold text-[#38220f]">₹ {item.price}</p>

        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-1 text-sm text-[#5A3E2B]">
            📞 {item.contactInfo}
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-[#a67c52] text-white hover:bg-[#8f6742] transition-all duration-300"
          >
            <FiCopy /> {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
