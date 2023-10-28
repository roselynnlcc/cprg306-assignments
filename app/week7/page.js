"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import Link from "next/link";


export default function Page(){
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) =>{
        setItems([...items, newItem]);
    };

    // select item for recipe suggestion
    const handleItemSelect = (selectedItem) =>{
    console.log(`Selected item: ${selectedItem.name}`);
    // clean up data here
    // replace emoji with '', split to substrings with ',' and take the first element, trim space, change to lowerCase
    const sanitizedName = selectedItem.name.replace(/\p{Emoji}/gu, '').split(',')[0].trim().toLowerCase();
    console.log(`Sanitized item: ${sanitizedName}`);
    setSelectedItemName(sanitizedName);


  }
    return(
        <main className="bg-green-50">
            <h1 className="text-3xl font-bold pt-5 pl-10">🛒📃 Shopping List 💸🛍️</h1>
            <div className="flex flex-row">
                <div>
                <NewItem onAddItem={(newItem) => handleAddItem(newItem)} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="flex mt-2 flex-col">
                    <div className="bg-white-50 w-full max-w-md bg-white p-8 rounded-lg shadow-md m-4 mb-2">
                        <h1 className="text-2xl text-gray-800 font-bold mb-4">Meal Suggestion </h1>
                        <MealIdeas ingredient={selectedItemName} />
                    </div>
                </div>
            </div>
            <Link href="/" className="m-4">
            🔙 Home
            </Link>
        </main>
    )
}