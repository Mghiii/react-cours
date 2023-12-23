import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données : ", error);
      });
  }, []);

  function deleteData(id) {
    axios
      .delete(`http://localhost:8000/posts/${id}`)
      .then(() => {
        setData((prev) => prev.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression des données : ", error);
      });
  }

  return (
    <div>
      <h1>Liste des éléments :</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <button onClick={() => deleteData(item.id)}>Supprimer</button>
            <button style={{ textDecoration: "none" }}>
              <Link to={`/Edit/${item.id}`}>Modifier</Link>
            </button>
          </li>
        ))}
      </ul>
      <button style={{ textDecoration: "none" }}>
        <Link to="/Ajouter">Ajouter un element</Link>
      </button>
    </div>
  );
};

export default Home;
