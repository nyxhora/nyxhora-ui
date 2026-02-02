import { Metadata } from "next";
import { DocsHeader, DocsProps, CodeBlockWrapper } from "@/components/ui/docs-documentation";
import { ComponentSource } from "@/registry/ui/component-source";
import {
    SheetDemo,
    SheetSideLeft,
    SheetSideRight,
    SheetSideTop,
    SheetSideBottom,
} from "./sheet-demo";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata: Metadata = {
    title: "Sheet",
    description: "Extends the Dialog component to display content that complements the main screen. Slides in from the edge of the viewport.",
};

export default function SheetDocsPage() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <DocsHeader
                title="Sheet"
                description="Extends the Dialog component to display content that complements the main screen. Slides in from the edge of the viewport."
            />

            {/* Preview */}

            <SheetDemo />

            {/* Installation */}
            <DocsInstallation name="sheet" />
            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/registry/ui/sheet"

export default function MyComponent() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            Sheet description goes here.
          </SheetDescription>
        </SheetHeader>
        {/* Content */}
        <SheetFooter>
          <SheetClose asChild>
            <Button>Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`}
                language="tsx"
            />

            {/* Sides */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Side Variants</h2>
                <p className="text-muted-foreground">
                    Use the <code className="bg-muted px-1.5 py-0.5 rounded text-sm">side</code> prop to control which edge of the screen the sheet slides in from.
                </p>

                {/* Right (default) */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Right (Default)</h3>
                    <SheetSideRight />
                </div>

                {/* Left */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Left</h3>
                    <SheetSideLeft />
                </div>

                {/* Top */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Top</h3>
                    <SheetSideTop />
                </div>

                {/* Bottom */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Bottom</h3>
                    <SheetSideBottom />
                </div>
            </section>

            {/* Component Source */}
            <ComponentSource filePath="/components/ui/sheet.tsx" />

            {/* Props */}
            <DocsProps
                props={[
                    {
                        name: "side",
                        type: "'top' | 'right' | 'bottom' | 'left'",
                        defaultValue: "right",
                        description: "The edge of the screen the sheet slides in from",
                    },
                    {
                        name: "open",
                        type: "boolean",
                        defaultValue: "undefined",
                        description: "Controlled open state of the sheet",
                    },
                    {
                        name: "onOpenChange",
                        type: "(open: boolean) => void",
                        defaultValue: "undefined",
                        description: "Callback when the open state changes",
                    },
                    {
                        name: "modal",
                        type: "boolean",
                        defaultValue: "true",
                        description: "Whether to render the sheet in a portal with overlay",
                    },
                ]}
            />

            {/* Sub-components */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Sub-components</h2>
                <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Sheet</h3>
                        <p className="text-sm text-muted-foreground mt-1">The root component that manages sheet state.</p>
                    </div>
                    <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">SheetTrigger</h3>
                        <p className="text-sm text-muted-foreground mt-1">The button that opens the sheet. Use <code className="bg-muted px-1 py-0.5 rounded text-xs">asChild</code> to render your own button.</p>
                    </div>
                    <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">SheetContent</h3>
                        <p className="text-sm text-muted-foreground mt-1">Contains the content that is displayed when the sheet is open. Accepts <code className="bg-muted px-1 py-0.5 rounded text-xs">side</code> prop.</p>
                    </div>
                    <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">SheetHeader</h3>
                        <p className="text-sm text-muted-foreground mt-1">Contains the title and description of the sheet.</p>
                    </div>
                    <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">SheetTitle</h3>
                        <p className="text-sm text-muted-foreground mt-1">The title of the sheet.</p>
                    </div>
                    <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">SheetDescription</h3>
                        <p className="text-sm text-muted-foreground mt-1">The description of the sheet.</p>
                    </div>
                    <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">SheetFooter</h3>
                        <p className="text-sm text-muted-foreground mt-1">Contains the footer content, typically action buttons.</p>
                    </div>
                    <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">SheetClose</h3>
                        <p className="text-sm text-muted-foreground mt-1">A button that closes the sheet. Use <code className="bg-muted px-1 py-0.5 rounded text-xs">asChild</code> to render your own button.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
