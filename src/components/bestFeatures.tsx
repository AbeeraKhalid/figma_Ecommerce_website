import Image from "next/image";
import React from "react";
import bestFeatures1 from "../../public/bestFeatures1.png";
import bestFeatures2 from "../../public/bestFeatures2.png";
import bestFeatures3 from "../../public/bestFeatures3.png";

const BestFeatures = () => {
  return (
    <section className="text-gray-600 body-font max-w-7xl mx-auto mt-4">
      <div className="container px-5 pt-6 mx-auto">
        <div className="flex flex-wrap -m-4 text-center justify-center">
          {/* Feature 1 */}
          <div className="p-4 sm:w-1/3 w-full">
            <Image
              alt="bestFeatures1"
              src={bestFeatures1}
              width={120}
              height={120}
              className="mx-auto mb-4 w-[80px] h-[80px] object-contain"
            />
            <h2 className="title-font font-semibold text-xl text-[#000000]">
              FREE AND FAST DELIVERY
            </h2>
            <p className="leading-relaxed font-normal text-[#000000]">
              Free delivery for all orders over $140
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-4 sm:w-1/3 w-full">
            <Image
              alt="bestFeatures2"
              src={bestFeatures2}
              width={120}
              height={120}
              className="mx-auto mb-4 w-[80px] h-[80px] object-contain"
            />
            <h2 className="title-font text-xl font-semibold text-[#000000]">
              24/7 CUSTOMER SERVICE
            </h2>
            <p className="leading-relaxed font-normal text-[#000000]">
              Friendly 24/7 customer support
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-4 sm:w-1/3 w-full">
            <Image
              alt="bestFeatures3"
              src={bestFeatures3}
              width={120}
              height={120}
              className="mx-auto mb-4 w-[80px] h-[80px] object-contain"
            />
            <h2 className="title-font  text-xl font-semibold text-[#000000]">
              MONEY BACK GUARANTEE
            </h2>
            <p className="leading-relaxed font-normal text-[#000000]">
              We return money within 30 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestFeatures;
