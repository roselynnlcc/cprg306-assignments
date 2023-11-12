import StudentInfo from "app/StudentInfo.js";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen p-24">
        {/* Add flex, min-h-screen to stretch contents to height of viewpoint 
            and p24 as padding*/}
      <div className="w-2/6">
        <h1 className="text-2xl">My Shopping List</h1>
      </div>
      <div className="w-1/2">
        <StudentInfo />
      </div>
      <Link href="/" className="m-4">
        🔙 Home
      </Link>
    </main>
  )
}