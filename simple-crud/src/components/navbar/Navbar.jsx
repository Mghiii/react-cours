import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <h1>Navbar</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/Services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/Portfolio" className="nav-link">
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
