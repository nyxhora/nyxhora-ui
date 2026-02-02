"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  title: string;
  href: string;
  level?: number; // Optional level for nested items (1, 2, 3, etc.)
}

interface TocSidebarProps {
  items: TocItem[];
  className?: string;
}

export function TocSidebar({ items, className }: TocSidebarProps) {
  const [activeId, setActiveId] = React.useState<string>("");

  // Function to handle scroll and update active section
  React.useEffect(() => {
    const handleScroll = () => {
      // Find all section elements that match our TOC items
      const sections = items.map((item) => document.getElementById(item.id));
      
      // Filter out any null elements (in case an ID doesn't exist in the DOM)
      const validSections = sections.filter((section): section is HTMLElement => section !== null);
      
      if (validSections.length === 0) return;
      
      // Find the section that's currently in view
      const currentSection = validSections.find((section) => {
        const rect = section.getBoundingClientRect();
        // Consider a section in view if its top is near the top of the viewport
        // We use a small offset to improve user experience
        return rect.top <= 150 && rect.bottom > 0;
      });
      
      if (currentSection) {
        setActiveId(currentSection.id);
      } else if (window.scrollY <= 200) {
        // If we're at the top of the page, highlight the first item
        setActiveId(items[0]?.id || "");
      }
    };
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Call once on mount to set initial active section
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  // Scroll to section when clicking on a TOC item
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Scroll to the element with a small offset from the top
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth"
      });
      
      // Update URL hash without causing a jump
      window.history.pushState(null, "", href);
      
      // Update active section
      setActiveId(targetId);
    }
  };

  return (
    <div
      className={cn(
        "hidden xl:block w-64 shrink-0 border-l border-border h-[calc(100vh-4rem)] sticky top-26 overflow-y-auto py-6 px-4",
        className
      )}
    >
      <div className="space-y-4">
        <h4 className="text-sm font-semibold">On This Page</h4>
        <nav className="space-y-1">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                "block text-sm py-1 transition-colors",
                activeId === item.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground",
                item.level && item.level > 1 ? `pl-${(item.level - 1) * 3}` : ""
              )}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}