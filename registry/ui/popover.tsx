"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Define content variants for different sizes
const popoverContentVariants = cva(
  "bg-popover text-popover-foreground z-50 origin-(--radix-popover-content-transform-origin) rounded-md border shadow-md outline-none transition-all duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
  {
    variants: {
      size: {
        sm: "w-56 p-3",
        default: "w-72 p-4",
        lg: "w-80 p-5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

// Improved focus styles for accessibility
const popoverTriggerVariants = cva(
  "inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "",
        subtle: "hover:bg-muted hover:text-muted-foreground rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface PopoverProps extends React.ComponentProps<typeof PopoverPrimitive.Root> {
  defaultOpen?: boolean;
}

function Popover({
  defaultOpen,
  ...props
}: PopoverProps) {
  return <PopoverPrimitive.Root defaultOpen={defaultOpen} data-slot="popover" {...props} />
}

interface PopoverTriggerProps extends React.ComponentProps<typeof PopoverPrimitive.Trigger>,
  VariantProps<typeof popoverTriggerVariants> {}

function PopoverTrigger({
  className,
  variant,
  ...props
}: PopoverTriggerProps) {
  return (
    <PopoverPrimitive.Trigger 
      data-slot="popover-trigger" 
      className={cn(popoverTriggerVariants({ variant }), className)}
      {...props}
    />
  )
}

interface PopoverContentProps extends React.ComponentProps<typeof PopoverPrimitive.Content>,
  VariantProps<typeof popoverContentVariants> {
  withArrow?: boolean;
  arrowClassName?: string;
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  size,
  withArrow = false,
  arrowClassName,
  ...props
}: PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(popoverContentVariants({ size }), className)}
        {...props}
      >
        {props.children}
        {withArrow && (
          <PopoverPrimitive.Arrow 
            className={cn("fill-popover", arrowClassName)} 
            width={12} 
            height={6} 
          />
        )}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

function PopoverClose({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Close>) {
  return (
    <PopoverPrimitive.Close
      className={cn(
        "absolute right-4 top-4 rounded-sm opacity-80 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
        className
      )}
      {...props}
    />
  )
}

export { 
  Popover, 
  PopoverTrigger, 
  PopoverContent, 
  PopoverAnchor,
  PopoverClose
}