"use client";

import { memo, useState } from "react";
import { cn } from "@/lib/utils";

export interface RainbowButtonProps {
    /** Button text */
    children: React.ReactNode;
    /** Click handler */
    onClick?: () => void;
    /** Whether the button is disabled */
    disabled?: boolean;
    /** Button size */
    size?: "sm" | "md" | "lg";
    /** Additional CSS classes */
    className?: string;
    /** Border width in pixels */
    borderWidth?: number;
    /** Animation duration in seconds */
    animationDuration?: number;
}

const RainbowButton = memo(
    ({
        children,
        onClick,
        disabled = false,
        size = "md",
        className,
        borderWidth = 1.5,
        animationDuration = 3,
    }: RainbowButtonProps) => {
        const [isHovered, setIsHovered] = useState(false);
        const [isPressed, setIsPressed] = useState(false);

        const sizeStyles = {
            sm: { padding: "0.5em 0.8em", fontSize: "14px", borderRadius: "6px" },
            md: { padding: "0.8em 1.2em", fontSize: "18px", borderRadius: "8px" },
            lg: { padding: "1em 1.5em", fontSize: "22px", borderRadius: "10px" },
        };

        const currentSize = sizeStyles[size];

        return (
            <button
                onClick={onClick}
                disabled={disabled}
                className={cn(
                    "relative bg-transparent border-0 cursor-pointer",
                    disabled && "opacity-50 cursor-not-allowed",
                    className
                )}
                style={{
                    transform: `scale(${isPressed ? 0.98 : isHovered ? 1.05 : 1})`,
                    transition: `transform 0.2s cubic-bezier(.76,-0.25,.51,1.13)`,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false);
                    setIsPressed(false);
                }}
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => setIsPressed(false)}
            >
                <div
                    className="relative font-semibold"
                    style={{
                        padding: currentSize.padding,
                        fontSize: currentSize.fontSize,
                        borderRadius: currentSize.borderRadius,
                        background: "hsl(0, 0%, 0%)",
                    }}
                >
                    {/* Rainbow text */}
                    <span
                        className="relative z-10"
                        style={{
                            background: `linear-gradient(
                to right,
                #ffffff,
                #ffffff,
                #00ffff,
                #0000ff,
                #8000ff,
                #ff66b2,
                #ff0000,
                #ffff00,
                #bfff00,
                #ffffff,
                #ffffff
              )`,
                            backgroundSize: "900%",
                            backgroundPosition: `${isHovered ? 0 : 100}% 0%`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "0.15ch",
                            transition: `background-position ${animationDuration}s ease`,
                        }}
                    >
                        {children}
                    </span>

                    {/* Rainbow border */}
                    <div
                        className="absolute inset-0 -z-10"
                        style={{
                            top: `-${borderWidth}px`,
                            left: `-${borderWidth}px`,
                            width: `calc(100% + ${borderWidth * 2}px)`,
                            height: `calc(100% + ${borderWidth * 2}px)`,
                            borderRadius: `calc(${currentSize.borderRadius} + 1px)`,
                            background: `linear-gradient(
                to right,
                #ffffff,
                #ffffff,
                #00ffff,
                #0000ff,
                #8000ff,
                #ff66b2,
                #ff0000,
                #ffff00,
                #bfff00,
                #ffffff,
                #ffffff
              )`,
                            backgroundSize: "900%",
                            backgroundPosition: `${isHovered ? 0 : 100}% 0%`,
                            opacity: isHovered ? 1 : 0.3,
                            transition: `background-position ${animationDuration}s ease, opacity 0.3s ease`,
                        }}
                    />

                    {/* Glow effect */}
                    <div
                        className="absolute inset-0 -z-20"
                        style={{
                            background: isHovered
                                ? `linear-gradient(
                    to right,
                    #ffffff,
                    #ffffff,
                    #00ffff,
                    #0000ff,
                    #8000ff,
                    #ff66b2,
                    #ff0000,
                    #ffff00,
                    #bfff00,
                    #ffffff,
                    #ffffff
                  )`
                                : "transparent",
                            backgroundSize: "900%",
                            backgroundPosition: `${isHovered ? 0 : 100}% 0%`,
                            filter: `blur(${isHovered ? (isPressed ? 15 : 30) : 0}px)`,
                            opacity: isHovered ? 0.3 : 0,
                            transition: `background-position ${animationDuration}s ease, filter 0.3s ease, opacity 0.3s ease`,
                        }}
                    />
                </div>
            </button>
        );
    }
);

RainbowButton.displayName = "RainbowButton";

export { RainbowButton };
