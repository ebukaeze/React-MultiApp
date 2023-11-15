import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">
            {" "}
            <h1>Blog</h1>
          </div>
          <div className="list-items">
            <ul className="nav-items">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/blog"} className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
