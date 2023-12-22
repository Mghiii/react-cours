import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [newProduct, setNewProduct] = useState([]);

  const ajouter = () => {
    if (title.trim() !== "" && price.trim() !== "") {
      setNewProduct([...newProduct, { title, price }]);
      setTitle("");
      setPrice("");
    }
  };

  const supprimer = (index) => {
    const nouveauxProduits = [...newProduct];
    nouveauxProduits.splice(index, 1);
    setNewProduct(nouveauxProduits);
  };

  const modifier = (index, updatedTitle, updatedPrice) => {
    const updatedProducts = [...newProduct];
    updatedProducts[index] = { title: updatedTitle, price: updatedPrice };
    setNewProduct(updatedProducts);
  };

  return (
    <div className="home-container">
      <label htmlFor="title">Title :</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="price">Price :</label>
      <input
        type="number"
        name="price"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={ajouter}>Ajouter</button>
      {newProduct.length > 0 && (
        <table className="product-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {newProduct.map((product, index) => (
              <tr key={index}>
                <td>{product.title}</td>
                <td>{product.price} DH</td>
                <td>
                  <button onClick={() => supprimer(index)} className="delete">
                    Supprimer
                  </button>
                  <button
                    onClick={() => {
                      const updatedTitle = prompt(
                        "Enter updated title:",
                        product.title
                      );
                      const updatedPrice = prompt(
                        "Enter updated price:",
                        product.price
                      );
                      if (updatedTitle !== null && updatedPrice !== null) {
                        modifier(index, updatedTitle, updatedPrice);
                      }
                    }}
                    className="edit"
                  >
                    Modifier
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
