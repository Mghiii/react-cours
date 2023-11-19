import { useState } from "react";

export default function UseStateTp() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(" ");

  const handleChangeName = () => {
    const name = document.querySelector("#name").value;
    setName(name);
  };
  const handleChangeAge = () => {
    const age = document.querySelector("#age").value;
    setAge(age);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert([name, age]);
  };
  return (
    <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
      <label className="block mb-2" htmlFor="name">
        Saisir votre nom :
      </label>
      <input
        className="border border-gray-300 p-2 mb-4 w-full"
        type="text"
        name="name"
        id="name"
        onChange={handleChangeName}
      />
      <label className="block mb-2" htmlFor="age">
        Saisir votre âge :
      </label>
      <input
        className="border border-gray-300 p-2 mb-4 w-full"
        type="text"
        name="age"
        id="age"
        onChange={handleChangeAge}
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        type="submit"
      >
        Afficher
      </button>
    </form>
  );
}
