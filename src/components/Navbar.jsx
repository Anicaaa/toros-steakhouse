import { Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MenuPage from '../pages/MenuPage';
import ContactPage from '../pages/ContactPage';


function Navbar() {
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
          <li><Link to={'/'} className="hover:text-red-500 cursor-pointer">Home</Link></li>
          <li><Link to={'/menu'} className="hover:text-red-500 cursor-pointer">Menu</Link></li>
          <li><Link to={'/contact'} className="hover:text-red-500 cursor-pointer">Contact</Link></li>

          {/* BOOK NOW BUTTON */}
          <li>
            <button className="bg-red-700 hover:bg-red-700 text-white px-5 py-2 rounded-sm font-semibold tracking-wide">
              Book Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

