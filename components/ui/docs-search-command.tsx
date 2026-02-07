"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import {
  Search,
  FileText,
  Component,
  Sparkles,
  ArrowRight,
  Command as CommandIcon,
  Hash,
  BookOpen,
  Layers,
  X,
} from "lucide-react";
import {
  docsConfig,
  type DocsNavItem,
  type DocsNavCategory,
} from "@/lib/docs-config";

// ============================================================================
// Types
// ============================================================================

interface SearchResult {
  title: string;
  href: string;
  description?: string;
  category: string;
  isNew?: boolean;
  isUpdated?: boolean;
}

interface DocsSearchCommandProps {
  /** Custom trigger button */
  trigger?: React.ReactNode;
  /** Placeholder text */
  placeholder?: string;
  /** Additional className */
  className?: string;
}

// ============================================================================
// Animation Config
// ============================================================================

const springConfig = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
  mass: 0.8,
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const dialogVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 100, // Slide up from bottom on mobile
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.15,
    },
  }),
};

// ============================================================================
// Category Icons
// ============================================================================

const categoryIcons: Record<string, React.ReactNode> = {
  "Getting Started": <BookOpen className="h-4 w-4" />,
  "Form Components": <Component className="h-4 w-4" />,
  "Layout Components": <Layers className="h-4 w-4" />,
  "Data Display": <FileText className="h-4 w-4" />,
  Feedback: <Sparkles className="h-4 w-4" />,
  Navigation: <ArrowRight className="h-4 w-4" />,
  Overlay: <Layers className="h-4 w-4" />,
};

// ============================================================================
// Flatten docs config for searching
// ============================================================================

function flattenDocsConfig(): SearchResult[] {
  const results: SearchResult[] = [];
  docsConfig.forEach((category: DocsNavCategory) => {
    category.items.forEach((item: DocsNavItem) => {
      results.push({
        title: item.title,
        href: item.href,
        description: item.description,
        category: category.title,
        isNew: item.isNew,
        isUpdated: item.isUpdated,
      });
    });
  });
  return results;
}

// ============================================================================
// Search Logic
// ============================================================================

function searchDocs(query: string, docs: SearchResult[]): SearchResult[] {
  if (!query.trim()) return docs.slice(0, 8); // Show first 8 when no query

  const lowerQuery = query.toLowerCase();

  return docs
    .filter((doc) => {
      const titleMatch = doc.title.toLowerCase().includes(lowerQuery);
      const descMatch = doc.description?.toLowerCase().includes(lowerQuery);
      const categoryMatch = doc.category.toLowerCase().includes(lowerQuery);
      return titleMatch || descMatch || categoryMatch;
    })
    .sort((a, b) => {
      // Prioritize title matches
      const aTitle = a.title.toLowerCase().startsWith(lowerQuery);
      const bTitle = b.title.toLowerCase().startsWith(lowerQuery);
      if (aTitle && !bTitle) return -1;
      if (!aTitle && bTitle) return 1;
      return 0;
    })
    .slice(0, 10);
}

// ============================================================================
// DocsSearchCommand Component
// ============================================================================

export function DocsSearchCommand({
  trigger,
  placeholder = "Search documentation...",
  className,
}: DocsSearchCommandProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);

  // Track mounted state for portal
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const allDocs = React.useMemo(() => flattenDocsConfig(), []);
  const results = React.useMemo(
    () => searchDocs(query, allDocs),
    [query, allDocs],
  );

  // Group results by category
  const groupedResults = React.useMemo(() => {
    const groups: Record<string, SearchResult[]> = {};
    results.forEach((result) => {
      if (!groups[result.category]) {
        groups[result.category] = [];
      }
      groups[result.category].push(result);
    });
    return groups;
  }, [results]);

  // Keyboard shortcut to open
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when opened
  React.useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [open]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (results[selectedIndex]) {
          router.push(results[selectedIndex].href);
          setOpen(false);
        }
        break;
      case "Escape":
        e.preventDefault();
        setOpen(false);
        break;
    }
  };

  // Scroll selected item into view
  React.useEffect(() => {
    const selectedItem = listRef.current?.querySelector(
      `[data-index="${selectedIndex}"]`,
    );
    selectedItem?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  // Reset selection when query changes
  React.useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  return (
    <>
      {/* Trigger */}
      {trigger ? (
        <div onClick={() => setOpen(true)}>{trigger}</div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className={cn(
            "flex items-center gap-2 px-3 py-2 text-sm rounded-lg",
            "bg-muted/50 hover:bg-muted border border-border/50",
            "text-muted-foreground hover:text-foreground",
            "transition-all duration-200",
            "group cursor-pointer",
            className,
          )}
        >
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline">Search Dynamix island</span>
          <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 ml-auto text-xs font-mono bg-background/80 border border-border/50 rounded">
            <CommandIcon className="h-3 w-3" />K
          </kbd>
        </button>
      )}

      {/* Modal - Rendered via Portal to escape navbar's backdrop-filter containing block */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <>
                {/* Backdrop - z-[60] to be above navbar (z-50) */}
                <motion.div
                  className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.15 }}
                  onClick={() => setOpen(false)}
                />

                {/* Dialog - Full screen on mobile, centered on desktop */}
                <motion.div
                  className={cn(
                    "fixed z-[60] w-full",
                    // Mobile: full screen from bottom
                    "inset-x-0 bottom-0 top-auto max-h-[85vh]",
                    // Desktop: centered modal
                    "md:bottom-auto md:top-[15%] md:left-1/2 md:-translate-x-1/2 md:max-w-xl md:max-h-none",
                  )}
                  variants={dialogVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={springConfig}
                >
                  <div
                    className={cn(
                      "overflow-hidden bg-background shadow-2xl h-full",
                      // Mobile: rounded top corners only
                      "rounded-t-2xl border-t border-x border-border/50",
                      // Desktop: fully rounded
                      "md:rounded-xl md:border",
                    )}
                  >
                    {/* Drag handle for mobile */}
                    <div className="md:hidden flex justify-center pt-2 pb-1">
                      <div className="w-10 h-1 rounded-full bg-muted-foreground/30" />
                    </div>

                    {/* Search Input */}
                    <div className="flex items-center border-b border-border/50 px-4">
                      <Search className="h-5 w-5 text-muted-foreground shrink-0" />
                      <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={placeholder}
                        className="flex-1 h-14 px-3 text-base bg-transparent outline-none placeholder:text-muted-foreground"
                      />
                      {query && (
                        <motion.button
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          onClick={() => setQuery("")}
                          className="p-1.5 rounded-md hover:bg-muted transition-colors cursor-pointer"
                        >
                          <X className="h-4 w-4 text-muted-foreground" />
                        </motion.button>
                      )}
                      {/* ESC badge - hidden on mobile */}
                      <kbd className="hidden md:block ml-2 px-2 py-1 text-xs font-mono bg-muted/50 border border-border/50 rounded text-muted-foreground">
                        ESC
                      </kbd>
                      {/* Close button - visible on mobile */}
                      <button
                        onClick={() => setOpen(false)}
                        className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                      >
                        <X className="h-5 w-5 text-muted-foreground" />
                      </button>
                    </div>

                    {/* Results */}
                    <div
                      ref={listRef}
                      className="max-h-[50vh] md:max-h-[60vh] overflow-y-auto p-2"
                    >
                      {results.length === 0 ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="py-12 text-center text-muted-foreground"
                        >
                          <Search className="h-10 w-10 mx-auto mb-3 opacity-50" />
                          <p>No results found for &quot;{query}&quot;</p>
                          <p className="text-sm mt-1">
                            Try searching for something else
                          </p>
                        </motion.div>
                      ) : (
                        <AnimatePresence mode="sync">
                          {Object.entries(groupedResults).map(
                            ([category, items]) => (
                              <div key={category} className="mb-3">
                                <div className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                  {categoryIcons[category] || (
                                    <Hash className="h-3.5 w-3.5" />
                                  )}
                                  {category}
                                </div>
                                {items.map((item) => {
                                  const globalIndex = results.findIndex(
                                    (r) => r.href === item.href,
                                  );
                                  const isSelected =
                                    globalIndex === selectedIndex;

                                  return (
                                    <motion.button
                                      key={item.href}
                                      data-index={globalIndex}
                                      variants={listItemVariants}
                                      initial="hidden"
                                      animate="visible"
                                      custom={globalIndex}
                                      onClick={() => {
                                        router.push(item.href);
                                        setOpen(false);
                                      }}
                                      onMouseEnter={() =>
                                        setSelectedIndex(globalIndex)
                                      }
                                      className={cn(
                                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left cursor-pointer",
                                        "transition-colors duration-100",
                                        isSelected
                                          ? "bg-primary/10 text-foreground"
                                          : "hover:bg-muted/50 text-foreground/80",
                                      )}
                                    >
                                      <div
                                        className={cn(
                                          "p-2 rounded-lg",
                                          isSelected
                                            ? "bg-primary/20"
                                            : "bg-muted/50",
                                        )}
                                      >
                                        <FileText className="h-4 w-4" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                          <span className="font-medium truncate">
                                            {item.title}
                                          </span>
                                          {item.isNew && (
                                            <span className="px-1.5 py-0.5 text-[10px] font-medium bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded">
                                              NEW
                                            </span>
                                          )}
                                          {item.isUpdated && (
                                            <span className="px-1.5 py-0.5 text-[10px] font-medium bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded">
                                              UPDATED
                                            </span>
                                          )}
                                        </div>
                                        {/* {item.description && (
                                          <p className="text-sm text-muted-foreground truncate">
                                            {item.description}
                                          </p>
                                        )} */}
                                      </div>
                                      {isSelected && (
                                        <motion.div
                                          initial={{ opacity: 0, x: -5 }}
                                          animate={{ opacity: 1, x: 0 }}
                                        >
                                          <ArrowRight className="h-4 w-4 text-primary" />
                                        </motion.div>
                                      )}
                                    </motion.button>
                                  );
                                })}
                              </div>
                            ),
                          )}
                        </AnimatePresence>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-border/50 px-4 py-2.5 text-xs text-muted-foreground bg-muted/30">
                      {/* Desktop: keyboard hints */}
                      <div className="hidden md:flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <kbd className="px-1.5 py-0.5 bg-background border border-border/50 rounded">
                            ↑
                          </kbd>
                          <kbd className="px-1.5 py-0.5 bg-background border border-border/50 rounded">
                            ↓
                          </kbd>
                          to navigate
                        </span>
                        <span className="flex items-center gap-1">
                          <kbd className="px-1.5 py-0.5 bg-background border border-border/50 rounded">
                            ↵
                          </kbd>
                          to select
                        </span>
                      </div>
                      {/* Mobile: simple hint */}
                      <span className="md:hidden text-muted-foreground">
                        Tap to select
                      </span>
                      <span>{results.length} results</span>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}

// ============================================================================
// Export
// ============================================================================

export default DocsSearchCommand;
