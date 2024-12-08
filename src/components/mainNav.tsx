"use client";

import { Search, ShoppingCart, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SheetDemo } from "./menu";
import Link from "next/link";

export default function MainNav() {
  return (
    <nav className="container mx-auto py-6 max-w-7xl px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Exclusive</h1>
        <div className="lg:hidden">
          <SheetDemo />
        </div>
        <div className="hidden lg:flex flex-wrap justify-center md:justify-start gap-7">
          <Link href="/" className=" hover:border-b-2 border-zinc-300">
            Home
          </Link>
          <Link href="/contact" className=" hover:border-b-2 border-zinc-300">
            Contact
          </Link>
          <Link href="/about" className=" hover:border-b-2 border-zinc-300">
            About
          </Link>
          <Link href={"/signup"} className=" hover:border-b-2 border-zinc-300">
            Sign Up
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-[300px]">
            <Input
              type="search"
              placeholder="What are you looking for?"
              className="w-full pr-10"
            />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
          <Link href="/wishlist">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
          </Link>

          <Link href={"/cart"}>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="lg:hidden flex flex-wrap items-center justify-between gap-7 mt-4">
        {/* Navigation Links */}
        <div className="hidden md:flex flex-wrap justify-center md:justify-start gap-4">
          <Link href="/" className=" hover:border-b-2 border-zinc-300">
            Home
          </Link>
          <Link href="/contact" className=" hover:border-b-2 border-zinc-300">
            Contact
          </Link>
          <Link href="/about" className=" hover:border-b-2 border-zinc-300">
            About
          </Link>
          <Link href={"/signup"} className=" hover:border-b-2 border-zinc-300">
            Sign Up
          </Link>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-[300px]">
            <Input
              type="search"
              placeholder="What are you looking for?"
              className="w-full pr-10"
            />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
          <Link href="/wishlist">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
          </Link>
          <Link href={"/cart"}>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
