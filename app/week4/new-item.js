"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");
  const [itemCreated, setItemCreated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "Added item: " +
        name +
        ", quantity: " +
        quantity +
        ", category: " +
        category
    );

    const newItem = {
      name,
      quantity,
      category,
    };

    console.log(newItem); // log the newly add item to console

    setItemCreated(true);

    // reset the form
      setName("");
      setQuantity(1);
      setCategory("");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <main>
      <div className="min-h-screen flex items-start justify-center">
        <div className="w-full max-w-md bg-white m-20 p-8 rounded-lg shadow-md">
          <h1 className="text-3xl text-gray-800 font-bold mb-8">
            Create New Item
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Item name"
              required
              onChange={handleNameChange}
              value={name}
              className="mt-2 mb-6 p-2 w-full rounded-lg border-2 border-emerald-100 text-black bg-gray-100 focus:bg-green-100"
            />

            <div className="flex flex-row justify-between mb-4">
              <input
                type="number"
                min="1"
                max="100"
                required
                onChange={handleQuantityChange}
                value={quantity}
                className="w-20 mt-1 p-2 rounded-lg border-2 border-emerald-100 text-black bg-gray-100 focus:bg-green-100"
              />

              <select
                className="ml-1 border-2 border-emerald-100  bg-gray-100  focus:bg-emerald-100 p-2 rounded-lg"
                onChange={handleCategoryChange} required value={category}
              >
                <option value disabled>
                  Category
                </option>
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen foods">Frozen Foods</option>
                <option value="canned goods">Canned Goods</option>
                <option value="dry goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 text-lg bg-teal-600 hover:bg-teal-500 rounded-md text-white"
            >
              +
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
