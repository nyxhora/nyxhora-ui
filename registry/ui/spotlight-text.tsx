"use client";

import React, { useRef } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightTextProps {
    text: string;
    className?: string;
    containerClassName?: string;
    spotlightColors?: string[];
    enableHover?: boolean; // If true, only active on hover
}

export function SpotlightText({
    text,
    className,
    containerClassName,
    spotlightColors = ["#3b82f6", "#ef4444", "#22c55e"], // Default: Blue, Red, Green
    enableHover = false,
}: SpotlightTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for the spotlight movement
    const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };

    // Create multiple springs for the stagger effect
    const springX1 = useSpring(mouseX, springConfig);
    const springY1 = useSpring(mouseY, springConfig);

    const springX2 = useSpring(mouseX, { ...springConfig, damping: 35 });
    const springY2 = useSpring(mouseY, { ...springConfig, damping: 35 });

    const springX3 = useSpring(mouseX, { ...springConfig, damping: 45 });
    const springY3 = useSpring(mouseY, { ...springConfig, damping: 45 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className={cn(
                "relative overflow-hidden flex items-center justify-center bg-black min-h-[300px] w-full cursor-none group",
                containerClassName
            )}
        >
            {/* Spotlight Shapes Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Shape 3 (Slowest / Largest) */}
                <motion.div
                    style={{
                        x: springX3,
                        y: springY3,
                        translateX: "-50%",
                        translateY: "-50%",
                        backgroundColor: spotlightColors[2] || spotlightColors[0]
                    }}
                    className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full blur-[80px] opacity-60"
                />
                {/* Shape 2 (Medium) */}
                <motion.div
                    style={{
                        x: springX2,
                        y: springY2,
                        translateX: "-50%",
                        translateY: "-50%",
                        backgroundColor: spotlightColors[1] || spotlightColors[0]
                    }}
                    className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full blur-[60px] opacity-80"
                />
                {/* Shape 1 (Fastest / Smallest) */}
                <motion.div
                    style={{
                        x: springX1,
                        y: springY1,
                        translateX: "-50%",
                        translateY: "-50%",
                        backgroundColor: spotlightColors[0]
                    }}
                    className="absolute top-0 left-0 w-[120px] h-[120px] rounded-full blur-[40px] opacity-100"
                />
            </div>

            {/* Text Mask Layer */}
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black mix-blend-screen pointer-events-none">
                <h1
                    className={cn(
                        "text-9xl font-black text-white tracking-tighter text-center uppercase select-none",
                        className
                    )}
                    style={{
                        color: "black",
                        backgroundColor: "white",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    {text}
                </h1>
            </div>

            {/* Optional Cursor Follower */}
            <motion.div
                style={{
                    x: springX1,
                    y: springY1,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                className="absolute top-0 left-0 w-4 h-4 bg-white rounded-full z-50 pointer-events-none mix-blend-difference"
            />
        </div>
    );
}
