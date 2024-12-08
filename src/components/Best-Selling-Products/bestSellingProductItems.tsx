"use client";

import { Button } from "@/components/ui/button";
import { ProductCard } from "./bestSelingProducts";


const products = [
  {
    id: 1,
    title: "The North Coat",
    image: "/bestSellingProduct1.png",
    currentPrice: 260,
    originalPrice: 360,
    rating: 5,
    reviews: 88,
  },
  {
    id: 2,
    title: "Gucci Duffle Bag",
    image: "/bestSellingProduct2.png",
    currentPrice: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 75,
  },
  {
    id: 3,
    title: "RGB Liquid CPU Cooler",
    image: "/bestSellingProduct3.png",
    currentPrice: 160,
    originalPrice: 170,
    rating: 4,
    reviews: 99,
  },
  {
    id: 4,
    title: "Small Bookshelf",
    image: "/bestSellingProduct4.png",
    currentPrice: 360,
    originalPrice: 400,
    rating: 4,
    reviews: 99,
  },
];

export const BestSellingProductItems = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-16 py-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-5 h-10 bg-red-500 rounded-sm" />
            <h2 className="text-red-500 font-medium">This Month</h2>
          </div>
          <h3 className="text-3xl font-semibold">Best Selling Products</h3>
        </div>

        <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};
