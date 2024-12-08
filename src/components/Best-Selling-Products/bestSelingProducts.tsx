"use client";

import { useState } from 'react';
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
  description?: string;
}

export const ProductCard = ({
  title,
  image,
  currentPrice,
  originalPrice,
  rating,
  reviews,
  description = "A beautiful product with amazing features and quality craftsmanship."
}: ProductCardProps) => {
  const [showProductDetail, setShowProductDetail] = useState(false);

  const handleShowProductDetail = () => {
    setShowProductDetail(true);
  };

  const handleCloseProductDetail = () => {
    setShowProductDetail(false);
  };

  if (showProductDetail) {
    return (
      <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
        <Button 
          onClick={handleCloseProductDetail} 
          className="absolute top-4 left-4 z-60"
        >
          ← Back to Products
        </Button>
      </div>
    );
  }

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
          onClick={handleShowProductDetail}
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
            onClick={handleShowProductDetail}
          />
        </div>
        <Button className="w-full hover:bg-black hover:text-white bg-transparent mb-3">
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
            {[1, 2, 3, 4, 5].map((star) => (
              <input 
                key={star}
                type="radio" 
                name="rating-5" 
                className="mask mask-star-2 bg-orange-400" 
                checked={star === Math.round(rating)}
                readOnly
              />
            ))}
          </div>
        </div>
        <span className="text-gray-500 text-sm">({reviews})</span>
      </div>
    </div>
  );
};


  {/* <div className="absolute top-4 left-4 z-10">
        <span className="bg-red-500 text-white px-2 py-1 rounded-md text-sm">
          -{discount}%
        </span>
      </div> */}


// "use client";

// import { useState } from "react";
// import { Heart } from "lucide-react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { LuEye } from "react-icons/lu";
// import ProductDetail from "@/app/products/[id]/page";

// interface ProductCardProps {
//   id: number;
//   title: string;
//   image: string;
//   currentPrice: number;
//   originalPrice: number;
//   rating: number;
//   reviews: number;
//   description?: string;
// }

// export const ProductCard = ({
//   id,
//   title,
//   image,
//   currentPrice,
//   originalPrice,
//   rating,
//   reviews,
//   description = "A beautiful product with amazing features and quality craftsmanship.",
// }: ProductCardProps) => {
//   const [showProductDetail, setShowProductDetail] = useState(false);

//   const handleShowProductDetail = () => {
//     setShowProductDetail(true);
//   };

//   const handleCloseProductDetail = () => {
//     setShowProductDetail(false);
//   };

//   if (showProductDetail) {
//     return (
//       <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
//         <Button
//           onClick={handleCloseProductDetail}
//           className="absolute top-4 left-4 z-60"
//         >
//           ← Back to Products
//         </Button>
//         <ProductDetail
//           id={id}
//           title={title}
//           image={image}
//           currentPrice={currentPrice}
//           originalPrice={originalPrice}
//           rating={rating}
//           reviews={reviews}
//           description={description}
//         />
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-lg p-4 relative group shadow hover:shadow-lg">
//       <div className="absolute top-4 right-4 z-10">
//         <Button
//           variant="ghost"
//           size="icon"
//           className="rounded-full hover:bg-gray-100"
//         >
//           <Heart className="h-5 w-5" />
//         </Button>
//         <Button
//           variant="ghost"
//           size="icon"
//           className="rounded-full hover:bg-gray-100 mt-3"
//           onClick={handleShowProductDetail}
//         >
//           <LuEye className="h-5 w-5" />
//         </Button>
//       </div>

//       <div>
//         <div className="relative h-48 mb-4">
//           <Image
//             src={image}
//             alt={title}
//             fill
//             className="object-contain transition-transform duration-300 hover:scale-105"
//             onClick={handleShowProductDetail}
//           />
//         </div>
//         <Button className="w-full hover:bg-black hover:text-white bg-transparent mb-3">
//           Add To Cart
//         </Button>
//       </div>
//       <h3 className="text-lg font-semibold mb-2">{title}</h3>

//       <div className="flex items-center gap-2 mb-2">
//         <span className="text-red-500 font-bold">${currentPrice}</span>
//         <span className="text-gray-400 line-through">${originalPrice}</span>
//       </div>

//       <div className="flex items-center gap-2">
//         <div className="flex">
//           {[1, 2, 3, 4, 5].map((star) => (
//             <span
//               key={star}
//               className={`mask mask-star-2 ${
//                 star <= Math.round(rating)
//                   ? "bg-orange-400"
//                   : "bg-gray-300"
//               }`}
//             ></span>
//           ))}
//         </div>
//         <span className="text-gray-500 text-sm">({reviews})</span>
//       </div>
//     </div>
//   );
// };
