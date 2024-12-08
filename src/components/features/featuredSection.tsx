"use client";

import { ProductCard } from "./productCard";

export function FeaturedSection() {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <ProductCard
            title="PlayStation 5"
            description="Experience the next level of gaming"
            imageUrl="/featured1.png"
            imageAlt="PlayStation 5 console"
            buttonText="Shop Now"
          />
        </div>

        <div className="lg:col-span-2 space-y-6">
          <ProductCard
            title="Women's Collections"
            description="Featured summer collection"
            imageUrl="/featured2.png"
            imageAlt="Women's fashion collection"
            buttonText="Shop Now"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProductCard
              title="Speakers"
              description="Premium sound quality"
              imageUrl="/featured3.png"
              imageAlt="Premium speakers"
              buttonText="Shop Now"
            />
            <ProductCard
              title="Perfume"
              description="Luxury fragrances"
              imageUrl="/featured4.png"
              imageAlt="Luxury perfume"
              buttonText="Shop Now"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
