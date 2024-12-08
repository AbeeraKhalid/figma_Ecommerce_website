import Image from "next/image";
import React from "react";

interface CategoriesContentProps {
  img: string;
  name: string;
}

const CategoriesContent: React.FC<CategoriesContentProps> = ({ img, name }) => {
  return (
    <div className="p-4 px-5 w-40 hover:bg-[#DB4444] hover:text-white border-2 rounded-lg flex flex-col mx-auto items-center text-center justify-center ml-24 sm:ml-0 ">
      <Image
        width={80}
        height={80}
        alt={name}
        className="mb-4 transition-transform duration-300 hover:scale-105"
        src={img}
      />
      <h2 className="title-font font-medium text-lg text-gray-900">{name}</h2>
    </div>
  );
};

export default CategoriesContent;
