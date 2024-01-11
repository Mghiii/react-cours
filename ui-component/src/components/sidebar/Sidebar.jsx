import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}
