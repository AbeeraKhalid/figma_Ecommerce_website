"use client";

export default function TopBar() {
  return (
    <div className="bg-black text-white py-2 w-full overflow-hidden ">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center text-center md:text-left gap-2">
        <p className="text-sm whitespace-normal break-words">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="underline cursor-pointer">Shop Now</span>
        </p>
        <div className="mt-2 md:mt-0">
          <select className="bg-black text-white text-sm border-none outline-none">
            <option>English</option>
          </select>
        </div>
      </div>
    </div>
  );
}
