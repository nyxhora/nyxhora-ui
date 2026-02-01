"use client";

import { memo, useMemo } from "react";
import { cn } from "@/lib/utils";

export interface ColorDripProps {
    /** Number of drip lines */
    lineCount?: number;
    /** Color preset for the drip effect */
    colorScheme?: "rainbow" | "neon" | "pastel" | "fire" | "ocean" | "mono" | "custom";
    /** Custom colors for lines (when colorScheme is "custom") */
    customColors?: string[];
    /** Animation speed multiplier */
    speed?: number;
    /** Height of the drip trail */
    dripHeight?: number;
    /** Width of each line in pixels */
    lineWidth?: number;
    /** Background color */
    backgroundColor?: string;
    /** Width of the container (percentage or width value) */
    containerWidth?: string;
    /** Show static line behind the drip */
    showStaticLines?: boolean;
    /** Static line color */
    staticLineColor?: string;
    /** Additional CSS classes */
    className?: string;
    /** Direction of the drip animation */
    direction?: "down" | "up";
    /** Stagger delay between lines (in seconds) */
    staggerDelay?: number;
}

const colorPresets = {
    rainbow: ["#FF4500", "#32CD32", "#1E90FF", "#FFD700", "#8A2BE2", "#20B2AA", "#DC143C", "#00FA9A", "#FF1493", "#00BFFF"],
    neon: ["#FF00FF", "#00FFFF", "#FF0080", "#00FF00", "#FFFF00", "#FF3300", "#00FF80", "#8000FF", "#FF8000", "#0080FF"],
    pastel: ["#FFB5E8", "#B5DEFF", "#E7FFAC", "#FFE5B4", "#DCD0FF", "#BFFCC6", "#FFDAC1", "#E8D5B7", "#C4FAF8", "#FFB7B2"],
    fire: ["#FF0000", "#FF3300", "#FF6600", "#FF9900", "#FFCC00", "#FF4400", "#FF5500", "#FF7700", "#FF8800", "#FFAA00"],
    ocean: ["#001F3F", "#003366", "#004080", "#0059B3", "#0073E6", "#1A8CFF", "#4DA6FF", "#80BFFF", "#B3D9FF", "#E6F2FF"],
    mono: ["#FFFFFF", "#E0E0E0", "#C0C0C0", "#A0A0A0", "#808080", "#606060", "#404040", "#303030", "#202020", "#101010"],
    custom: ["#FFFFFF"],
};

const ColorDrip = memo(
    ({
        lineCount = 10,
        colorScheme = "rainbow",
        customColors,
        speed = 1,
        dripHeight = 15,
        lineWidth = 1,
        backgroundColor = "#111111",
        containerWidth = "90vw",
        showStaticLines = false,
        staticLineColor = "rgba(255, 255, 255, 0.05)",
        className,
        direction = "down",
        staggerDelay = 0.5,
    }: ColorDripProps) => {
        // Get colors based on scheme
        const colors = useMemo(() => {
            if (colorScheme === "custom" && customColors && customColors.length > 0) {
                return customColors;
            }
            return colorPresets[colorScheme];
        }, [colorScheme, customColors]);

        // Animation duration based on speed
        const animationDuration = 7 / speed;

        // Generate lines with staggered delays
        const lines = useMemo(() => {
            return Array.from({ length: lineCount }, (_, i) => {
                const color = colors[i % colors.length];
                const delay = staggerDelay * i;
                return {
                    id: i,
                    color,
                    delay,
                };
            });
        }, [lineCount, colors, staggerDelay]);

        // Animation direction: up or down
        const directionMultiplier = direction === "down" ? 1 : -1;

        return (
            <div
                className={cn(
                    "absolute inset-0 overflow-hidden pointer-events-none",
                    className
                )}
                style={{
                    backgroundColor,
                }}
            >
                <div
                    className="lines-container absolute top-0 left-0 right-0 h-full mx-auto flex justify-between"
                    style={{
                        width: containerWidth,
                    }}
                >
                    {lines.map((line) => (
                        <div
                            key={line.id}
                            className="line relative overflow-hidden"
                            style={{
                                width: `${lineWidth}px`,
                                height: "100%",
                                background: showStaticLines ? staticLineColor : "transparent",
                            }}
                        >
                            <div
                                className="drip absolute left-0"
                                style={{
                                    width: "100%",
                                    height: `${dripHeight}vh`,
                                    top: direction === "down" ? "-50%" : "auto",
                                    bottom: direction === "up" ? "-50%" : "auto",
                                    background: `linear-gradient(${direction === "down" ? "to bottom" : "to top"}, rgba(255, 255, 255, 0) 0%, ${line.color} 75%, ${line.color} 100%)`,
                                    animation: `drip-${direction} ${animationDuration}s ${line.delay}s infinite`,
                                    animationFillMode: "forwards",
                                    animationTimingFunction: "cubic-bezier(0.4, 0.26, 0, 0.97)",
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Animation styles */}
                <style jsx>{`
          @keyframes drip-down {
            0% {
              top: -50%;
            }
            100% {
              top: 110%;
            }
          }

          @keyframes drip-up {
            0% {
              bottom: -50%;
            }
            100% {
              bottom: 110%;
            }
          }
        `}</style>
            </div>
        );
    }
);

ColorDrip.displayName = "ColorDrip";

export { ColorDrip };
