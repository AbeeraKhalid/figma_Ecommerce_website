"use client";

import { Star } from 'lucide-react';

interface ProductInfoProps {
  title: string;
  rating: number;
  reviews: number;
  currentPrice: number;
  originalPrice: number;
  description: string;
}

export function ProductInfo({ 
  title, 
  rating, 
  reviews, 
  currentPrice, 
  originalPrice, 
  description 
}: ProductInfoProps) {
  const discount = Math.round((1 - currentPrice / originalPrice) * 100);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(rating) 
                  ? 'text-yellow-400 fill-yellow-400' 
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">({reviews} Reviews)</span>
      </div>

      <div className="flex items-baseline gap-4">
        <span className="text-2xl font-bold text-red-500">${currentPrice.toFixed(2)}</span>
        <span className="text-sm text-muted-foreground line-through">${originalPrice.toFixed(2)}</span>
        <span className="text-sm font-medium text-green-600">{discount}% OFF</span>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}