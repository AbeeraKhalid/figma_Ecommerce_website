"use client";

import { useState } from "react";
import { Apple } from "lucide-react";
import Image from "next/image";
import heroImage1 from "../../public/hero_endframe__cvklg0xk3w6e_large 2.png";
import { FaArrowRight } from "react-icons/fa6";

export default function MainCarousel() {
  const [currentSlide] = useState(0);

  const slides = [
    {
      title: "iPhone 14 Series",
      discount: "Up to 10%",
      type: "off Voucher",
      image: "/iphone-14.png",
      logo: Apple,
    },
  ];

  return (
    <div className="relative bg-black text-white rounded-lg overflow-hidden max-w-7xl mx-auto px-4">
      {/* Hero Section Content */}
      <div className="p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text Content */}
        <div className="space-y-4 md:space-y-6 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Apple className="h-8 w-8" />
            <span className="text-lg md:text-xl font-medium">{slides[currentSlide].title}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-snug">
            {slides[currentSlide].discount}
            <br />
            {slides[currentSlide].type}
          </h2>
          <button className="text-white text-base md:text-lg underline flex gap-1 items-center justify-center md:justify-start">
            Shop Now
            <FaArrowRight className="ml-1 text-xl" />
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={heroImage1}
            alt="iPhone 14"
            className="w-full h-auto max-h-[300px] object-contain"
            height={300}
            width={300}
            priority
          />
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full hover:bg-red-600 hover:border hover:border-white ${
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
