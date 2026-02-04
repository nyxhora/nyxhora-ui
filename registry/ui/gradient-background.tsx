"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
    position?: "left" | "center" | "right";
    intensity?: "low" | "medium" | "high";
    className?: string;
    children?: React.ReactNode;
}

export function GradientBackground({
    position = "center",
    intensity = "medium",
    className,
    blobClassName,
    children,
}: GradientBackgroundProps & { blobClassName?: string }) {
    const positionStyles = {
        left: "left-100 -translate-x-1/2",
        center: "left-1/2 -translate-x-1/2",
        right: "right-100 translate-x-1/2",
    };

    const intensityStyles = {
        low: "opacity-30 blur-[80px]",
        medium: "opacity-40 blur-[100px]",
        high: "opacity-50 blur-[120px]",
    };

    return (
        <div className={cn("absolute top-0 w-full h-full overflow-hidden pointer-events-none z-10", className)}>
            <div
                className={cn(
                    "absolute top-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/40 to-blue-500/40 mix-blend-screen",
                    positionStyles[position],
                    intensityStyles[intensity],
                    blobClassName
                )}
            />
            {children}
        </div>
    );
}
