"use client";

import { memo, useMemo } from "react";
import { cn } from "@/lib/utils";

export interface ShootingStarsProps {
    /** Number of twinkling background stars */
    starCount?: number;
    /** Number of shooting stars */
    shootingStarCount?: number;
    /** Color preset for the shooting stars */
    colorScheme?: "white" | "cyan" | "purple" | "rainbow" | "custom";
    /** Custom colors for shooting stars (when colorScheme is "custom") */
    customColors?: string[];
    /** Animation speed multiplier */
    speed?: number;
    /** Star size in pixels */
    starSize?: number;
    /** Shooting star trail length in pixels */
    trailLength?: number;
    /** Background gradient (set to "none" for transparent) */
    background?: "default" | "dark" | "midnight" | "none" | string;
    /** Additional CSS classes */
    className?: string;
    /** Whether to show twinkling stars */
    showStars?: boolean;
    /** Minimum delay between shooting star animations (in seconds) */
    minDelay?: number;
    /** Maximum delay between shooting star animations (in seconds) */
    maxDelay?: number;
}

const backgroundGradients = {
    default: "linear-gradient(to bottom, #0b0b2b, #1b2735 70%, #090a0f)",
    dark: "linear-gradient(to bottom, #000000, #0a0a0a 50%, #000000)",
    midnight: "linear-gradient(to bottom, #020617, #0f172a 50%, #020617)",
    none: "transparent",
};

const colorSchemes = {
    white: ["#ffffff"],
    cyan: ["#22d3ee", "#06b6d4", "#0891b2"],
    purple: ["#a855f7", "#8b5cf6", "#7c3aed"],
    rainbow: ["#ef4444", "#f59e0b", "#22c55e", "#3b82f6", "#a855f7", "#ec4899"],
    custom: ["#ffffff"],
};

// Generate random star positions for twinkling stars
const generateStarShadow = (count: number, size: number) => {
    const shadows: string[] = [];
    for (let i = 0; i < count; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const starSize = Math.random() > 0.7 ? size + 1 : size;
        shadows.push(`${x}vw ${y}vh ${starSize}px white`);
    }
    return shadows.join(", ");
};

const ShootingStars = memo(
    ({
        starCount = 50,
        shootingStarCount = 5,
        colorScheme = "white",
        customColors,
        speed = 1,
        starSize = 1,
        trailLength = 100,
        background = "default",
        className,
        showStars = true,
        minDelay = 0,
        maxDelay = 5,
    }: ShootingStarsProps) => {
        // Generate star shadow only once
        const starShadow = useMemo(
            () => generateStarShadow(starCount, starSize),
            [starCount, starSize]
        );

        const secondaryStarShadow = useMemo(
            () => generateStarShadow(Math.floor(starCount / 2), starSize),
            [starCount, starSize]
        );

        // Get colors for shooting stars
        const colors = useMemo(() => {
            if (colorScheme === "custom" && customColors && customColors.length > 0) {
                return customColors;
            }
            return colorSchemes[colorScheme];
        }, [colorScheme, customColors]);

        // Get background gradient
        const bgGradient = useMemo(() => {
            if (background in backgroundGradients) {
                return backgroundGradients[background as keyof typeof backgroundGradients];
            }
            return background;
        }, [background]);

        // Animation duration based on speed
        const shootDuration = 3 / speed;
        const twinkleDuration = 8 / speed;

        // Generate shooting stars with varied positions and delays
        const shootingStars = useMemo(() => {
            return Array.from({ length: shootingStarCount }, (_, i) => {
                const color = colors[i % colors.length];
                const topPosition = 5 + (i * 15) + Math.random() * 10;
                const delay = minDelay + (i * (maxDelay - minDelay) / shootingStarCount);
                return {
                    id: i,
                    color,
                    topPosition: Math.min(topPosition, 60),
                    delay,
                };
            });
        }, [shootingStarCount, colors, minDelay, maxDelay]);

        return (
            <div
                className={cn(
                    "absolute inset-0 overflow-hidden pointer-events-none",
                    className
                )}
                style={{
                    background: bgGradient,
                }}
            >
                {/* Twinkling stars layer */}
                {showStars && (
                    <>
                        <div
                            className="stars-layer absolute"
                            style={{
                                width: "1px",
                                height: "1px",
                                background: "white",
                                boxShadow: starShadow,
                                animation: `twinkle-stars ${twinkleDuration}s infinite linear`,
                            }}
                        />
                        <div
                            className="stars-layer-secondary absolute"
                            style={{
                                width: "1px",
                                height: "1px",
                                background: "white",
                                boxShadow: secondaryStarShadow,
                                animation: `twinkle-stars ${twinkleDuration * 0.75}s infinite linear reverse`,
                            }}
                        />
                    </>
                )}

                {/* Shooting stars */}
                {shootingStars.map((star) => (
                    <div
                        key={star.id}
                        className="shooting-star absolute"
                        style={{
                            top: `${star.topPosition}%`,
                            left: "-100px",
                            width: `${trailLength}px`,
                            height: "2px",
                            background: `linear-gradient(90deg, ${star.color}, transparent)`,
                            animation: `shoot-star ${shootDuration}s ${star.delay}s infinite ease-in`,
                            boxShadow: `0 0 6px 2px ${star.color}40`,
                        }}
                    />
                ))}

                {/* Animation styles */}
                <style jsx>{`
          @keyframes twinkle-stars {
            0%, 100% {
              opacity: 0.8;
            }
            50% {
              opacity: 0.4;
            }
          }

          @keyframes shoot-star {
            0% {
              transform: translateX(0) translateY(0) rotate(25deg);
              opacity: 1;
            }
            70% {
              opacity: 1;
            }
            100% {
              transform: translateX(120vw) translateY(50vh) rotate(25deg);
              opacity: 0;
            }
          }
        `}</style>
            </div>
        );
    }
);

ShootingStars.displayName = "ShootingStars";

export { ShootingStars };
