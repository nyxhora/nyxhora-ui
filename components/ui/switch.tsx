"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

type ColorType = "default" | "red" | "blue" | "green" | "purple" | "orange";

interface SwitchProps extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  onSuccessColor?: ColorType
}

const getSwitchColorClasses = (color: ColorType) => {
  const colors: Record<string, string> = {
    default: "data-[state=checked]:bg-primary",
    red: "data-[state=checked]:bg-red-500 dark:data-[state=checked]:bg-red-600",
    blue: "data-[state=checked]:bg-blue-500 dark:data-[state=checked]:bg-blue-600",
    green: "data-[state=checked]:bg-green-500 dark:data-[state=checked]:bg-green-600",
    purple: "data-[state=checked]:bg-purple-500 dark:data-[state=checked]:bg-purple-600",
    orange: "data-[state=checked]:bg-orange-500 dark:data-[state=checked]:bg-orange-600",
  };
  return colors[color] || colors.default;
};

function Switch({
  className,
  onSuccessColor,
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        getSwitchColorClasses(onSuccessColor ?? "default"),
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
