import { Metadata } from "next";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Info, HelpCircle, Plus } from "lucide-react";
import { CodeBlockWrapper, DocsHeader, DocsPreview } from "@/components/ui/docs-documentation";
import { ComponentSource } from "@/components/ui/component-source";

export const metadata: Metadata = {
    title: "Tooltip",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
};

export default function TooltipDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader title="Tooltip" description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it." />

            <DocsPreview
                title="Preview"
                previewCode={
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline">Hover me</Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Add to library</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                }
                code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
            />

            <CodeBlockWrapper
                title="Usage"
                code={`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function MyComponent() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent>
          <p>Tooltip content</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`}
                language="tsx"
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <DocsPreview
                    variant="Positions"
                    previewCode={
                        <TooltipProvider>
                            <div className="flex gap-4">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="sm">Top</Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="top">
                                        <p>Tooltip on top</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="sm">Right</Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">
                                        <p>Tooltip on right</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="sm">Bottom</Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom">
                                        <p>Tooltip on bottom</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="sm">Left</Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="left">
                                        <p>Tooltip on left</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </TooltipProvider>
                    }
                    code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Top</Button>
  </TooltipTrigger>
  <TooltipContent side="top">
    <p>Tooltip on top</p>
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Right</Button>
  </TooltipTrigger>
  <TooltipContent side="right">
    <p>Tooltip on right</p>
  </TooltipContent>
</Tooltip>`}
                />

                <DocsPreview
                    variant="With Icons"
                    previewCode={
                        <TooltipProvider>
                            <div className="flex gap-4">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon">
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Add new item</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon">
                                            <Info className="h-4 w-4" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>More information</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon">
                                            <HelpCircle className="h-4 w-4" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Get help</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </TooltipProvider>
                    }
                    code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline" size="icon">
      <Plus className="h-4 w-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Add new item</p>
  </TooltipContent>
</Tooltip>`}
                />

                <DocsPreview
                    variant="Rich Content"
                    previewCode={
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="outline">Hover for details</Button>
                                </TooltipTrigger>
                                <TooltipContent className="max-w-xs">
                                    <div className="space-y-1">
                                        <p className="font-medium">Keyboard Shortcuts</p>
                                        <p className="text-xs text-muted-foreground">Press ⌘+K to open the command menu</p>
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    }
                    code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover for details</Button>
  </TooltipTrigger>
  <TooltipContent className="max-w-xs">
    <div className="space-y-1">
      <p className="font-medium">Keyboard Shortcuts</p>
      <p className="text-xs text-muted-foreground">Press ⌘+K to open</p>
    </div>
  </TooltipContent>
</Tooltip>`}
                />
            </section>
                <ComponentSource filePath="/components/ui/tooltip.tsx" />

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Components</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="py-3 px-4 text-left font-semibold">Component</th>
                                <th className="py-3 px-4 text-left font-semibold">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-border/50">
                                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">TooltipProvider</code></td>
                                <td className="py-3 px-4 text-muted-foreground">Wraps your app to enable tooltips</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">Tooltip</code></td>
                                <td className="py-3 px-4 text-muted-foreground">The root component</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">TooltipTrigger</code></td>
                                <td className="py-3 px-4 text-muted-foreground">The element that triggers the tooltip</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">TooltipContent</code></td>
                                <td className="py-3 px-4 text-muted-foreground">The content of the tooltip</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
