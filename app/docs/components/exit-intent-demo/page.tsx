import { Metadata } from "next";
import { Shield, ShieldOff, ExternalLink, RefreshCw, FileCode2, Zap } from "lucide-react";
import {
    CodeBlockWrapper,
    ComponentPreview,
    DocsHeader,
    DocsPreview,
    DocsProps,
} from "@/components/ui/docs-documentation";
import { ComponentSource } from "@/components/ui/component-source";
import {
    ExitIntentDocsDemo,
    StatusIndicatorExample,
    ControlButtonsExample,
    ExternalLinksExample,
    BypassLinksExample,
    BeforeUnloadControlsExample,
    FormProtectionExample,
} from "./exit-intent-docs-demo";

export const metadata: Metadata = {
    title: "Exit Intent",
    description: "A protection system that detects when users attempt to leave the page and shows confirmation dialogs to prevent accidental navigation.",
};

export default function ExitIntentDocsPage() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <DocsHeader
                title="Exit Intent"
                description="A protection system that detects when users attempt to leave the page and shows confirmation dialogs to prevent accidental navigation."
            />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={<ExitIntentDocsDemo />}
                code={`import { useExitIntent } from "@/components/providers/exit-intent-provider"

const { isActive, isBeforeUnloadActive, enableExitIntent, disableExitIntent } = useExitIntent();`}
            />

            {/* Installation */}
            <CodeBlockWrapper
                title="Requirements"
                code={`npm install lucide-react @radix-ui/react-dialog`}
                language="cmd"
            />

            {/* Provider Setup */}
            <CodeBlockWrapper
                title="Provider Setup"
                code={`// In your layout.tsx
import { ExitIntentProvider } from "@/components/providers/exit-intent-provider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ExitIntentProvider>
          {children}
        </ExitIntentProvider>
      </body>
    </html>
  )
}`}
                language="tsx"
            />

            {/* Usage */}
            <CodeBlockWrapper
                title="Basic Usage"
                code={`import { useExitIntent } from "@/components/providers/exit-intent-provider"

export default function MyComponent() {
  const { 
    isActive,                // Link protection status
    isBeforeUnloadActive,    // Browser refresh/close protection status
    enableExitIntent,        // Enable link protection
    disableExitIntent,       // Disable link protection
    temporaryDisable,        // Temporarily disable link protection
    enableBeforeUnload,      // Enable browser warning
    disableBeforeUnload,     // Disable browser warning
    setBeforeUnloadActive,   // Set browser warning state
  } = useExitIntent();

  return (
    <div>
      <p>Link protection: {isActive ? "active" : "disabled"}</p>
      <p>Browser warning: {isBeforeUnloadActive ? "active" : "disabled"}</p>
      <button onClick={enableExitIntent}>Enable Links</button>
      <button onClick={disableExitIntent}>Disable Links</button>
      <button onClick={enableBeforeUnload}>Enable Browser Warning</button>
      <button onClick={disableBeforeUnload}>Disable Browser Warning</button>
    </div>
  )
}`}
                language="tsx"
            />

            {/* Examples Section */}
            <section className="space-y-8">
                <h2 className="text-2xl font-bold">Examples</h2>

                {/* Status Indicator */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        Status Indicator
                    </h3>
                    <p className="text-muted-foreground">
                        Display the current protection status. Changes here reflect globally across all components.
                    </p>
                    <ComponentPreview
                        preview={<StatusIndicatorExample />}
                        code={`const { isActive, isBeforeUnloadActive } = useExitIntent();

<div>
  {isActive ? (
    <span>Link protection is active</span>
  ) : (
    <span>Link protection is disabled</span>
  )}
</div>
<div>
  {isBeforeUnloadActive ? (
    <span>Browser warning is active</span>
  ) : (
    <span>Browser warning is disabled</span>
  )}
</div>`}
                    />
                </div>

                {/* Control Buttons */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Zap className="h-5 w-5" />
                        Link Protection Controls
                    </h3>
                    <p className="text-muted-foreground">
                        Control external link protection. Try enabling/disabling here and see the status update above.
                    </p>
                    <ComponentPreview
                        preview={<ControlButtonsExample />}
                        code={`const { enableExitIntent, disableExitIntent, temporaryDisable } = useExitIntent();

<Button onClick={enableExitIntent}>Enable</Button>
<Button onClick={disableExitIntent}>Disable</Button>
<Button onClick={() => temporaryDisable(10000)}>Disable for 10s</Button>`}
                    />
                </div>

                {/* Browser Refresh/Close Controls */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <RefreshCw className="h-5 w-5" />
                        Browser Refresh/Close Controls
                    </h3>
                    <p className="text-muted-foreground">
                        Control the browser&apos;s native beforeunload warning. When enabled, users see a confirmation when trying to close or refresh the page.
                    </p>
                    <ComponentPreview
                        preview={<BeforeUnloadControlsExample />}
                        code={`const { enableBeforeUnload, disableBeforeUnload, isBeforeUnloadActive } = useExitIntent();

<p>Browser warning is {isBeforeUnloadActive ? 'enabled' : 'disabled'}</p>
<Button onClick={enableBeforeUnload}>Enable Refresh Warning</Button>
<Button onClick={disableBeforeUnload}>Disable Refresh Warning</Button>`}
                    />
                </div>

                {/* External Links with Alert */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <ExternalLink className="h-5 w-5" />
                        External Links (with dialog)
                    </h3>
                    <p className="text-muted-foreground">
                        Standard external links will show a confirmation dialog before navigating away.
                    </p>
                    <ComponentPreview
                        preview={<ExternalLinksExample />}
                        code={`{/* Standard external links will trigger confirmation dialog */}
<a href="https://youtube.com">YouTube</a>
<a href="https://www.nyxhora.com">Nyxhora</a>`}
                    />
                </div>

                {/* Bypassing Confirmation */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <ShieldOff className="h-5 w-5" />
                        Bypassing Confirmation
                    </h3>
                    <p className="text-muted-foreground">
                        Use special attributes to bypass the confirmation dialog for trusted links.
                    </p>
                    <ComponentPreview
                        preview={<BypassLinksExample />}
                        code={`{/* Use data-no-confirm to skip confirmation */}
<a href="https://youtube.com" data-no-confirm>No confirmation</a>

{/* Links opening in new tabs skip confirmation */}
<a href="https://github.com" target="_blank" rel="noopener noreferrer">New tab</a>`}
                    />
                </div>

                {/* Form Protection Example */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <FileCode2 className="h-5 w-5" />
                        Form Protection Pattern
                    </h3>
                    <p className="text-muted-foreground">
                        A common pattern: enable protection when user starts editing, disable when they submit successfully.
                    </p>
                    <ComponentPreview
                        preview={<FormProtectionExample />}
                        code={`const { enableExitIntent, enableBeforeUnload, disableExitIntent, disableBeforeUnload } = useExitIntent();

// Enable protection when user starts editing
const handleFormStart = () => {
  enableExitIntent();
  enableBeforeUnload();
};

// Disable protection after successful submit
const handleFormSubmit = () => {
  disableExitIntent();
  disableBeforeUnload();
};

<input onFocus={handleFormStart} />
<button onClick={handleFormSubmit}>Submit</button>`}
                    />
                </div>
            </section>

            {/* API Reference */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">API Reference</h2>

                {/* useExitIntent Hook */}
                <h3 className="text-lg font-semibold">useExitIntent Hook</h3>
                <DocsProps
                    props={[
                        {
                            name: "isActive",
                            type: "boolean",
                            defaultValue: "true",
                            description: "Current state of external link protection",
                        },
                        {
                            name: "isBeforeUnloadActive",
                            type: "boolean",
                            defaultValue: "true",
                            description: "Current state of browser refresh/close protection",
                        },
                        {
                            name: "enableExitIntent",
                            type: "() => void",
                            defaultValue: "-",
                            description: "Enable external link protection",
                        },
                        {
                            name: "disableExitIntent",
                            type: "() => void",
                            defaultValue: "-",
                            description: "Disable external link protection",
                        },
                        {
                            name: "temporaryDisable",
                            type: "(duration: number) => void",
                            defaultValue: "-",
                            description: "Temporarily disable link protection for specified duration (in ms)",
                        },
                        {
                            name: "enableBeforeUnload",
                            type: "() => void",
                            defaultValue: "-",
                            description: "Enable browser refresh/close warning",
                        },
                        {
                            name: "disableBeforeUnload",
                            type: "() => void",
                            defaultValue: "-",
                            description: "Disable browser refresh/close warning",
                        },
                        {
                            name: "setBeforeUnloadActive",
                            type: "(active: boolean) => void",
                            defaultValue: "-",
                            description: "Set browser warning state directly",
                        },
                    ]}
                />
            </section>

            {/* Link Attributes */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Link Attributes</h2>
                <DocsProps
                    props={[
                        {
                            name: "data-no-confirm",
                            type: "attribute",
                            defaultValue: "-",
                            description: "Add this attribute to any link to bypass the exit confirmation dialog",
                        },
                        {
                            name: 'target="_blank"',
                            type: "attribute",
                            defaultValue: "-",
                            description: "Links opening in new tabs automatically bypass confirmation",
                        },
                    ]}
                />
            </section>

            {/* Best Practices */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Best Practices</h2>
                <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-start gap-3 p-4 border rounded-lg">
                        <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                            <p className="font-medium text-foreground">Protect important workflows</p>
                            <p className="text-sm">Enable both link and browser protection on pages with unsaved changes, forms, or checkout flows.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 border rounded-lg">
                        <RefreshCw className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                            <p className="font-medium text-foreground">Use separate controls wisely</p>
                            <p className="text-sm">You can enable link protection without browser warnings, or vice versa, depending on your UX needs.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 border rounded-lg">
                        <ShieldOff className="h-5 w-5 text-amber-500 mt-0.5" />
                        <div>
                            <p className="font-medium text-foreground">Disable after successful actions</p>
                            <p className="text-sm">Always disable protection after the user has saved their work or completed the workflow.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 border rounded-lg">
                        <ExternalLink className="h-5 w-5 text-purple-500 mt-0.5" />
                        <div>
                            <p className="font-medium text-foreground">Use data-no-confirm for trusted links</p>
                            <p className="text-sm">Add <code className="bg-muted px-1 rounded">data-no-confirm</code> to trusted external links like documentation or social media.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global State Note */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Global State</h2>
                <div className="p-4 border rounded-lg bg-muted/50">
                    <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Note:</strong> All components using <code className="bg-muted px-1 rounded">useExitIntent</code> share the same global state.
                        When you enable or disable protection from any component, it affects the entire application.
                        This makes it perfect for coordinating protection across different parts of your app.
                    </p>
                </div>
            </section>

            {/* Source Code */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Source Code</h2>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <FileCode2 className="h-5 w-5" />
                        useExitIntent Hook (Provider)
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        The main provider and hook that manages exit intent state and handles link interception.
                    </p>
                    <ComponentSource filePath="components/providers/exit-intent-provider.tsx" />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <FileCode2 className="h-5 w-5" />
                        Exit Intent Demo Component
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        A ready-to-use demo component showcasing the exit intent functionality.
                    </p>
                    <ComponentSource filePath="components/ui/exit-intent-demo.tsx" />
                </div>
            </section>
        </div>
    );
}
