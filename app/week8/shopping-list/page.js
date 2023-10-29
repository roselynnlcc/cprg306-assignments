"use client";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import Link from "next/link";

export default function Home() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  // select item for recipe suggestion
  const handleItemSelect = (selectedItem) => {
    console.log(`Selected item: ${selectedItem.name}`);
    // clean up data here
    // replace emoji with '', split to substrings with ',' and take the first element, trim space, change to lowerCase
    const sanitizedName = selectedItem.name
      .replace(/\p{Emoji}/gu, "")
      .split(",")[0]
      .trim()
      .toLowerCase();
    console.log(`Sanitized item: ${sanitizedName}`);
    setSelectedItemName(sanitizedName);
  };
  return (
    <main className="bg-green-50 min-h-screen">
      {user ? (
        <div>
          <div className="ml-2 mb-2 p-2 justify-center">
            <h2 className="text-2xl font-bold pl-3 mr-12 border-green-200 border-y-8">
              Welcome, {user.displayName}!
              <button
                className="bg-amber-200 text-xl m-2 p-2 rounded-lg"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </h2>
          </div>

          <div className="flex ml-4">
            <div className="w-1/2">

            <NewItem onAddItem={(newItem) => handleAddItem(newItem)} />
              <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="w-1/2 h-max bg-white-50 max-w-md bg-white p-8 rounded-lg shadow-md mb-2">
              <h1 className="text-2xl text-gray-800 font-bold mb-4">
                Meal Suggestion{" "}
              </h1>
              <MealIdeas ingredient={selectedItemName} />
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 ml-4 font-semibold">
          <h2 className="text-xl">Please login to view shopping list</h2>
          <button className="bg-amber-200 text-lg mt-2 p-3 rounded-lg">
            <Link href="./">Go to Landing Page</Link>
          </button>
        </div>
      )}
    </main>
  );
}
