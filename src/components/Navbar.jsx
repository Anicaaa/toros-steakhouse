import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const baseClasses = "hover:text-black hover:border-black border-white cursor-pointer pb-1 font-semibold text-2xl";
  const activeClasses = "border-b-2 border-white font-semibold text-2xl";

  return (
    <nav className="w-full fixed top-0 left-0 z-50 transition-all duration-500
                    bg-gradient-to-b from-black/70 via-black/50 to-black/0
                    hover:bg-gradient-to-b hover:from-red-900 hover:via-red-700/40 hover:to-red-600/0">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white font-semibold">

        <h1>
        <NavLink to="/" className="text-2xl font-bold tracking-wide">TORO'S STEAKHOUSE
        </NavLink>
        </h1>

        <ul className="hidden md:flex items-center gap-8 text-lg">
          <li>
            <NavLink to="/" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : ""}`}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : ""}`}>
              MENU
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : ""}`}>
              CONTACT
            </NavLink>
          </li>
          <li>
            <button
              onClick={() => navigate("/booking")}
              className="bg-red-700 hover:bg-red-800 text-white px-5 py-2 rounded-sm font-semibold tracking-wide"
            >
              Book Now
            </button>
          </li>
        </ul>

        {/* MOBILE HAMBURGER BUTTON */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(true)} className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 bg-red-700 text-white flex flex-col items-center justify-center gap-8 md:hidden z-50">

         <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-4xl"
          >
            ×
          </button>

          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : ""}`}
          >
            HOME
          </NavLink>
          <NavLink
            to="/menu"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : ""}`}
          >
            MENU
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : ""}`}
          >
            CONTACT
          </NavLink>

          <button
            onClick={() => { navigate("/booking"); setIsOpen(false); }}
            className="bg-black text-white text-xl px-6 py-3 rounded-md font-semibold hover:bg-gray-800"
          >
            Book Now
          </button>
        </div>
      )}

    </nav>
  );
}

export default Navbar;

