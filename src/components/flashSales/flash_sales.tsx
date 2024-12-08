"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./countDownTimer";
import { ProductCard } from "./productCard";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    image: "/flashSales1.png",
    currentPrice: 120,
    originalPrice: 160,
    discount: 40,
    rating: 5,
    reviews: 88,
  },
  {
    id: 2,
    title: "AK-900 Wired Keyboard",
    image: "/flashSales2.png",
    currentPrice: 960,
    originalPrice: 1160,
    discount: 35,
    rating: 4,
    reviews: 75,
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    image: "/flashSales3.png",
    currentPrice: 370,
    originalPrice: 400,
    discount: 30,
    rating: 4,
    reviews: 99,
  },
  {
    id: 4,
    title: "S-Series Comfort Chair",
    image: "/flashSales4.png",
    currentPrice: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4,
    reviews: 99,
  },
  {
    id: 4,
    title: "S-Series Comfort Chair",
    image: "/flashSales4.png",
    currentPrice: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4,
    reviews: 99,
  },
  {
    id: 4,
    title: "S-Series Comfort Chair",
    image: "/flashSales4.png",
    currentPrice: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4,
    reviews: 99,
  },
  {
    id: 4,
    title: "S-Series Comfort Chair",
    image: "/flashSales4.png",
    currentPrice: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4,
    reviews: 99,
  },
];

export const FlashSales = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 pt-16">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-5 h-10 bg-red-500 rounded-sm" />
            <h2 className="text-red-500 font-medium">Today&apos;s</h2>
          </div>
          <div className="flex items-center gap-8">
            <h3 className="text-3xl font-semibold">Flash Sales</h3>
            <CountdownTimer
              endTime={new Date(Date.now() + 24 * 60 * 60 * 1000)}
            />
          </div>
        </div>

        <div className="flex gap-2 ml-60">
          <Button
            variant="outline"
            size="icon"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={4}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-8">
        <Button className="bg-red-500 hover:bg-red-600 text-white px-12 py-5">
          View All Products
        </Button>
      </div>
    </section>
  );
};
