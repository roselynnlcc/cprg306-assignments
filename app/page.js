import StudentInfo from "./StudentInfo";
import Link from "next/link";

export default function Page() {
  return (
    <main class="p-12">
      {/* Add flex, min-h-screen to stretch contents to height of viewpoint 
      and p12 as padding*/}
      <div>
      <h1 class="text-2xl">CPRG 306: Web Development 2 - Assignments</h1>
      </div>
      <div>
      <StudentInfo />
      </div>
      <div>
      <p><Link href="/week2">Week2</Link></p>
      <p><Link href="/week3">Week3</Link></p>
      <p><Link href="/week4">Week4</Link></p>
      <p><Link href="/week5">Week5</Link></p>
      </div>
    </main>
  )
}
