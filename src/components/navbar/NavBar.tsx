'use server'

import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import CustomButton from "../buttons/dynamic-nav-button";

async function NavBar() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  const isLoggedIn = data?.user;
  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg p-4 fixed w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-green-600 text-white p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-white text-xl font-bold tracking-tight">Next<span className="text-green-400">Play</span></span>
        </Link>

        {isLoggedIn ? (
          <div className="relative group">
            <button className="flex items-center space-x-2 text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400">
              <span>Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 origin-top-right">
              <div className="py-2">
                <div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-100">Demos</div>
                <a href="/protected/suspense-vs-layout/suspense" className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-50 transition duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Suspense Example
                </a>
                <a href="/protected/suspense-vs-layout/loading-layout" className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-50 transition duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Loading Layout Example
                </a>
                <a href="/protected/promise-modal" className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-50 transition duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                  Promise Modal
                </a>
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <CustomButton text="Sign Out" style="flex w-full items-center px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-red-500 transition duration-200" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <CustomButton text="Login" style="text-white bg-slate-700 hover:bg-slate-600 px-5 py-2 rounded-full transition duration-300" />
            <CustomButton text="Sign Up" style="text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 px-5 py-2 rounded-full shadow-md transition duration-300" />
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;