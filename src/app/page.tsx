"use client";

import { FlashSales } from "@/components/flashSales/flash_sales";
import Categories from "@/components/categories/categories";
import CategoriesContent from "@/components/categories/categoriesContent";
import { BestSellingProductItems } from "@/components/Best-Selling-Products/bestSellingProductItems";
import { FeaturedSection } from "@/components/features/featuredSection";
import Features from "@/components/features/features";
import Category from "@/components/category";
import { ProductContent } from "@/components/products/productContent";
import BestFeatures from "@/components/bestFeatures";
import CategorySidebar from "@/components/categorySlidebar";
import MainCarousel from "@/components/MainCarousel";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Home() {
  return (
    <main className=" bg-gray-50">
       <div className="lg:hidden mt-2 flex justify-center items-center">
            <Sheet>
              <SheetTrigger asChild>
                <button className="bg-gray-200 p-2 px-5 py-3 rounded-md text-sm font-medium">
                  Open Categories
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="p-4">
                <CategorySidebar />
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex gap-6 mt-4">
            <div className="hidden lg:block w-[20%]">
              <CategorySidebar />
            </div>
            <div className="flex-1">
              <MainCarousel />
            </div>
          </div>
      <section className=" mt-8">
        <FlashSales />
      </section>
      <section className="min-h-screen ">
        <Categories />
        <BestSellingProductItems />
        <main className="min-h-screen bg-background">
          <Category />
        </main>
        <main className="min-h-screen bg-background">
          <ProductContent />
        </main>
        <main className=" min-h-screen bg-background">
          <Features />
          <FeaturedSection />
        </main>
        <main className="bg-background">
          <BestFeatures />
        </main>
      </section>
    </main>
  );
}
