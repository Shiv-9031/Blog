import "./Header.css";

import React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header_container">
      <div className="header_logo">
        <h1>.blog</h1>
      </div>
      <div className="header_items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/signin"}>Sign in</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
