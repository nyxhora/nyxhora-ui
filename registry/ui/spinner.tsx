import React from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const spinnerVariants = cva(
    "relative block opacity-[0.65]",
    {
        variants: {
            variant: {
                default: "rounded-full border-2 border-current border-t-transparent animate-spin",
                dotted: "rounded-full border-2 border-dotted border-current animate-spin",
                bars: "animate-spin rounded-full",
                pulse: "animate-ping rounded-full bg-current",
                gradient: "rounded-full p-[2px] animate-spin bg-gradient-to-r from-current to-transparent mask-image-gradient",
            },
            size: {
                sm: "w-4 h-4",
                default: "w-6 h-6",
                lg: "w-8 h-8",
                xl: "w-12 h-12",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface SpinnerProps
    extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spinnerVariants> {
    loading?: boolean;
}

const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
    ({ className, variant, size, loading = true, ...props }, ref) => {
        if (!loading) return null;

        if (variant === "bars") {
            return (
                <span
                    ref={ref}
                    className={cn("relative inline-flex items-center justify-center", className)}
                    {...props}
                >
                    <span className={cn("relative block", className)} style={{ width: size === 'sm' ? 16 : size === 'lg' ? 32 : size === 'xl' ? 48 : 24, height: size === 'sm' ? 16 : size === 'lg' ? 32 : size === 'xl' ? 48 : 24 }}>
                        {[...Array(8)].map((_, i) => (
                            <span
                                key={i}
                                className="absolute top-0 left-1/2 -ml-[1.5px] w-[3px] h-full rounded-full"
                                style={{
                                    transform: `rotate(${i * 45}deg)`,
                                }}
                            >
                                <span className="block w-full h-[30%] rounded-full bg-current animate-pulse" style={{ animationDelay: `-${0.8 - i * 0.1}s` }}></span>
                            </span>
                        ))}
                    </span>
                </span>
            )
        }

        if (variant === "gradient") {
            return (
                <span
                    ref={ref}
                    className={cn("relative flex items-center justify-center", spinnerVariants({ size }), className)}
                    {...props}
                >
                    <span className="absolute inset-0 rounded-full bg-background m-[2px]" />
                    <span className="absolute inset-0 rounded-full border-t-2 border-current border-r-transparent border-b-transparent border-l-transparent" />
                </span>
            )
        }

        return (
            <span
                ref={ref}
                className={cn(spinnerVariants({ variant, size }), className)}
                {...props}
            >
                <span className="sr-only">Loading...</span>
            </span>
        );
    }
);
Spinner.displayName = "Spinner";

export { Spinner, spinnerVariants };
