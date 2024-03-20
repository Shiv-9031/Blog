import "./Header.css";

import React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header_container">
      <div className="header_logo">Logo</div>
      <div className="header_items">
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Sign in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
