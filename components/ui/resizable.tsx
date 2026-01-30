"use client"

import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels"

import { cn } from "@/lib/utils"

const HANDLE_ACTIVE_STYLES = {
  VERTICAL: "after:w-1.5 after:bg-primary after:opacity-100",
  HORIZONTAL: "after:h-1.5 after:bg-primary after:opacity-100"
}

function ResizablePanelGroup({
  className,
  direction = "horizontal",
  onLayout,
  ...props
}: React.ComponentProps<typeof PanelGroup> & {
  direction?: "horizontal" | "vertical"
}) {
  const handleLayout = React.useCallback((sizes: number[]) => {
    onLayout?.(sizes)
    // Save the layout to localStorage for persistence
    if (props.id) {
      localStorage.setItem(`resizable-layout-${props.id}`, JSON.stringify(sizes))
    }
  }, [onLayout, props.id])

  React.useEffect(() => {
    if (!props.id) return

    try {
      const savedSizes = localStorage.getItem(`resizable-layout-${props.id}`)
      if (savedSizes && onLayout) {
        onLayout(JSON.parse(savedSizes))
      }
    } catch (error) {
      console.error("Error restoring resizable layout:", error)
    }
  }, [props.id, onLayout])

  return (
    <PanelGroup
      data-slot="resizable-panel-group"
      direction={direction}
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className
      )}
      onLayout={handleLayout}
      {...props}
    />
  )
}

interface ResizablePanelProps extends React.ComponentProps<typeof Panel> {
  /**
   * Optional minimum size constraint
   */
  minSize?: number
  /**
   * Optional transition duration in ms for content resize (default: 200)
   */
  transitionDuration?: number
}

function ResizablePanel({
  className,
  children,
  minSize = 10,
  defaultSize,
  transitionDuration = 200,
  ...props
}: ResizablePanelProps) {
  const [isResizing, setIsResizing] = React.useState(false)

  const handleResize = React.useCallback((newSize?: number) => {
    setIsResizing(true)
    if (!newSize) {
      setTimeout(() => setIsResizing(false), 50)
    }
  }, [])

  return (
    <Panel
      data-slot="resizable-panel"
      defaultSize={defaultSize}
      minSize={minSize}
      onResize={handleResize}
      className={cn(className)}
      {...props}
    >
      <div
        className={cn(
          "h-full w-full overflow-auto",
          isResizing ? "transition-none" : `transition-all duration-${transitionDuration}`
        )}
      >
        {children}
      </div>
    </Panel>
  )
}

interface ResizableHandleProps extends React.ComponentProps<typeof PanelResizeHandle> {
  /**
   * Whether to show the grip handle or not
   */
  withHandle?: boolean
  /**
   * Optional hover effect style - choose from 'glow', 'highlight', or 'none'
   */
  hoverEffect?: 'glow' | 'highlight' | 'none'
  /**
   * Optional tooltip text
   */
  tooltip?: string
}

function ResizableHandle({
  withHandle = false,
  className,
  hoverEffect = 'highlight',
  tooltip,
  ...props
}: ResizableHandleProps) {
  const [isHovered, setIsHovered] = React.useState(false)
  const [isActive, setIsActive] = React.useState(false)

  const handleMouseEnter = React.useCallback(() => setIsHovered(true), [])
  const handleMouseLeave = React.useCallback(() => setIsHovered(false), [])
  const handleMouseDown = React.useCallback(() => setIsActive(true), [])
  const handleMouseUp = React.useCallback(() => setIsActive(false), [])

  React.useEffect(() => {
    if (isActive) {
      const handleUp = () => setIsActive(false)
      window.addEventListener('mouseup', handleUp)
      return () => window.removeEventListener('mouseup', handleUp)
    }
  }, [isActive])

  const isVertical = (props as any).getAttribute?.("data-panel-group-direction") === "vertical"

  return (
    <PanelResizeHandle
      data-slot="resizable-handle"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={cn(
        // Base styles
        "relative flex w-px items-center justify-center transition-all duration-200",
        "focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:outline-none",

        // Direction specific styles
        "data-[panel-group-direction=vertical]:h-1.5 data-[panel-group-direction=vertical]:w-full",

        // Handle track
        "after:absolute after:transition-all after:duration-200 after:opacity-50",
        "after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 after:bg-muted-foreground",
        "data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 after:rounded-full",
        "data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0",

        // Hover effects
        hoverEffect === 'highlight' && isHovered && !isActive && "after:opacity-80 after:bg-primary/70",
        hoverEffect === 'glow' && isHovered && !isActive && "after:shadow-glow",

        // Active effects
        isActive && isVertical && HANDLE_ACTIVE_STYLES.VERTICAL,
        isActive && !isVertical && HANDLE_ACTIVE_STYLES.HORIZONTAL,

        // Cursor styles
        isVertical ? "cursor-row-resize" : "cursor-col-resize",

        className
      )}
      {...props}
    >
      {withHandle && (
        <div
          className={cn(
            "z-10 flex items-center justify-center rounded-sm border bg-background transition-all",
            isVertical ? "h-3 w-10" : "h-10 w-3",
            isHovered && "border-primary border-opacity-80",
            isActive && "border-primary scale-105"
          )}
          title={tooltip}
        >
          <GripVerticalIcon
            className={cn(
              "size-2.5 text-muted-foreground transition-colors",
              isVertical && "rotate-90",
              isHovered && "text-primary",
              isActive && "text-primary"
            )}
          />
        </div>
      )}
    </PanelResizeHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }