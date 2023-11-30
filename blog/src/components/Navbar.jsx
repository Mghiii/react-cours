import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-gray-800">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="text-white text-2xl font-bold">
          Home
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
