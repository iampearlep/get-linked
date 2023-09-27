"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const timeDifference = targetDate.getTime() - now;
    if (timeDifference <= 0) {
      clearInterval(interval);
      setTime({ hours: 0, minutes: 0, seconds: 0 });
    } else {
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      setTime({ hours, minutes, seconds });
    }
  };

  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const interval = setInterval(calculateTimeRemaining, 1000);

  useEffect(() => {
    calculateTimeRemaining();
    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <div className="py-5 md:py-10 ">
      <div className="flex flex-row w-2/6 items-center space-x-6">
        <div>
          <span className="text-3xl md:text-4xl">{time.hours.toString().padStart(2, "0")}</span>
          <span className="text-xs">H</span>
        </div>
        <div>
          <span className="text-3xl md:text-4xl">{time.minutes.toString().padStart(2, "0")}</span>
          <span className="text-xs">M</span>
        </div>
        <div>
          <span className="text-3xl md:text-4xl">{time.seconds.toString().padStart(2, "0")}</span>
          <span className="text-xs">S</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
