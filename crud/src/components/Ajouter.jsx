import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importer useNavigate

const Ajouter = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate(); // Obtenir la fonction de navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/posts", {
        title,
        content,
      });
      navigate("/");
      // Redirection vers la page d'accueil ou toute autre logique
    } catch (error) {
      console.error("Erreur lors de l'ajout : ", error);
    }
  };

  return (
    <div>
      <h2>Ajouter un élément :</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Contenu"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default Ajouter;
