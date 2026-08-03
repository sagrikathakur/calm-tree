import React, { useState, useEffect } from 'react';
import { heroSlides } from '../assets/frontend_assets/assets';

const Hero = () => {
  // 1. We use the heroSlides array imported from assets.js
  const slides = heroSlides;

  // 2. React State to store the current slide number (starts at 0)
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3. Function to go to the PREVIOUS slide
  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1); // loop back to the last slide
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // 4. Function to go to the NEXT slide
  const nextSlide = () => {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0); // loop back to the first slide
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // 5. Automatically switch slides every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    // Clean up timer on slide change or unmount
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="relative w-full h-[450px] sm:h-[520px] md:h-[600px] overflow-hidden bg-emerald-950">
      {/* Active Slide Image (Cover) */}
      <img
        src={slides[currentIndex].image}
        alt={slides[currentIndex].title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-in-out"
      />

      {/* Dark Overlay for better text readability */}
      <div className="relative z-10 w-full h-full bg-gradient-to-r from-emerald-950/90 via-emerald-950/65 to-transparent flex items-center">
        
        {/* Text Content aligned to layout */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16">
          <div className="max-w-xl text-white space-y-4">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-sm">
              {slides[currentIndex].title}
            </h1>

            {/* Small Description */}
            <p className="text-sm sm:text-base md:text-lg text-emerald-100/90 leading-relaxed font-normal">
              {slides[currentIndex].subtitle}
            </p>

            {/* Button */}
            <div className="pt-2">
              <a
                href={slides[currentIndex].btnLink}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm sm:text-base px-6 py-3 rounded-xl shadow-md transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                {slides[currentIndex].btnText} &rarr;
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Previous Arrow Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 sm:left-6 -translate-y-1/2 bg-white/80 hover:bg-white text-emerald-900 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md backdrop-blur-xs transition-all duration-200 hover:scale-110 cursor-pointer text-xl font-bold z-20"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>

      {/* Next Arrow Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 sm:right-6 -translate-y-1/2 bg-white/80 hover:bg-white text-emerald-900 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md backdrop-blur-xs transition-all duration-200 hover:scale-110 cursor-pointer text-xl font-bold z-20"
        aria-label="Next Slide"
      >
        &#10095;
      </button>

      {/* Bottom Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === index
                ? 'w-8 bg-white'
                : 'w-2.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;