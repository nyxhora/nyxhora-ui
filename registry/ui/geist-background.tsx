"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GeistBackgroundProps {
    children?: React.ReactNode;
    className?: string;
    title?: string;
}

export const GeistBackground = ({
    children,
    className,
    title,
}: GeistBackgroundProps) => {
    return (
        <div className={cn("relative w-full h-[500px] overflow-hidden bg-[hsl(0,0%,6%)]", className)}>
            <style dangerouslySetInnerHTML={{
                __html: `
        @font-face {
          font-family: "Geist";
          src: url("https://assets.codepen.io/605876/GeistVF.ttf") format("truetype");
        }
        @keyframes geist-flicker {
          to {
            mask-position: 50% 50%, 0 50%;
          }
        }
        .geist-background-mask {
          --size: 20px;
          background: conic-gradient(from 180deg at 50% 70%,hsla(0,0%,98%,1) 0deg,#eec32d 72.0000010728836deg,#ec4b4b 144.0000021457672deg,#709ab9 216.00000858306885deg,#4dffbf 288.0000042915344deg,hsla(0,0%,98%,1) 1turn);
          width: 100%;
          height: 100%;
          mask:
            radial-gradient(circle at 50% 50%, white 2px, transparent 2.5px) 50% 50% / var(--size) var(--size),
            url("https://assets.codepen.io/605876/noise-mask.png") 256px 50% / 256px 256px;
          mask-composite: intersect;
          -webkit-mask-composite: source-in;
          animation: geist-flicker 20s infinite linear;
        }
      `}} />

            {/* Background Element */}
            <div className="absolute inset-0 geist-background-mask pointer-events-none opacity-80" />

            {/* Content */}
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
                {title && (
                    <h1 className="font-[Geist] text-[clamp(4rem,6vw+1rem,10rem)] font-[140] text-[hsl(0,0%,2%)] mix-blend-soft-light drop-shadow-[0_0_2px_white] shadow-[2px_2px_white] m-0 text-center leading-none">
                        {title}
                    </h1>
                )}
                {children}
            </div>
        </div>
    );
};
