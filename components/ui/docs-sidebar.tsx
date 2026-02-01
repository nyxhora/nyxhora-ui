"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { docsConfig, DocsNavCategory } from "@/lib/docs-config";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    ChevronRight, Sparkles,
    ExternalLink
} from "lucide-react";
import { useState } from "react";
import { Badge } from "./badge";
import { IconBrandGithub } from "@tabler/icons-react";

interface DocsSidebarProps {
    className?: string;
}



export function DocsSidebar({ className }: DocsSidebarProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [expandedCategories, setExpandedCategories] = useState<string[]>(
        docsConfig.map((c) => c.title) // All expanded by default
    );


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
                    <ScrollArea className="h-full py-6 pr-4 pl-6">


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
                                        NyxhoraUI v1.0.0
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
                        <div className="h-16" />
                    </ScrollArea>

                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-background pointer-events-none" />
                    {/* Bottom gradient fade hint - Discord style */}
                    <div className="absolute bottom-0 left-0 w-full mt-8 pt-6 border-t border-border/50">
                        <div className="space-y-1">
                            <Link
                                href="https://github.com/nyxhora"
                                target="_blank"
                                className="flex items-center text-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all"
                            >
                                <IconBrandGithub className="h-4 w-4 " />
                                GitHub
                                <ExternalLink className="h-4 w-4 ml-auto" />
                            </Link>
                            <Link
                                href="https://www.nyxhora.com"
                                target="_blank"
                                className="flex text-center items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all group"
                            >
                                <Sparkles className="h-4 w-4 text-purple-500 group-hover:animate-pulse" />
                                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
                                    Try Nyxhora
                                </span>
                                <ExternalLink className="h-4 w-4 ml-auto" />
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
