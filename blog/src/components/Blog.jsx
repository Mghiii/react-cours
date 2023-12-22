import React, { useEffect, useState } from "react";

export default function Blog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg overflow-hidden shadow-md"
        >
          <img
            src={product.image}
            alt=""
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p>ID: {product.id}</p>
            <p>Price: ${product.price}</p>
            <p className="mt-2">{product.description}</p>
            <div className="mt-3">
              <p className="font-semibold">Rating:</p>
              <ul className="list-none pl-0">
                <li>Rate: {product.rating.rate}</li>
                <li>Count: {product.rating.count}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
