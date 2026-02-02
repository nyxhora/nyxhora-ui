"use client";

import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";
import { animate } from "motion/react";

export interface GlowingEffectProps {
  /** Blur amount in pixels */
  blur?: number;
  /** Percentage of center that doesn't activate glow (0-1) */
  inactiveZone?: number;
  /** Distance outside element that activates glow */
  proximity?: number;
  /** Size of the glow spread in degrees */
  spread?: number;
  /** Color preset */
  variant?: "default" | "white" | "purple" | "blue" | "green" | "orange" | "pink" | "rainbow" | "custom";
  /** Custom gradient colors (used when variant is "custom") */
  customColors?: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
  };
  /** Show static glow when not hovering */
  glow?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Disable interactive glow */
  disabled?: boolean;
  /** Duration of glow movement animation */
  movementDuration?: number;
  /** Width of the glow border */
  borderWidth?: number;
  /** Intensity of the glow effect (0.5 to 2) */
  intensity?: number;
  /** Animation style */
  animationStyle?: "smooth" | "snappy" | "bouncy";
}

const colorVariants = {
  default: {
    primary: "#dd7bbb",
    secondary: "#d79f1e",
    tertiary: "#5a922c",
    quaternary: "#4c7894",
  },
  white: {
    primary: "#ffffff",
    secondary: "#f0f0f0",
    tertiary: "#e0e0e0",
    quaternary: "#d0d0d0",
  },
  purple: {
    primary: "#A855F7",
    secondary: "#8B5CF6",
    tertiary: "#7C3AED",
    quaternary: "#6D28D9",
  },
  blue: {
    primary: "#3B82F6",
    secondary: "#0EA5E9",
    tertiary: "#06B6D4",
    quaternary: "#0284C7",
  },
  green: {
    primary: "#22C55E",
    secondary: "#10B981",
    tertiary: "#14B8A6",
    quaternary: "#059669",
  },
  orange: {
    primary: "#F97316",
    secondary: "#FB923C",
    tertiary: "#FBBF24",
    quaternary: "#F59E0B",
  },
  pink: {
    primary: "#EC4899",
    secondary: "#F472B6",
    tertiary: "#E879F9",
    quaternary: "#D946EF",
  },
  rainbow: {
    primary: "#EF4444",
    secondary: "#F59E0B",
    tertiary: "#22C55E",
    quaternary: "#3B82F6",
  },
  custom: {
    primary: "#dd7bbb",
    secondary: "#d79f1e",
    tertiary: "#5a922c",
    quaternary: "#4c7894",
  },
};

const animationConfigs = {
  smooth: { ease: [0.16, 1, 0.3, 1] as const, durationMultiplier: 1 },
  snappy: { ease: [0.25, 0.1, 0.25, 1] as const, durationMultiplier: 0.5 },
  bouncy: { ease: [0.68, -0.55, 0.265, 1.55] as const, durationMultiplier: 0.8 },
};

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    customColors,
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1,
    disabled = true,
    intensity = 1,
    animationStyle = "smooth",
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>(0);

    const colors = useMemo(() => {
      if (variant === "custom" && customColors) {
        return customColors;
      }
      return colorVariants[variant];
    }, [variant, customColors]);

    const animConfig = animationConfigs[animationStyle];

    const gradientStyle = useMemo(() => {
      if (variant === "white") {
        return `repeating-conic-gradient(
          from 236.84deg at 50% 50%,
          var(--black),
          var(--black) calc(25% / var(--repeating-conic-gradient-times))
        )`;
      }

      const intensityPercent = Math.max(5, Math.min(30, 10 * intensity));
      const fadePercent = Math.max(10, Math.min(40, 20 * intensity));

      return `radial-gradient(circle, ${colors.primary} ${intensityPercent}%, ${colors.primary}00 ${fadePercent}%),
        radial-gradient(circle at 40% 40%, ${colors.secondary} ${intensityPercent / 2}%, ${colors.secondary}00 ${fadePercent * 0.75}%),
        radial-gradient(circle at 60% 60%, ${colors.tertiary} ${intensityPercent}%, ${colors.tertiary}00 ${fadePercent}%), 
        radial-gradient(circle at 40% 60%, ${colors.quaternary} ${intensityPercent}%, ${colors.quaternary}00 ${fadePercent}%),
        repeating-conic-gradient(
          from 236.84deg at 50% 50%,
          ${colors.primary} 0%,
          ${colors.secondary} calc(25% / var(--repeating-conic-gradient-times)),
          ${colors.tertiary} calc(50% / var(--repeating-conic-gradient-times)), 
          ${colors.quaternary} calc(75% / var(--repeating-conic-gradient-times)),
          ${colors.primary} calc(100% / var(--repeating-conic-gradient-times))
        )`;
    }, [variant, colors, intensity]);

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return;

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          if (!element) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e?.x ?? lastPosition.current.x;
          const mouseY = e?.y ?? lastPosition.current.y;

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
          }

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(
            mouseX - center[0],
            mouseY - center[1]
          );
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");

          if (!isActive) return;

          const currentAngle =
            parseFloat(element.style.getPropertyValue("--start")) || 0;
          const targetAngle =
            (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
            Math.PI +
            90;

          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          const newAngle = currentAngle + angleDiff;

          animate(currentAngle, newAngle, {
            duration: movementDuration * animConfig.durationMultiplier,
            ease: animConfig.ease,
            onUpdate: (value) => {
              element.style.setProperty("--start", String(value));
            },
          });
        });
      },
      [inactiveZone, proximity, movementDuration, animConfig]
    );

    useEffect(() => {
      if (disabled) return;

      const handleScroll = () => handleMove();
      const handlePointerMove = (e: PointerEvent) => handleMove(e);

      window.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    return (
      <>
        <div
          className={cn(
            "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
            glow && "opacity-100",
            variant === "white" && "border-white",
            disabled && "block!"
          )}
        />
        <div
          ref={containerRef}
          style={
            {
              "--blur": `${blur}px`,
              "--spread": spread,
              "--start": "0",
              "--active": "0",
              "--glowingeffect-border-width": `${borderWidth}px`,
              "--repeating-conic-gradient-times": "5",
              "--gradient": gradientStyle,
            } as React.CSSProperties
          }
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",
            glow && "opacity-100",
            blur > 0 && "blur-(--blur) ",
            className,
            disabled && "hidden!"
          )}
        >
          <div
            className={cn(
              "glow",
              "rounded-[inherit]",
              'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
              "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
              "after:[background:var(--gradient)] after:bg-fixed",
              "after:opacity-(--active) after:transition-opacity after:duration-300",
              "after:[mask-clip:padding-box,border-box]",
              "after:mask-intersect",
              "after:mask-[linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
            )}
          />
        </div>
      </>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect };
