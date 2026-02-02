"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon, Dot } from "lucide-react"

import { cn } from "@/lib/utils"
import { useState } from "react"
type ColorType = "default" | "red" | "blue" | "green" | "purple" | "orange";
interface RadioGroupProps extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {
  onSuccessColor?: ColorType
}
function RadioGroup({
  className,
  onSuccessColor,
  ...props
}: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

// --- Helper for Colors ---
const getColorClasses = (color: ColorType, checked: boolean) => {
  const baseClasses = "hover:opacity-80 transition-opacity";

  // Define explicit backgrounds for visibility
  const colors: Record<string, string> = {
    default: checked ? "fill-primary" : "bg-transparent",
    red: "fill-red-500 text-red-900 dark:text-red-400 border-red-200 dark:border-red-800",
    blue: "fill-blue-500 text-blue-900 dark:text-blue-600 border-blue-200 dark:border-blue-800",
    green: "fill-green-500 text-green-900 dark:text-green-600 border-green-200 dark:border-green-800",
    purple: "fill-purple-500 text-purple-900 dark:text-purple-600  dark:border-purple-800",
    orange: "fill-orange-500 text-orange-900 dark:text-orange-600 border-orange-200 dark:border-orange-800",
  };

  return cn(colors[color] || colors.default, baseClasses);
};
interface RadioGroupItemProps extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {
  onSuccessColor?: ColorType
}

function RadioGroupItem({
  className,
  onSuccessColor,
  ...props
}: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className={cn("absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2", getColorClasses(onSuccessColor ?? "default", true))} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
