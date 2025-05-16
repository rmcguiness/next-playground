'use server'

import Link from "next/link";
import CustomButton from "@/components/buttons/dynamic-nav-button";
import DropDown from "./components/drop-down";
import { getUser } from "@/actions/auth-actions";
import { ThemeSwitcher } from "../theme-switcher/theme-switcher";

export default async function NavBar() {
  const { data } = await getUser();
  const isLoggedIn = data?.user;
  return (
    <nav className="bg-gradient-to-f from-slate-900 to-slate-800 shadow-lg p-4 fixed w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-green-600 text-white p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-white text-xl font-bold tracking-tight hidden md:inline">Next<span className="text-green-400">Playground</span></span>
        </Link>
        <div className="flex items-center space-x-3">
          <ThemeSwitcher />
          {isLoggedIn ? (
            <div className="relative group">
              <button className="flex items-center space-x-2 text-white bg-slate-700 hover:bg-slate-600 px-6 py-2 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400">
                <span>Menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 origin-top-right">
                <div className="pt-2">
                  {/* Tech Demos Section */}
                  <DropDown label="Tech Demos">
                    <a href="/suspense-vs-layout/suspense" className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-50 transition duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Suspense Loading
                    </a>
                    <a href="/suspense-vs-layout/skeleton-loading" className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-50 transition duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Skeleton Loading
                    </a>
                    <a href="/promise-modal" className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-50 transition duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                      </svg>
                      Promise Modal
                    </a>
                    <a href="/sticky-components" className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-50 transition duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
                      </svg>

                      Sticky Components
                    </a>
                    <a href="/carousel" className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-50 transition duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                      </svg>
                      Carousel
                    </a>
                    <a href="/test-form" className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-50 transition duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Next.js Quiz
                    </a>
                  </DropDown>
                  <DropDown label="Three.js Demos">
                    <a href="/threejs/demo1" className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-50 transition duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Demo 1
                    </a>
                  </DropDown>
                  {/* Portfolios Section */}
                  <DropDown label="Portfolios">
                    <a href="/portfolios/demo1" className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-50 transition duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Resume
                    </a>
                  </DropDown>

                  <div className="border-t border-gray-100">
                    <CustomButton text="Sign Out" className="flex w-full items-center px-4 py-2 text-gray-800 hover:bg-red-50 hover:text-red-500 transition duration-200 rounded-b-lg" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <CustomButton text="Login" endpt="/auth/login" className="text-yin bg-slate-700 hover:bg-slate-600 px-5 py-2 rounded-full transition duration-300" />
              <CustomButton text="Sign Up" endpt="/auth/signup" className="text-yin bg-linear-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 px-5 py-2 rounded-full shadow-md transition duration-300" />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
