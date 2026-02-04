"use client";

import { cn } from "@/lib/utils";

interface AnimeCardProps {
    image?: string;
    title?: string;
    matchPercentage?: number;
    progress?: number;
    badgeText?: string;
    badgeColor?: string;
    className?: string;
}

export function AnimeCard({
    image = "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=687&auto=format&fit=crop",
    title = "Person",
    matchPercentage = 95,
    progress = 75,
    badgeText = "AUTO",
    badgeColor = "bg-green-500",
    className,
}: AnimeCardProps) {
    return (
        <div
            className={cn(
                "relative w-[280px] h-[360px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group",
                className
            )}
        >
            {/* Background Image */}
            <div className="absolute inset-0 bg-zinc-900">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Top Badge */}
            <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", badgeColor)} />
                <span className="text-[10px] font-medium text-white tracking-wide uppercase">{badgeText}</span>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <h3 className="text-xl font-bold leading-tight">{title}</h3>
                <p className="text-xs text-white/60">{matchPercentage}% Match</p>

                {/* Progress lines */}
                <div className="flex gap-1 mt-3">
                    <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                        <div className={cn("h-full rounded-full", badgeColor)} style={{ width: `${progress}%` }} />
                    </div>
                    <div className="h-1 flex-1 bg-white/20 rounded-full" />
                    <div className="h-1 flex-1 bg-white/20 rounded-full" />
                </div>
            </div>
        </div>
    );
}
