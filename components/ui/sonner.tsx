"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"
import { useColorTheme } from "@/components/providers/color-theme-provider"

interface ToasterComponentProps extends Omit<ToasterProps, 'theme'> {
  theme?: ToasterProps["theme"]
}

const Toaster = ({ theme: customTheme, ...props }: ToasterComponentProps) => {
  const { theme = "system" } = useTheme()
  const { colorTheme } = useColorTheme()

  return (
    <Sonner
      theme={customTheme || (theme as ToasterProps["theme"])}
      className={`toaster group ${colorTheme !== "nyxhora" ? `theme-${colorTheme}` : ""}`}
      style={
        {
          "--normal-bg": "var(--background)",
          "--normal-text": "var(--foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
