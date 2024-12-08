'use client';

import Image from "next/image";
import { useState } from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export function TeamMember({ image, name, role, socialLinks }: TeamMemberProps) {
  const [currentSlide] = useState(0);

  return (
    <div className="flex flex-col items-center p-3 w-80 h-96 bg-[#F5F5F5] pt-8">
      {/* Profile Image */}
      <div className="w-64 h-64 mb-4 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={name}
          width={256}
          height={256}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Name and Role */}
      <h3 className="text-xl font-semibold mb-1 text-center">{name}</h3>
      <p className="text-sm text-gray-500 mb-2 text-center">{role}</p> 
      <div className="flex gap-2 justify-center mb-4 mt-2"> 
        {socialLinks.twitter && (
          <a href={socialLinks.twitter} className="text-gray-500 hover:text-blue-500">
            <FaTwitter size={18} />
          </a>
        )}
        {socialLinks.instagram && (
          <a href={socialLinks.instagram} className="text-gray-500 hover:text-pink-500">
            <FaInstagram size={18} />
          </a>
        )}
        {socialLinks.linkedin && (
          <a href={socialLinks.linkedin} className="text-gray-500 hover:text-blue-700">
            <FaLinkedin size={18} />
          </a>
        )}
      </div>
      {/* Slider Navigation */}
      <div className="mt-6 flex justify-center gap-2">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${
              currentSlide === index
                ? "bg-red-500 border border-white"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
