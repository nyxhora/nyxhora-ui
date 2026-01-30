"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDocsPagination, DocsNavItem } from "@/lib/docs-config";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DocsPaginationProps {
    className?: string;
}

export function DocsPagination({ className }: DocsPaginationProps) {
    const pathname = usePathname();
    const { prev, next } = getDocsPagination(pathname);

    if (!prev && !next) return null;

    return (
        <nav
            className={cn(
                "mt-16 flex items-center justify-between gap-4 border-t border-border/50 pt-8",
                className
            )}
        >
            {prev ? (
                <PaginationLink item={prev} direction="prev" />
            ) : (
                <div /> // Empty div to maintain spacing
            )}
            {next ? (
                <PaginationLink item={next} direction="next" />
            ) : (
                <div />
            )}
        </nav>
    );
}

interface PaginationLinkProps {
    item: DocsNavItem;
    direction: "prev" | "next";
}

function PaginationLink({ item, direction }: PaginationLinkProps) {
    const isPrev = direction === "prev";

    return (
        <Link
            href={item.href}
            className={cn(
                "group flex flex-col gap-1 rounded-xl border border-border/50 p-4 transition-all duration-300",
                "hover:border-primary/50 hover:bg-gradient-to-br hover:shadow-lg",
                isPrev
                    ? "items-start hover:from-blue-500/5 hover:to-transparent hover:shadow-blue-500/10"
                    : "items-end hover:from-transparent hover:to-purple-500/5 hover:shadow-purple-500/10",
                "min-w-[180px] max-w-[280px]"
            )}
        >
            {/* Direction Label */}
            <span
                className={cn(
                    "flex items-center gap-1 text-xs font-medium text-muted-foreground",
                    "group-hover:text-foreground transition-colors"
                )}
            >
                {isPrev && (
                    <ChevronLeft className="h-3 w-3 transition-transform group-hover:-translate-x-0.5" />
                )}
                {isPrev ? "Previous" : "Next"}
                {!isPrev && (
                    <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                )}
            </span>

            {/* Page Title */}
            <span
                className={cn(
                    "text-sm font-semibold transition-colors",
                    isPrev
                        ? "text-foreground group-hover:text-blue-500"
                        : "text-foreground group-hover:text-purple-500"
                )}
            >
                {item.title}
            </span>

            {/* Description (optional) */}
            {item.description && (
                <span className="text-xs text-muted-foreground line-clamp-1">
                    {item.description}
                </span>
            )}
        </Link>
    );
}

// Compact version for smaller spaces
export function DocsPaginationCompact({ className }: DocsPaginationProps) {
    const pathname = usePathname();
    const { prev, next } = getDocsPagination(pathname);

    if (!prev && !next) return null;

    return (
        <nav
            className={cn(
                "flex items-center justify-between gap-2 py-4",
                className
            )}
        >
            {prev ? (
                <Link
                    href={prev.href}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                    <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                    <span className="hidden sm:inline">{prev.title}</span>
                    <span className="sm:hidden">Previous</span>
                </Link>
            ) : (
                <div />
            )}
            {next ? (
                <Link
                    href={next.href}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                    <span className="hidden sm:inline">{next.title}</span>
                    <span className="sm:hidden">Next</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
            ) : (
                <div />
            )}
        </nav>
    );
}
