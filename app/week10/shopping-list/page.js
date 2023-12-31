"use client";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import {
  getItems,
  addItem,
  deleteItem,
} from "../_services/shopping-list-service.js";

export default function Home() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleAddItem = async (newItem) => {
    try {
      if (user) {
        const newItemId = await addItem(user.uid, newItem);
        newItem.id = newItemId;
        setItems([...items, newItem]);
      }
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      if (user) {
        await deleteItem(user.uid, itemId);
        const updatedItems = items.filter((item) => item.id !== itemId);
        setItems(updatedItems);
      }
    } catch (error) {
      console.error("Error deleting item: ", error);
    }
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

  const loadItems = async () => {
    try {
      if (user) {
        const shoppingListItems = await getItems(user.uid);
        setItems(shoppingListItems);
      }
    } catch (error) {
      console.error("Error loading items: ", error);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

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
              <ItemList
                items={items}
                onItemSelect={handleItemSelect}
                onDeleteItem={handleDeleteItem}
              />
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
