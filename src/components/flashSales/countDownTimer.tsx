"use client";

import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  endTime: Date;
}

export const CountdownTimer = ({ endTime }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="flex gap-2 items-center">
      <TimeUnit value={timeLeft.days.toString().padStart(2, '0')} />
      <span className="text-gray-800">:</span>
      <TimeUnit value={timeLeft.hours.toString().padStart(2, '0')} />
      <span className="text-gray-800">:</span>
      <TimeUnit value={timeLeft.minutes.toString().padStart(2, '0')} />
      <span className="text-gray-800">:</span>
      <TimeUnit value={timeLeft.seconds.toString().padStart(2, '0')} />
    </div>
  );
};

const TimeUnit = ({ value }: { value: string }) => (
  <div className="text-2xl font-bold text-gray-800">
    {value}
  </div>
);