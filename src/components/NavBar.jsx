import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/navbar.css";

function NavBar() {
  const homeIcon = {
    materialSymbolsOutlined: {
      fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
    },
  };
  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <span className="restaurant-name">Restaurant</span>
        </Link>
      </div>
      <div className="search-container">
        <input
          id="search-input"
          name="search-input"
          className="search-input"
          type="text"
          placeholder="Search for food"
        />
        <div className="search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <ul>
        <li>
          <Link>
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </li>
        <li>
          <Link>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
