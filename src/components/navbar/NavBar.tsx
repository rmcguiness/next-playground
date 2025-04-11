'use server'

import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import CustomButton from "../buttons/dynamic-nav-button";

async function NavBar() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  const isLoggedIn = data?.user;
  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">Next Playground</Link>
        {isLoggedIn ?
          <div className="relative group">
            <button className="text-white hover:text-gray-300 px-4 py-2 rounded-md focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
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
              <CustomButton text="Sign Out" style="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left" />
            </div>
          </div>
          :
          <div className="flex items-center gap-4">
            <CustomButton text="Login" style="text-white w-24 bg-green-900 hover:bg-green-600 px-4 py-2 rounded-md" />
            <CustomButton text="Sign Up" style="text-green-900 w-24 bg-gray-200 hover:bg-white px-4 py-2 rounded-md" />
          </div>
        }
      </div>
    </nav>
  );
}

export default NavBar;