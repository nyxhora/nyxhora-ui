"use client";

import React, { useState, useRef, useEffect } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import bash from "highlight.js/lib/languages/bash";
import { cn } from "@/lib/utils";

// Register languages (ensure this runs only once if possible, or is safe to re-run)
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("tsx", typescript);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("jsx", javascript);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("css", css);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("shell", bash);

interface CodeBlockProps {
    code: string;
    language?: string;
    filename?: string;
    showLineNumbers?: boolean;
    browserLayout?: boolean;
    className?: string;
}

export function CodeBlock({
    code,
    language = "typescript",
    filename,
    showLineNumbers = true,
    browserLayout = false,
    className,
}: CodeBlockProps) {
    const [copied, setCopied] = useState(false);
    const codeRef = useRef<HTMLElement>(null);
    const lines = code.split("\n");

    useEffect(() => {
        if (codeRef.current) {
            codeRef.current.removeAttribute("data-highlighted");
            hljs.highlightElement(codeRef.current);
        }
    }, [code, language]);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className={cn(
                "relative rounded-sm overflow-hidden border border-border bg-card text-card-foreground shadow-sm",
                browserLayout && "border-0 shadow-2xl",
                className
            )}
        >
            {browserLayout && (
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    {filename && (
                        <span className="ml-2 text-xs text-muted-foreground font-medium">
                            {filename}
                        </span>
                    )}
                    <div className="ml-auto flex items-center gap-2">
                        <button
                            onClick={handleCopy}
                            className="p-1 hover:bg-background/50 rounded-sm transition-colors text-muted-foreground hover:text-foreground"
                            title="Copy code"
                        >
                            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                    </div>
                </div>
            )}

            {!browserLayout && (
                <div className="flex items-center justify-between px-4 py-2 bg-muted/30 border-b border-border">
                    <div className="flex items-center gap-2">
                        {filename ? (
                            <span className="text-xs font-medium text-muted-foreground">{filename}</span>
                        ) : (
                            <Terminal className="h-4 w-4 text-muted-foreground" />
                        )}
                    </div>
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                        {copied ? (
                            <>
                                <Check className="h-3.5 w-3.5" />
                                Copied
                            </>
                        ) : (
                            <>
                                <Copy className="h-3.5 w-3.5" />
                                Copy
                            </>
                        )}
                    </button>
                </div>
            )}

            <div className={cn("overflow-x-auto bg-zinc-950 p-4", browserLayout ? "bg-zinc-950" : "bg-card")}>
                <div className="flex min-w-full">
                    {showLineNumbers && (
                        <div className="flex-shrink-0 pr-4 select-none text-right border-r border-zinc-800/50 mr-4">
                            {lines.map((_, i) => (
                                <div key={i} className="text-xs leading-6 text-zinc-600 font-mono">
                                    {i + 1}
                                </div>
                            ))}
                        </div>
                    )}
                    <code
                        ref={codeRef}
                        className={`hljs language-${language} text-sm leading-6 font-mono flex-1 bg-transparent p-0 block`}
                    >
                        {code}
                    </code>
                </div>
            </div>
        </div>
    );
}
