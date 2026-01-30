"use client";

import { useState, useEffect, useRef } from "react";

interface MenuDropdownProps {
  children: React.ReactNode;
}

export default function MenuDropdown({ children }: MenuDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when popover is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 text-foreground bg-background-1 hover:bg-background-2 px-4 py-2 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/50"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {/* Hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
          <span className="hidden sm:inline">Menu</span>
        </button>

        {/* Popover menu */}
        <div
          className={`fixed left-4 top-20 w-72 bg-background border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl transition-all duration-300 transform z-50 ${
            isOpen
              ? "opacity-100 visible translate-y-0 scale-100"
              : "opacity-0 invisible -translate-y-4 scale-95 pointer-events-none"
          }`}
        >
          <div className="max-h-[calc(100vh-6rem)] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

