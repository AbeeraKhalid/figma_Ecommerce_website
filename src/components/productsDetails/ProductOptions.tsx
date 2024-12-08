"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart } from 'lucide-react';

interface ProductOptionsProps {
  colors: string[];
  sizes: string[];
}

export function ProductOptions({ colors, sizes }: ProductOptionsProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Color: {selectedColor}</label>
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                selectedColor === color 
                  ? 'border-black scale-110' 
                  : 'border-gray-200'
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Size: {selectedSize}</label>
        <div className="flex gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className={`px-4 py-2 text-sm border rounded-md transition-all ${
                selectedSize === size 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black hover:bg-gray-50'
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Quantity</label>
        <div className="flex items-center border rounded-md w-fit">
          <Button 
            variant="ghost" 
            size="icon"
            className="h-9 w-9"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-12 text-center">{quantity}</span>
          <Button 
            variant="ghost" 
            size="icon"
            className="h-9 w-9"
            onClick={() => setQuantity(Math.min(10, quantity + 1))}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Button 
        className="w-full bg-black text-white hover:bg-gray-800"
        size="lg"
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        Add to Cart
      </Button>
    </div>
  );
}