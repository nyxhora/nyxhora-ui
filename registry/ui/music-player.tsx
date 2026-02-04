"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Play, SkipBack, SkipForward, Shuffle, Repeat } from "lucide-react";

interface MusicPlayerProps {
    image?: string;
    title?: string;
    artist?: string;
    album?: string;
    currentTime?: string;
    totalTime?: string;
    progress?: number;
    className?: string;
}

export function MusicPlayer({
    image = "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=300&auto=format&fit=crop",
    title = "Until I Found You",
    artist = "Stephen Sanchez",
    album = "Single • 2022",
    currentTime = "2:05",
    totalTime = "4:08",
    progress = 33,
    className
}: MusicPlayerProps) {
    return (
        <div
            className={cn(
                "relative w-[320px] p-5 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center gap-5",
                className
            )}
        >
            {/* Album Art */}
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                {/* Vinyl sheen effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
            </div>

            {/* Controls */}
            <div className="flex-1 space-y-3 min-w-0">
                <div className="space-y-0.5">
                    <div className="flex items-center justify-between text-[10px] text-white/50 font-medium tracking-wider mb-1">
                        <span>NOW PLAYING</span>
                        <div className="flex gap-2">
                            <Shuffle className="w-3 h-3" />
                            <Repeat className="w-3 h-3" />
                        </div>
                    </div>
                    <h4 className="text-white font-semibold truncate text-sm">{title}</h4>
                    <p className="text-white/60 text-xs truncate">{artist}</p>
                    <p className="text-white/40 text-[10px] truncate">{album}</p>
                </div>

                {/* Progress Bar */}
                <div className="group relative w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                        className="absolute top-0 left-0 h-full bg-white rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="flex justify-between text-[10px] text-white/40 font-mono">
                    <span>{currentTime}</span>
                    <span>{totalTime}</span>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between pt-1">
                    <SkipBack className="w-4 h-4 text-white/70 hover:text-white transition-colors cursor-pointer" />
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer border border-white/5">
                        <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                    </div>
                    <SkipForward className="w-4 h-4 text-white/70 hover:text-white transition-colors cursor-pointer" />
                </div>
            </div>
        </div>
    );
}
