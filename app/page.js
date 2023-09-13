import StudentInfo from "./StudentInfo";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen p-12">
      {/* Add flex, min-h-screen to stretch contents to height of viewpoint 
      and p12 as padding*/}
      <div className="w-1/3">
      <h1 class="text-2xl">CPRG 306: Web Development 2 - Assignments</h1>
      </div>
      <div className="w-1/2">
      <StudentInfo />
      </div>
      <div className="w-1/6">
      <Link href="/week2">Week2</Link>
      </div>
    </main>
  )
}
