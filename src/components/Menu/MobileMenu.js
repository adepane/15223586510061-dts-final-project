import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { navItems } from "./Menu";

const MobileMenu = (props) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  }
  const handleHideMenu = () => {
    props.state.current.classList.add('hidden')
  }
  const loggedUser = user ? (
    <li className="py-1 border-t ">
      <span className="block text-sm px-4 py-4 flex justify-end ">
        Hi, {user.displayName ? user.displayName : user.email.split("@")[0]}
      </span>
    </li>
  ) : (
    ""
  );
  const loginStatus = user ? (
    <li>
      <NavLink
        to={"#"}
        onClick={handleLogout}
        className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
      >
        {"Logout"}
      </NavLink>
    </li>
  ) : (
    ""
  );

  return (
    <>
      {loggedUser}
      {navItems
        .filter((item) =>
          user ? item.link !== "/login" && item.link !== "/register" : item
        )
        .map((item) => (
          <li key={item.link}>
            <NavLink
              to={item.link}
              key={item.text}
              className={({ isActive }) =>
                isActive
                  ? "block text-sm px-2 py-4 text-white bg-blue-500 font-semibold"
                  : "block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
              }
              onClick={handleHideMenu}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      {loginStatus}
    </>
  );
};

export default MobileMenu;
