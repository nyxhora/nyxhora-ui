"use client";

import React, { useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

// Context to manage open state of items
interface ActionBarContextType {
    openItemId: string | null;
    setOpenItemId: (id: string | null) => void;
}

const ActionBarContext = createContext<ActionBarContextType | undefined>(undefined);

const useActionBar = () => {
    const context = useContext(ActionBarContext);
    if (!context) {
        throw new Error("useActionBar must be used within an ActionBar");
    }
    return context;
};

interface ActionBarProps {
    children: React.ReactNode;
    className?: string;
}

export function ActionBar({ children, className }: ActionBarProps) {
    const [openItemId, setOpenItemId] = useState<string | null>(null);

    return (
        <ActionBarContext.Provider value={{ openItemId, setOpenItemId }}>
            <div
                className={cn(
                    "flex flex-col gap-3 justify-center min-h-[500px] w-full max-w-md mx-auto p-8 rounded-[32px]",
                    // Glassmorphism styles
                    "bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl",
                    className
                )}
            >
                {children}
            </div>
        </ActionBarContext.Provider>
    );
}

interface ActionBarItemProps {
    id: string;
    icon?: React.ReactNode;
    label: string;
    children: React.ReactNode;
    className?: string;
}

export function ActionBarItem({
    id,
    icon,
    label,
    children,
    className,
}: ActionBarItemProps) {
    const { openItemId, setOpenItemId } = useActionBar();
    const isOpen = openItemId === id;

    return (
        <motion.div
            layout
            onClick={() => setOpenItemId(isOpen ? null : id)}
            className={cn(
                "relative w-full overflow-hidden cursor-pointer",
                // Base styles for item
                "bg-[#1e1e20] rounded-[28px]",
                // Hover state
                !isOpen && "hover:bg-[#272729]",
                className
            )}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
            }}
        >
            <motion.div layout className="p-1">
                {/* Closed State Header / Open State Hidden Header */}
                <AnimatePresence mode="popLayout">
                    {!isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-3 px-6 py-4"
                        >
                            {icon || <Plus className="w-6 h-6 text-white" />}
                            <span className="text-white font-semibold text-lg tracking-wide">
                                {label}
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Content - Visible when open */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: [0.42, 0, 0.47, 1.91] // Custom bezier from request
                            }}
                            className="px-6 pb-6 pt-6"
                        >
                            <div className="text-white/90 leading-relaxed">
                                {children}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}
