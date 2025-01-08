"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    quote:
      "The team transformed my overgrown garden into a stunning space. Highly recommend!",
    name: "Jane Doe",
  },
  {
    quote:
      "Professional and reliable service. My lawn has never looked better!",
    name: "John Smith",
  },
  {
    quote:
      "Their attention to detail is fantastic. I love my new garden layout!",
    name: "Emily Johnson",
  },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <section
      ref={ref}
      role="region"
      aria-live="polite"
      aria-label="Customer Testimonials"
      className={`py-16 bg-gray-50 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-700`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-800">
        What Our Customers Say
      </h2>
      <div className="relative overflow-hidden max-w-4xl mx-auto">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 p-4"
              style={{ minWidth: "100%" }}
            >
              <div className="bg-white border-t-4 border-green-700 rounded-lg shadow-lg p-8">
                <p className="text-gray-600 italic text-lg md:text-xl mb-6 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <h3 className="text-green-700 font-bold text-right text-lg">
                  - {testimonial.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            aria-pressed={index === activeIndex}
            className={`w-4 h-4 rounded-full transition-transform duration-300 ${
              index === activeIndex
                ? "bg-green-700 scale-150 shadow-md"
                : "bg-gray-300 hover:bg-green-400"
            }`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}
