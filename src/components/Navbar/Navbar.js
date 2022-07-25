import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import MobileMenu from "../Menu/MobileMenu";

const Navbar = () => {
    const mobileMenu = useRef(false);
    const handleToggle = () => {
        mobileMenu.current.classList.toggle("hidden");
    }; 

    return (
      <nav className="sticky top-0 z-50 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between align-center">
            <div className="flex w-full">
              <div>
                <Link to={"/"} className="flex items-center py-4 px-2 w-40">
                  <img src={"../../assets/images/logo.png"} alt="Logo" />
                </Link>
              </div>
              <Menu />
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <Link
                to={"/login"}
                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
              >
                LogIn
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={handleToggle}
              >
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-blue-500 "
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={"2"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <ul className="hidden mobile-menu" ref={mobileMenu}>
          <MobileMenu />
        </ul>
      </nav>
    );
}
export default Navbar;
