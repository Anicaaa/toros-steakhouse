import MenuCard from "../components/MenuCard";

import { useState, useEffect } from "react";

export default function MenuPage() {
  const [menuData, setMenuData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("starters");

  useEffect(() => {
    // Fetch menu data from local JSON file
    fetch("/menu.json")
      .then((response) => response.json())
      .then((data) => setMenuData(data.menu))
      .catch((error) => console.error("Error fetching menu data:", error));
  }, []);

  if (!menuData) {
    return <div>Loading menu...</div>;
  }

  return (
    <div className="w-full flex flex-col items-center p-6 gap-8 mt-50">

      {/* Secondary Navbar */}
      <div className="flex gap-6 text-lg font-semibold">
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

      {/* Layout: Left images, Right menu boxes */}
      <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-8">

        {/* Menu Boxes - Right */}
        <div className="flex-1 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
            {menuData[selectedCategory].map((item, i) => (
              <MenuCard key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}