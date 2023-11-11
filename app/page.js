import StudentInfo from "./StudentInfo";
import Link from "next/link";

export default function Page() {
  return (
    <main class="p-12 font-mono bg-violet-50 min-h-screen">
      {/* Add flex, min-h-screen to stretch contents to height of viewpoint 
      and p12 as padding*/}
      <div className>
      <h1 className="m-2 text-2xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      </div>
      <div className="m-2">
      <StudentInfo />
      </div>
      <div className="m-2 text-lg">
      <p><Link href="/week2" className="hover:text-red-500 hover:font-bold">Week2</Link></p>
      <p><Link href="/week3" className="hover:text-orange-500 hover:font-bold">Week3</Link></p>
      <p><Link href="/week4" className="hover:text-amber-500 hover:font-bold">Week4</Link></p>
      <p><Link href="/week5" className="hover:text-lime-600 hover:font-bold">Week5</Link></p>
      <p><Link href="/week6" className="hover:text-teal-500 hover:font-bold">Week6</Link></p>
      <p><Link href="/week7" className="hover:text-blue-500 hover:font-bold">Week7</Link></p>
      <p><Link href="/week8" className="hover:text-indigo-500 hover:font-bold">Week8</Link></p>
      <p><Link href="/week10" className="hover:text-violet-500 hover:font-bold">week10</Link></p>
      </div>
    </main>
  )
}
