'use client'

import React, { useState, useEffect } from "react";

const MediaGallery = ({ photos }) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentPhotoIndex((prev) =>
          prev === photos?.length - 1 ? 0 : prev + 1
        );
      }, 3000);
      return () => clearInterval(timer);
    }, [photos]);
  
    return (
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <div className="relative w-full h-screen max-h-[600px]">
          {photos?.map((photo, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                currentPhotoIndex === index
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <img
                src={photo}
                alt={`Product photo ${index + 1}`}
                className="w-full h-full object-contain bg-white"
                loading="lazy"
              />
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button 
            onClick={() => setCurrentPhotoIndex(prev => prev === 0 ? photos.length - 1 : prev - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
          >
            ←
          </button>
          <button 
            onClick={() => setCurrentPhotoIndex(prev => prev === photos.length - 1 ? 0 : prev + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
          >
            →
          </button>
  
          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {photos?.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPhotoIndex === index
                    ? "bg-blue-600 w-4"
                    : "bg-white/70 hover:bg-white"
                }`}
                onClick={() => setCurrentPhotoIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default MediaGallery;
