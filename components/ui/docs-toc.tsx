"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { List } from "lucide-react";

interface TocItem {
    id: string;
    text: string;
    level: number;
}

export function DocsToc({ className }: { className?: string }) {
    const [headings, setHeadings] = useState<TocItem[]>([]);
    const [activeId, setActiveId] = useState<string>("");
    const pathname = usePathname(); // Track route changes

    useEffect(() => {
        // Small delay to ensure DOM is updated after navigation
        const timeoutId = setTimeout(() => {
            // Find all h2 and h3 elements in the main content
            const article = document.querySelector("article");
            if (!article) return;

            const elements = article.querySelectorAll("h2, h3");
            const items: TocItem[] = [];

            elements.forEach((element, index) => {
                // Generate an ID if it doesn't exist
                if (!element.id) {
                    const text = element.textContent || "";
                    const id = text
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)/g, "") || `heading-${index}`;
                    element.id = id;
                }

                items.push({
                    id: element.id,
                    text: element.textContent || "",
                    level: element.tagName === "H2" ? 2 : 3,
                });
            });

            setHeadings(items);
            setActiveId(""); // Reset active heading on route change

            // Set up intersection observer for scroll highlighting
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveId(entry.target.id);
                        }
                    });
                },
                {
                    rootMargin: "-80px 0px -80% 0px",
                    threshold: 0,
                }
            );

            elements.forEach((element) => observer.observe(element));

            return () => observer.disconnect();
        }, 100); // Small delay for DOM to update

        return () => clearTimeout(timeoutId);
    }, [pathname]); // Re-run when pathname changes

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Account for fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    if (headings.length === 0) {
        return null;
    }

    return (
        <nav className={cn("space-y-4", className)}>
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <List className="h-4 w-4" />
                On this page
            </div>
            <ul className="space-y-1 text-sm border-l border-border/50">
                {headings.map((heading) => (
                    <li key={heading.id}>
                        <button
                            onClick={() => handleClick(heading.id)}
                            className={cn(
                                "block text-left cursor-pointer w-full py-1.5 pl-4 -ml-px transition-colors duration-200 hover:text-foreground border-l-2",
                                activeId === heading.id
                                    ? "text-foreground  font-medium"
                                    : "text-muted-foreground border-transparent hover:border-border",
                                heading.level === 3 && "pl-6 text-xs"
                            )}
                        >
                            {heading.text}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

