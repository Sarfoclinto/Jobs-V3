import React from "react";
import { Link, NavLink } from "react-router-dom";

function Sidelinks({ name, img, to }) {
  return (
    <li className="py-1 ">
      <NavLink
        to={`/${to}`}
        className="flex  items-center p-2 gap-x-2 cursor-pointer "
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#011222" : "transparent",
          borderRadius: "10px",
        })}
      >
        <img src={`/src/assets/${img}.png`} alt="" className="w-2/12 logo" />
        <p className="text-purple-700 font-semibold text-lg hover:text-black">
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "white" : "#011222",
              backgroundColor: isActive ? "inherit" : "inherit",
            })}
            to={`/${to}`}
          >
            {name}
          </NavLink>
        </p>
      </NavLink>
    </li>
  );
}

export default Sidelinks;
