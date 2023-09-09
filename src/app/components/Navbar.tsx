import Link from "next/link"
import Search from "./Search"

export default function Navbar() {
  return (
    <header className="bg-sky-950 sticky top-0 z-10 mb-1">
      <nav className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center p-4 font-bold max-w-6xl mx-auto text-white">
        <h1 className="text-2xl sm:text-3xl text-center whitespace-nowrap">
          <Link href="/">Image Gallery</Link>
        </h1>
        <Search />
      </nav>
    </header>
  )
}
