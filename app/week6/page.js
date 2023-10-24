"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import Link from "next/link";

export default function Page(){
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) =>{
        setItems([...items, newItem]);
    };

    return(
        <main className="bg-green-50">
            <h1 className="text-3xl font-bold pt-5 pl-10">🛒📃 Shopping List 💸🛍️</h1>
            <NewItem onAddItem={(newItem) => handleAddItem(newItem)} />
            <ItemList items={items} />
            <Link href="/" className="m-4">
            🔙 Home
            </Link>
        </main>
        
    )
}