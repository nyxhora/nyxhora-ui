"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { Kbd } from "./kbd"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

// Spring animation config (same as Dynamic Island)
const springConfig = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
  mass: 0.8,
}

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    asChild
    {...props}
  >
    <motion.div
      className={cn(
        "fixed inset-0 z-50 bg-black/60 backdrop-blur-md",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    />
  </DialogPrimitive.Overlay>
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  /** Animation preset */
  animation?: "spring" | "smooth" | "bounce";
}

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, children, animation = "spring", ...props }, ref) => {
  const animationConfig = {
    spring: {
      initial: { opacity: 0, scale: 0.6, y: -30 },
      animate: { opacity: 1, scale: 1, y: 0 },
      transition: springConfig,
    },
    smooth: {
      initial: { opacity: 0, scale: 0.95, y: -10 },
      animate: { opacity: 1, scale: 1, y: 0 },
      transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
    },
    bounce: {
      initial: { opacity: 0, scale: 0.3, y: -50 },
      animate: { opacity: 1, scale: 1, y: 0 },
      transition: { type: "spring", stiffness: 400, damping: 15 },
    },
  }

  const config = animationConfig[animation]

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        asChild
        {...props}
      >
        <motion.div
          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 border bg-background/95 backdrop-blur-2xl p-8 shadow-2xl sm:rounded-2xl",
            className
          )}
          initial={config.initial}
          animate={config.animate}
          exit={config.initial}
          transition={config.transition}
        >
          {children}
          <DialogPrimitive.Close className="absolute right-4 top-4 flex items-center gap-2 rounded-full p-2 opacity-60 ring-offset-background transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-accent-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground cursor-pointer group">
            <Kbd className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Esc
            </Kbd>
            <X className="h-5 w-5" strokeWidth={1.5} />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </motion.div>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
})
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
