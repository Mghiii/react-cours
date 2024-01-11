import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <nav className="header">
        <h1 className="title">TP...</h1>
        <ul className="list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
