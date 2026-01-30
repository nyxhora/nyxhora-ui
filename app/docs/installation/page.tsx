"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Copy, Check, Terminal } from "lucide-react";

export default function InstallationPage() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Installation</h1>
                <p className="text-lg text-muted-foreground">
                    Get started with NyxhoraUI in your project. Follow the steps below
                    to install and configure the components.
                </p>
            </div>

            {/* Prerequisites */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Prerequisites</h2>
                <p className="text-muted-foreground">
                    Before you begin, make sure you have the following installed:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Node.js 18.17 or later</li>
                    <li>React 18 or later</li>
                    <li>Next.js 14 or later (recommended)</li>
                </ul>
            </section>

            {/* Installation Steps */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Quick Installation</h2>

                {/* Step 1 */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                            1
                        </span>
                        <h3 className="text-lg font-semibold">Create a new project</h3>
                    </div>
                    <p className="text-muted-foreground ml-11">
                        Start by creating a new Next.js project if you don&apos;t have one:
                    </p>
                    <CodeBlock
                        code="npx create-next-app@latest my-app --typescript --tailwind --eslint"
                        language="bash"
                    />
                </div>

                {/* Step 2 */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                            2
                        </span>
                        <h3 className="text-lg font-semibold">Install dependencies</h3>
                    </div>
                    <p className="text-muted-foreground ml-11">
                        Install the required dependencies for NyxhoraUI components:
                    </p>

                    <Tabs defaultValue="npm" className="ml-11">
                        <TabsList className="bg-muted/50">
                            <TabsTrigger value="npm">npm</TabsTrigger>
                            <TabsTrigger value="yarn">yarn</TabsTrigger>
                            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                        </TabsList>
                        <TabsContent value="npm" className="mt-4">
                            <CodeBlock
                                code="npm install class-variance-authority clsx tailwind-merge lucide-react"
                                language="bash"
                            />
                        </TabsContent>
                        <TabsContent value="yarn" className="mt-4">
                            <CodeBlock
                                code="yarn add class-variance-authority clsx tailwind-merge lucide-react"
                                language="bash"
                            />
                        </TabsContent>
                        <TabsContent value="pnpm" className="mt-4">
                            <CodeBlock
                                code="pnpm add class-variance-authority clsx tailwind-merge lucide-react"
                                language="bash"
                            />
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Step 3 */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                            3
                        </span>
                        <h3 className="text-lg font-semibold">Configure utilities</h3>
                    </div>
                    <p className="text-muted-foreground ml-11">
                        Create a <code className="px-1.5 py-0.5 rounded bg-muted text-sm">lib/utils.ts</code> file with the cn helper:
                    </p>
                    <CodeBlock
                        code={`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
                        language="typescript"
                    />
                </div>

                {/* Step 4 */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                            4
                        </span>
                        <h3 className="text-lg font-semibold">Add components</h3>
                    </div>
                    <p className="text-muted-foreground ml-11">
                        Copy the component files from our documentation into your{" "}
                        <code className="px-1.5 py-0.5 rounded bg-muted text-sm">components/ui</code> directory.
                    </p>
                </div>
            </section>

            {/* Project Structure */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Project Structure</h2>
                <p className="text-muted-foreground">
                    Here&apos;s the recommended project structure for using NyxhoraUI:
                </p>
                <CodeBlock
                    code={`├── app
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components
│   └── ui
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
├── lib
│   └── utils.ts
├── tailwind.config.ts
└── package.json`}
                    language="plaintext"
                />
            </section>

            {/* Next Steps */}
            <section className="rounded-xl border border-border/50 bg-gradient-to-br from-blue-500/5 to-purple-500/5 p-6 space-y-4">
                <h2 className="text-xl font-bold">Next Steps</h2>
                <p className="text-muted-foreground">
                    You&apos;re all set! Check out the component documentation to start building:
                </p>
                <ul className="space-y-2">
                    <li>
                        <a href="/docs/components/button" className="text-primary hover:underline">
                            → Button Component
                        </a>
                    </li>
                    <li>
                        <a href="/docs/components/card" className="text-primary hover:underline">
                            → Card Component
                        </a>
                    </li>
                    <li>
                        <a href="/docs/components/dialog" className="text-primary hover:underline">
                            → Dialog Component
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}

function CodeBlock({ code, language }: { code: string; language: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group ml-11">
            <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <button
                    className="flex items-center gap-1.5 px-2 py-1 text-xs text-zinc-400 hover:text-white bg-zinc-800 rounded-md transition-colors"
                    onClick={handleCopy}
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
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border-b border-zinc-800 rounded-t-xl">
                {language === "bash" ? (
                    <Terminal className="h-4 w-4 text-zinc-500" />
                ) : (
                    <Code2 className="h-4 w-4 text-zinc-500" />
                )}
                <span className="text-xs text-zinc-500">{language}</span>
            </div>
            <pre className="rounded-b-xl bg-zinc-950 p-4 overflow-x-auto">
                <code className="text-sm text-zinc-100">{code}</code>
            </pre>
        </div>
    );
}
