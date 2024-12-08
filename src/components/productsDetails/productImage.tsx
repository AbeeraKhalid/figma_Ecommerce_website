"use client";

import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ProductImageProps {
  image: string;
  title: string;
}

export function ProductImage({ image, title }: ProductImageProps) {
  return (
    <div className="relative aspect-square">
      <Image 
        src={image} 
        alt={title} 
        fill
        className="object-contain" 
        priority
      />
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute top-4 right-4 rounded-full bg-white hover:bg-gray-100 border-none"
      >
        <Heart className="h-5 w-5 text-gray-600" />
      </Button>
    </div>
  );
}