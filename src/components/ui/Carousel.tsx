"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
  // Get carousel images from the public folder
  const carouselImages = [
    "/carousel/lapi3.jpg",
    "/carousel/lapi9.jpg",
    "/carousel/phones11.jpg",
    "/carousel/phones13.jpg",
    "/carousel/phones14.jpg",
    "/carousel/phones17.jpg",
    "/carousel/speakers2.jpg",
    "/carousel/speakers3.jpg",
    "/carousel/speakers6.jpg",
    "/carousel/watch4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
      {" "}
      {/* Screen height minus nav height */}
      <div className="relative w-full h-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex
                ? "opacity-100 z-10 scale-100"
                : "opacity-0 z-0 scale-[1.02]"
            }`}
          >
            <Image
              src={image}
              alt={`Carousel slide ${index + 1}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
        ))}
      </div>
      {/* Carousel controls */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:shadow-lg"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:shadow-lg"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      {/* Carousel indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-15 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "bg-white w-8 h-2.5 backdrop-blur-sm shadow-lg"
                : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      {/* Content overlay at top */}
      <div className="absolute top-1/4 left-0 right-0 z-10 p-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Discover Electronics in 3D</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Experience Kenya's premier electronics shopping with immersive 3D visualization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Shop Latest Tech
            </a>
            <a
              href="/about"
              className="inline-block bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg border border-white/30 transition duration-300"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
