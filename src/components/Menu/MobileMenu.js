import React from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "./Menu";

const MobileMenu = () => {

  return (
    <>
      {navItems.map((item) => (
        <li key={item.link}>
          <NavLink
            to={item.link}
            key={item.text}
            className={({ isActive }) =>
              isActive
                ? "block text-sm px-2 py-4 text-white bg-blue-500 font-semibold"
                : "block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
            }
          >
            {item.text}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default MobileMenu;
