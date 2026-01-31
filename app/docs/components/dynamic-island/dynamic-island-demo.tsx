"use client";

import { useState } from "react";
import { useDynamicIsland, DynamicIslandAction } from "@/components/ui/dynamic-island-provider";
import { DocsPreview, ComponentPreview } from "@/components/ui/docs-documentation";
import { Button } from "@/components/ui/button";
import {
    Bell,
    Music,
    Phone,
    PhoneOff,
    Play,
    Pause,
    SkipForward,
    CheckCircle,
    AlertTriangle,
    XCircle,
    Info,
    MessageCircle,
    Download,
    Upload,
    Wifi,
    Lock,
} from "lucide-react";
import { toast } from "sonner";

// ============================================================================
// Main Demo - Push Notification
// ============================================================================

export function DynamicIslandDemo() {
    const { push, dismiss, collapse } = useDynamicIsland();

    const handlePush = () => {
        const id = push({
            icon: <Bell className="h-4 w-4" />,
            title: "New Message",
            subtitle: "From Sarah",
            content: (
                <div className="space-y-3 pr-6">
                    <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-blue-500/20">
                            <Bell className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                            <h4 className="font-semibold">New Message</h4>
                            <p className="text-sm text-white/70 mt-0.5">
                                You have a new message from Sarah
                                You have a new message from Sarah
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 pt-2">
                        <DynamicIslandAction variant="primary" onClick={() => {
                            toast.success("Replied!");
                            collapse();
                        }}>
                            Reply
                        </DynamicIslandAction>
                        <DynamicIslandAction onClick={() => dismiss(id)}>
                            Dismiss
                        </DynamicIslandAction>
                    </div>
                </div>
            ),
            duration: 0, // Persistent until dismissed
            dismissable: true,
        });
    };

    return (
        <DocsPreview
            title="Preview"
            previewCode={
                <div className="relative w-full min-h-[200px] flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-lg p-8">
                    <p className="text-muted-foreground text-sm text-center mb-4">
                        Click the button below to trigger a notification.<br />
                        The Dynamic Island will appear at the top of the viewport.
                    </p>
                    <Button onClick={handlePush} size="lg">
                        <Bell className="h-4 w-4 mr-2" />
                        Show Notification
                    </Button>
                </div>
            }
            code={`const { push, dismiss, collapse } = useDynamicIsland();

// Push a dismissable notification
const id = push({
  icon: <Bell className="h-4 w-4" />,
  title: "New Message",
  subtitle: "From Sarah",
  dismissable: true, // Can be dismissed
  duration: 0, // Persistent
  content: (
    <div className="space-y-3">
      <h4 className="font-semibold">New Message</h4>
      <div className="flex gap-2">
        <DynamicIslandAction variant="primary" onClick={collapse}>
          Reply
        </DynamicIslandAction>
        <DynamicIslandAction onClick={() => dismiss(id)}>
          Dismiss
        </DynamicIslandAction>
      </div>
    </div>
  ),
});`}
        />
    );
}

// ============================================================================
// Position Demo
// ============================================================================

export function DynamicIslandPositions() {
    const { position, setPosition, push, dismissAll } = useDynamicIsland();

    const positions = [
        { value: "top-start" as const, label: "Top Start" },
        { value: "top-center" as const, label: "Top Center" },
        { value: "top-end" as const, label: "Top End" },
        { value: "bottom-start" as const, label: "Bottom Start" },
        { value: "bottom-center" as const, label: "Bottom Center" },
        { value: "bottom-end" as const, label: "Bottom End" },
    ];

    const handlePositionChange = (newPosition: typeof position) => {
        dismissAll();
        setPosition(newPosition);
        setTimeout(() => {
            push({
                icon: <Info className="h-4 w-4" />,
                title: `Position: ${newPosition}`,
                duration: 3000,
            });
        }, 100);
    };

    return (
        <ComponentPreview
            preview={
                <div className="space-y-4 w-full">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {positions.map((pos) => (
                            <Button
                                key={pos.value}
                                variant={position === pos.value ? "default" : "outline"}
                                size="sm"
                                onClick={() => handlePositionChange(pos.value)}
                            >
                                {pos.label}
                            </Button>
                        ))}
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                        Current position: <code className="bg-muted px-1.5 py-0.5 rounded">{position}</code>
                    </p>
                </div>
            }
            code={`const { setPosition, push } = useDynamicIsland();

// Change position globally
setPosition("bottom-center");

// All notifications will now appear at bottom-center
push({ title: "Hello!", duration: 3000 });`}
        />
    );
}

// ============================================================================
// Variants Demo
// ============================================================================

export function DynamicIslandVariants() {
    const { push } = useDynamicIsland();

    const variants = [
        { value: "default" as const, label: "Default", icon: <Info className="h-4 w-4" /> },
        { value: "success" as const, label: "Success", icon: <CheckCircle className="h-4 w-4" /> },
        { value: "warning" as const, label: "Warning", icon: <AlertTriangle className="h-4 w-4" /> },
        { value: "error" as const, label: "Error", icon: <XCircle className="h-4 w-4" /> },
    ];

    return (
        <ComponentPreview
            preview={
                <div className="flex flex-wrap gap-2 justify-center">
                    {variants.map((v) => (
                        <Button
                            key={v.value}
                            variant="outline"
                            size="sm"
                            onClick={() =>
                                push({
                                    icon: v.icon,
                                    title: v.label,
                                    subtitle: "Status notification",
                                    variant: v.value,
                                    duration: 3000,
                                })
                            }
                        >
                            {v.label}
                        </Button>
                    ))}
                </div>
            }
            code={`const { push } = useDynamicIsland();

push({
  icon: <CheckCircle className="h-4 w-4" />,
  title: "Success",
  subtitle: "Operation completed",
  variant: "success",
  duration: 3000,
});`}
        />
    );
}

// ============================================================================
// Stacking Demo
// ============================================================================

export function DynamicIslandStacking() {
    const { push, notifications, dismissAll } = useDynamicIsland();
    const [counter, setCounter] = useState(0);

    const icons = [
        <MessageCircle key="msg" className="h-4 w-4" />,
        <Download key="dl" className="h-4 w-4" />,
        <Upload key="ul" className="h-4 w-4" />,
        <Wifi key="wifi" className="h-4 w-4" />,
        <Bell key="bell" className="h-4 w-4" />,
    ];

    const handlePush = () => {
        const newCounter = counter + 1;
        setCounter(newCounter);
        push({
            icon: icons[newCounter % icons.length],
            title: `Notification #${newCounter}`,
            subtitle: "New update available",
            duration: 0,
            dismissable: true,
        });
    };

    return (
        <ComponentPreview
            preview={
                <div className="space-y-4 w-full">
                    <div className="flex gap-2 justify-center">
                        <Button onClick={handlePush}>
                            Push Notification
                        </Button>
                        <Button variant="outline" onClick={dismissAll}>
                            Dismiss All
                        </Button>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                        Queue: {notifications.length} notification{notifications.length !== 1 ? "s" : ""}
                    </p>
                    <p className="text-xs text-muted-foreground text-center">
                        Push multiple notifications, then expand to see navigation dots
                    </p>
                </div>
            }
            code={`const { push, notifications, dismissAll } = useDynamicIsland();

// Push multiple notifications
push({ title: "Notification #1", duration: 0 });
push({ title: "Notification #2", duration: 0 });
push({ title: "Notification #3", duration: 0 });

// Expand to see navigation dots at bottom
// Click dots to switch between notifications
dismissAll(); // Clear all dismissable`}
        />
    );
}

// ============================================================================
// Non-Dismissable Demo
// ============================================================================

export function DynamicIslandNonDismissable() {
    const { push, notifications } = useDynamicIsland();

    const handlePushPersistent = () => {
        push({
            icon: <Lock className="h-4 w-4" />,
            title: "Active Call",
            subtitle: "00:15 elapsed",
            variant: "success",
            dismissable: false, // Cannot be dismissed
            priority: 10, // High priority - shows first
            duration: 0,
            content: (
                <div className="space-y-4 pr-6">
                    <div className="flex items-center gap-4">
                        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-xl font-bold text-white flex-shrink-0">
                            JD
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">John Doe</h4>
                            <p className="text-sm text-white/70">Call in progress</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="p-4 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                            onClick={() => toast.info("End call action")}
                        >
                            <PhoneOff className="h-5 w-5 text-white" />
                        </button>
                    </div>
                </div>
            ),
        });
    };

    const handlePushDismissable = () => {
        push({
            icon: <Bell className="h-4 w-4" />,
            title: "New Message",
            subtitle: "Can be dismissed",
            dismissable: true,
            duration: 0,
        });
    };

    return (
        <ComponentPreview
            preview={
                <div className="space-y-4 w-full">
                    <div className="flex flex-wrap gap-2 justify-center">
                        <Button onClick={handlePushPersistent} variant="outline">
                            <Lock className="h-4 w-4 mr-2" />
                            Push Non-Dismissable
                        </Button>
                        <Button onClick={handlePushDismissable} variant="outline">
                            <Bell className="h-4 w-4 mr-2" />
                            Push Dismissable
                        </Button>
                    </div>
                    <p className="text-xs text-muted-foreground text-center">
                        Non-dismissable notifications (calls, music) cannot be swiped away.<br />
                        Use <code className="bg-muted px-1 py-0.5 rounded">dismissable: false</code> and <code className="bg-muted px-1 py-0.5 rounded">priority: 10</code>
                    </p>
                </div>
            }
            code={`const { push } = useDynamicIsland();

// Non-dismissable notification (e.g., active call)
push({
  icon: <Phone className="h-4 w-4" />,
  title: "Active Call",
  dismissable: false, // Cannot be dismissed
  priority: 10, // High priority - shows first
  duration: 0,
});

// Dismissable notification
push({
  title: "New Message",
  dismissable: true, // Can be dismissed (default)
});`}
        />
    );
}

// ============================================================================
// Music Player Demo (Non-Dismissable)
// ============================================================================

export function DynamicIslandMusicPlayer() {
    const { push, collapse } = useDynamicIsland();
    const [isPlaying, setIsPlaying] = useState(true);

    const handleShowPlayer = () => {
        push({
            icon: (
                <div className="relative">
                    <Music className="h-4 w-4" />
                    {isPlaying && (
                        <span className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                    )}
                </div>
            ),
            title: "Now Playing",
            subtitle: "Blinding Lights",
            dismissable: false, // Music player is not dismissable
            priority: 5, // Medium-high priority
            duration: 0,
            content: (
                <MusicPlayerContent
                    isPlaying={isPlaying}
                    onTogglePlay={() => setIsPlaying(!isPlaying)}
                    onClose={() => collapse()}
                />
            ),
        });
    };

    return (
        <ComponentPreview
            preview={
                <div className="flex flex-col items-center gap-4">
                    <Button onClick={handleShowPlayer}>
                        <Music className="h-4 w-4 mr-2" />
                        Show Music Player
                    </Button>
                    <p className="text-xs text-muted-foreground">
                        Music player is non-dismissable
                    </p>
                </div>
            }
            code={`const { push, collapse } = useDynamicIsland();

push({
  icon: <Music className="h-4 w-4" />,
  title: "Now Playing",
  subtitle: "Blinding Lights",
  dismissable: false, // Cannot be dismissed
  priority: 5,
  duration: 0,
  content: <MusicPlayerContent />,
});`}
        />
    );
}

function MusicPlayerContent({
    isPlaying,
    onTogglePlay,
    onClose,
}: {
    isPlaying: boolean;
    onTogglePlay: () => void;
    onClose: () => void;
}) {
    return (
        <div className="space-y-4 pr-6">
            <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Music className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-semibold truncate">Blinding Lights</h4>
                    <p className="text-sm text-white/70 truncate">The Weeknd</p>
                    <div className="mt-2 h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-white rounded-full" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-4">
                <DynamicIslandAction>
                    <SkipForward className="h-4 w-4 rotate-180" />
                </DynamicIslandAction>
                <DynamicIslandAction
                    variant="primary"
                    className="!rounded-full !p-3"
                    onClick={onTogglePlay}
                >
                    {isPlaying ? (
                        <Pause className="h-5 w-5" />
                    ) : (
                        <Play className="h-5 w-5" />
                    )}
                </DynamicIslandAction>
                <DynamicIslandAction>
                    <SkipForward className="h-4 w-4" />
                </DynamicIslandAction>
            </div>
        </div>
    );
}

// ============================================================================
// Call Demo (Non-Dismissable)
// ============================================================================

export function DynamicIslandCall() {
    const { push, dismiss, collapse } = useDynamicIsland();

    const handleCall = () => {
        const id = push({
            icon: <Phone className="h-4 w-4 animate-pulse" />,
            title: "Incoming Call",
            subtitle: "John Doe",
            variant: "success",
            dismissable: false, // Calls cannot be dismissed
            priority: 100, // Highest priority
            duration: 0,
            content: (
                <div className="space-y-4 pr-6">
                    <div className="flex items-center gap-4">
                        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-xl font-bold text-white flex-shrink-0">
                            JD
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">John Doe</h4>
                            <p className="text-sm text-white/70">mobile</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-6 pt-2">
                        <button
                            className="p-4 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                            onClick={() => {
                                // Manually remove non-dismissable notification by updating store directly
                                useDynamicIsland.setState((state) => ({
                                    notifications: state.notifications.filter(n => n.id !== id),
                                    activeIndex: 0,
                                    expandedId: null,
                                }));
                                toast.error("Call declined");
                            }}
                        >
                            <PhoneOff className="h-5 w-5 text-white" />
                        </button>
                        <button
                            className="p-4 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
                            onClick={() => {
                                collapse();
                                toast.success("Call answered");
                            }}
                        >
                            <Phone className="h-5 w-5 text-white" />
                        </button>
                    </div>
                </div>
            ),
        });
    };

    return (
        <ComponentPreview
            preview={
                <div className="flex flex-col items-center gap-4">
                    <Button onClick={handleCall}>
                        <Phone className="h-4 w-4 mr-2" />
                        Simulate Incoming Call
                    </Button>
                    <p className="text-xs text-muted-foreground">
                        Calls have highest priority and cannot be dismissed
                    </p>
                </div>
            }
            code={`const { push } = useDynamicIsland();

push({
  icon: <Phone className="h-4 w-4" />,
  title: "Incoming Call",
  subtitle: "John Doe",
  variant: "success",
  dismissable: false, // Cannot be dismissed
  priority: 100, // Highest priority - always shows first
  duration: 0,
  content: <CallUI />,
});`}
        />
    );
}

// ============================================================================
// Auto-dismiss Demo
// ============================================================================

export function DynamicIslandAutoDismiss() {
    const { push } = useDynamicIsland();

    const durations = [
        { value: 2000, label: "2 seconds" },
        { value: 5000, label: "5 seconds" },
        { value: 10000, label: "10 seconds" },
    ];

    return (
        <ComponentPreview
            preview={
                <div className="space-y-4 w-full">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {durations.map((d) => (
                            <Button
                                key={d.value}
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                    push({
                                        icon: <Bell className="h-4 w-4" />,
                                        title: `Auto-dismiss in ${d.label}`,
                                        duration: d.value,
                                    })
                                }
                            >
                                {d.label}
                            </Button>
                        ))}
                    </div>
                    <p className="text-xs text-muted-foreground text-center">
                        Expanded view auto-collapses after 10s of inactivity
                    </p>
                </div>
            }
            code={`const { push } = useDynamicIsland();

// Auto-dismiss after 5 seconds
push({
  icon: <Bell className="h-4 w-4" />,
  title: "Auto-dismiss notification",
  duration: 5000, // milliseconds
  dismissable: true, // Required for auto-dismiss
});

// Note: Expanded view auto-collapses after 10s of inactivity`}
        />
    );
}
