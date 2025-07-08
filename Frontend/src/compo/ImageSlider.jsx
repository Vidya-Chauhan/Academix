import { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "https://www.nituk.ac.in/frontEnd/uk/cse/cse_home.png",
    "https://nituk.ac.in/frontEnd/uk/sa/sport.png",
    "https://nitkkr.ac.in/wp-content/uploads/2023/12/20201215_103621-1-1536x1152.jpg",
    "https://nituk.ac.in/frontEnd/uk/images/alumni/AL_4(1).png",
    "https://nituk.ac.in/nituk/images/slider/farewell.jpg",
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="w-full flex justify-center items-center bg-[#F5EFE8] px-4 mt-20">
      <div className="w-full max-w-6xl aspect-[16/7] relative overflow-hidden rounded-xl border-4 border-[#C0D9E6] shadow-[0_0_30px_#C0D9E6aa]">
        <img
          src={images[currentIndex]}
          alt="Slider"
          className="w-full h-full object-contain transition-all duration-700 ease-in-out"
        />

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-[#2F4156] bg-opacity-70 hover:bg-opacity-90 text-[#C0D9E6] p-3 rounded-full shadow-lg transition hover:scale-110"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-[#2F4156] bg-opacity-70 hover:bg-opacity-90 text-[#C0D9E6] p-3 rounded-full shadow-lg transition hover:scale-110"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full border border-[#C0D9E6] ${
                currentIndex === index ? "bg-[#C0D9E6]" : "bg-[#F5EFE8]"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
