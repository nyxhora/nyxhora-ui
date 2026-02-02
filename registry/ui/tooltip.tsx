"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

interface TooltipProviderProps extends React.ComponentProps<typeof TooltipPrimitive.Provider> {
  delayDuration?: number
  skipDelayDuration?: number
}

function TooltipProvider({ 
  delayDuration = 400, 
  skipDelayDuration = 100, 
  ...props 
}: TooltipProviderProps) {
  return (
    <TooltipPrimitive.Provider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
      {...props}
    />
  )
}

const Tooltip = TooltipPrimitive.Root

interface TooltipTriggerProps extends React.ComponentProps<typeof TooltipPrimitive.Trigger> {
  className?: string
}

function TooltipTrigger({ className, ...props }: TooltipTriggerProps) {
  return (
    <TooltipPrimitive.Trigger
      className={cn(
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

interface TooltipContentProps extends React.ComponentProps<typeof TooltipPrimitive.Content> {
  className?: string
  sideOffset?: number
  showArrow?: boolean
}

function TooltipContent({ 
  className, 
  sideOffset = 4, 
  showArrow = false, 
  children,
  ...props 
}: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          // Base stylesshow
          "z-50 overflow-hidden rounded-md px-3 py-1.5 text-sm",
          // Light mode colors
          "bg-popover text-popover-foreground",
          // Dark mode colors
          "dark:bg-background-800 dark:text-slate-100",
          // Border and shadow
          "border border-border/20 shadow-lg",
          "dark:border-background-700 dark:shadow-xl",
          // Animations
          "animate-in fade-in-0 zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          // Responsive max width
          "max-w-xs break-words",
          className
        )}
        {...props}
      >
        {children}
        {showArrow && (
          <TooltipPrimitive.Arrow 
            className="fill-popover dark:fill-background-900 border-l border-t border-border/20 " 
            width={12} 
            height={6} 
          />
        )}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

// Compound component for easier usage
interface TooltipRootProps extends React.ComponentProps<typeof TooltipPrimitive.Root> {
  content: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  delayDuration?: number
  showArrow?: boolean
  contentClassName?: string
  children: React.ReactNode
}

function TooltipRoot({ 
  content, 
  side = "top", 
  align = "center", 
  delayDuration = 400,
  showArrow = false,
  contentClassName,
  children,
  ...props 
}: TooltipRootProps) {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <Tooltip {...props}>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent 
          side={side} 
          align={align} 
          showArrow={showArrow}
          className={contentClassName}
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export { 
  Tooltip, 
  TooltipTrigger, 
  TooltipContent, 
  TooltipProvider,
  TooltipRoot 
}