"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { docsConfig, DocsNavCategory } from "@/lib/docs-config";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    ChevronRight,
    BookOpen,
    Sparkles,
    ExternalLink,
    Search,
    X,
    FileText,
    ArrowRight,
} from "lucide-react";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Badge } from "./badge";

interface DocsSidebarProps {
    className?: string;
}

// Flatten all docs for searching
function getAllDocs() {
    const docs: { title: string; href: string; category: string }[] = [];
    docsConfig.forEach((category) => {
        category.items.forEach((item) => {
            docs.push({
                title: item.title,
                href: item.href,
                category: category.title,
            });
        });
    });
    return docs;
}

export function DocsSidebar({ className }: DocsSidebarProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [expandedCategories, setExpandedCategories] = useState<string[]>(
        docsConfig.map((c) => c.title) // All expanded by default
    );
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const allDocs = useMemo(() => getAllDocs(), []);

    // Filter docs based on search query
    const filteredDocs = useMemo(() => {
        if (!searchQuery.trim()) return allDocs.slice(0, 8);
        const query = searchQuery.toLowerCase();
        return allDocs.filter(
            (doc) =>
                doc.title.toLowerCase().includes(query) ||
                doc.category.toLowerCase().includes(query)
        );
    }, [searchQuery, allDocs]);

    // Keyboard shortcut for Ctrl+K
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === "k") {
                e.preventDefault();
                setIsSearchOpen(true);
            }
            if (e.key === "Escape") {
                setIsSearchOpen(false);
                setSearchQuery("");
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Focus input when search opens
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    // Reset selected index when results change
    useEffect(() => {
        setSelectedIndex(0);
    }, [filteredDocs]);

    // Handle keyboard navigation in search
    const handleSearchKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedIndex((prev) => Math.min(prev + 1, filteredDocs.length - 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedIndex((prev) => Math.max(prev - 1, 0));
        } else if (e.key === "Enter" && filteredDocs[selectedIndex]) {
            e.preventDefault();
            router.push(filteredDocs[selectedIndex].href);
            setIsSearchOpen(false);
            setSearchQuery("");
        }
    };

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
            {/* Search Modal */}
            {isSearchOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
                    <div
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                    />
                    <div className="relative w-full max-w-lg mx-4 bg-background border border-border rounded-xl shadow-2xl overflow-hidden">
                        {/* Search Input */}
                        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                            <Search className="h-5 w-5 text-muted-foreground" />
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search documentation..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleSearchKeyDown}
                                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                            />
                            <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                                ESC
                            </kbd>
                        </div>

                        {/* Search Results */}
                        <div className="max-h-80 overflow-y-auto py-2">
                            {filteredDocs.length === 0 ? (
                                <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                                    No results found for "{searchQuery}"
                                </div>
                            ) : (
                                filteredDocs.map((doc, index) => (
                                    <Link
                                        key={doc.href}
                                        href={doc.href}
                                        onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                                        className={cn(
                                            "flex items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                                            index === selectedIndex
                                                ? "bg-accent text-accent-foreground"
                                                : "hover:bg-accent/50"
                                        )}
                                    >
                                        <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                                        <div className="flex-1 min-w-0">
                                            <div className="font-medium truncate">{doc.title}</div>
                                            <div className="text-xs text-muted-foreground truncate">{doc.category}</div>
                                        </div>
                                        {index === selectedIndex && (
                                            <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                                        )}
                                    </Link>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center gap-4 px-4 py-2 border-t border-border bg-muted/30 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <kbd className="px-1.5 py-0.5 rounded border border-border bg-background">↑</kbd>
                                <kbd className="px-1.5 py-0.5 rounded border border-border bg-background">↓</kbd>
                                <span>Navigate</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <kbd className="px-1.5 py-0.5 rounded border border-border bg-background">↵</kbd>
                                <span>Select</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <aside
                className={cn(
                    "fixed left-0 top-16 z-30 hidden h-[calc(100vh-4rem)] w-72 shrink-0 border-r border-border/50 md:sticky md:block",
                    className
                )}
            >
                <div className="relative h-full">
                    <ScrollArea className="h-full py-6 pr-4 pl-6">
                        {/* Search Button */}
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="w-full mb-4 flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground bg-muted/50 hover:bg-muted border border-border/50 rounded-lg transition-all group"
                        >
                            <Search className="h-4 w-4" />
                            <span className="flex-1 text-left">Search docs...</span>
                            <kbd className="hidden sm:inline-flex h-5 items-center gap-0.5 rounded border border-border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground group-hover:border-primary/30">
                                <span className="text-xs">⌘</span>K
                            </kbd>
                        </button>

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
                        <div className="mt-8 pt-6 border-t border-border/50">
                            <div className="space-y-1">
                                <Link
                                    href="https://github.com/nyxhora"
                                    target="_blank"
                                    className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    GitHub
                                </Link>
                                <Link
                                    href="https://www.nyxhora.com"
                                    target="_blank"
                                    className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all group"
                                >
                                    <Sparkles className="h-4 w-4 text-purple-500 group-hover:animate-pulse" />
                                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
                                        Try Nyxhora
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Bottom padding for gradient */}
                        <div className="h-8" />
                    </ScrollArea>

                    {/* Bottom gradient fade hint - Discord style */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
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
