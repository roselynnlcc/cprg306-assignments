import ItemList from "./item-list";
import Link from "next/link";

export default function Page(){
    return(
        <main className="bg-green-50">
            <h1 className="text-2xl font-bold p-4">Shopping List</h1>
            <ItemList />
            <Link href="/" className="m-4">
            🔙 Home
            </Link>
        </main>
    )
}