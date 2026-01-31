import { Metadata } from "next";
import { DocsHeader, DocsProps, CodeBlockWrapper } from "@/components/ui/docs-documentation";
import { ComponentSource } from "@/components/ui/component-source";
import {
    DynamicIslandDemo,
    DynamicIslandPositions,
    DynamicIslandVariants,
    DynamicIslandStacking,
    DynamicIslandNonDismissable,
    DynamicIslandMusicPlayer,
    DynamicIslandCall,
    DynamicIslandAutoDismiss,
} from "./dynamic-island-demo";

export const metadata: Metadata = {
    title: "Dynamic Island",
    description: "A floating, expandable notification component inspired by Apple's Dynamic Island. Features notification stacking, global state management, and smooth animations.",
};

export default function DynamicIslandDocsPage() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <DocsHeader
                title="Dynamic Island"
                description="A floating, expandable notification component inspired by Apple's Dynamic Island. Features notification stacking with navigation dots, dismissable vs persistent notifications, priority-based ordering, and auto-collapse."
            />

            {/* Preview */}
            <DynamicIslandDemo />

            {/* Installation */}
            <CodeBlockWrapper
                title="Installation"
                code={`npm install motion zustand class-variance-authority`}
                language="bash"
            />

            {/* Setup */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Setup</h2>
                <p className="text-muted-foreground">
                    Wrap your app with <code className="bg-muted px-1.5 py-0.5 rounded text-sm">DynamicIslandProvider</code>.
                </p>
                <CodeBlockWrapper
                    title="Layout Setup"
                    code={`// app/layout.tsx
import { DynamicIslandProvider } from "@/components/ui/dynamic-island-provider"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <DynamicIslandProvider 
          defaultPosition="top-center"
          autoCollapseTimeout={10000} // 10s
        >
          {children}
        </DynamicIslandProvider>
      </body>
    </html>
  )
}`}
                    language="tsx"
                />
            </section>

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { useDynamicIsland, DynamicIslandAction } from "@/components/ui/dynamic-island-provider"

function MyComponent() {
  const { push, dismiss, collapse } = useDynamicIsland();

  const notify = () => {
    push({
      icon: <Bell className="h-4 w-4" />,
      title: "New Message",
      subtitle: "From Sarah",
      variant: "default",
      duration: 5000,     // auto-dismiss in 5s (0 = persistent)
      dismissable: true,  // can be dismissed (default)
      priority: 0,        // higher = shows first
      content: <CustomContent />,
    });
  };

  return <Button onClick={notify}>Notify</Button>
}`}
                language="tsx"
            />

            {/* Positions */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Positions</h2>
                <DynamicIslandPositions />
            </section>

            {/* Variants */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Variants</h2>
                <DynamicIslandVariants />
            </section>

            {/* Stacking */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Notification Stacking</h2>
                <p className="text-muted-foreground">
                    Multiple notifications queue up. Expand to see navigation dots at the bottom for switching between notifications. Recent/high-priority notifications appear first.
                </p>
                <DynamicIslandStacking />
            </section>

            {/* Dismissable */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Dismissable vs Persistent</h2>
                <p className="text-muted-foreground">
                    Some notifications (like calls or music players) should not be dismissable. Use <code className="bg-muted px-1.5 py-0.5 rounded text-sm">dismissable: false</code> and <code className="bg-muted px-1.5 py-0.5 rounded text-sm">priority</code> to control behavior.
                </p>
                <DynamicIslandNonDismissable />
            </section>

            {/* Auto-dismiss */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Auto-dismiss</h2>
                <p className="text-muted-foreground">
                    Set <code className="bg-muted px-1.5 py-0.5 rounded text-sm">duration</code> for automatic dismissal. Expanded view auto-collapses after 10s of inactivity.
                </p>
                <DynamicIslandAutoDismiss />
            </section>

            {/* Examples */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Music Player (Non-Dismissable)</h3>
                        <DynamicIslandMusicPlayer />
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Incoming Call (Highest Priority)</h3>
                        <DynamicIslandCall />
                    </div>
                </div>
            </section>

            {/* Component Source */}
            <ComponentSource filePath="/components/ui/dynamic-island-provider.tsx" />

            {/* Hook API */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Hook API</h2>
                <div className="rounded-lg border overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-muted/50">
                            <tr>
                                <th className="text-left p-3 font-medium">Method</th>
                                <th className="text-left p-3 font-medium">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            <tr>
                                <td className="p-3 font-mono text-xs">push(notification)</td>
                                <td className="p-3 text-muted-foreground">Add notification to queue, returns id</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-xs">dismiss(id)</td>
                                <td className="p-3 text-muted-foreground">Dismiss (only if dismissable)</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-xs">dismissAll()</td>
                                <td className="p-3 text-muted-foreground">Clear all dismissable notifications</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-xs">collapse()</td>
                                <td className="p-3 text-muted-foreground">Collapse expanded view</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-xs">setPosition(pos)</td>
                                <td className="p-3 text-muted-foreground">Set global position</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-xs">setActiveIndex(i)</td>
                                <td className="p-3 text-muted-foreground">Switch to notification at index</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Notification Props */}
            <DocsProps
                props={[
                    {
                        name: "title",
                        type: "string",
                        defaultValue: "required",
                        description: "Title text for the notification",
                    },
                    {
                        name: "icon",
                        type: "ReactNode",
                        defaultValue: "undefined",
                        description: "Icon to display",
                    },
                    {
                        name: "subtitle",
                        type: "string",
                        defaultValue: "undefined",
                        description: "Secondary text below title",
                    },
                    {
                        name: "content",
                        type: "ReactNode",
                        defaultValue: "undefined",
                        description: "Custom expanded content",
                    },
                    {
                        name: "variant",
                        type: "'default' | 'success' | 'error' | 'warning'",
                        defaultValue: "default",
                        description: "Visual variant with shadow color",
                    },
                    {
                        name: "duration",
                        type: "number",
                        defaultValue: "5000",
                        description: "Auto-dismiss in ms. 0 = persistent.",
                    },
                    {
                        name: "dismissable",
                        type: "boolean",
                        defaultValue: "true",
                        description: "If false, cannot be dismissed (e.g., calls)",
                    },
                    {
                        name: "priority",
                        type: "number",
                        defaultValue: "0",
                        description: "Higher priority shows first",
                    },
                ]}
            />

            {/* Features */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Features</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Navigation Dots</h3>
                        <p className="text-sm text-muted-foreground mt-1">Switch between stacked notifications using dots when expanded.</p>
                    </div>
                    <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Auto-Collapse</h3>
                        <p className="text-sm text-muted-foreground mt-1">Expanded view collapses after 10s of inactivity.</p>
                    </div>
                    <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Priority Ordering</h3>
                        <p className="text-sm text-muted-foreground mt-1">High priority notifications (calls) always show first.</p>
                    </div>
                    <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Persistent Notifications</h3>
                        <p className="text-sm text-muted-foreground mt-1">Calls and music players can't be dismissed, only collapsed.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
