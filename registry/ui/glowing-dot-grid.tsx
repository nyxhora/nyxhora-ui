"use client";

import { memo, useMemo, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface GlowingDotGridProps {
    /** Number of columns in the grid */
    columns?: number;
    /** Number of rows in the grid */
    rows?: number;
    /** Base dot color */
    dotColor?: string;
    /** Dot size in pixels */
    dotSize?: number;
    /** Gap between dots in rem */
    gap?: number;
    /** Hover effect size multiplier */
    hoverScale?: number;
    /** Effect radius (how many dots are affected) */
    effectRadius?: number;
    /** Background gradient start color */
    gradientStart?: string;
    /** Background gradient end color */
    gradientEnd?: string;
    /** Whether to show corner shadow/vignette */
    showVignette?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Children content to display over the grid */
    children?: React.ReactNode;
}

const GlowingDotGrid = memo(
    ({
        columns = 12,
        rows = 8,
        dotColor = "#A9C9FF",
        dotSize = 4,
        gap = 2,
        hoverScale = 12,
        effectRadius = 100,
        gradientStart = "#0a0a0a",
        gradientEnd = "#0a0a0a",
        showVignette = true,
        className,
        children,
    }: GlowingDotGridProps) => {
        const containerRef = useRef<HTMLDivElement>(null);
        const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

        // Generate tiles array
        const tiles = useMemo(() => {
            return Array.from({ length: columns * rows }, (_, i) => i);
        }, [columns, rows]);

        // Track mouse position relative to the container
        useEffect(() => {
            const container = containerRef.current;
            if (!container) return;

            const handleMouseMove = (e: MouseEvent) => {
                const rect = container.getBoundingClientRect();
                setMousePos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            };

            const handleMouseLeave = () => {
                setMousePos(null);
            };

            container.addEventListener("mousemove", handleMouseMove);
            container.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                container.removeEventListener("mousemove", handleMouseMove);
                container.removeEventListener("mouseleave", handleMouseLeave);
            };
        }, []);

        return (
            <div
                ref={containerRef}
                className={cn(
                    "relative w-full h-full overflow-hidden",
                    className
                )}
                style={{
                    background: `linear-gradient(180deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
                }}
            >
                {/* Grid container - z-0 */}
                <div
                    className="absolute inset-0 grid z-0"
                    style={{
                        gridTemplateColumns: `repeat(${columns}, 1fr)`,
                        gridTemplateRows: `repeat(${rows}, 1fr)`,
                    }}
                >
                    {tiles.map((index) => {
                        const col = index % columns;
                        const row = Math.floor(index / columns);

                        return (
                            <DotTile
                                key={index}
                                col={col}
                                row={row}
                                columns={columns}
                                rows={rows}
                                dotColor={dotColor}
                                dotSize={dotSize}
                                hoverScale={hoverScale}
                                effectRadius={effectRadius}
                                mousePos={mousePos}
                            />
                        );
                    })}
                </div>

                {/* Content overlay - z-10 */}
                {children && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                        <div className="pointer-events-auto">
                            {children}
                        </div>
                    </div>
                )}

                {/* Vignette overlay - z-20, purely visual */}
                {showVignette && (
                    <div
                        className="absolute inset-0 pointer-events-none z-20"
                        style={{
                            background: `
                radial-gradient(ellipse at top left, rgba(0,0,0,0.6) 0%, transparent 35%),
                radial-gradient(ellipse at top right, rgba(0,0,0,0.6) 0%, transparent 35%),
                radial-gradient(ellipse at bottom left, rgba(0,0,0,0.6) 0%, transparent 35%),
                radial-gradient(ellipse at bottom right, rgba(0,0,0,0.6) 0%, transparent 35%)
              `,
                        }}
                    />
                )}
            </div>
        );
    }
);

// Individual dot tile component for better performance
const DotTile = memo(({
    col,
    row,
    columns,
    rows,
    dotColor,
    dotSize,
    hoverScale,
    effectRadius,
    mousePos,
}: {
    col: number;
    row: number;
    columns: number;
    rows: number;
    dotColor: string;
    dotSize: number;
    hoverScale: number;
    effectRadius: number;
    mousePos: { x: number; y: number } | null;
}) => {
    const tileRef = useRef<HTMLDivElement>(null);

    // Calculate the intensity based on distance from mouse
    const getIntensity = () => {
        if (!mousePos || !tileRef.current) return 0;

        const rect = tileRef.current.getBoundingClientRect();
        const parent = tileRef.current.parentElement?.parentElement;
        if (!parent) return 0;

        const parentRect = parent.getBoundingClientRect();

        // Get the center of this tile relative to the parent
        const tileCenterX = rect.left - parentRect.left + rect.width / 2;
        const tileCenterY = rect.top - parentRect.top + rect.height / 2;

        // Calculate distance from mouse to tile center
        const distance = Math.sqrt(
            Math.pow(mousePos.x - tileCenterX, 2) +
            Math.pow(mousePos.y - tileCenterY, 2)
        );

        // Calculate intensity (1 at mouse position, 0 at effectRadius)
        if (distance > effectRadius) return 0;
        return Math.pow(1 - distance / effectRadius, 2); // Quadratic falloff for smoother effect
    };

    const intensity = getIntensity();
    const scale = 1 + intensity * (hoverScale / dotSize);
    const glowSize = intensity * hoverScale;

    return (
        <div
            ref={tileRef}
            className="flex items-center justify-center"
        >
            <div
                className="rounded-full"
                style={{
                    width: `${dotSize}px`,
                    height: `${dotSize}px`,
                    backgroundColor: dotColor,
                    boxShadow: intensity > 0
                        ? `0 0 ${glowSize}px ${glowSize * 0.6}px ${dotColor}`
                        : 'none',
                    transform: `scale(${scale})`,
                    opacity: mousePos === null ? 0.5 : intensity > 0 ? 0.5 + intensity * 0.5 : 0.25,
                    transition: 'transform 100ms ease-out, box-shadow 100ms ease-out, opacity 200ms ease-out',
                }}
            />
        </div>
    );
});

DotTile.displayName = "DotTile";
GlowingDotGrid.displayName = "GlowingDotGrid";

export { GlowingDotGrid };
