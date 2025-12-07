import MenuCard from "../components/MenuCard";

import { useState, useEffect } from "react";

export default function MenuPage() {
  const [menuData, setMenuData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("starters");

  useEffect(() => {
    fetch("/menu.json")
      .then((response) => response.json())
      .then((data) => setMenuData(data.menu))
      .catch((error) => console.error("Error fetching menu data:", error));
  }, []);

  if (!menuData) {
    return <div className="flex justify-center pt-100 pb-100 font-bold text-2xl">Loading menu...</div>;
  }

  return (
    <div className="w-full flex flex-col items-center p-6 gap-8 mt-30 mb-10">

      <div className="flex gap-4 text-lg font-semibold">
        {["starters", "mains", "desserts", "drinks"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`uppercase pb-1 ${
              selectedCategory === cat ? "border-b-2 border-black" : "text-gray-500 hover:text-black"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <div className="text-sm text-gray-600">
        <span className="mr-4"><strong>VG</strong>: Vegan</span>
        <span className="mr-4"><strong>V</strong>: Vegetarian</span>
        <span><strong>GF</strong>: Gluten-Free</span>
      </div>
        <div className="flex-1 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
            {menuData[selectedCategory].map((item, i) => (
              <MenuCard key={i} {...item} />
            ))}
          </div>
        </div>
    </div>
  );
}