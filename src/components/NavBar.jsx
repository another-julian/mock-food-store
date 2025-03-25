import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  const homeIcon = {
    materialSymbolsOutlined: {
      fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
    },
  };
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
    </nav>
  );
};

export default NavBar;
