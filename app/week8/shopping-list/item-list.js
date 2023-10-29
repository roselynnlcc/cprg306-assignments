"use client";
import Item from "./item.js";
import { useState } from "react";

function renderSortButtons(setSortBy) {
  return (
    <div className="flex items-center m-2">
      <label className="ml-4 font-medium">Sort by: </label>
      <button
        id="name"
        onClick={(e) => setSortBy(e.target.id)}
        className="bg-emerald-200 m-2 p-2 w-28 rounded-lg"
      >
        Name
      </button>
      <button
        id="category"
        onClick={(e) => setSortBy(e.target.id)}
        className="bg-emerald-300 m-2 p-2 w-28 rounded-lg"
      >
        Category
      </button>
      <button
        id="grouped category"
        onClick={(e) => setSortBy(e.target.id)}
        className="bg-emerald-400 m-2 p-2 w-40 rounded-lg"
      >
        Grouped Category
      </button>
    </div>
  );
}

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");



  // map the item
  const itemList = items.map((item) => ({
      key: item.id,
      name: item.name,
      quantity: item.quantity,
      category: item.category
  }));

  // sort the items by name or by category
  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }

  if (sortBy === "grouped category") {
    items.sort((a, b) => a.category.localeCompare(b.category));

    const groupedItemsByCategory = items.reduce((grouped, item) => {
      const category = item.category;
      if (grouped[category] == null) grouped[category] = [];
      grouped[category].push(item);
      return grouped;
    }, {});

    return (
      <>
        {renderSortButtons(setSortBy)}
        {Object.keys(groupedItemsByCategory).map((category) => (
          <div key={category}>
            <h2 className="capitalize font-medium font-sans text-xl pl-1 m-4 mt-8 border border-rose-400 bg-fuchsia-100 max-w-lg">{category}</h2>
            {groupedItemsByCategory[category].map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={() => onItemSelect(item)}
              />
            ))}
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {renderSortButtons(setSortBy)}
      {items.map((item, index) => (
  <Item
    key={item.id}
    name={item.name}
    quantity={item.quantity}
    category={item.category}
    onSelect={() => onItemSelect(item)}
  />
))}

    </>
  );
}
