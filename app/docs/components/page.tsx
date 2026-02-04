"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { docsConfig, DocsNavItem } from "@/lib/docs-config";
import { cn } from "@/lib/utils";
import { DocsHeader } from "@/components/ui/docs-documentation";

export default function ComponentsIndexPage() {
    const allComponents = docsConfig
        .filter((cat) => cat.title !== "Getting Started")
        .flatMap((cat) => cat.items)
        .sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div className="space-y-8">
            <DocsHeader
                title="Components"
                description="Here you can find all the components available in the library."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 pt-4">
                {allComponents.map((component, index) => (
                    <ComponentLink key={component.href} item={component} index={index} />
                ))}
            </div>
        </div>
    );
}

function ComponentLink({ item, index }: { item: DocsNavItem; index: number }) {
    const isSpecial = item.isNew || item.special;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.01, duration: 0.3 }}
        >
            <Link
                href={item.href}
                className={cn(
                    "group flex items-center gap-2 text-sm font-medium transition-colors w-fit p-1 hover:underline hover:underline-offset-4",
                    isSpecial
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                )}
            >
                <span>{item.title}</span>
                {isSpecial && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                )}
            </Link>
        </motion.div>
    );
}
