"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { docsConfig, DocsNavItem } from "@/lib/docs-config";
import { GradientBackground } from "@/registry/ui/gradient-background";
import { cn } from "@/lib/utils";
import Footer from "@/registry/ui/footer";

export default function ComponentsPage() {
    // Get all components except "Getting Started" and "Utilities" (unless utilities are considered components)
    // The image shows a mixture. We'll include everything except "Getting Started".
    // Flatten and sort alphabetically.
    const allComponents = docsConfig
        .filter((cat) => cat.title !== "Getting Started")
        .flatMap((cat) => cat.items)
        .sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col">
            {/* Navbar Placeholder - if layout doesn't provide it */}

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
                <GradientBackground position="center" intensity="medium" className="fixed top-0 inset-0 pointer-events-none" />

                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Components
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Here you can find all the components available in the library.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-4">
                        {allComponents.map((component, index) => (
                            <ComponentLink key={component.href} item={component} index={index} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

function ComponentLink({ item, index }: { item: DocsNavItem; index: number }) {
    const isSpecial = item.isNew || item.special;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.02, duration: 0.3 }}
        >
            <Link
                href={item.href}
                className={cn(
                    "group flex items-center gap-2 text-base font-medium transition-colors w-fit p-1 hover:underline hover:underline-offset-4",
                    isSpecial
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                )}
            >
                <span>{item.title}</span>

                {/* Blue dot for special/new items */}
                {isSpecial && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                )}
            </Link>
        </motion.div>
    );
}
