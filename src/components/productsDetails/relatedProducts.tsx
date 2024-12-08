"use client";

import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface RelatedProduct {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="mt-16">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1 h-6 bg-red-500"/>
        <h2 className="text-xl font-semibold">Related Items</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="relative aspect-square mb-3">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover rounded-lg"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute top-2 right-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Heart className="h-4 w-4" />
              </Button>
              {product.originalPrice > product.price && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                </span>
              )}
            </div>
            <h3 className="font-medium text-sm">{product.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-red-500 font-semibold">${product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-gray-400 text-sm line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}