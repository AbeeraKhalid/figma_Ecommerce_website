"use client";

import { Button } from "@/components/ui/button";
import "swiper/css";
import "swiper/css/navigation";
import { Productshead } from "./productshead";
import { ArrowLeft, ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "The north coat",
    image: "/product1.png",
    currentPrice: 260,
    originalPrice: 360,
    rating: 5,
    reviews: 88,
  },
  {
    id: 2,
    title: "Gucci duffle bag",
    image: "/product2.png",
    currentPrice: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 75,
  },
  {
    id: 3,
    title: "RGB liquid CPU Cooler",
    image: "/product3.png",
    currentPrice: 160,
    originalPrice: 170,
    rating: 4,
    reviews: 99,
  },
  {
    id: 4,
    title: "Small BookSelf",
    image: "/product2.png",
    currentPrice: 360,
    originalPrice: 400,
    rating: 4,
    reviews: 99,
  },
  {
    id: 4,
    title: "Small BookSelf",
    image: "/product4.png",
    currentPrice: 360,
    originalPrice: 400,
    rating: 4,
    reviews: 99,
  },
  {
    id: 4,
    title: "Small BookSelf",
    image: "/product5.png",
    currentPrice: 360,
    originalPrice: 400,
    rating: 4,
    reviews: 99,
  },
  {
    id: 4,
    title: "Small BookSelf",
    image: "/product6.png",
    currentPrice: 360,
    originalPrice: 400,
    rating: 4,
    reviews: 99,
  },
  {
    id: 4,
    title: "Small BookSelf",
    image: "/product7.png",
    currentPrice: 360,
    originalPrice: 400,
    rating: 4,
    reviews: 99,
  },
];

export const ProductContent = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-16 py-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-5 h-10 bg-red-500 rounded-sm" />
            <h2 className="text-red-500 font-medium">Our Products</h2>
          </div>
          <div className="flex items-center gap-8">
            <h3 className="text-3xl font-semibold">Explore Our Products</h3>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Productshead key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};
