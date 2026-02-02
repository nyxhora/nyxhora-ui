"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import {
    useDynamicIsland,
    type DynamicIslandPosition, type DynamicIslandNotification
} from "@/registry/hooks/use-dynamic-island";

// ============================================================================
// Variants
// ============================================================================

const positionVariants = cva("fixed z-50 flex items-center justify-center", {
    variants: {
        position: {
            "top-start": "top-4 left-4",
            "top-center": "top-4 left-1/2 -translate-x-1/2",
            "top-end": "top-4 right-4",
            "bottom-start": "bottom-4 left-4",
            "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
            "bottom-end": "bottom-4 right-4",
        },
    },
    defaultVariants: {
        position: "top-center",
    },
});

const variantStyles = {
    default: "shadow-black/20 dark:shadow-black/40",
    success: "shadow-emerald-500/20 dark:shadow-emerald-500/30",
    error: "shadow-red-500/20 dark:shadow-red-500/30",
    warning: "shadow-amber-500/20 dark:shadow-amber-500/30",
};

const indicatorColors = {
    default: "bg-zinc-400",
    success: "bg-emerald-500",
    error: "bg-red-500",
    warning: "bg-amber-500",
};

// ============================================================================
// DynamicIslandProvider
// ============================================================================

interface DynamicIslandProviderProps {
    children: React.ReactNode;
    defaultPosition?: DynamicIslandPosition;
    /** Auto-collapse timeout in ms when expanded (default: 10000) */
    autoCollapseTimeout?: number;
}

export function DynamicIslandProvider({
    children,
    defaultPosition = "top-center",
    autoCollapseTimeout = 10000,
}: DynamicIslandProviderProps) {
    const {
        position,
        setPosition,
        notifications,
        activeIndex,
        setActiveIndex,
        expandedId,
        collapse,
        toggleExpand,
        dismiss,
        getActiveNotification,
    } = useDynamicIsland();

    const islandRef = React.useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = React.useState(false);
    const [direction, setDirection] = React.useState<"left" | "right">("right");
    // Track if transition is navigation (switching notifications) vs expand/collapse
    const [isNavigating, setIsNavigating] = React.useState(false);
    const autoCollapseTimerRef = React.useRef<NodeJS.Timeout | null>(null);

    const activeNotification = getActiveNotification();

    // Set default position on mount
    React.useEffect(() => {
        setPosition(defaultPosition);
    }, [defaultPosition, setPosition]);

    // Outside click handler
    React.useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                islandRef.current &&
                !islandRef.current.contains(event.target as Node) &&
                expandedId
            ) {
                collapse();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [expandedId, collapse]);

    // Escape key handler
    React.useEffect(() => {
        function handleEscape(event: KeyboardEvent) {
            if (event.key === "Escape" && expandedId) {
                collapse();
            }
        }

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [expandedId, collapse]);

    // Auto-collapse timer when expanded
    React.useEffect(() => {
        if (expandedId && autoCollapseTimeout > 0) {
            if (autoCollapseTimerRef.current) {
                clearTimeout(autoCollapseTimerRef.current);
            }

            autoCollapseTimerRef.current = setTimeout(() => {
                collapse();
            }, autoCollapseTimeout);

            return () => {
                if (autoCollapseTimerRef.current) {
                    clearTimeout(autoCollapseTimerRef.current);
                }
            };
        }
    }, [expandedId, autoCollapseTimeout, collapse]);

    // Reset auto-collapse timer on user interaction
    const resetAutoCollapseTimer = React.useCallback(() => {
        if (autoCollapseTimerRef.current) {
            clearTimeout(autoCollapseTimerRef.current);
        }
        if (expandedId && autoCollapseTimeout > 0) {
            autoCollapseTimerRef.current = setTimeout(() => {
                collapse();
            }, autoCollapseTimeout);
        }
    }, [expandedId, autoCollapseTimeout, collapse]);

    // Navigate to notification with direction
    const navigateTo = React.useCallback((index: number) => {
        if (index >= 0 && index < notifications.length && index !== activeIndex) {
            setIsNavigating(true);
            setDirection(index > activeIndex ? "right" : "left");
            // If currently expanded, update expandedId to the new notification
            if (expandedId && notifications[index]) {
                useDynamicIsland.getState().expand(notifications[index].id);
            }
            setActiveIndex(index);
            resetAutoCollapseTimer();
        }
    }, [notifications, activeIndex, setActiveIndex, resetAutoCollapseTimer, expandedId]);

    const navigatePrev = React.useCallback(() => {
        if (activeIndex > 0) {
            setIsNavigating(true);
            setDirection("left");
            const newIndex = activeIndex - 1;
            // If currently expanded, update expandedId to the new notification
            if (expandedId && notifications[newIndex]) {
                useDynamicIsland.getState().expand(notifications[newIndex].id);
            }
            setActiveIndex(newIndex);
            resetAutoCollapseTimer();
        }
    }, [activeIndex, setActiveIndex, resetAutoCollapseTimer, expandedId, notifications]);

    const navigateNext = React.useCallback(() => {
        if (activeIndex < notifications.length - 1) {
            setIsNavigating(true);
            setDirection("right");
            const newIndex = activeIndex + 1;
            // If currently expanded, update expandedId to the new notification
            if (expandedId && notifications[newIndex]) {
                useDynamicIsland.getState().expand(notifications[newIndex].id);
            }
            setActiveIndex(newIndex);
            resetAutoCollapseTimer();
        }
    }, [activeIndex, notifications, setActiveIndex, resetAutoCollapseTimer, expandedId]);

    // Scroll to change notification when hovered - with debounce
    const lastWheelTime = React.useRef(0);
    const handleWheel = React.useCallback((e: React.WheelEvent) => {
        // Always prevent page scroll when hovering on island
        e.preventDefault();
        e.stopPropagation();

        if (notifications.length <= 1) return;

        // Debounce to prevent rapid switching
        const now = Date.now();
        if (now - lastWheelTime.current < 150) return;
        lastWheelTime.current = now;

        if (e.deltaY > 0) {
            // Scroll down = next
            navigateNext();
        } else if (e.deltaY < 0) {
            // Scroll up = prev
            navigatePrev();
        }
    }, [notifications.length, navigateNext, navigatePrev]);

    const isExpanded = activeNotification && expandedId === activeNotification.id;
    const variant = activeNotification?.variant ?? "default";
    const isDismissable = activeNotification?.dismissable ?? true;

    // Smooth spring animation config
    const springConfig = {
        type: "spring" as const,
        stiffness: 300,
        damping: 25,
        mass: 0.8,
    };

    return (
        <>
            {children}

            <AnimatePresence mode="wait">
                {activeNotification && (
                    <motion.div
                        key="island-container"
                        className={cn(positionVariants({ position }))}
                        initial={{
                            opacity: 0,
                            scale: 0.6,
                            y: position.startsWith("top") ? -30 : 30,
                        }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{
                            opacity: 0,
                            scale: 0.6,
                            y: position.startsWith("top") ? -30 : 30,
                        }}
                        transition={springConfig}
                    >
                        <motion.div
                            ref={islandRef}
                            className={cn(
                                "relative overflow-hidden bg-black dark:bg-zinc-900 shadow-2xl cursor-pointer",
                                variantStyles[variant]
                            )}
                            onMouseEnter={() => {
                                setIsHovered(true);
                                resetAutoCollapseTimer();
                            }}
                            onMouseLeave={() => setIsHovered(false)}
                            onWheel={handleWheel}
                            onClick={(e) => {
                                // Only toggle expand if clicking on the island itself, not buttons
                                if ((e.target as HTMLElement).closest('button')) return;
                                toggleExpand(activeNotification.id);
                                resetAutoCollapseTimer();
                            }}
                            initial={false}
                            animate={{
                                scale: isHovered && !isExpanded ? 1.03 : 1,
                                borderRadius: isExpanded ? 16 : 50,
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={springConfig}
                            layout
                            layoutId="dynamic-island"
                        >
                            <AnimatePresence
                                mode="wait"
                                initial={false}
                                onExitComplete={() => setIsNavigating(false)}
                            >
                                {isExpanded ? (
                                    <ExpandedContent
                                        key={`expanded-${activeNotification.id}`}
                                        notification={activeNotification}
                                        onClose={() => {
                                            setIsNavigating(false);
                                            collapse();
                                        }}
                                        onDismiss={() => dismiss(activeNotification.id)}
                                        isDismissable={isDismissable}
                                        notifications={notifications}
                                        activeIndex={activeIndex}
                                        onNavigate={navigateTo}
                                        onPrev={navigatePrev}
                                        onNext={navigateNext}
                                        direction={direction}
                                        onInteraction={resetAutoCollapseTimer}
                                        isNavigating={isNavigating}
                                    />
                                ) : (
                                    <CompactContent
                                        key={`compact-${activeNotification.id}`}
                                        notification={activeNotification}
                                        notifications={notifications}
                                        activeIndex={activeIndex}
                                        direction={direction}
                                        isNavigating={isNavigating}
                                    />
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

// ============================================================================
// Compact Content (Pill View)
// ============================================================================

interface CompactContentProps {
    notification: DynamicIslandNotification;
    notifications: DynamicIslandNotification[];
    activeIndex: number;
    direction: "left" | "right";
    isNavigating: boolean;
}

function CompactContent({ notification, notifications, activeIndex, direction, isNavigating }: CompactContentProps) {
    const variant = notification.variant ?? "default";
    const totalCount = notifications.length;

    // Only use slide animation when navigating between notifications
    // For expand/collapse, use simple fade
    const slideVariants = {
        enter: (dir: string) =>
            isNavigating
                ? { x: dir === "right" ? 20 : -20, opacity: 1 }
                : { opacity: 0, scale: 0.95 },
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (dir: string) =>
            isNavigating
                ? { x: dir === "right" ? -20 : 20, opacity: 1 }
                : { opacity: 0, scale: 0.95 },
    };

    return (
        <motion.div
            className="flex items-center gap-3 px-4 py-2.5 min-w-[120px] max-w-[300px]"
            variants={slideVariants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: isNavigating ? 0.15 : 0.2, ease: "easeOut" }}
        >
            {/* Icon */}
            {notification.icon && (
                <motion.div
                    className="flex-shrink-0 text-white/90"
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.05 }}
                >
                    {notification.icon}
                </motion.div>
            )}

            {/* Text */}
            <div className="flex flex-col min-w-0">
                <span className="text-sm font-medium text-white truncate">
                    {notification.title}
                </span>
                {notification.subtitle && (
                    <span className="text-xs text-white/60 truncate">
                        {notification.subtitle}
                    </span>
                )}
            </div>

            {/* Pending Indicator Dots */}
            {totalCount > 1 && (
                <div className="flex items-center gap-1 ml-2">
                    {notifications.slice(0, 4).map((n, i) => (
                        <motion.div
                            key={n.id}
                            className={cn(
                                "h-1.5 w-1.5 rounded-full transition-all",
                                i === activeIndex
                                    ? indicatorColors[variant]
                                    : "bg-white/30"
                            )}
                            initial={{ scale: 0 }}
                            animate={{
                                scale: i === activeIndex ? 1.2 : 1,
                            }}
                            transition={{ delay: i * 0.03 }}
                        />
                    ))}
                    {totalCount > 4 && (
                        <span className="text-xs text-white/50 ml-0.5">
                            +{totalCount - 4}
                        </span>
                    )}
                </div>
            )}
        </motion.div>
    );
}

// ============================================================================
// Expanded Content
// ============================================================================

interface ExpandedContentProps {
    notification: DynamicIslandNotification;
    onClose: () => void;
    onDismiss: () => void;
    isDismissable: boolean;
    notifications: DynamicIslandNotification[];
    activeIndex: number;
    onNavigate: (index: number) => void;
    onPrev: () => void;
    onNext: () => void;
    direction: "left" | "right";
    onInteraction: () => void;
    isNavigating: boolean;
}

function ExpandedContent({
    notification,
    onClose,
    onDismiss,
    isDismissable,
    notifications,
    activeIndex,
    onNavigate,
    onPrev,
    onNext,
    direction,
    onInteraction,
    isNavigating,
}: ExpandedContentProps) {
    const variant = notification.variant ?? "default";
    const totalCount = notifications.length;
    const canGoNext = activeIndex < totalCount - 1;
    const canGoPrev = activeIndex > 0;

    // Only use slide animation when navigating between notifications
    // For expand/collapse, use simple scale animation
    const slideVariants = {
        enter: (dir: string) =>
            isNavigating
                ? { x: dir === "right" ? 30 : -30, opacity: 1 }
                : { opacity: 0, scale: 0.96 },
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (dir: string) =>
            isNavigating
                ? { x: dir === "right" ? -30 : 30, opacity: 1 }
                : { opacity: 0, scale: 0.96 },
    };

    return (
        <motion.div
            className="relative min-w-[280px] max-w-[360px] p-4 text-white"
            variants={slideVariants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: isNavigating ? 0.15 : 0.2, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => {
                e.stopPropagation();
                onInteraction();
            }}
        >
            {/* Close/Dismiss Button */}
            {isDismissable ? (
                <motion.button
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer z-10"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDismiss();
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Dismiss"
                >
                    <X className="h-3.5 w-3.5 text-white/70" />
                </motion.button>
            ) : (
                <motion.button
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer z-10"
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Collapse"
                >
                    <ChevronLeft className="h-3.5 w-3.5 text-white/70 rotate-90" />
                </motion.button>
            )}

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                {notification.content ? (
                    notification.content
                ) : (
                    <div className="space-y-3 pr-6">
                        <div className="flex items-start gap-3">
                            {notification.icon && (
                                <div className="flex-shrink-0 text-white/90">
                                    {notification.icon}
                                </div>
                            )}
                            <div>
                                <h4 className="font-semibold">{notification.title}</h4>
                                {notification.subtitle && (
                                    <p className="text-sm text-white/70 mt-0.5">
                                        {notification.subtitle}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </motion.div>

            {/* Navigation Dots (when multiple notifications) */}
            {totalCount > 1 && (
                <motion.div
                    className="flex items-center justify-center gap-2 mt-4 pt-3 border-t border-white/10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {/* Prev Arrow */}
                    {canGoPrev && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onPrev();
                            }}
                            className="p-1 rounded-full transition-colors cursor-pointer hover:bg-white/20 text-white/70"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                    )}

                    {/* Dots */}
                    <div className="flex items-center gap-1.5">
                        {notifications.map((n, i) => (
                            <button
                                key={n.id}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onNavigate(i);
                                }}
                                className={cn(
                                    "h-2 w-2 rounded-full transition-all cursor-pointer",
                                    i === activeIndex
                                        ? cn(indicatorColors[variant], "scale-125")
                                        : "bg-white/30 hover:bg-white/50"
                                )}
                                title={n.title}
                            />
                        ))}
                    </div>

                    {/* Next Arrow */}
                    {canGoNext && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onNext();
                            }}
                            className="p-1 rounded-full transition-colors cursor-pointer hover:bg-white/20 text-white/70"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    )}
                </motion.div>
            )}

            {/* Non-dismissable indicator */}
            {!isDismissable && (
                <motion.div
                    className="text-[10px] text-white/40 text-center mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    This notification cannot be dismissed
                </motion.div>
            )}
        </motion.div>
    );
}

// ============================================================================
// Action Button (for use in expanded content)
// ============================================================================

interface DynamicIslandActionProps {
    variant?: "default" | "primary" | "secondary";
    className?: string;
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

export function DynamicIslandAction({
    className,
    variant = "default",
    children,
    onClick,
    disabled,
    type = "button",
}: DynamicIslandActionProps) {
    return (
        <motion.button
            type={type}
            disabled={disabled}
            className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer",
                variant === "default" && "bg-white/10 hover:bg-white/20 text-white",
                variant === "primary" && "bg-white text-black hover:bg-white/90",
                variant === "secondary" && "bg-zinc-700 hover:bg-zinc-600 text-white",
                disabled && "opacity-50 cursor-not-allowed",
                className
            )}
            whileHover={disabled ? undefined : { scale: 1.02 }}
            whileTap={disabled ? undefined : { scale: 0.98 }}
            onClick={(e) => {
                e.stopPropagation();
                onClick?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
            }}
        >
            {children}
        </motion.button>
    );
}

// ============================================================================
// Re-export types and hook
// ============================================================================

export {
    useDynamicIsland,
    type DynamicIslandPosition,
    type DynamicIslandVariant,
    type DynamicIslandNotification,
} from "@/registry/hooks/use-dynamic-island";
