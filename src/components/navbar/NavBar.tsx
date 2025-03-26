import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link href="/" className="text-white text-xl font-bold">Next Playground</Link>
      <div className="relative group">
        <button className="text-white hover:text-gray-300 px-4 py-2 rounded-md focus:outline-none">
          Pages ▼
        </button>
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <a href="/suspense-vs-layout/suspense" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Suspense Example
          </a>
          <a href="/suspense-vs-layout/loading-layout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Loading Layout Example
          </a>
          <a href="/promise-modal" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Promise Modal
          </a>
        </div>
      </div>
    </div>
  </nav>
  );
}

