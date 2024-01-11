import React from "react";
import "./sidebar.css";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const { name, email } = useSelector((state) => state.user);
  return (
    <div className="sidebar">
      <ul className="links">
        <li>Hello {name}</li>
        <li>{email}</li>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}
