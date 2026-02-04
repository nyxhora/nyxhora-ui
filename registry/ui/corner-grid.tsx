import { cn } from "@/lib/utils";
import React from "react";

export const CornerGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

interface CornerCardProps {
    className?: string;
    children?: React.ReactNode;
    title?: string;
    description?: string;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    cornerColor?: string;
}

export const CornerCard = ({
    className,
    children,
    title,
    description,
    header,
    icon,
    cornerColor = "currentColor",
}: CornerCardProps) => {
    return (
        <div
            className={cn(
                "relative p-6 bg-background/50 border border-border/50 overflow-hidden dark:bg-zinc-900/50 group",
                "flex flex-col justify-between space-y-4",
                className
            )}
        >
            {/* Top Left Corner */}
            <div
                className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 transition-all duration-300 group-hover:w-8 group-hover:h-8 z-20"
                style={{ borderColor: cornerColor }}
            />
            {/* Top Right Corner */}
            <div
                className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 transition-all duration-300 group-hover:w-8 group-hover:h-8 z-20"
                style={{ borderColor: cornerColor }}
            />
            {/* Bottom Right Corner */}
            <div
                className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 transition-all duration-300 group-hover:w-8 group-hover:h-8 z-20"
                style={{ borderColor: cornerColor }}
            />
            {/* Bottom Left Corner */}
            <div
                className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 transition-all duration-300 group-hover:w-8 group-hover:h-8 z-20"
                style={{ borderColor: cornerColor }}
            />

            {header && <div className="w-full">{header}</div>}

            <div className="flex flex-col gap-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                {icon}
                {title && (
                    <h3 className="text-xl font-bold text-foreground">
                        {title}
                    </h3>
                )}
                {description && (
                    <p className="text-sm text-muted-foreground">
                        {description}
                    </p>
                )}
                {children}
            </div>
        </div>
    );
};
