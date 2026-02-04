import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface ShinyCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    /**
     * Width of the shimmer effect in pixels.
     * Default: 100
     */
    shimmerWidth?: number;
}

export const ShinyCard = React.forwardRef<HTMLDivElement, ShinyCardProps>(
    ({ children, className, shimmerWidth = 200, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "group relative rounded-xl p-[1px] overflow-hidden",
                    className
                )}
                style={
                    {
                        "--shiny-width": `${shimmerWidth}px`,
                    } as CSSProperties
                }
                {...props}
            >
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes shiny-text {
                        0%, 90%, 100% {
                            background-position: calc(-100% - var(--shiny-width)) 0;
                        }
                        30%, 60% {
                            background-position: calc(100% + var(--shiny-width)) 0;
                        }
                    }
                `}} />

                {/* Shimmering Border Layer */}
                <div
                    className={cn(
                        "absolute inset-0 z-0",
                        "bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%]",
                        "bg-gradient-to-r from-transparent via-card-foreground/80 via-50% to-transparent"
                    )}
                    style={{
                        animation: "shiny-text 8s infinite"
                    }}
                />

                {/* Content Container */}
                <div className="relative z-10 h-full w-full rounded-xl bg-card text-card-foreground">
                    {children}
                </div>
            </div>
        );
    }
);

ShinyCard.displayName = "ShinyCard";

// Helper components for consistency with MagicCard
export function ShinyCardHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            className={cn("flex flex-col space-y-1.5 p-6", className)}
            {...props}
        />
    )
}

export function ShinyCardTitle({ className, ...props }: React.ComponentProps<"h3">) {
    return (
        <h3
            className={cn("text-lg font-semibold leading-none tracking-tight", className)}
            {...props}
        />
    )
}

export function ShinyCardDescription({ className, ...props }: React.ComponentProps<"p">) {
    return (
        <p
            className={cn("text-sm text-muted-foreground", className)}
            {...props}
        />
    )
}

export function ShinyCardContent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div className={cn("p-6 pt-0", className)} {...props} />
    )
}

export function ShinyCardFooter({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            className={cn("flex items-center p-6 pt-0", className)}
            {...props}
        />
    )
}
