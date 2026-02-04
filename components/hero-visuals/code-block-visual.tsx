"use client";

import React from "react";
import { CodeBlock } from "@/registry/ui/code-block";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { RainbowButton } from "@/registry/ui/rainbow-button";

export function CodeBlockVisual({ className }: { className?: string }) {
    const code = `const greet = (name: string) => {
  return \`Welcome, \${name}!\`;
};

const user = "Developer";
const message = greet(user);

console.log(message);`;

    return (
        <motion.div
            className={cn("w-[400px] shadow-2xl", className)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        >
            <CodeBlock
                code={code}
                language="typescript"
                filename="welcome.ts"
                browserLayout={true}
                className="bg-black/90 backdrop-blur-xl border border-white/10"
            />
            {/* Floating tooltip simulation */}
            <RainbowButton className="absolute -bottom-[10%] left-[25%] px-3 py-1.5 shadow-lg transform -translate-y-1/2 -translate-x-1/2 z-10">
                Try it out
            </RainbowButton>
            {/* Selection Highlight simulation */}
            {/* <div className="absolute top-[38%] left-[20%] w-[120px] h-[20px] bg-green-500/20 pointer-events-none rounded" /> */}
        </motion.div>
    );
}
