import React from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct({ products }) {
  const { id } = useParams();

  const produit = products.find((item) => item.id === id);

  if (!produit) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">
            Product not found
          </h1>
          <p className="text-gray-600">
            Product with ID <span className="font-semibold">{id}</span> does not
            exist
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{produit.name}</h1>
          <p className="text-gray-600 mb-4">{produit.price}</p>
          <img
            src={produit.image}
            alt={produit.name}
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
