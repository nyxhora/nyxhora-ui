"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, useTime, useTransform } from "motion/react"

export interface MagicTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    gradientColor?: string
}

export function MagicText({
    className,
    gradientColor = "conic-gradient(from 90deg at 50% 50%, #ec300edc 0%, #393bb2c9 30%, #ff00bfff 70%, #ec300edc 100%)",
    children,
    ...props
}: MagicTextProps) {
    const time = useTime()
    const angle = useTransform(time, (t) => `${(t / 5000 * 360) % 360}deg`)

    const backgroundImage = useTransform(angle, (a) => {
        if (gradientColor.includes("from")) {
            return gradientColor.replace(/from \d+deg/g, `from ${a}`)
        }
        if (gradientColor.startsWith("conic-gradient(")) {
            return gradientColor.replace("conic-gradient(", `conic-gradient(from ${a} `)
        }
        return gradientColor
    })

    return (
        <motion.span
            className={cn(
                "inline-block bg-clip-text text-transparent whitespace-pre-wrap font-bold",
                className
            )}
            style={{
                backgroundImage,
            }}
            {...props as any}
        >
            {children}
        </motion.span>
    )
}
