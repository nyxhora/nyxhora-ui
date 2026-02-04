"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface VariableShadowTextProps {
    className?: string;
    text: string;
    shadowColors?: string[];
    strokeColor?: string;
    reverse?: boolean; // If true, default state is "hovered" style (thin/flat), hover is "expanded".
    as?: React.ElementType;
}

export function VariableShadowText({
    className,
    text,
    shadowColors = [
        "#07bccc",
        "#e601c0",
        "#e9019a",
        "#f40468",
        "#482896"
    ],
    strokeColor = "#d6f4f4",
    reverse = false,
    as: Tag = "h1",
}: VariableShadowTextProps) {

    // Define the "Expanded" state (Heavy weight, Italic, deep shadows)
    const expandedStyle = {
        fontVariationSettings: '"wght" 900, "ital" 1',
        textShadow: `
      10px 10px 0px ${shadowColors[0]},
      15px 15px 0px ${shadowColors[1]},
      20px 20px 0px ${shadowColors[2]},
      25px 25px 0px ${shadowColors[3]},
      45px 45px 10px ${shadowColors[4]}
    `,
    };

    // Define the "Flat" state (Light weight, upright, no shadow)
    const flatStyle = {
        fontVariationSettings: '"wght" 100, "ital" 0',
        textShadow: "none",
    };

    return (
        <Tag
            className={cn(
                "cursor-pointer text-transparent transition-all duration-500 ease-in-out select-none",
                className
            )}
            style={{
                // Use a variable font family if available, otherwise fallback
                fontFamily: "'Inter', sans-serif",
                // We set the stroke here as it's not always standard Tailwind
                WebkitTextStroke: `2px ${strokeColor}`, // Reduced to 2px for better scaling on smaller fonts
                fontSize: "inherit", // Inherit by default, can be overridden by className
                ...(reverse ? flatStyle : expandedStyle),
            }}
        // We use a functional approach for hover via raw CSS class injection or inline styles
        // But standard CSS :hover pseudo-class is best.
        // Since we are using dynamic values, we might use onMouseEnter/Leave or CSS variables.
        // Let's use CSS variables for cleanliness + Tailwind 'group' logic or just generic style tag?
        // Actually simpler: React State for hover? Or CSS variables.
        // Let's use a specialized style block or data-attributes to handle the hover logic cleanly without JS state re-renders if possible.
        // But wait, user asked for customization. CSS variables are good.
        // OR just use 'hover:' classes? No, 'font-variation-settings' isn't in standard Tailwind.
        // State is safest for dynamic styles.
        >
            <span className="group relative block"
                style={{
                    // Wrapper to capture hover locally if needed, or we can just make the Tag interactive.
                    // But we need to switch between `expandedStyle` and `flatStyle` on hover.
                }}
            >
                {/* We will rely on CSS `group-hover` logic by injecting variables? 
             No, let's just use a <style> jsx for this specific instance or `onMouseEnter`.
             `onMouseEnter` is fine for this single component pattern.
         */}
                <InteractiveContent
                    text={text}
                    expandedStyle={expandedStyle}
                    flatStyle={flatStyle}
                    reverse={reverse}
                />
            </span>
        </Tag>
    );
}

// Helper to handle the hover state logic without re-rendering the parent too much
function InteractiveContent({ text, expandedStyle, flatStyle, reverse }: any) {
    const [isHovered, setIsHovered] = React.useState(false);

    const currentStyle = reverse
        ? (isHovered ? expandedStyle : flatStyle)
        : (isHovered ? flatStyle : expandedStyle);

    return (
        <span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                ...currentStyle,
                transition: "all 0.5s ease"
            }}
            className="block"
        >
            {text}
        </span>
    );
}
