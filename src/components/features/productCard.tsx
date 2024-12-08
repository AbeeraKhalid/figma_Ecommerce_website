"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  featured?: boolean;
}

export function ProductCard({
  title,
  description,
  imageUrl,
  imageAlt,
  buttonText,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0 relative">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain transition-transform duration-300 hover:scale-105 bg-black"
            priority
          />
        </AspectRatio>
        <div className="absolute bottom-0 left-0 right-0  bg-gradient-to-t from-black/60 to-transparent text-white p-7">
          <h3 className="text-lg md:text-xl font-semibold mb-1 pb-1">{title}</h3>
          <p className="text-xs md:text-sm opacity-90 pb-1">{description}</p>
          <p className="text-xs md:text-sm opacity-90 underline pb-1">{buttonText}</p>
        </div>
      </CardContent>
    </Card>
  );
}
