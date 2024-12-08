"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  mainImage: string;
  thumbnails: string[];
  title: string;
}

export function ProductGallery({ mainImage, thumbnails, title }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(mainImage);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        {thumbnails.map((thumb, index) => (
          <button
            key={index}
            className={`relative w-20 h-20 border rounded-lg overflow-hidden ${
              selectedImage === thumb ? 'border-black' : 'border-gray-200'
            }`}
            onClick={() => setSelectedImage(thumb)}
          >
            <Image
              src={thumb}
              alt={`${title} view ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
      <div className="relative flex-1 aspect-square">
        <Image
          src={selectedImage}
          alt={title}
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}