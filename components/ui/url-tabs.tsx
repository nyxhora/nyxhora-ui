"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface UrlTabsProps extends React.ComponentProps<typeof Tabs> {
  /**
   * The URL parameter name to use for the active tab
   * @default "tab"
   */
  paramName?: string
  /**
   * Whether to update the URL when tab changes
   * @default true
   */
  updateUrl?: boolean
  /**
   * Whether to replace the current history entry instead of pushing a new one
   * @default false
   */
  replaceHistory?: boolean
}

function UrlTabs({
  paramName = "tab",
  updateUrl = true,
  replaceHistory = false,
  defaultValue,
  value: controlledValue,
  onValueChange,
  children,
  ...props
}: UrlTabsProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Get the current tab from URL or use default
  const urlTab = searchParams.get(paramName)
  const currentTab = controlledValue || urlTab || defaultValue
  
  const handleValueChange = React.useCallback((newValue: string) => {
    // Call the original onValueChange if provided
    if (onValueChange) {
      onValueChange(newValue)
    }
    
    // Update URL if enabled
    if (updateUrl) {
      const current = new URLSearchParams(Array.from(searchParams.entries()))
      
      if (newValue === defaultValue) {
        // Remove the parameter if it's the default value to keep URL clean
        current.delete(paramName)
      } else {
        current.set(paramName, newValue)
      }
      
      const search = current.toString()
      const query = search ? `?${search}` : ""
      
      if (replaceHistory) {
        router.replace(`${window.location.pathname}${query}`)
      } else {
        router.push(`${window.location.pathname}${query}`)
      }
    }
  }, [onValueChange, updateUrl, searchParams, paramName, defaultValue, router, replaceHistory])

  return (
    <Tabs
      value={currentTab}
      onValueChange={handleValueChange}
      defaultValue={defaultValue}
      {...props}
    >
      {children}
    </Tabs>
  )
}

// Re-export the original components for convenience
export { UrlTabs, TabsList, TabsTrigger, TabsContent }
