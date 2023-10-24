import NewItem from "./new-item";
import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-green-50">
      <NewItem />
      <Link href="/" className="m-4">
        🔙 Home
      </Link>
    </main>
  );
}
