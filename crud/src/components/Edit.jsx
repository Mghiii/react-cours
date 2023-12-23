import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate(); // Obtention de la fonction de navigation
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/posts/${id}`)
      .then((response) => {
        const { title, content } = response.data;
        setTitle(title);
        setContent(content);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données : ", error);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8000/posts/${id}`, {
        title,
        content,
      });
      // Redirection vers la page d'accueil ou toute autre logique
      navigate("/"); // Redirection vers la page principale après la modification
    } catch (error) {
      console.error("Erreur lors de la modification : ", error);
    }
  };

  return (
    <div>
      <h2>Modifier l'élément :</h2>
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
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
};

export default Edit;
