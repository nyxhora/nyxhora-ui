"use client";

import React, { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ImageGridItem {
    id: string | number;
    src: string;
    alt: string;
}

interface ImageGridProps {
    items: ImageGridItem[];
    className?: string;
    layout?: "hero-left" | "hero-right" | "hero-top";
    enableSwapping?: boolean;
}

export function ImageGrid({
    items,
    className,
    layout = "hero-left",
    enableSwapping = true,
}: ImageGridProps) {
    const [activeItems, setActiveItems] = useState(items);

    const handleItemClick = (index: number) => {
        if (!enableSwapping) return;
        if (index === 0) return; // Clicking hero does nothing

        const newItems = [...activeItems];
        // Swap the clicked item with the hero (index 0)
        const temp = newItems[0];
        newItems[0] = newItems[index];
        newItems[index] = temp;

        setActiveItems(newItems);
    };

    return (
        <LayoutGroup>
            <div
                className={cn(
                    "grid gap-4 w-full max-w-6xl mx-auto p-4",
                    // Default grid layouts based on choice
                    layout === "hero-left" && "grid-cols-1 md:grid-cols-4 md:grid-rows-2",
                    layout === "hero-right" && "grid-cols-1 md:grid-cols-4 md:grid-rows-2",
                    layout === "hero-top" && "grid-cols-2 md:grid-cols-4",
                    className
                )}
            >
                {activeItems.map((item, index) => {
                    const isHero = index === 0;

                    return (
                        <motion.div
                            layoutId={String(item.id)}
                            key={item.id}
                            onClick={() => handleItemClick(index)}
                            className={cn(
                                "relative overflow-hidden rounded-xl cursor-pointer group",
                                enableSwapping && !isHero && "hover:opacity-90 transition-opacity",

                                // Hero Layout Logic
                                isHero &&
                                layout === "hero-left" &&
                                "md:col-span-2 md:row-span-2 min-h-[300px]",

                                isHero &&
                                layout === "hero-right" &&
                                "md:col-span-2 md:row-span-2 md:order-last min-h-[300px]",

                                isHero &&
                                layout === "hero-top" &&
                                "col-span-2 md:col-span-4 min-h-[300px]",

                                // Standard Item Logic
                                !isHero && "col-span-1 min-h-[150px]"
                            )}
                            transition={{
                                layout: { duration: 0.4, type: "spring", bounce: 0.2 },
                            }}
                        >
                            <motion.img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-full object-cover"
                                layoutId={`img-${item.id}`} // Sync image movement
                            />

                            {/* Optional overlay hint for minimal design */}
                            {!isHero && enableSwapping && (
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </LayoutGroup>
    );
}
