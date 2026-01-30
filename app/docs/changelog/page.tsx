import { Metadata } from "next";
import { Calendar, Sparkles, Bug, Wrench, ArrowUp } from "lucide-react";

export const metadata: Metadata = {
    title: "Changelog | NyxhoraUI Documentation",
    description: "View the latest updates, new features, and bug fixes in NyxhoraUI.",
};

const changelog = [
    {
        version: "1.0.0",
        date: "January 29, 2026",
        changes: [
            {
                type: "feature",
                title: "Initial Release",
                description: "First stable release of NyxhoraUI with 30+ components.",
            },
            {
                type: "feature",
                title: "Documentation Site",
                description: "Comprehensive documentation with live previews and code examples.",
            },
            {
                type: "feature",
                title: "Dark Mode Support",
                description: "Full dark mode support across all components.",
            },
        ],
    }
];

const typeConfig = {
    feature: {
        icon: Sparkles,
        color: "text-green-500",
        bg: "bg-green-500/10",
        label: "New Feature",
    },
    improvement: {
        icon: ArrowUp,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        label: "Improvement",
    },
    fix: {
        icon: Bug,
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        label: "Bug Fix",
    },
    breaking: {
        icon: Wrench,
        color: "text-red-500",
        bg: "bg-red-500/10",
        label: "Breaking Change",
    },
};

export default function ChangelogPage() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                    <Sparkles className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-green-500">
                        What&apos;s New
                    </span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight">Changelog</h1>
                <p className="text-lg text-muted-foreground">
                    All notable changes to NyxhoraUI are documented here.
                </p>
            </div>

            {/* Changelog Entries */}
            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

                <div className="space-y-12">
                    {changelog.map((release) => (
                        <div key={release.version} className="relative">
                            {/* Version Badge */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm font-bold shadow-lg shadow-purple-500/25">
                                    {release.version.split(".")[0]}
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">
                                        Version {release.version}
                                    </h2>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="h-4 w-4" />
                                        {release.date}
                                    </div>
                                </div>
                            </div>

                            {/* Changes */}
                            <div className="ml-14 space-y-4">
                                {release.changes.map((change, index) => {
                                    const config =
                                        typeConfig[
                                        change.type as keyof typeof typeConfig
                                        ];
                                    const Icon = config.icon;

                                    return (
                                        <div
                                            key={index}
                                            className="group rounded-xl border border-border/50 bg-card/50 p-4 transition-all hover:border-primary/30 hover:bg-card hover:shadow-md"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${config.bg} ${config.color}`}
                                                >
                                                    <Icon className="h-4 w-4" />
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h3 className="font-semibold">
                                                            {change.title}
                                                        </h3>
                                                        <span
                                                            className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${config.bg} ${config.color}`}
                                                        >
                                                            {config.label}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground">
                                                        {change.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
