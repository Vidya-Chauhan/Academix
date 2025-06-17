import { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "https://www.nituk.ac.in/frontEnd/uk/cse/cse_home.png",
    "https://nituk.ac.in/frontEnd/uk/sa/sport.png",
    "https://nitkkr.ac.in/wp-content/uploads/2023/12/20201215_103621-1-1536x1152.jpg",
    "https://nituk.ac.in/frontEnd/uk/images/alumni/AL_4(1).png",
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
    <div className="w-full mt-20 px-4">
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl border-4 border-[#C0D9E6] shadow-[0_0_30px_#C0D9E6aa] transition-all duration-700 ease-in-out">
        <img
          src={images[currentIndex]}
          alt="Slider"
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
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
