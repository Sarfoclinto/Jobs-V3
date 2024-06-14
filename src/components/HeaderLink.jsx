import React from "react";
import { Link } from "react-router-dom";

function HeaderLink({ name }) {
  return (
    <Link to="/">
      <button className="hover:text-black px-2 py-1 hover:rounded-lg hover:font-medium">
        {name}
      </button>
    </Link>
  );
}

export default HeaderLink;
