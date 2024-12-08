import { RiArrowDropRightLine } from "react-icons/ri";

export default function CategorySidebar() {
    const categories = [
      "Woman's Fashion",
      "Men's Fashion",
      "Electronics",
      "Home & Lifestyle",
      "Medicine",
      "Sports & Outdoor",
      "Baby's & Toys",
      "Groceries & Pets",
      "Health & Beauty"
    ];
  
    return (
      <aside className="w-64 flex-shrink-0 max-w-7xl mx-auto px-4 pt-2 sm:px-6 md:px-12 ">
        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={category} className=" flex cursor-pointer hover:text-gray-600">
              {category} <RiArrowDropRightLine className="text-2xl"/>
            </li>
          ))}
        </ul>
      </aside>
    );
  }