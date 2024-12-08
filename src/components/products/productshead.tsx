"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LuEye } from "react-icons/lu";

interface ProductCardProps {
  title: string;
  image: string;
  currentPrice: number;
  originalPrice: number;
  rating: number;
  reviews: number;
}

export const Productshead = ({
  title,
  image,
  currentPrice,
  originalPrice,
  reviews,
}: ProductCardProps) => {
  return (
    <div className={"bg-white rounded-lg p-4 relative group"}>
      <div className="absolute top-4 right-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-gray-100"
        >
          <Heart className="h-5 w-5" />
        </Button>
        <br></br>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-gray-100 pb-7"
        >
          <LuEye className="h-5 w-5" />
        </Button>
      </div>

      <div>
        <div className="relative h-48 mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
        <Button className="w-full  hover:bg-black  hover:text-white bg-transparent mb-3">
          Add To Cart
        </Button>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-red-500 font-bold">${currentPrice}</span>
        <span className="text-gray-400 line-through">${originalPrice}</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex">
          <div className="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <span className="text-gray-500 text-sm">({reviews})</span>
      </div>
    </div>
  );
};
