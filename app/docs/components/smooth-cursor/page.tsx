"use client";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import { useState } from "react";

function SmoothCursorDemo() {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="relative h-[300px] w-full rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-950 overflow-hidden flex flex-col items-center justify-center border border-neutral-800">
            {enabled && <SmoothCursor />}
            <div className="relative z-10 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Smooth Cursor</h2>
                <p className="text-neutral-400 mb-4">
                    {enabled ? "Move your mouse around!" : "Enable to see the effect"}
                </p>
                <button
                    onClick={() => setEnabled(!enabled)}
                    className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
                >
                    {enabled ? "Disable Cursor" : "Enable Cursor"}
                </button>
            </div>
        </div>
    );
}

export default function SmoothCursorDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Smooth Cursor"
                description="A smooth custom cursor that follows mouse movement with physics-based spring animations. Rotates based on movement direction."
            />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={<SmoothCursorDemo />}
                code={`import { SmoothCursor } from "@/components/ui/smooth-cursor"

// Add to your component
<SmoothCursor />`}
            />

            {/* Installation */}
            <CodeBlockWrapper
                title="Requirements"
                code={`npm install motion`}
                language="cmd"
            />

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { SmoothCursor } from "@/components/ui/smooth-cursor"

export default function App() {
  return (
    <div>
      <SmoothCursor />
      {/* Your app content */}
    </div>
  )
}`}
                language="tsx"
            />

            {/* Custom Cursor Example */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Customization</h2>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Custom Cursor Element</h3>
                    <ComponentPreview
                        preview={
                            <div className="p-4 rounded-lg bg-muted text-sm">
                                <p className="text-muted-foreground">
                                    You can pass a custom JSX element as the cursor prop to replace the default arrow.
                                </p>
                            </div>
                        }
                        code={`<SmoothCursor
  cursor={
    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
      <span className="text-white text-xs">Hi</span>
    </div>
  }
/>`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Custom Spring Config</h3>
                    <ComponentPreview
                        preview={
                            <div className="p-4 rounded-lg bg-muted text-sm">
                                <p className="text-muted-foreground">
                                    Adjust the spring physics for different feel - try higher stiffness for snappier movement.
                                </p>
                            </div>
                        }
                        code={`<SmoothCursor
  springConfig={{
    damping: 30,
    stiffness: 600,
    mass: 0.5,
    restDelta: 0.001,
  }}
/>`}
                    />
                </div>
            </section>

            {/* Props */}
            <DocsProps
                props={[
                    {
                        name: "cursor",
                        type: "JSX.Element",
                        defaultValue: "<DefaultCursorSVG />",
                        description: "Custom cursor element to display instead of the default arrow cursor",
                    },
                    {
                        name: "springConfig",
                        type: "object",
                        defaultValue: "{ damping: 45, stiffness: 400, mass: 1, restDelta: 0.001 }",
                        description: "Spring physics configuration for the cursor movement animation",
                    },
                ]}
            />

            {/* Note */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Usage Notes</h2>
                <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <p className="text-sm text-amber-200">
                        <strong>Note:</strong> The SmoothCursor component hides the native cursor globally.
                        Add it once at the root of your application for the best experience.
                        The cursor automatically cleans up on unmount.
                    </p>
                </div>
            </section>
        </div>
    );
}
