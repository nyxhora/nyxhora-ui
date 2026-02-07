"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { docsConfig, DocsNavCategory } from "@/lib/docs-config";
import { ScrollArea } from "@/registry/ui/scroll-area";
import {
    ChevronRight, Sparkles,
    ExternalLink
} from "lucide-react";
import { useState, useEffect } from "react";
import { Badge } from "../../registry/ui/badge";
import { IconBrandGithub } from "@tabler/icons-react";

interface DocsSidebarProps {
    className?: string;
}



export function DocsSidebar({ className }: DocsSidebarProps) {
    const pathname = usePathname();
    const [expandedCategories, setExpandedCategories] = useState<string[]>(
        docsConfig.map((c) => c.title) // All expanded by default
    );


    useEffect(() => {
        const activeItem = document.getElementById("active-docs-nav-item");
        // Target the Radix viewport if available (standard in Shadcn), otherwise the container
        const scrollContainer = document.querySelector(".docs-sidebar-scroll-area [data-radix-scroll-area-viewport]") as HTMLElement
            || document.querySelector(".docs-sidebar-scroll-area") as HTMLElement;

        if (activeItem && scrollContainer) {
            const itemRect = activeItem.getBoundingClientRect();
            const containerRect = scrollContainer.getBoundingClientRect();

            // Check if visible within the container's viewport
            const isVisible = (
                itemRect.top >= containerRect.top &&
                itemRect.bottom <= containerRect.bottom
            );

            if (!isVisible) {
                // Calculate center position
                // currentScroll + (distance from top of container) - (half container height) + (half item height)
                const relativeTop = itemRect.top - containerRect.top;
                const targetScroll = scrollContainer.scrollTop + relativeTop - (scrollContainer.clientHeight / 2) + (itemRect.height / 2);

                scrollContainer.scrollTo({
                    top: targetScroll,
                    behavior: "smooth",
                });
            }
        }
    }, [pathname]);

    const toggleCategory = (title: string) => {
        setExpandedCategories((prev) =>
            prev.includes(title)
                ? prev.filter((t) => t !== title)
                : [...prev, title]
        );
    };

    const isActive = (href: string) => {
        if (href === "/docs" && pathname === "/docs") return true;
        if (href !== "/docs" && pathname.startsWith(href)) return true;
        return false;
    };

    return (
        <>


            <aside
                className={cn(
                    "fixed left-0 top-16 z-30 hidden h-[calc(100vh-4rem)] w-72 shrink-0 border-r border-border/50 md:sticky md:block",
                    className
                )}
            >
                <div className="relative h-full">
                    <ScrollArea className="h-full py-6 pr-4 pl-6 docs-sidebar-scroll-area">


                        {/* Header */}
                        <div className="mb-6">
                            <Link
                                href="/docs"
                                className="flex items-center gap-2 group"
                            >
                                <div className="px-4">
                                    <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                                        Documentation
                                    </span>
                                    <p className="text-[10px] text-muted-foreground">
                                        Nyxhora UIv1.0.0 (Beta)
                                    </p>
                                </div>
                            </Link>
                        </div>

                        {/* Navigation Categories */}

                        <nav className="space-y-1">
                            {docsConfig.map((category) => (
                                <CategorySection
                                    key={category.title}
                                    category={category}
                                    isExpanded={expandedCategories.includes(
                                        category.title
                                    )}
                                    onToggle={() => toggleCategory(category.title)}
                                    currentPath={pathname}
                                    isActive={isActive}
                                />
                            ))}
                        </nav>

                        {/* Footer Links */}

                        {/* Bottom padding for gradient */}
                        <div className="h-24" />
                    </ScrollArea>

                    <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background via-background to-transparent pointer-events-none" />
                    {/* Bottom gradient fade hint - Discord style */}
                    <div className="absolute bottom-0 left-0 w-full p-4 border-t border-border/40 bg-background/95 backdrop-blur-sm">
                        <div className="space-y-1">
                            <Link
                                href="https://github.com/nyxhora/nyxhora-ui"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-center gap-3 px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all"
                            >
                                <IconBrandGithub className="h-4 w-4" />
                                <span>Star on GitHub</span>
                                <ExternalLink className="h-3.5 w-3.5 ml-auto opacity-50" />
                            </Link>
                            <Link
                                href="https://www.nyxhora.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex text-center items-center gap-3 px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all group"
                            >
                                <Sparkles className="h-4 w-4 text-purple-500 animate-pulse" />
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold group-hover:from-blue-500 group-hover:to-purple-500">
                                    Try Nyxhora
                                </span>
                                <ExternalLink className="h-3.5 w-3.5 ml-auto opacity-50" />
                            </Link>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

interface CategorySectionProps {
    category: DocsNavCategory;
    isExpanded: boolean;
    onToggle: () => void;
    currentPath: string;
    isActive: (href: string) => boolean;
}

function CategorySection({
    category,
    isExpanded,
    onToggle,
    currentPath,
    isActive,
}: CategorySectionProps) {
    return (
        <div className="mb-4">
            {/* Category Header */}
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/50 rounded-lg transition-all group"
            >
                <span>{category.title}</span>
                <ChevronRight
                    className={cn(
                        "h-4 w-4 text-muted-foreground transition-transform duration-200",
                        isExpanded && "rotate-90"
                    )}
                />
            </button>

            {/* Category Items */}
            <div
                className={cn(
                    "mt-1 ml-3 space-y-0.5 overflow-hidden transition-all duration-200",
                    isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                )}
            >
                {category.items.map((item) => (
                    <Link
                        id={isActive(item.href) ? "active-docs-nav-item" : undefined}
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "group flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-all duration-200",
                            "hover:bg-accent/70 hover:text-accent-foreground",
                            isActive(item.href)
                                ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-primary font-medium "
                                : "text-muted-foreground border-l-2 border-transparent"
                        )}
                    >
                        <span className="truncate">{item.title}</span>
                        <div className="flex items-center gap-1.5">
                            {item.isNew && (
                                <Badge variant="outline">
                                    New
                                </Badge>
                            )}
                            {item.isUpdated && (
                                <Badge variant="outline">
                                    Updated
                                </Badge>
                            )}
                            {item.special && (
                                <Badge variant="outline">
                                    special
                                </Badge>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
