'use client'

import { useEffect, useRef, useState } from 'react'

export default function StickyComponentsPage() {
    const [scrollPosition, setScrollPosition] = useState(0)
    const rightColumnRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Sticky Components Demo</h1>
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Column - Takes up less than half the page and sticks when scrolling */}
                <div className="md:w-2/5 lg:w-1/3">
                    <div className="flex flex-col md:h-[calc(100vh-7rem)] sticky top-20">
                        {/* Main sticky content */}
                        <div className="bg-white rounded-lg shadow-lg p-6 flex-col">
                            <h2 className="text-xl font-semibold mb-4">Sticky Left Column</h2>
                            <p className="text-gray-600 mb-4">
                                This column will stick to the viewport as you scroll down the page.
                            </p>
                            <div className="bg-gray-100 p-4 rounded-md mb-4">
                                <p className="font-medium">Current scroll position:</p>
                                <p className="text-green-600 font-mono">{scrollPosition}px</p>
                            </div>
                            <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-250px)]">
                                {/* Your navigation sections */}
                                <div className="bg-gray-100 p-4 rounded-md">
                                    <h3 className="font-medium mb-2">Navigation</h3>
                                    <ul className="space-y-2">
                                        <li className="hover:text-green-600 cursor-pointer">Section 1</li>
                                        <li className="hover:text-green-600 cursor-pointer">Section 2</li>
                                        <li className="hover:text-green-600 cursor-pointer">Section 3</li>
                                        <li className="hover:text-green-600 cursor-pointer">Section 4</li>
                                    </ul>
                                </div>
                                {/* Repeat your other navigation sections... */}
                            </div>
                        </div>

                        {/* Information section at bottom */}
                        <div className="bg-gray-100 p-4 rounded-md mt-4 md:mt-auto  shadow-lg">
                            <h3 className="font-medium mb-2">Information</h3>
                            <p className="text-sm text-gray-600">
                                This is a demonstration of sticky positioning with React and Tailwind CSS.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Very long content */}
                <div className="md:w-3/5 lg:w-2/3" ref={rightColumnRef}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-6">Long Content Column</h2>

                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="mb-12">
                                <h3 className="text-xl font-medium mb-4">Section {index + 1}</h3>
                                <div className="prose max-w-none">
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
                                        Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus
                                        rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
                                    </p>
                                    <p className="mb-4">
                                        Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                                        Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere.
                                        Praesent id metus massa, ut blandit odio.
                                    </p>
                                    <p className="mb-4">
                                        Proin quis tortor orci. Etiam at risus et justo dignissim congue.
                                        Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu
                                        ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus.
                                    </p>
                                    {index % 2 === 0 && (
                                        <div className="bg-gray-100 p-4 rounded-md my-4">
                                            <h4 className="font-medium mb-2">Important Note</h4>
                                            <p className="text-sm">
                                                This is an important note that highlights key information in this section.
                                                Pay attention to how the left sidebar remains visible as you scroll through this content.
                                            </p>
                                        </div>
                                    )}
                                    <p className="mb-4">
                                        Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
                                        Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                                        Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
