import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TfiMenu } from "react-icons/tfi";
import Link from "next/link";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-white text-black">
          <TfiMenu />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="top"
        className="max-h-[80vh] text-black"
      >
        {/* navigaton links */}
        <nav className="flex flex-col gap-6 px-6 py-4 text-lg">
          <SheetClose asChild>
            <Link
              href="/"
              className="hover:border-b-2 border-zinc-300 transition duration-300"
            >
              Home
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/contact"
              className="hover:border-b-2 border-zinc-300 transition duration-300"
            >
              Contact
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/about"
              className="hover:border-b-2 border-zinc-300 transition duration-300"
            >
              About
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/signup"
              className="hover:border-b-2 border-zinc-300 transition duration-300"
            >
              Sign Up
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
