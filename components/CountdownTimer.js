// RandomCountdownTimer.js
'use client';
import { useState, useEffect } from 'react';

const RandomCountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    // Generate random initial time if not exists
    const initializeRandomTime = () => {
      const hours = Math.floor(Math.random() * 3); // 0-2 hours
      const minutes = Math.floor(Math.random() * 60); // 0-59 minutes
      const seconds = Math.floor(Math.random() * 60); // 0-59 seconds
      
      return Date.now() + (hours * 60 * 60 * 1000) + 
                         (minutes * 60 * 1000) + 
                         (seconds * 1000);
    };

    const targetDate = localStorage.getItem('promoTargetDate') || 
      initializeRandomTime();

    if (!localStorage.getItem('promoTargetDate')) {
      localStorage.setItem('promoTargetDate', targetDate);
    }

    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        // Reset with new random time when timer reaches zero
        localStorage.removeItem('promoTargetDate');
        const newTargetDate = initializeRandomTime();
        localStorage.setItem('promoTargetDate', newTargetDate);
      }
    };

    // Initial calculation
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format number to always show two digits
  const formatNumber = (number) => {
    return number?.toString().padStart(2, '0') || '00';
  };

  return (
    <div className="flex items-center space-x-2 animate-pulse">
      <span className="text-red-500">⏰</span>
      <span className="text-red-500 font-bold">
        Flash Sale Berakhir Dalam {formatNumber(timeLeft?.hours)}:{formatNumber(timeLeft?.minutes)}:{formatNumber(timeLeft?.seconds)}
      </span>
    </div>
  );
};

export default RandomCountdownTimer;