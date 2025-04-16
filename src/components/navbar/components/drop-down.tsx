"use client"

import { useState } from "react";

export default function DropDown({ label, children }: { label: string, children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button className="flex justify-between items-center w-full px-4 py-2 text-sm text-gray-500 border-b border-gray-100 cursor-pointer hover:bg-gray-50"
                onClick={(e) => {
                    setIsOpen(!isOpen);
                    e.currentTarget.querySelector('svg')?.classList.toggle('rotate-180');
                }}
            >
                <span>{label}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`${isOpen ? 'block' : 'hidden'}`}>
                {children}
            </div>
        </div>
    )
}