"use client"

import { useState } from "react"
import { SmoothCursor } from "@/registry/ui/smooth-cursor"

export function SmoothCursorDemo() {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="relative h-[300px] w-full rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-950 overflow-hidden flex flex-col items-center justify-center border border-neutral-800">
            {enabled && <SmoothCursor />}
            <div className="relative z-10 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Smooth Cursor</h2>
                <p className="text-neutral-400 mb-4">
                    {enabled ? "Move your mouse around!" : "Enable to see the effect"}
                </p>
                <button
                    onClick={() => setEnabled(!enabled)}
                    className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
                >
                    {enabled ? "Disable Cursor" : "Enable Cursor"}
                </button>
            </div>
        </div>
    );
}
