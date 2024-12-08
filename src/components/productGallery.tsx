"use client";

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "w-20 h-20 rounded-lg overflow-hidden border-2",
              selectedImage === index ? "border-red-500" : "border-transparent"
            )}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
      <div className="flex-1">
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image
            src={images[selectedImage]}
            alt="Product main image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}