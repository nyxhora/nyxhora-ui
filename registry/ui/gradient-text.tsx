import { cn } from "@/lib/utils";
import React from "react";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    /**
     * Optional custom colors for the gradient.
     * If provided, overrides the default tailwind classes for colors.
     * Format: ["startColor", "endColor", "middleColor?..."]
     */
    colors?: string[];

    /**
     * Animation speed in seconds. If 0, no animation.
     * Default: 0
     */
    animationSpeed?: number;

    /**
     * Show the gradient as a background behind the text (like a highlight)?
     * Default: false (text gradient)
     */
    showBorder?: boolean;
}

export function GradientText({
    children,
    className,
    colors,
    animationSpeed = 0,
    showBorder = false,
    ...props
}: GradientTextProps) {
    const gradientStyle = colors
        ? {
            backgroundImage: `linear-gradient(to bottom, ${colors.join(", ")})`,
        }
        : {};

    const animationStyle = animationSpeed > 0
        ? {
            backgroundSize: "200% 200%",
            animation: `gradient-text-anim ${animationSpeed}s ease infinite`,
        }
        : {};

    return (
        <span
            className={cn(
                "pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold text-transparent dark:from-white dark:to-slate-900/10",
                animationSpeed > 0 && "animate-gradient",
                className
            )}
            style={{
                ...gradientStyle,
                ...animationStyle,
            }}
            {...props}
        >
            {children}
        </span>
    );
}
