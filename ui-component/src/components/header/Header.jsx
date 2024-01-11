import React from "react";
import "./header.css";
import { useSelector } from "react-redux";

export default function Header() {
  const { name } = useSelector((state) => state.user);
  return (
    <div className="header">
      <nav className="header">
        <h1 className="title">TP...</h1>
        <ul className="list">
          <li>Hello {name}</li>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
