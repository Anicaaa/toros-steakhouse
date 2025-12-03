import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const baseClasses = "hover:border-b-2 border-white cursor-pointer pb-1";
  const activeClasses = "border-b-2 border-white";

  return (
    <nav className="w-full fixed top-0 left-0 z-50 transition-all duration-500
                    bg-gradient-to-b
                    from-black/70
                    via-black/50
                    to-black/0
                    hover:bg-gradient-to-b 
                    hover:from-red-900 
                    hover:via-red-700/40 
                    hover:to-red-600/0">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        
        {/* LOGO */}
        <h1 className="text-2xl font-bold tracking-wide">TORO'S STEAKHOUSE</h1>

        {/* LINKS */}
        <ul className="flex items-center gap-8 text-lg">

          {/* HOME */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : ""}`
              }
            >
              Home
            </NavLink>
          </li>

          {/* MENU */}
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : ""}`
              }
            >
              Menu
            </NavLink>
          </li>

          {/* CONTACT */}
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : ""}`
              }
            >
              Contact
            </NavLink>
          </li>

          {/* BOOK NOW */}
          <li>
            <button
              onClick={() => navigate("/booking")}
              className="bg-red-700 hover:bg-red-800 text-white px-5 py-2 rounded-sm font-semibold tracking-wide"
            >
              Book Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

