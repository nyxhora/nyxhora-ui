"use client";

import { cn } from "@/lib/utils";
import { DocsSidebar } from "@/components/ui/docs-sidebar";
import { DocsPagination } from "@/components/ui/docs-pagination";
import { DocsToc } from "@/components/ui/docs-toc";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface DocsLayoutWrapperProps {
    children: React.ReactNode;
    className?: string;
    showPagination?: boolean;
    showToc?: boolean;
}

export function DocsLayoutWrapper({
    children,
    className,
    showPagination = true,
    showToc = true,
}: DocsLayoutWrapperProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="relative flex min-h-screen">
            {/* Mobile Sidebar Toggle */}
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/25 md:hidden transition-transform hover:scale-105 active:scale-95"
                aria-label="Toggle navigation"
            >
                {mobileMenuOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <Menu className="h-6 w-6" />
                )}
            </button>

            {/* Mobile Sidebar Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Sidebar */}
            <div
                className={cn(
                    "fixed inset-y-0 left-0 z-40 w-72 transform bg-background border-r border-border transition-transform duration-300 ease-in-out md:hidden",
                    mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                )}
                style={{ top: "64px" }} // Account for navbar
            >
                <DocsSidebar className="static h-full w-full border-0" />
            </div>

            {/* Desktop Sidebar */}
            <DocsSidebar />

            {/* Main Content + TOC Container */}
            <div className="flex-1 flex">
                {/* Main Content */}
                <main
                    className={cn(
                        "flex-1 min-w-0 overflow-hidden",
                        className
                    )}
                >
                    <div className="h-full">
                        <div className="mx-auto max-w-3xl px-6 py-10 lg:px-8">
                            {/* Content */}
                            <article className="prose prose-neutral dark:prose-invert max-w-none">
                                {children}
                            </article>

                            {/* Pagination */}
                            {showPagination && <DocsPagination />}
                        </div>
                    </div>
                </main>

                {/* Table of Contents - Right Side (Desktop only) */}
                {showToc && (
                    <aside className="hidden xl:block w-56 shrink-0 border-0 border-border/50">
                        <div className="sticky top-20 px-4 py-10">
                            <DocsToc />
                        </div>
                    </aside>
                )}
            </div>
        </div>
    );
}
