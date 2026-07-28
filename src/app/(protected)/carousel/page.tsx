"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { DemoShell } from "@/components/demo/demo-shell";
import { items } from "./items";

export default function CarouselPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = items[currentIndex];

  return (
    <DemoShell
      title="Carousel"
      description="An image carousel with arrow navigation and pagination dots."
    >
      <div className="mx-auto max-w-3xl">
        <div className="bg-background-1 rounded-2xl shadow-xl overflow-hidden">
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
            <button
              onClick={() =>
                setCurrentIndex(
                  currentIndex === 0 ? items.length - 1 : currentIndex - 1
                )
              }
              className={styles.leftArrow}
              aria-label="Previous item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                setCurrentIndex(
                  currentIndex === items.length - 1 ? 0 : currentIndex + 1
                )
              }
              className={styles.rightArrow}
              aria-label="Next item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          {/* Pagination indicators */}
          <div className={styles.paginationContainer}>
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`${styles.paginationDot} ${
                  index === currentIndex ? styles.active : styles.inactive
                }`}
                aria-label={`Go to item ${index + 1}`}
              />
            ))}
          </div>
          {/* Content */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {currentItem.name}
            </h2>
            <p className="text-foreground-2">{currentItem.description}</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-foreground-2">
            Item {currentIndex + 1} of {items.length}
          </p>
        </div>
      </div>
    </DemoShell>
  );
}
