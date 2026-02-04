
import * as React from "react"
import { cn } from "@/lib/utils"

function MagicCardNew({ className, gradientColor = "linear-gradient(to right, #E2CBFF, #393BB2, #E2CBFF)", ...props }: React.ComponentProps<"div"> & { gradientColor?: string }) {
    return (
        <div
            data-slot="magic-card"
            className={cn(
                "relative group flex flex-col gap-6 rounded-xl p-[1px] overflow-hidden shadow-sm transition-all duration-300 ease-in-out hover:shadow-md",
                className
            )}
            {...props}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <div className="relative flex flex-col gap-6 w-full h-full rounded-xl bg-slate-950 py-6 backdrop-blur-3xl">
                {props.children}
            </div>
        </div>
    )
}

function MagicCardHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-header"
            className={cn(
                "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
                "animate-in slide-in-from-top-2 duration-300 fill-mode-both",
                className
            )}
            {...props}
        />
    )
}

function MagicCardTitle({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-title"
            className={cn(
                "leading-none font-semibold text-neutral-100",
                "animate-in slide-in-from-left-1 duration-300 fill-mode-both delay-100",
                className
            )}
            {...props}
        />
    )
}

function MagicCardDescription({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-description"
            className={cn(
                "text-neutral-400 text-sm",
                "animate-in slide-in-from-left-1 duration-300 fill-mode-both delay-150",
                className
            )}
            {...props}
        />
    )
}

function MagicCardContent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-content"
            className={cn(
                "px-6 text-neutral-200",
                "animate-in fade-in-50 slide-in-from-bottom-1 duration-300 fill-mode-both delay-200",
                className
            )}
            {...props}
        />
    )
}

function MagicCardFooter({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-footer"
            className={cn(
                "flex items-center px-6 [.border-t]:pt-6",
                "animate-in fade-in slide-in-from-bottom-1 duration-300 fill-mode-both delay-300",
                className
            )}
            {...props}
        />
    )
}

export {
    MagicCardNew as MagicCard,
    MagicCardHeader,
    MagicCardFooter,
    MagicCardTitle,
    MagicCardDescription,
    MagicCardContent,
}
