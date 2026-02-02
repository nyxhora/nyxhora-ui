import { create } from "zustand";
import { ReactNode } from "react";

// ============================================================================
// Types
// ============================================================================

export type DynamicIslandPosition =
    | "top-start"
    | "top-center"
    | "top-end"
    | "bottom-start"
    | "bottom-center"
    | "bottom-end";

export type DynamicIslandVariant = "default" | "success" | "error" | "warning";

export interface DynamicIslandNotification {
    id: string;
    icon?: ReactNode;
    title: string;
    subtitle?: string;
    content?: ReactNode;
    variant?: DynamicIslandVariant;
    duration?: number; // 0 = persistent, ms otherwise
    timestamp: number;
    /** If false, notification cannot be dismissed (e.g., calls, music players) */
    dismissable?: boolean;
    /** Priority level - higher priority notifications show first. Default: 0 */
    priority?: number;
}

export interface DynamicIslandAction {
    label: string;
    onClick: () => void;
    variant?: "default" | "primary" | "secondary";
}

interface DynamicIslandStore {
    // Global configuration
    position: DynamicIslandPosition;
    setPosition: (position: DynamicIslandPosition) => void;

    // Auto-collapse timeout (in ms) for expanded view
    autoCollapseTimeout: number;
    setAutoCollapseTimeout: (timeout: number) => void;

    // Notifications queue (ordered by priority and timestamp, recent first)
    notifications: DynamicIslandNotification[];
    push: (notification: Omit<DynamicIslandNotification, "id" | "timestamp">) => string;
    dismiss: (id: string) => void;
    dismissAll: () => void;
    update: (id: string, updates: Partial<Omit<DynamicIslandNotification, "id" | "timestamp">>) => void;

    // Expansion state
    expandedId: string | null;
    expand: (id: string) => void;
    collapse: () => void;
    toggleExpand: (id: string) => void;

    // Active notification index (for navigation dots)
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    nextNotification: () => void;
    prevNotification: () => void;

    // Computed: active notification (at activeIndex)
    getActiveNotification: () => DynamicIslandNotification | null;
}

// ============================================================================
// Store
// ============================================================================

let notificationCounter = 0;

export const useDynamicIsland = create<DynamicIslandStore>((set, get) => ({
    // Global configuration
    position: "top-center",
    setPosition: (position) => set({ position }),

    // Auto-collapse timeout
    autoCollapseTimeout: 10000, // 10 seconds default
    setAutoCollapseTimeout: (timeout) => set({ autoCollapseTimeout: timeout }),

    // Notifications queue
    notifications: [],
    activeIndex: 0,

    push: (notification) => {
        const id = `di-${++notificationCounter}-${Date.now()}`;
        const newNotification: DynamicIslandNotification = {
            ...notification,
            id,
            timestamp: Date.now(),
            duration: notification.duration ?? 5000,
            variant: notification.variant ?? "default",
            dismissable: notification.dismissable ?? true,
            priority: notification.priority ?? 0,
        };

        set((state) => {
            // Add to notifications and sort by priority (high first) then timestamp (recent first)
            const notifications = [...state.notifications, newNotification].sort((a, b) => {
                // Higher priority first
                if ((b.priority ?? 0) !== (a.priority ?? 0)) {
                    return (b.priority ?? 0) - (a.priority ?? 0);
                }
                // Then by timestamp (recent first)
                return b.timestamp - a.timestamp;
            });

            return {
                notifications,
                activeIndex: 0, // Reset to first (most recent/priority)
            };
        });

        // Auto-dismiss if duration > 0 AND dismissable
        if (newNotification.duration && newNotification.duration > 0 && newNotification.dismissable) {
            setTimeout(() => {
                const currentNotification = get().notifications.find(n => n.id === id);
                if (currentNotification?.dismissable) {
                    get().dismiss(id);
                }
            }, newNotification.duration);
        }

        return id;
    },

    dismiss: (id) => {
        const state = get();
        const notification = state.notifications.find(n => n.id === id);

        // Cannot dismiss non-dismissable notifications
        if (notification && !notification.dismissable) {
            return;
        }

        set((state) => {
            const notifications = state.notifications.filter((n) => n.id !== id);
            const wasExpanded = state.expandedId === id;

            // Adjust activeIndex if needed
            let newActiveIndex = state.activeIndex;
            if (newActiveIndex >= notifications.length) {
                newActiveIndex = Math.max(0, notifications.length - 1);
            }

            // If was expanded and there are remaining notifications, stay expanded with next one
            let newExpandedId = state.expandedId;
            if (wasExpanded) {
                if (notifications.length > 0) {
                    // Expand the next notification (at the adjusted index)
                    newExpandedId = notifications[newActiveIndex]?.id ?? null;
                } else {
                    // No more notifications, collapse
                    newExpandedId = null;
                }
            }

            return {
                notifications,
                activeIndex: newActiveIndex,
                expandedId: newExpandedId,
            };
        });
    },

    dismissAll: () => {
        set((state) => ({
            // Only dismiss dismissable notifications
            notifications: state.notifications.filter(n => !n.dismissable),
            activeIndex: 0,
            expandedId: null,
        }));
    },

    update: (id, updates) => {
        set((state) => {
            const notifications = state.notifications.map((n) =>
                n.id === id ? { ...n, ...updates } : n
            );
            return { notifications };
        });
    },

    // Expansion state
    expandedId: null,

    expand: (id) => {
        set({ expandedId: id });
    },

    collapse: () => {
        set({ expandedId: null });
    },

    toggleExpand: (id) => {
        set((state) => ({
            expandedId: state.expandedId === id ? null : id,
        }));
    },

    // Navigation
    setActiveIndex: (index) => {
        const { notifications } = get();
        if (index >= 0 && index < notifications.length) {
            set({ activeIndex: index }); // Keep expansion state when switching
        }
    },

    nextNotification: () => {
        const { notifications, activeIndex } = get();
        if (activeIndex < notifications.length - 1) {
            set({ activeIndex: activeIndex + 1 });
        }
    },

    prevNotification: () => {
        const { activeIndex } = get();
        if (activeIndex > 0) {
            set({ activeIndex: activeIndex - 1 });
        }
    },

    // Get active notification
    getActiveNotification: () => {
        const { notifications, activeIndex } = get();
        return notifications[activeIndex] ?? null;
    },
}));

// ============================================================================
// Helper hooks
// ============================================================================

export function useDynamicIslandNotifications() {
    return useDynamicIsland((state) => state.notifications);
}

export function useDynamicIslandPosition() {
    return useDynamicIsland((state) => state.position);
}

export function useDynamicIslandActive() {
    return useDynamicIsland((state) => state.getActiveNotification());
}

export function useDynamicIslandExpanded() {
    return useDynamicIsland((state) => state.expandedId);
}
