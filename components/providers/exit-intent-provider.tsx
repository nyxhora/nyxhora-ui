"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, ShieldAlert } from "lucide-react";

interface ExitIntentContextType {
    isActive: boolean;
    isBeforeUnloadActive: boolean;
    enableExitIntent: () => void;
    disableExitIntent: () => void;
    temporaryDisable: (duration: number) => void;
    enableBeforeUnload: () => void;
    disableBeforeUnload: () => void;
    setBeforeUnloadActive: (active: boolean) => void;
}

const ExitIntentContext = createContext<ExitIntentContextType | undefined>(undefined);

export function ExitIntentProvider({ children }: { children: React.ReactNode }) {
    const [isActive, setIsActive] = useState(true);
    const [isBeforeUnloadActive, setIsBeforeUnloadActive] = useState(true);
    const [showDialog, setShowDialog] = useState(false);
    const [pendingUrl, setPendingUrl] = useState<string | null>(null);
    const [pendingHostname, setPendingHostname] = useState<string>("");
    const isHandlingClick = useRef(false);

    // Link protection controls
    const enableExitIntent = useCallback(() => setIsActive(true), []);
    const disableExitIntent = useCallback(() => setIsActive(false), []);
    const temporaryDisable = useCallback((duration: number) => {
        setIsActive(false);
        setTimeout(() => setIsActive(true), duration);
    }, []);

    // Browser close/refresh controls
    const enableBeforeUnload = useCallback(() => setIsBeforeUnloadActive(true), []);
    const disableBeforeUnload = useCallback(() => setIsBeforeUnloadActive(false), []);
    const setBeforeUnloadActive = useCallback((active: boolean) => setIsBeforeUnloadActive(active), []);

    // Handle confirmation
    const handleConfirmLeave = useCallback(() => {
        if (pendingUrl) {
            setIsActive(false);
            setShowDialog(false);
            window.location.href = pendingUrl;
        }
    }, [pendingUrl]);

    const handleCancelLeave = useCallback(() => {
        setShowDialog(false);
        setPendingUrl(null);
        setPendingHostname("");
        isHandlingClick.current = false;
    }, []);

    // Handle beforeunload event (browser close/refresh)
    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (!isBeforeUnloadActive) return;

            e.preventDefault();
            e.returnValue = "You have unsaved changes. Are you sure you want to leave?";
            return e.returnValue;
        };

        if (isBeforeUnloadActive) {
            window.addEventListener("beforeunload", handleBeforeUnload);
        }

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [isBeforeUnloadActive]);

    // Handle external link clicks
    useEffect(() => {
        const handleLinkClick = (e: MouseEvent) => {
            if (!isActive) return;

            // Prevent multiple triggers
            if (isHandlingClick.current) return;

            const target = e.target as HTMLElement;
            const link = target.closest("a");

            if (!link) return;

            // Skip if link has data-no-confirm attribute
            if (link.hasAttribute("data-no-confirm")) return;

            // Skip if link opens in new tab
            if (link.target === "_blank") return;

            const href = link.getAttribute("href");
            if (!href) return;

            // Skip hash links and javascript: links
            if (href.startsWith("#") || href.startsWith("javascript:")) return;

            // Skip internal links (same origin or relative paths)
            try {
                const url = new URL(href, window.location.origin);
                if (url.origin === window.location.origin) return;

                // External link detected - show confirmation dialog
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();

                isHandlingClick.current = true;
                setPendingUrl(href);
                setPendingHostname(url.hostname);
                setShowDialog(true);
            } catch {
                // Invalid URL, skip
                return;
            }
        };

        if (isActive) {
            // Use capture phase with highest priority
            document.addEventListener("click", handleLinkClick, { capture: true });
        }

        return () => {
            document.removeEventListener("click", handleLinkClick, { capture: true });
        };
    }, [isActive]);

    // Reset handling flag when dialog closes
    useEffect(() => {
        if (!showDialog) {
            // Small delay to prevent immediate re-triggering
            const timer = setTimeout(() => {
                isHandlingClick.current = false;
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [showDialog]);

    return (
        <ExitIntentContext.Provider value={{
            isActive,
            isBeforeUnloadActive,
            enableExitIntent,
            disableExitIntent,
            temporaryDisable,
            enableBeforeUnload,
            disableBeforeUnload,
            setBeforeUnloadActive,
        }}>
            {children}

            {/* Exit Intent Confirmation Dialog */}
            <Dialog open={showDialog} onOpenChange={(open) => {
                if (!open) handleCancelLeave();
            }}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader className="space-y-4">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10 ring-1 ring-amber-500/20">
                            <ShieldAlert className="h-7 w-7 text-amber-500" />
                        </div>
                        <DialogTitle className="text-center text-xl">
                            Leaving so soon?
                        </DialogTitle>
                        <DialogDescription className="text-center space-y-2">
                            <p>You&apos;re about to leave this site and visit:</p>
                            <div className="flex items-center justify-center gap-2 py-2 px-4 bg-muted rounded-lg">
                                <ExternalLink className="h-4 w-4 text-muted-foreground" />
                                <span className="font-medium text-foreground">{pendingHostname}</span>
                            </div>
                            <p className="text-xs text-muted-foreground pt-2">
                                Are you sure you want to continue?
                            </p>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="flex-col sm:flex-row gap-2 sm:gap-0 pt-2">
                        <Button
                            variant="outline"
                            onClick={handleCancelLeave}
                            className="w-full sm:w-auto"
                        >
                            Stay on this page
                        </Button>
                        <Button
                            variant="default"
                            onClick={handleConfirmLeave}
                            className="w-full sm:w-auto"
                        >
                            Yes, leave site
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </ExitIntentContext.Provider>
    );
}

export function useExitIntent() {
    const context = useContext(ExitIntentContext);
    if (context === undefined) {
        throw new Error("useExitIntent must be used within an ExitIntentProvider");
    }
    return context;
}

// Alias for backward compatibility
export const useExitIntentContext = useExitIntent;
