import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import Menu from "../Menu/Menu";
import MobileMenu from "../Menu/MobileMenu";

const Navbar = () => {
    const mobileMenu = useRef(false);
    const handleToggle = () => {
        mobileMenu.current.classList.toggle("hidden");
    }; 
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const handleLogout = async () => {
      await auth.signOut();
      navigate("/");
    };
    const loggedUser = user ? (
      <>
        <span className="py-2 px-2 font-medium text-gray-500">
          Hi, {user.displayName ? user.displayName : user.email.split("@")[0]}
        </span>
        <Link
          to={"#"}
          className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
          onClick={handleLogout}
        >
          Logout
        </Link>
      </>
    ) : !loading ? (
      <>
        <Link
          to={"/login"}
          className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
        >
          Login
        </Link>
        <Link
          to={"/register"}
          className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
        >
          Register
        </Link>
      </>
    ) : (
      <span className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">
        Loading...
      </span>
    );

    return (
      <nav className="sticky top-0 z-50 bg-white drop-shadow	">
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
            <div className="hidden md:flex items-center space-x-3 w-1/3 justify-end">
              {loggedUser}
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
          <MobileMenu state={mobileMenu} />
        </ul>
      </nav>
    );
}
export default Navbar;
