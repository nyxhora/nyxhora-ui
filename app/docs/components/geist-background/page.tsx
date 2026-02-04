import { GeistBackground } from "@/registry/ui/geist-background";
import { CodeBlockWrapper, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export default function GeistBackgroundDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Geist Background"
                description="A mesmerizing flickering background effect with noise mask and conic gradients, inspired by Vercel's Geist design."
            />

            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="w-full h-[500px] overflow-hidden rounded-lg border">
                        <GeistBackground title="Geist" />
                    </div>
                }
                code={`import { GeistBackground } from "@/components/ui/geist-background";

export function GeistBackgroundDemo() {
  return (
    <div className="h-[500px] w-full overflow-hidden rounded-lg">
      <GeistBackground title="Geist" />
    </div>
  );
}`}
            />

            <DocsInstallation name="geist-background" />

            <CodeBlockWrapper
                title="Usage"
                code={`import { GeistBackground } from "@/components/ui/geist-background"

export default function MyComponent() {
  return (
    <GeistBackground className="h-screen" title="Geist">
        {/* Optional children */}
    </GeistBackground>
  )
}`}
                language="tsx"
            />

            <DocsProps
                props={[
                    {
                        name: "children",
                        type: "ReactNode",
                        description: "Optional content to render inside the background container.",
                    },
                    {
                        name: "className",
                        type: "string",
                        description: "Additional CSS classes for the container.",
                    },
                    {
                        name: "title",
                        type: "string",
                        description: "Large title title text to display centered.",
                    },
                ]}
            />
        </div>
    );
}
