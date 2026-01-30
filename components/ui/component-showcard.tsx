"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, ExternalLink, Copy, Check, LucideIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export interface ComponentShowcardProps {
    /** Card title */
    title: string;
    /** Short description */
    description: string;
    /** Link to component documentation */
    href?: string;
    /** Preview content - the component to showcase */
    children: React.ReactNode;
    /** Custom gradient for the preview area */
    gradient?: string;
    /** Preview area height */
    previewHeight?: number | string;
    /** Show/hide the action link */
    showAction?: boolean;
    /** Custom action label */
    actionLabel?: string;
    /** Open in new tab */
    external?: boolean;
    /** Badge text (e.g., "New", "Beta") */
    badge?: string;
    /** Badge variant */
    badgeVariant?: "default" | "success" | "warning" | "info";
    /** Show copy button for code */
    copyCode?: string;
    /** Card variant */
    variant?: "default" | "bordered" | "elevated" | "glass";
    /** Size variant */
    size?: "sm" | "md" | "lg";
    /** Custom className */
    className?: string;
    /** Custom preview className */
    previewClassName?: string;
    /** Disable hover effects */
    disableHover?: boolean;
    /** Animation delay for stagger effect */
    animationDelay?: number;
    /** Enable/disable animation */
    animate?: boolean;
}

const badgeVariants = {
    default: "bg-primary/10 text-primary",
    success: "bg-green-500/10 text-green-500",
    warning: "bg-amber-500/10 text-amber-500",
    info: "bg-blue-500/10 text-blue-500",
};

const sizeVariants = {
    sm: {
        preview: "h-[180px]",
        padding: "p-4",
        title: "text-sm font-medium",
        description: "text-xs",
    },
    md: {
        preview: "h-[280px]",
        padding: "p-6",
        title: "text-lg font-semibold",
        description: "text-sm",
    },
    lg: {
        preview: "h-[360px]",
        padding: "p-8",
        title: "text-xl font-bold",
        description: "text-base",
    },
};

const variantClasses = {
    default: "border border-border/50 bg-background/50",
    bordered: "border-2 border-border bg-background",
    elevated: "border-0 bg-background shadow-xl shadow-black/5",
    glass: "border border-border/30 bg-background/30 backdrop-blur-xl",
};

export function ComponentShowcard({
    title,
    description,
    href,
    children,
    gradient = "from-blue-500/10 to-purple-500/10",
    previewHeight,
    showAction = true,
    actionLabel = "View",
    external = false,
    badge,
    badgeVariant = "default",
    copyCode,
    variant = "default",
    size = "md",
    className,
    previewClassName,
    disableHover = false,
    animationDelay = 0,
    animate = true,
}: ComponentShowcardProps) {
    const [copied, setCopied] = useState(false);
    const sizeConfig = sizeVariants[size];

    const handleCopy = async () => {
        if (!copyCode) return;
        await navigator.clipboard.writeText(copyCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const cardContent = (
        <div
            className={cn(
                "group relative overflow-hidden rounded-2xl transition-all duration-300",
                variantClasses[variant],
                !disableHover && "hover:border-primary/30 hover:shadow-xl hover:shadow-purple-500/5",
                className
            )}
        >
            {/* Preview Area */}
            <div
                className={cn(
                    "relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
                    gradient,
                    previewHeight ? "" : sizeConfig.preview,
                    sizeConfig.padding,
                    previewClassName
                )}
                style={previewHeight ? { height: previewHeight } : undefined}
            >
                {/* Radial gradient overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />

                {/* Pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />

                {/* Content */}
                <div className="relative z-10">{children}</div>

                {/* Copy button */}
                {copyCode && (
                    <button
                        onClick={handleCopy}
                        className="absolute right-3 top-3 flex items-center gap-1.5 rounded-lg bg-background/80 backdrop-blur-sm px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-background transition-all opacity-0 group-hover:opacity-100 border border-border/50"
                    >
                        {copied ? (
                            <>
                                <Check className="h-3.5 w-3.5 text-green-500" />
                                Copied!
                            </>
                        ) : (
                            <>
                                <Copy className="h-3.5 w-3.5" />
                                Copy
                            </>
                        )}
                    </button>
                )}
            </div>

            {/* Info Area */}
            <div className={cn("border-t border-border/30", sizeConfig.padding)}>
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className={cn(sizeConfig.title, "group-hover:text-primary transition-colors truncate")}>
                                {title}
                            </h3>
                            {badge && (
                                <span className={cn(
                                    "px-2 py-0.5 text-[10px] font-medium rounded-full",
                                    badgeVariants[badgeVariant]
                                )}>
                                    {badge}
                                </span>
                            )}
                        </div>
                        <p className={cn(sizeConfig.description, "text-muted-foreground line-clamp-2")}>
                            {description}
                        </p>
                    </div>

                    {showAction && href && (
                        <Link
                            href={href}
                            target={external ? "_blank" : undefined}
                            className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors shrink-0"
                        >
                            {actionLabel}
                            {external ? (
                                <ExternalLink className="h-3.5 w-3.5" />
                            ) : (
                                <ArrowRight className={cn(
                                    "h-4 w-4 transition-transform",
                                    !disableHover && "group-hover:translate-x-1"
                                )} />
                            )}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );

    if (!animate) return cardContent;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: animationDelay }}
        >
            {cardContent}
        </motion.div>
    );
}

// Grid layout helper for multiple showcards
interface ShowcardGridProps {
    children: React.ReactNode;
    columns?: 1 | 2 | 3 | 4;
    gap?: "sm" | "md" | "lg";
    className?: string;
}

const gapVariants = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
};

const columnVariants = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

export function ShowcardGrid({
    children,
    columns = 2,
    gap = "md",
    className,
}: ShowcardGridProps) {
    return (
        <div className={cn(
            "grid",
            columnVariants[columns],
            gapVariants[gap],
            className
        )}>
            {children}
        </div>
    );
}

export default ComponentShowcard;
