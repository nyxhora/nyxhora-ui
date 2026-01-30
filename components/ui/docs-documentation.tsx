"use client";

import { Check, ChevronDown, ChevronLeft, ChevronRight, Code2, Copy, Eye, FileText, ExternalLink, Download } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import bash from "highlight.js/lib/languages/bash";
import Link from "next/link";

// Register languages
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("tsx", typescript);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("jsx", javascript);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("css", css);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("shell", bash);

// Copy Page Dropdown Component
function DocsCopyButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const getPageContent = () => {
        const article = document.querySelector("article");
        if (!article) return "";

        // Get text content with basic formatting
        const content = article.innerText || article.textContent || "";
        return content;
    };

    const getPageUrl = () => {
        if (typeof window !== "undefined") {
            return window.location.href;
        }
        return "";
    };

    const handleCopyPage = async () => {
        const content = getPageContent();
        const url = getPageUrl();
        const markdown = `# ${document.title}\n\nSource: ${url}\n\n${content}`;

        await navigator.clipboard.writeText(markdown);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleOpenInAI = (service: "chatgpt" | "claude" | "v0") => {
        const url = getPageUrl();
        const title = document.title;

        const prompts = {
            chatgpt: `I'm looking at this NyxhoraUI documentation: ${url}\nHelp me understand how to use it. Be ready to explain concepts, give examples, or help debug based on it.`,
            claude: `I'm reading this NyxhoraUI documentation page: ${url}\nPlease help me understand how to implement this. I may ask follow-up questions about usage, examples, or troubleshooting.`,
            v0: url,
        };

        const urls = {
            chatgpt: `https://chatgpt.com/?q=${encodeURIComponent(prompts.chatgpt)}`,
            claude: `https://claude.ai/new?q=${encodeURIComponent(prompts.claude)}`,
            v0: `https://v0.dev/chat?q=${encodeURIComponent(`Help me build a component based on: ${url}`)}`,
        };

        window.open(urls[service], "_blank");
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Main Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg bg-muted/50 hover:bg-muted border border-border/50 hover:border-border transition-all duration-200"
            >
                <Copy className="h-3.5 w-3.5" />
                Copy Page
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 rounded-xl bg-popover border border-border shadow-xl shadow-black/10 z-50 overflow-hidden animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200">
                    <div className="p-1">
                        {/* View as Markdown */}
                        <button
                            onClick={handleCopyPage}
                            className="flex items-center gap-3 w-full px-3 py-1 text-sm rounded-lg hover:bg-muted transition-colors"
                        >
                            <Copy className="h-4 w-4 text-muted-foreground" />
                            <span>{copied ? "Copied!" : "Copy as Markdown"}</span>
                            {copied && <Check className="h-3.5 w-3.5 text-green-500 ml-auto" />}
                        </button>

                        <div className="h-px bg-border my-1" />

                        {/* Open in v0 */}
                        <button
                            onClick={() => handleOpenInAI("v0")}
                            className="flex items-center gap-3 w-full px-3 py-1 text-sm rounded-lg hover:bg-muted transition-colors"
                        >
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 19.5h20L12 2zm0 4l6.5 11.5h-13L12 6z" />
                            </svg>
                            <span>Open in v0</span>
                            <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto" />
                        </button>

                        {/* Open in ChatGPT */}
                        <button
                            onClick={() => handleOpenInAI("chatgpt")}
                            className="flex items-center gap-3 w-full px-3 py-1 text-sm rounded-lg hover:bg-muted transition-colors"
                        >
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
                            </svg>
                            <span>Open in ChatGPT</span>
                            <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto" />
                        </button>

                        {/* Open in Claude */}
                        <button
                            onClick={() => handleOpenInAI("claude")}
                            className="flex items-center gap-3 w-full px-3 py-1 text-sm rounded-lg hover:bg-muted transition-colors"
                        >
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M4.709 15.955l4.72-2.647.08-.08 2.726-1.529.08-.08 6.467-3.627c.398-.239.558-.717.398-1.116-.16-.478-.638-.717-1.116-.558l-6.228 2.488-.08.08-2.965 1.21-.08.08-5.757 2.328c-.478.16-.717.638-.558 1.116.16.399.558.638.957.558l1.356-.223z" />
                                <path d="M19.291 8.045l-4.72 2.647-.08.08-2.726 1.529-.08.08-6.467 3.627c-.398.239-.558.717-.398 1.116.16.478.638.717 1.116.558l6.228-2.488.08-.08 2.965-1.21.08-.08 5.757-2.328c.478-.16.717-.638.558-1.116-.16-.399-.558-.638-.957-.558l-1.356.223z" />
                            </svg>
                            <span>Open in Claude</span>
                            <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

// Compact Navigation Arrows for header
function DocsNavArrows() {
    const pathname = usePathname();
    const [pagination, setPagination] = useState<{ prev: any; next: any }>({ prev: null, next: null });

    useEffect(() => {
        // Dynamic import to avoid circular dependencies
        import("@/lib/docs-config").then(({ getDocsPagination }) => {
            setPagination(getDocsPagination(pathname));
        });
    }, [pathname]);

    const { prev, next } = pagination;

    return (
        <div className="flex items-center">
            {/* Previous Arrow */}
            {prev ? (
                <Link
                    href={prev.href}
                    className="flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    title={`Previous: ${prev.title}`}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Link>
            ) : (
                <div className="flex items-center justify-center w-8 h-8 text-muted-foreground/30">
                    <ChevronLeft className="h-4 w-4" />
                </div>
            )}

            {/* Next Arrow */}
            {next ? (
                <Link
                    href={next.href}
                    className="flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    title={`Next: ${next.title}`}
                >
                    <ChevronRight className="h-4 w-4" />
                </Link>
            ) : (
                <div className="flex items-center justify-center w-8 h-8 text-muted-foreground/30">
                    <ChevronRight className="h-4 w-4" />
                </div>
            )}
        </div>
    );
}

export function DocsHeader({ title, description, updated, isNew, special }: { title: string, description: string, updated?: boolean, isNew?: boolean, special?: boolean }) {
    return (
        <div className="space-y-4">
            {/* Top Row: Badges + Toolbar */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {updated && <span className="px-2 py-0.5 text-xs font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full">
                        Updated
                    </span>}
                    {isNew && <span className="px-2 py-0.5 text-xs font-medium bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-full">
                        New
                    </span>}
                    {special && <span className="px-2 py-0.5 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                        Special
                    </span>}
                </div>

                {/* Toolbar: Copy Page + Navigation Arrows */}
                <div className="flex items-center gap-1">
                    <DocsCopyButton />
                    {/* <div className="w-px h-5 bg-border mx-1" /> Divider */}
                    <DocsNavArrows />
                </div>
            </div>

            {/* Title & Description */}
            <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
            <p className="text-lg text-muted-foreground">
                {description}
            </p>
        </div>
    )
}

export function DocsPreview({ title, previewCode, code, variant }: { title?: string, previewCode: React.ReactNode, code?: string, variant?: string }) {
    return (
        <section className="space-y-4">
            {title && <h2 className="text-2xl font-bold">{title}</h2>}
            {variant && <h3 className="text-lg font-semibold">{variant}</h3>}
            <ComponentPreview
                preview={previewCode}
                code={code}
            />
        </section>
    )
}

export function ComponentPreview({
    preview,
    code,
}: {
    preview: React.ReactNode;
    code?: string;  // Now optional!
}) {
    const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
    const [copied, setCopied] = useState(false);

    const hasCode = code !== undefined && code.length > 0;

    const handleCopy = () => {
        if (!code) return;
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    const codeRef = useRef<HTMLElement>(null);
    useEffect(() => {
        if (codeRef.current && activeTab === "code") {
            // Reset any previous highlighting
            codeRef.current.removeAttribute("data-highlighted");
            hljs.highlightElement(codeRef.current);
        }
    }, [code, activeTab]);
    return (
        <div className="rounded-xl border border-border/50 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-1 bg-muted/30 border-b border-border/50">
                <div className="flex gap-1">
                    <button
                        onClick={() => setActiveTab("preview")}
                        className={`flex items-center gap-1.5 px-3 cursor-pointer text-sm rounded-md transition-colors ${activeTab === "preview"
                            ? "bg-background text-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        <Eye className="h-4 w-4" />
                        Preview
                    </button>
                    {hasCode && (
                        <button
                            onClick={() => setActiveTab("code")}
                            className={`flex items-center gap-1.5 px-3  cursor-pointer text-sm rounded-md transition-colors ${activeTab === "code"
                                ? "bg-background text-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            <Code2 className="h-4 w-4" />
                            Code
                        </button>
                    )}
                </div>
                {hasCode && (
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-zinc-400 hover:text-white cursor-pointer hover:bg-zinc-700 rounded-md transition-all border border-zinc-700/50"
                    >
                        {copied ? (
                            <>
                                <Check className="h-3 w-3 text-green-500" />
                                Copied!
                            </>
                        ) : (
                            <>
                                <Copy className="h-3 w-3" />
                                Copy
                            </>
                        )}
                    </button>
                )}
            </div>

            {activeTab === "preview" || !hasCode ? (
                <div className="p-8 flex items-center justify-center bg-background min-h-[120px]">
                    {preview}
                </div>
            ) : (
                <pre className="px-4 bg-zinc-950 overflow-x-auto">
                    <code ref={codeRef} className="hljs language-tsx text-sm">{code}</code>
                </pre>
            )}
        </div>
    );
}
export function CodeBlockWrapper({ title, code, language }: { title?: string, code: string, language: string }) {
    return (
        <section className="space-y-4">
            {title && <h2 className="text-2xl font-bold">{title}</h2>}
            <CodeBlock
                code={code}
                language={language}
            />
        </section>
    )
}
function CodeBlock({ code, language, showLineNumbers = true, maxHeight = 300 }: { code: string; language: string; showLineNumbers?: boolean; maxHeight?: number }) {
    const [copied, setCopied] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const codeRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [needsExpand, setNeedsExpand] = useState(false);
    const lines = code.split('\n');

    useEffect(() => {
        if (codeRef.current) {
            codeRef.current.removeAttribute("data-highlighted");
            hljs.highlightElement(codeRef.current);
        }
    }, [code, language]);

    useEffect(() => {
        if (containerRef.current) {
            setNeedsExpand(containerRef.current.scrollHeight > maxHeight);
        }
    }, [code, maxHeight]);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative rounded-xl overflow-hidden border border-zinc-800">
            {/* Header with language, line count, and copy button */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-zinc-500" />
                    <span className="text-xs font-medium text-zinc-400">{language}</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-xs text-zinc-500">{lines.length} lines</span>
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-zinc-400 hover:text-white cursor-pointer hover:bg-zinc-700 rounded-md transition-all border border-zinc-700/50"
                        title={copied ? "Copied!" : "Copy to clipboard"}
                    >
                        {copied ? (
                            <>
                                <Check className="h-3.5 w-3.5 text-green-400" />
                                <span>Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy className="h-3.5 w-3.5" />
                                <span>Copy</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Code container with max height */}
            <div className="relative">
                <div
                    ref={containerRef}
                    className="bg-zinc-950 overflow-x-auto transition-all duration-300"
                    style={{ maxHeight: isExpanded ? 'none' : `${maxHeight}px`, overflow: isExpanded ? 'auto' : 'hidden' }}
                >
                    <div className="flex max-h-[900px]">
                        {showLineNumbers && (
                            <div className="flex-shrink-0 py-4 pl-4 pr-3 select-none text-right border-r border-zinc-800/50">
                                {lines.map((_, i) => (
                                    <div key={i} className="text-xs leading-6 text-zinc-600 font-mono">
                                        {i + 1}
                                    </div>
                                ))}
                            </div>
                        )}
                        <pre className={`flex-1  px-4 ${!showLineNumbers ? 'pl-4' : 'pl-3'}`}>
                            <code ref={codeRef} className={`hljs language-${language} text-sm leading-6 block`}>{code}</code>
                        </pre>
                    </div>
                </div>

                {/* Gradient overlay and expand button */}
                {needsExpand && !isExpanded && (
                    <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
                        <div className="h-32 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 pointer-events-auto">
                            <button
                                onClick={() => setIsExpanded(true)}
                                className="flex items-center cursor-pointer gap-2 px-4 py-2 text-xs font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all border border-zinc-700 hover:border-zinc-600 shadow-lg shadow-black/20"
                            >
                                <Eye className="h-3.5 w-3.5" />
                                View full code
                            </button>
                        </div>
                    </div>
                )}

                {/* Collapse button when expanded */}
                {needsExpand && isExpanded && (
                    <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
                        <div className="h-12 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 pointer-events-auto">
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="flex items-center cursor-pointer gap-2 px-4 py-2 text-xs font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all border border-zinc-700 hover:border-zinc-600 shadow-lg shadow-black/20"
                            >
                                <ChevronDown className="h-3.5 w-3.5 rotate-180" />
                                Collapse code
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export function FullCodeBlock({ code, language, filename, filepath }: { code: string; language: string, filename?: string, filepath?: string }) {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Full Code</h2>
            <FileCodeBlock code={code} language={language} filename={filename} filepath={filepath} />
        </div>
    );
}
function FileCodeBlock({ code, language, filename, filepath, showLineNumbers = true, maxHeight = 300 }: { code: string; language: string; filename?: string; filepath?: string; showLineNumbers?: boolean; maxHeight?: number }) {
    const [copied, setCopied] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const codeRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [needsExpand, setNeedsExpand] = useState(false);
    const lines = code.split('\n');

    useEffect(() => {
        if (codeRef.current) {
            codeRef.current.removeAttribute("data-highlighted");
            hljs.highlightElement(codeRef.current);
        }
    }, [code, language]);

    useEffect(() => {
        if (containerRef.current) {
            setNeedsExpand(containerRef.current.scrollHeight > maxHeight);
        }
    }, [code, maxHeight]);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    const handleDownload = () => {
        setIsDownloading(true);
        const blob = new Blob([code], { type: "text/tsx" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename || `code.${language}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
    useEffect(() => {
        if (isDownloading) {
            const timer = setTimeout(() => {
                setIsDownloading(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isDownloading]);
    return (
        <div className="relative rounded-xl overflow-hidden border border-zinc-800">
            {/* Header with language, line count, and copy button */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-zinc-500" />
                    <span className="text-xs font-medium text-zinc-400">{filepath || filename}</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-xs text-zinc-500">{lines.length} lines</span>
                    <button
                        onClick={() => handleDownload()}
                        className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-zinc-400 hover:text-white cursor-pointer hover:bg-zinc-700 rounded-md transition-all border border-zinc-700/50"
                        title={showLineNumbers ? "Download" : "Download"}
                    >
                        <Download className="h-3.5 w-3.5" />
                        <span>{isDownloading ? "Downloading..." : "Download"}</span>
                    </button>
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-zinc-400 hover:text-white cursor-pointer hover:bg-zinc-700 rounded-md transition-all border border-zinc-700/50"
                        title={copied ? "Copied!" : "Copy to clipboard"}
                    >
                        {copied ? (
                            <>
                                <Check className="h-3.5 w-3.5 text-green-400" />
                                <span>Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy className="h-3.5 w-3.5" />
                                <span>Copy</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Code container with max height */}
            <div className="relative">
                <div
                    ref={containerRef}
                    className="bg-zinc-950 overflow-x-auto transition-all duration-300"
                    style={{ maxHeight: isExpanded ? 'none' : `${maxHeight}px`, overflow: isExpanded ? 'auto' : 'hidden' }}
                >
                    <div className="flex max-h-[900px]">
                        {showLineNumbers && (
                            <div className="flex-shrink-0 py-4 pl-4 pr-3 select-none text-right border-r border-zinc-800/50">
                                {lines.map((_, i) => (
                                    <div key={i} className="text-xs leading-6 text-zinc-600 font-mono">
                                        {i + 1}
                                    </div>
                                ))}
                            </div>
                        )}
                        <pre className={`flex-1  px-4 ${!showLineNumbers ? 'pl-4' : 'pl-3'}`}>
                            <code ref={codeRef} className={`hljs language-${language} text-sm leading-6 block`}>{code}</code>
                        </pre>
                    </div>
                </div>

                {/* Gradient overlay and expand button */}
                {needsExpand && !isExpanded && (
                    <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
                        <div className="h-32 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 pointer-events-auto">
                            <button
                                onClick={() => setIsExpanded(true)}
                                className="flex items-center cursor-pointer gap-2 px-4 py-2 text-xs font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all border border-zinc-700 hover:border-zinc-600 shadow-lg shadow-black/20"
                            >
                                <Eye className="h-3.5 w-3.5" />
                                View full code
                            </button>
                        </div>
                    </div>
                )}

                {/* Collapse button when expanded */}
                {needsExpand && isExpanded && (
                    <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
                        <div className="h-12 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 pointer-events-auto">
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="flex items-center cursor-pointer gap-2 px-4 py-2 text-xs font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all border border-zinc-700 hover:border-zinc-600 shadow-lg shadow-black/20"
                            >
                                <ChevronDown className="h-3.5 w-3.5 rotate-180" />
                                Collapse code
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
// Type definition for prop items
interface PropItem {
    name: string;
    type?: string;
    defaultValue?: string;  // Optional - when undefined, shows "—"
    description: string;
    required?: boolean;     // Optional - adds a required indicator
}

export function DocsProps({ props }: { props: PropItem[] }) {
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-bold">Props</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-border">
                            <th className="py-3 px-4 text-left font-semibold">Prop</th>
                            {props?.some(prop => prop?.type) && (
                                <th className="py-3 px-4 text-left font-semibold">Type</th>
                            )}
                            {props?.some(prop => prop?.defaultValue) && (
                                <th className="py-3 px-4 text-left font-semibold">Default</th>
                            )}
                            <th className="py-3 px-4 text-left font-semibold">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.map((prop, index) => (
                            <tr
                                key={prop.name}
                                className={index < props.length - 1 ? "border-b border-border/50" : ""}
                            >
                                <td className="py-3 px-4">
                                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                                        {prop.name}
                                    </code>
                                    {prop.required && (
                                        <span className="ml-1 text-red-500 text-xs">*</span>
                                    )}
                                </td>
                                {
                                    prop?.type && (
                                        <td className="py-3 px-4 text-muted-foreground">
                                            <code className="text-xs">{prop.type}</code>
                                        </td>
                                    )
                                }
                                {prop?.defaultValue && (
                                    <td className="py-3 px-4 text-muted-foreground">
                                        <code className="text-xs">{prop.defaultValue}</code>
                                    </td>
                                )}
                                <td className="py-3 px-4 text-muted-foreground">
                                    {prop.description}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
