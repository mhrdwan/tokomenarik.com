'use client'
import React, { useState, useEffect } from "react";
import { Card } from "./ui";

const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials?.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testi, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Card className="p-6 mx-4">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        src={testi.image}
                        alt={testi.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
                      />
                      <img
                        src={testi.productImage}
                        alt="Product"
                        className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-1">
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">
                          {testi.name}
                        </h3>
                        <p className="text-sm text-gray-500">{testi.role}</p>
                      </div>
                      <span className="text-yellow-400 text-2xl">⭐</span>
                    </div>
                    <p className="text-gray-600 italic">"{testi.text}"</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-blue-600 w-4"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;

