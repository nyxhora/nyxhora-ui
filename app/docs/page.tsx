import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Palette, Code2, Layers, Rocket, Star, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
    title: "Introduction | NyxhoraUI Documentation",
    description: "Welcome to NyxhoraUI - A component library built on shadcn/ui with enhanced, production-ready components used in the Nyxhora platform.",
};

export default function DocsIntroductionPage() {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                        <Sparkles className="h-4 w-4 text-purple-500" />
                        <span className="text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Welcome to NyxhoraUI
                        </span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                        <Layers className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                        <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                            Built on shadcn/ui
                        </span>
                    </div>
                </div>

                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                    Build beautiful interfaces
                    <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        with production-ready components
                    </span>
                </h1>

                <p className="text-lg text-muted-foreground max-w-2xl">
                    NyxhoraUI is a component library built on top of{" "}
                    <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary underline underline-offset-4">
                        shadcn/ui
                    </a>
                    {" "}with enhanced, custom components that power the{" "}
                    <a href="https://www.nyxhora.com" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary underline underline-offset-4">
                        Nyxhora
                    </a>
                    {" "}productivity platform. Every component is battle-tested in production.
                </p>
            </div>

            {/* What's Inside Banner */}
            <div className="rounded-xl border border-border/50 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                        <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
                            <Star className="h-5 w-5 text-yellow-500" />
                            What&apos;s Inside?
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            <strong>70+</strong> base shadcn/ui components + <strong>custom enhanced components</strong> including
                            Smart Sidebar, Floating Dock, Workspace Switcher, URL Tabs, and more — all designed for modern desktop web apps.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Link
                            href="/docs/components/smart-sidebar"
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                        >
                            <Rocket className="h-4 w-4" />
                            View Custom Components
                        </Link>
                    </div>
                </div>
            </div>

            {/* Quick Start Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
                <Link
                    href="/docs/installation"
                    className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-blue-500/5 to-transparent p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
                >
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                            <Zap className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold group-hover:text-blue-500 transition-colors">
                                Quick Start
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Get up and running in minutes
                            </p>
                        </div>
                    </div>
                    <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>

                <Link
                    href="/docs/components/button"
                    className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-purple-500/5 to-transparent p-6 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
                >
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                            <Palette className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold group-hover:text-purple-500 transition-colors">
                                Browse Components
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Explore our component library
                            </p>
                        </div>
                    </div>
                    <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
            </div>

            {/* Features Grid */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold">Why NyxhoraUI?</h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <FeatureCard
                        icon={<Code2 className="h-5 w-5" />}
                        title="Developer Experience"
                        description="Built with TypeScript for type safety and excellent IDE support."
                    />
                    <FeatureCard
                        icon={<Palette className="h-5 w-5" />}
                        title="Fully Customizable"
                        description="Every component is designed to be easily themed and customized."
                    />
                    <FeatureCard
                        icon={<Zap className="h-5 w-5" />}
                        title="Optimized Performance"
                        description="Lightweight and optimized for the best possible performance."
                    />
                </div>
            </div>

            {/* Code Example */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold">Simple to Use</h2>
                <div className="rounded-xl bg-zinc-950 p-6 overflow-x-auto">
                    <pre className="text-sm">
                        <code className="text-zinc-100">
                            {`import { Button } from "@/components/ui/button"

export default function MyComponent() {
  return (
    <Button variant="default">
      Click me
    </Button>
  )
}`}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
}

function FeatureCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="group rounded-xl border border-border/50 bg-card/50 p-5 transition-all hover:border-primary/30 hover:bg-card hover:shadow-md">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {icon}
            </div>
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    );
}
