"use client";

import React, { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function NeonButton({ children, className, ...props }: NeonButtonProps) {
    return (
        <button {...props} className={cn("neon-button", className)}>
            {children}
        </button>
    );
}
