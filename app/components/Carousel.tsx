"use client";

import { useState, useEffect } from "react";

export default function Carousel() {
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
    {
      quote:
        "Their attention to detail is fantastic. I love my new garden layout!",
      name: "Emily Johnson",
    },
    {
      quote:
        "Their attention to detail is fantastic. I love my new garden layout!",
      name: "Emily Johnson",
    },
    {
      quote:
        "Their attention to detail is fantastic. I love my new garden layout!",
      name: "Emily Johnson",
    },
    {
      quote:
        "Their attention to detail is fantastic. I love my new garden layout!",
      name: "Emily Johnson",
    },
    {
      quote:
        "Their attention to detail is fantastic. I love my new garden layout!",
      name: "Emily Johnson",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setIsFading(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
        What Our Customers Say
      </h2>
      <div className="relative max-w-4xl mx-auto">
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="bg-white border-t-4 border-green-700 rounded-lg shadow-lg p-8 mx-4 md:mx-0">
            <p className="text-gray-600 italic text-lg md:text-xl mb-6 leading-relaxed">
              &quot;{testimonials[activeIndex].quote}&quot;
            </p>
            <h3 className="text-green-700 font-bold text-right text-lg">
              - {testimonials[activeIndex].name}
            </h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-green-700 scale-125 shadow-md"
                : "bg-gray-300 hover:bg-green-400"
            }`}
            onClick={() => {
              setActiveIndex(index);
              setIsFading(true);
              setTimeout(() => setIsFading(false), 500);
            }}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
