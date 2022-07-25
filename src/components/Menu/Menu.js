import React from "react";
import { NavLink } from "react-router-dom";

export const navItems = [
  { text: "Home", link: "/" },
  { text: "Deals", link: "/deals" },
  { text: "My Booking", link: "/my-booking" },
  { text: "Whitelist", link: "/my-list" },
];

const Menu = () => {
  return (
    <div className="hidden md:flex w-full justify-center items-center space-x-1">
      {navItems.map((item) => (
        <NavLink
          to={item.link}
          key={item.text}
          className={({ isActive }) =>
            isActive
              ? "py-4 px-2 text-blue-500 border-b-4 border-blue-500 font-semibold"
              : "py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
          }
        >
          {item.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Menu;
