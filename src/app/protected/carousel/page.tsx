"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import { items } from "./items";
// Sample data for carousel items

export default function CarouselPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentItem = items[currentIndex];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Image Carousel
                </h1>
            </div>
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="relative">
                        {/* Image container with fixed height */}
                        <div className="relative h-64 sm:h-80 md:h-96">
                            <Image
                                src={currentItem.image}
                                alt={currentItem.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Navigation arrows */}
                        {currentIndex > 0 && (
                            <button
                                onClick={() => setCurrentIndex(currentIndex - 1)}
                                className={styles.leftArrow}
                                aria-label="Previous item"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        )}
                        {currentIndex < items.length - 1 && (
                            <button
                                onClick={() => setCurrentIndex(currentIndex + 1)}
                                className={styles.rightArrow}
                                aria-label="Next item"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        )}
                    </div>
                    {/* Pagination indicators */}
                    <div className={styles.paginationContainer}>
                        {items.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`${styles.paginationDot} ${index === currentIndex ? styles.active : styles.inactive
                                    }`}
                                aria-label={`Go to item ${index + 1}`}
                            />
                        ))}
                    </div>
                    {/* Content */}
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentItem.name}</h2>
                        <p className="text-gray-600">{currentItem.description}</p>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p className="text-gray-600">
                        Item {currentIndex + 1} of {items.length}
                    </p>
                </div>
            </div>
        </div>
    );
}
