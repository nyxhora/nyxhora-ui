"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, CheckIcon, CheckSquare, Square } from "lucide-react"

import { cn } from "@/lib/utils"
import { useState } from "react"

type ColorType = "default" | "red" | "blue" | "green" | "purple" | "orange";

interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  onSuccessColor?: ColorType;
}


// --- Helper for Colors ---
const getColorClasses = (color: ColorType, checked: boolean) => {
  const baseClasses = "hover:opacity-80 transition-opacity";
  
  // Define explicit backgrounds for visibility
  const colors: Record<string, string> = {
    default: checked ? "bg-primary text-primary border-primary" : "border-transparent",
    red: "bg-red-500/10 text-red-900 dark:text-red-400 border-red-200 dark:border-red-800",
    blue: "bg-blue-500/10 text-blue-900 dark:text-blue-600 border-blue-200 dark:border-blue-800",
    green: "bg-green-500/10 text-green-900 dark:text-green-600 border-green-200 dark:border-green-800",
    purple: "bg-purple-500/10 text-purple-900 dark:text-purple-600 border-purple-200 dark:border-purple-800",
    orange: "bg-orange-500/10 text-orange-900 dark:text-orange-600 border-orange-200 dark:border-orange-800",
  };
  
  return cn(colors[color] || colors.default, baseClasses);
};


function Checkbox({
  className,
  onSuccessColor,
  ...props
}: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center bg-gray justify-center text-current transition-none"
      >
        <span className={cn(getColorClasses(onSuccessColor ?? "default", !!props.checked))}>
          {checked ? (
            <Square className="w-4 h-4" />
          ) : (
            <Check className="w-4 h-4" />
          )}
        </span>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
