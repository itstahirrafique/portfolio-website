
import { useState } from "react";
import logo from "../assets/icons/logo.svg"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="shadow-md w-full lg:px-20 lg:py-4 px-4 py-2 bg-white fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="w-32" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10">
          <li className="cursor-pointer hover:text-gray-600">Home</li>
          <li className="cursor-pointer hover:text-gray-600">Portfolio</li>
          <li className="cursor-pointer hover:text-gray-600">About</li>
          <li className="cursor-pointer hover:text-gray-600">Testimonials</li>
          <button className="border border-gray-600 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-600 hover:text-white">
            Contact
          </button>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <ion-icon name={menuOpen ? "close" : "menu"}></ion-icon>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-80 flex flex-col items-center gap-6 text-white py-10 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <img src={logo} alt="Logo" className="w-32" />
        <h5 className="cursor-pointer text-lg">Home</h5>
        <h5 className="cursor-pointer text-lg">Portfolio</h5>
        <h5 className="cursor-pointer text-lg">About</h5>
        <h5 className="cursor-pointer text-lg">Testimonials</h5>
        <button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

