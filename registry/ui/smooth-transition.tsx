"use client";

import * as React from "react";
import { AnimatePresence, motion, type Variants, type Transition } from "motion/react";

// ============================================================================
// Types
// ============================================================================

export type TransitionPreset =
    | "fade"
    | "scale"
    | "slide-up"
    | "slide-down"
    | "slide-left"
    | "slide-right"
    | "expand"
    | "collapse"
    | "spring"
    | "bounce";

export interface SmoothTransitionProps {
    children: React.ReactNode;
    /** Whether the content is visible */
    show: boolean;
    /** Transition preset or custom variants */
    preset?: TransitionPreset;
    /** Custom animation variants (overrides preset) */
    variants?: Variants;
    /** Animation duration in seconds */
    duration?: number;
    /** Animation delay in seconds */
    delay?: number;
    /** Additional className for the wrapper */
    className?: string;
    /** Unique key for AnimatePresence */
    transitionKey?: string;
    /** Called when exit animation completes */
    onExitComplete?: () => void;
    /** Use layout animations */
    layout?: boolean;
    /** Layout ID for shared element transitions */
    layoutId?: string;
}

// ============================================================================
// Preset Variants
// ============================================================================

const springConfig = {
    type: "spring" as const,
    stiffness: 300,
    damping: 25,
    mass: 0.8,
};

const presetVariants: Record<TransitionPreset, Variants> = {
    fade: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    },
    scale: {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
    },
    "slide-up": {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
    },
    "slide-down": {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    },
    "slide-left": {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 },
    },
    "slide-right": {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
    },
    expand: {
        initial: { opacity: 0, scale: 0.6, y: -30 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.6, y: -30 },
    },
    collapse: {
        initial: { opacity: 0, scale: 0.96 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.96 },
    },
    spring: {
        initial: { opacity: 0, scale: 0.8, y: 10 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.8, y: 10 },
    },
    bounce: {
        initial: { opacity: 0, scale: 0.3, y: -50 },
        animate: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 15,
            }
        },
        exit: { opacity: 0, scale: 0.3, y: -50 },
    },
};

// ============================================================================
// SmoothTransition Component
// ============================================================================

export function SmoothTransition({
    children,
    show,
    preset = "scale",
    variants,
    duration = 0.2,
    delay = 0,
    className,
    transitionKey,
    onExitComplete,
    layout = false,
    layoutId,
}: SmoothTransitionProps) {
    const selectedVariants = variants ?? presetVariants[preset];

    const transition: Transition = preset === "spring" || preset === "bounce" || preset === "expand"
        ? { ...springConfig, delay }
        : { duration, delay, ease: [0.4, 0, 0.2, 1] as const };

    return (
        <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
            {show && (
                <motion.div
                    key={transitionKey}
                    className={className}
                    variants={selectedVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                    layout={layout}
                    layoutId={layoutId}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// ============================================================================
// SmoothTransitionGroup - For list items
// ============================================================================

export interface SmoothTransitionGroupProps {
    children: React.ReactNode;
    className?: string;
    preset?: TransitionPreset;
    staggerDelay?: number;
}

export function SmoothTransitionGroup({
    children,
    className,
    preset = "slide-up",
    staggerDelay = 0.05,
}: SmoothTransitionGroupProps) {
    const childArray = React.Children.toArray(children);
    const selectedVariants = presetVariants[preset];

    return (
        <div className={className}>
            <AnimatePresence mode="sync">
                {childArray.map((child, index) => (
                    <motion.div
                        key={index}
                        variants={selectedVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.2,
                            delay: index * staggerDelay,
                            ease: [0.4, 0, 0.2, 1],
                        }}
                    >
                        {child}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

// ============================================================================
// useSmoothTransition Hook
// ============================================================================

export interface UseSmoothTransitionOptions {
    initialShow?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

export function useSmoothTransition(options: UseSmoothTransitionOptions = {}) {
    const { initialShow = false, onOpen, onClose } = options;
    const [show, setShow] = React.useState(initialShow);

    const open = React.useCallback(() => {
        setShow(true);
        onOpen?.();
    }, [onOpen]);

    const close = React.useCallback(() => {
        setShow(false);
        onClose?.();
    }, [onClose]);

    const toggle = React.useCallback(() => {
        setShow((prev) => {
            const next = !prev;
            if (next) onOpen?.();
            else onClose?.();
            return next;
        });
    }, [onOpen, onClose]);

    return { show, open, close, toggle, setShow };
}
