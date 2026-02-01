"use client";

import { memo, useMemo, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

export interface HoverRevealTextProps {
    /** The text to display */
    text: string;
    /** Font size in rem */
    fontSize?: number;
    /** Text color */
    color?: string;
    /** Blur amount for inactive characters */
    blurAmount?: number;
    /** Number of neighboring characters affected by hover */
    spreadRadius?: number;
    /** Additional CSS classes */
    className?: string;
    /** Background style */
    background?: "none" | "dark" | "gradient";
    /** Show helper text above */
    showHelperText?: boolean;
    /** Helper text content */
    helperText?: string;
}

const HoverRevealText = memo(
    ({
        text,
        fontSize = 3,
        color = "#ffffff",
        blurAmount = 8,
        spreadRadius = 5,
        className,
        background = "dark",
        showHelperText = true,
        helperText = "Glide to reveal",
    }: HoverRevealTextProps) => {
        const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

        // Split text into characters
        const characters = useMemo(() => text.split(""), [text]);

        // Calculate lerp values based on distance
        const getLerpValue = useCallback(
            (charIndex: number) => {
                if (hoveredIndex === null) return 0;

                const distance = Math.abs(charIndex - hoveredIndex);

                if (distance === 0) return 1;
                if (distance > spreadRadius) return 0;

                // Calculate sin-based interpolation
                const angle = 90 - (distance * (90 / spreadRadius));
                return Math.sin((angle * Math.PI) / 180);
            },
            [hoveredIndex, spreadRadius]
        );

        // Background styles
        const backgroundStyles = {
            none: "transparent",
            dark: "hsl(0 0% 6%)",
            gradient: "linear-gradient(135deg, hsl(0 0% 8%), hsl(0 0% 4%))",
        };

        return (
            <div
                className={cn(
                    "flex flex-col items-center justify-center gap-8 p-8",
                    className
                )}
            >
                {/* Helper text */}
                {showHelperText && (
                    <p
                        className="text-center text-lg"
                        style={{
                            background: "linear-gradient(hsl(0 0% 80%), hsl(0 0% 50%))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        {helperText}
                    </p>
                )}

                {/* Main text container */}
                <div
                    className="flex flex-nowrap rounded-xl cursor-grab"
                    style={{
                        background: backgroundStyles[background],
                        boxShadow: background !== "none" ? "0 1px hsla(0, 0%, 100%, 0.25) inset" : "none",
                    }}
                >
                    {characters.map((char, index) => {
                        const lerpValue = getLerpValue(index);
                        const scale = 0.5 + lerpValue * 0.5;
                        const blur = (1 - lerpValue) * blurAmount;
                        const transitionDuration = (1 - lerpValue + 0.2);

                        return (
                            <span
                                key={index}
                                className="inline-flex items-center justify-center outline-none"
                                style={{
                                    fontSize: `${fontSize}rem`,
                                    color: color,
                                    padding: index === 0
                                        ? `${fontSize * 1.8}rem ${fontSize * 0.33}rem ${fontSize * 1.8}rem ${fontSize * 1.6}rem`
                                        : index === characters.length - 1
                                            ? `${fontSize * 1.8}rem ${fontSize * 1.6}rem ${fontSize * 1.8}rem ${fontSize * 0.33}rem`
                                            : `${fontSize * 1.8}rem ${fontSize * 0.33}rem`,
                                }}
                                tabIndex={0}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onFocus={() => setHoveredIndex(index)}
                                onBlur={() => setHoveredIndex(null)}
                            >
                                <span
                                    style={{
                                        transform: `scale(${scale})`,
                                        filter: `blur(${blur}px)`,
                                        transition: `transform ${transitionDuration}s, filter ${transitionDuration}s`,
                                        display: 'inline-block',
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            </span>
                        );
                    })}
                </div>
            </div>
        );
    }
);

HoverRevealText.displayName = "HoverRevealText";

export { HoverRevealText };
