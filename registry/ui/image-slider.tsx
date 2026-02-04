"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ImageSliderProps {
    images: string[] | { src: string; alt: string }[];
    showControls?: boolean;
    showThumbnails?: boolean;
    autoplay?: boolean;
    autoplayInterval?: number;
    className?: string;
}

export function ImageSlider({
    images,
    showControls = true,
    showThumbnails = true,
    autoplay = false,
    autoplayInterval = 3000,
    className,
}: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const normalizedImages = images.map((img) =>
        typeof img === "string" ? { src: img, alt: "" } : img
    );

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % normalizedImages.length);
    }, [normalizedImages.length]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? normalizedImages.length - 1 : prevIndex - 1
        );
    }, [normalizedImages.length]);

    // Autoplay logic
    useEffect(() => {
        if (autoplay && !isHovered) {
            intervalRef.current = setInterval(handleNext, autoplayInterval);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [autoplay, autoplayInterval, isHovered, handleNext]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowLeft") {
                handlePrev();
            } else if (event.key === "ArrowRight") {
                handleNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleNext, handlePrev]);

    return (
        <div
            className={cn(
                "relative flex flex-col w-full max-w-4xl aspect-video mx-auto overflow-hidden rounded-lg bg-black/10 shadow-xl",
                className
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Main Image Display */}
            <div className="relative flex-grow w-full h-full overflow-hidden">
                {normalizedImages.map((image, index) => (
                    <div
                        key={index}
                        className={cn(
                            "absolute inset-0 transition-opacity duration-500 ease-in-out",
                            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                        )}
                    >
                        {/* Using standard img for portability, can be swapped for NextImage if configured */}
                        <img
                            src={image.src}
                            alt={image.alt || `Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}

                {/* Controls */}
                {showControls && (
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors backdrop-blur-sm"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors backdrop-blur-sm"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </>
                )}
            </div>

            {/* Thumbnails Navigation */}
            {showThumbnails && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-2xl">
                    <div className="flex justify-center gap-2 p-2 bg-black/40 backdrop-blur-md rounded-xl overflow-x-auto no-scrollbar">
                        {normalizedImages.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={cn(
                                    "relative flex-shrink-0 w-16 h-10 rounded-md overflow-hidden transition-all duration-300 border-2",
                                    index === currentIndex
                                        ? "border-primary scale-110 opacity-100 shadow-lg"
                                        : "border-transparent opacity-60 hover:opacity-100"
                                )}
                                aria-label={`Go to slide ${index + 1}`}
                                aria-current={index === currentIndex}
                            >
                                <img
                                    src={image.src}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
