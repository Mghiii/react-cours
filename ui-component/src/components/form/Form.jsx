import React, { useState } from "react";
import "./form.css";
import { addUser } from "../../redux/reducers/userSlice";
import { useDispatch } from "react-redux";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, email }));
  };

  return (
    <form onSubmit={submitHandler}>
      <h1 className="form-title">Add users form</h1>
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <button type="submit">Add user</button>
      </div>{" "}
    </form>
  );
}
