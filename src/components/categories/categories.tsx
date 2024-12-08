import React, { useRef } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import CategoriesContent from "./categoriesContent";

const products = [
  { id: 1, img: "/category1.png", name: "Phones" },
  { id: 2, img: "/category2.png", name: "Computers" },
  { id: 3, img: "/category3.png", name: "SmartWatch" },
  { id: 4, img: "/category4.png", name: "Camera" },
  { id: 5, img: "/category5.png", name: "HeadPhones" },
  { id: 6, img: "/category6.png", name: "Gaming" },
];

const Categories = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-9">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-5 h-10 bg-red-500 rounded-sm" />
            <h2 className="text-red-500 text-sm font-semibold">Today&apos;s</h2>
          </div>
          <h3 className="text-2xl md:text-3xl  font-semibold">Browse By Category</h3>
        </div>
        <div className="flex gap-2 ml-24">
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
        spaceBetween={16} 
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: { slidesPerView: 1.2 }, 
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <CategoriesContent img={product.img} name={product.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Categories;
