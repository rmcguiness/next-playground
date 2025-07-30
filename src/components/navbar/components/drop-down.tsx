"use client"

import { useState, useEffect } from "react";

export default function DropDown({ label, children }: { label: string, children: React.ReactNode }) {
    // Create a unique key for this dropdown based on the label
    const storageKey = `dropdown-${label.replace(/\s+/g, '-').toLowerCase()}`;

    // Initialize state with null, we'll set it after checking localStorage
    const [isOpen, setIsOpen] = useState<boolean | null>(null);

    // On component mount, check localStorage for saved state
    useEffect(() => {
        // Get saved state from localStorage
        const savedState = localStorage.getItem(storageKey);
        // Set initial state from localStorage or default to false
        setIsOpen(savedState === 'true');
    }, [storageKey]);

    // Handle state changes and save to localStorage
    const toggleDropdown = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        localStorage.setItem(storageKey, newState.toString());
    };

    // Only render after we've checked localStorage
    if (isOpen === null) return null;

    return (
        <div className="relative">
            <button className="flex justify-between items-center w-full px-4 py-2 text-sm text-foreground border-b border-gray-100 cursor-pointer hover:bg-background-2"
                onClick={(e) => {
                    toggleDropdown();
                    e.currentTarget.querySelector('svg')?.classList.toggle('rotate-180');
                }}
            >
                <span>{label}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`${isOpen ? 'block' : 'hidden'}`}>
                {children}
            </div>
        </div>
    )
}