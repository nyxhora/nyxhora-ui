"use client";

import { Button } from "@/components/ui/button";
import { Shield, ShieldOff, ExternalLink, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useExitIntent } from "@/components/providers/exit-intent-provider";
import { Badge } from "@/components/ui/badge";

// Main demo component - uses global provider
export function ExitIntentDocsDemo() {
    const {
        disableExitIntent,
        enableExitIntent,
        temporaryDisable,
        isActive,
        isBeforeUnloadActive,
        enableBeforeUnload,
        disableBeforeUnload
    } = useExitIntent();

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Exit Intent Protection Demo
                </CardTitle>
                <CardDescription>
                    Test the exit intent protection system with these examples
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Protection Status */}
                <div className="space-y-3">
                    <h4 className="font-medium text-sm">Protection Status</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center justify-between p-3 rounded-lg border">
                            <div className="flex items-center gap-2">
                                <ExternalLink className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">External Links</span>
                            </div>
                            {isActive ? (
                                <Badge variant="default" className="bg-green-500/10 text-green-600 border-green-500/20">
                                    Active
                                </Badge>
                            ) : (
                                <Badge variant="secondary" className="bg-red-500/10 text-red-600 border-red-500/20">
                                    Disabled
                                </Badge>
                            )}
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg border">
                            <div className="flex items-center gap-2">
                                <RefreshCw className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Page Refresh/Close</span>
                            </div>
                            {isBeforeUnloadActive ? (
                                <Badge variant="default" className="bg-green-500/10 text-green-600 border-green-500/20">
                                    Active
                                </Badge>
                            ) : (
                                <Badge variant="secondary" className="bg-red-500/10 text-red-600 border-red-500/20">
                                    Disabled
                                </Badge>
                            )}
                        </div>
                    </div>
                </div>

                {/* Link Protection Controls */}
                <div className="space-y-3">
                    <h4 className="font-medium text-sm">Link Protection Controls</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <Button onClick={enableExitIntent} variant="outline" size="sm">
                            Enable
                        </Button>
                        <Button onClick={disableExitIntent} variant="outline" size="sm">
                            Disable
                        </Button>
                        <Button onClick={() => temporaryDisable(10000)} variant="outline" size="sm">
                            Disable for 10s
                        </Button>
                    </div>
                </div>

                {/* Browser Protection Controls */}
                <div className="space-y-3">
                    <h4 className="font-medium text-sm">Browser Refresh/Close Controls</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <Button onClick={enableBeforeUnload} variant="outline" size="sm">
                            Enable Refresh Warning
                        </Button>
                        <Button onClick={disableBeforeUnload} variant="outline" size="sm">
                            Disable Refresh Warning
                        </Button>
                    </div>
                </div>

                {/* Test Links */}
                <div className="space-y-3">
                    <h4 className="font-medium text-sm">Test External Links</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <a
                            href="https://youtube.com"
                            className="flex items-center gap-2 p-2 border rounded-lg hover:bg-muted transition-colors"
                        >
                            <ExternalLink className="h-4 w-4" />
                            YouTube (will show dialog)
                        </a>
                        <a
                            href="https://www.nyxhora.com"
                            className="flex items-center gap-2 p-2 border rounded-lg hover:bg-muted transition-colors"
                        >
                            <ExternalLink className="h-4 w-4" />
                            Nyxhora (will show dialog)
                        </a>
                        <a
                            href="https://youtube.com"
                            data-no-confirm
                            className="flex items-center gap-2 p-2 border rounded-lg hover:bg-muted transition-colors"
                        >
                            <ExternalLink className="h-4 w-4" />
                            YouTube (data-no-confirm)
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 p-2 border rounded-lg hover:bg-muted transition-colors"
                        >
                            <ExternalLink className="h-4 w-4" />
                            GitHub (new tab)
                        </a>
                    </div>
                </div>

                {/* Instructions */}
                <div className="text-sm text-muted-foreground space-y-1 p-4 bg-muted/50 rounded-lg">
                    <p><strong>How it works:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>External links show a confirmation dialog before leaving</li>
                        <li>Page refresh/close shows browser confirmation (when enabled)</li>
                        <li>Links with <code className="bg-muted px-1 rounded">data-no-confirm</code> skip confirmation</li>
                        <li>Links opening in new tabs skip confirmation</li>
                        <li>All controls use the same global state</li>
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
}

// Status indicator example - uses global state
export function StatusIndicatorExample() {
    const { isActive, isBeforeUnloadActive } = useExitIntent();

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 p-3 rounded-lg border">
                {isActive ? (
                    <>
                        <Shield className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-green-700 dark:text-green-400">
                            Link protection is active
                        </span>
                    </>
                ) : (
                    <>
                        <ShieldOff className="h-4 w-4 text-red-500" />
                        <span className="text-sm text-red-700 dark:text-red-400">
                            Link protection is disabled
                        </span>
                    </>
                )}
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg border">
                {isBeforeUnloadActive ? (
                    <>
                        <RefreshCw className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-green-700 dark:text-green-400">
                            Refresh/close warning is active
                        </span>
                    </>
                ) : (
                    <>
                        <RefreshCw className="h-4 w-4 text-red-500" />
                        <span className="text-sm text-red-700 dark:text-red-400">
                            Refresh/close warning is disabled
                        </span>
                    </>
                )}
            </div>
        </div>
    );
}

// Control buttons example - uses global state
export function ControlButtonsExample() {
    const { enableExitIntent, disableExitIntent, temporaryDisable } = useExitIntent();

    return (
        <div className="flex flex-wrap gap-2">
            <Button onClick={enableExitIntent} variant="outline" size="sm">
                Enable Link Protection
            </Button>
            <Button onClick={disableExitIntent} variant="outline" size="sm">
                Disable Link Protection
            </Button>
            <Button onClick={() => temporaryDisable(10000)} variant="outline" size="sm">
                Disable for 10s
            </Button>
        </div>
    );
}

// Browser protection controls example
export function BeforeUnloadControlsExample() {
    const { enableBeforeUnload, disableBeforeUnload, isBeforeUnloadActive } = useExitIntent();

    return (
        <div className="space-y-3">
            <div className="flex items-center gap-2 p-3 rounded-lg border">
                <RefreshCw className={`h-4 w-4 ${isBeforeUnloadActive ? 'text-green-500' : 'text-red-500'}`} />
                <span className="text-sm">
                    Browser warning is {isBeforeUnloadActive ? 'enabled' : 'disabled'}
                </span>
            </div>
            <div className="flex flex-wrap gap-2">
                <Button onClick={enableBeforeUnload} variant="outline" size="sm">
                    Enable Refresh Warning
                </Button>
                <Button onClick={disableBeforeUnload} variant="outline" size="sm">
                    Disable Refresh Warning
                </Button>
            </div>
        </div>
    );
}

// External links example
export function ExternalLinksExample() {
    return (
        <div className="flex flex-wrap gap-2">
            <a
                href="https://youtube.com"
                className="flex items-center gap-2 p-2 border rounded-lg hover:bg-muted transition-colors"
            >
                <ExternalLink className="h-4 w-4" />
                YouTube
            </a>
            <a
                href="https://www.nyxhora.com"
                className="flex items-center gap-2 p-2 border rounded-lg hover:bg-muted transition-colors"
            >
                <ExternalLink className="h-4 w-4" />
                Nyxhora
            </a>
        </div>
    );
}

// Bypass links example
export function BypassLinksExample() {
    return (
        <div className="flex flex-wrap gap-2">
            <a
                href="https://youtube.com"
                data-no-confirm
                className="flex items-center gap-2 p-2 border rounded-lg hover:bg-muted transition-colors"
            >
                <ExternalLink className="h-4 w-4" />
                With data-no-confirm
            </a>
            <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 border rounded-lg hover:bg-muted transition-colors"
            >
                <ExternalLink className="h-4 w-4" />
                With target=&quot;_blank&quot;
            </a>
        </div>
    );
}

// Form protection example
export function FormProtectionExample() {
    const { isActive, isBeforeUnloadActive, enableExitIntent, enableBeforeUnload, disableExitIntent, disableBeforeUnload } = useExitIntent();

    const handleFormStart = () => {
        enableExitIntent();
        enableBeforeUnload();
    };

    const handleFormSubmit = () => {
        disableExitIntent();
        disableBeforeUnload();
        alert("Form submitted! Protection disabled.");
    };

    return (
        <div className="space-y-4 p-4 border rounded-lg">
            <div className="flex items-center gap-2">
                <Badge variant={isActive && isBeforeUnloadActive ? "default" : "secondary"}>
                    {isActive && isBeforeUnloadActive ? "Protected" : "Unprotected"}
                </Badge>
                <span className="text-sm text-muted-foreground">Simulated form</span>
            </div>
            <div className="space-y-2">
                <input
                    type="text"
                    placeholder="Start typing to enable protection..."
                    className="w-full p-2 border rounded-lg bg-background"
                    onFocus={handleFormStart}
                />
            </div>
            <Button onClick={handleFormSubmit} size="sm">
                Submit Form
            </Button>
        </div>
    );
}
