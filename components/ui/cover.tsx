"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { VariantProps, cva } from "class-variance-authority";
import { X, ImageIcon } from "lucide-react";
import { Button } from "./button";

const coverVariants = cva(
  "relative w-full group overflow-hidden",
  {
    variants: {
      size: {
        default: "h-[35vh]",
        sm: "h-[12vh]",
        lg: "h-[50vh]",
        full: "h-full min-h-[200px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface CoverProps extends VariantProps<typeof coverVariants> {
  /** URL of the cover image */
  url?: string;
  /** If true, hides action buttons (view-only mode) */
  preview?: boolean;
  /** Content to render inside the cover (e.g., overlays, titles) */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Callback when 'Remove' button is clicked */
  onRemove?: () => void;
  /** Callback when 'Change cover' button is clicked */
  onChange?: () => void;
  /** Alt text for the cover image */
  alt?: string;
}

export const Cover = ({
  url,
  preview,
  children,
  size,
  className,
  onRemove,
  onChange,
  alt = "Cover image",
}: CoverProps) => {
  const hasActions = onChange || onRemove;

  return (
    <div
      className={cn(
        coverVariants({ size: !url ? "sm" : size }),
        url ? "bg-muted" : "bg-gradient-to-br from-muted/50 to-muted",
        className
      )}
    >
      {/* Cover Image */}
      {!!url && (
        <Image
          src={url}
          fill
          alt={alt}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          priority
        />
      )}

      {/* Gradient Overlay for better button visibility */}
      {url && !preview && hasActions && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}

      {/* Action Buttons */}
      {url && !preview && hasActions && (
        <div className="opacity-0 group-hover:opacity-100 absolute top-4 right-4 flex items-center gap-2 transition-all duration-300 transform translate-y-[-8px] group-hover:translate-y-0 z-10">
          {onChange && (
            <Button
              onClick={onChange}
              className="text-xs font-medium text-white/90 hover:text-white hover:bg-white/20 border border-white/20 bg-black/30 backdrop-blur-md h-8 px-3 rounded-md shadow-lg transition-all duration-200 hover:scale-105"
              variant="ghost"
              size="sm"
            >
              <ImageIcon className="h-3.5 w-3.5 mr-1.5" />
              Change cover
            </Button>
          )}
          {onRemove && (
            <Button
              onClick={onRemove}
              className="text-xs font-medium text-white/90 hover:text-red-300 hover:bg-red-500/20 border border-white/20 bg-black/30 backdrop-blur-md h-8 px-3 rounded-md shadow-lg transition-all duration-200 hover:scale-105"
              variant="ghost"
              size="sm"
            >
              <X className="h-3.5 w-3.5 mr-1.5" />
              Remove
            </Button>
          )}
        </div>
      )}

      {/* Empty State */}
      {!url && !children && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
            <ImageIcon className="h-8 w-8" />
            <span className="text-xs font-medium">No cover image</span>
          </div>
        </div>
      )}

      {/* Children (overlays, titles, etc.) */}
      {children}
    </div>
  );
};

Cover.Skeleton = function CoverSkeleton({ size = "default" }: { size?: "default" | "sm" | "lg" | "full" }) {
  const heights = {
    default: "h-[35vh]",
    sm: "h-[12vh]",
    lg: "h-[50vh]",
    full: "h-full min-h-[200px]",
  };

  return (
    <div className={cn("w-full relative", heights[size])}>
      <Skeleton className="w-full h-full" />
    </div>
  );
};
