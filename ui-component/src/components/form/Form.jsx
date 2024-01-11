import React from "react";
import "./form.css";

export default function Form() {
  return (
    <form>
      <h1 className="form-title">Add users form</h1>
      <div className="form-group">
        <input type="text" placeholder="Enter your name" />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Enter your emain" />
      </div>
      <div className="form-group">
        <button type="submit">Add user</button>
      </div>{" "}
    </form>
  );
}
