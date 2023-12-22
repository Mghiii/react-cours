import React, { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [productList, setProductList] = useState([]);
  const [searchInput, setSearchInput] = useState("");


  const displayProducts = () => {
    let filteredProducts = productList;
    filteredProducts = filteredProducts.filter((product) => {
      return (
        product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.id.toString().startsWith(searchInput) ||
        product.description.toLowerCase().includes(searchInput.toLowerCase())
      );
    });
  
    return filteredProducts.map((product) => {
      return <Product key={product.id} product={product} />;
    });
  };
  

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProductList(data));
  };
  const getCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategoryList(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = document.querySelector("#search").value;
    setSearchInput(searchValue);
  };

  return (
    <>
      <div className="overflow-x-auto my-3 mx-auto w-full">
        <h2 className="text-2xl font-bold mb-4">Search :</h2>
        <form action="">
          <div className="mt-4 flex items-center justify-center">
            <label className="mr-2">Search:</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
              placeholder="Enter text..."
              id="search"
            />
            <input
              type="submit"
              name=""
              id=""
              value="search"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
              onClick={handleSearch}
            />
          </div>
          <div className="mt-4 flex items-center justify-center">
          </div>
        </form>
        <h1 className="text-4xl font-bold mb-4">List de produits :</h1>
        <div className="shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Id
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody>{displayProducts()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}
