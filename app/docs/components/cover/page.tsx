import { Metadata } from "next";
import { DocsHeader, DocsProps, CodeBlockWrapper } from "@/components/ui/docs-documentation";
import { ComponentSource } from "@/components/ui/component-source";
import {
    CoverDemo,
    CoverSizeDefault,
    CoverSizeSmall,
    CoverSizeLarge,
    CoverPlaceholder,
    CoverWithChildren,
} from "./cover-demo";

export const metadata: Metadata = {
    title: "Cover",
    description: "A flexible cover component for displaying featured images with optional action buttons for changing or removing the cover.",
};

export default function CoverDocsPage() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <DocsHeader
                title="Cover"
                description="A flexible cover component for displaying featured images with optional action buttons for changing or removing the cover."
            />

            {/* Preview */}
            <CoverDemo />

            {/* Installation */}
            <CodeBlockWrapper
                title="Requirements"
                code={`npm install class-variance-authority`}
                language="cmd"
            />

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { Cover } from "@/components/ui/cover"

export default function MyComponent() {
  const [coverUrl, setCoverUrl] = useState<string | undefined>(
    "https://images.unsplash.com/..."
  );

  return (
    <Cover
      url={coverUrl}
      onChange={() => console.log("Change cover")}
      onRemove={() => setCoverUrl(undefined)}
    />
  )
}`}
                language="tsx"
            />

            {/* Sizes */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Sizes</h2>

                {/* Default */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Default (35vh)</h3>
                    <CoverSizeDefault />
                </div>

                {/* Small */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Small (12vh)</h3>
                    <CoverSizeSmall />
                </div>

                {/* Large */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Large (50vh)</h3>
                    <CoverSizeLarge />
                </div>

                {/* No Image (Placeholder) */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">No Image (Placeholder)</h3>
                    <CoverPlaceholder />
                </div>
            </section>

            {/* With Children */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">With Children</h2>
                <CoverWithChildren />
            </section>

            <ComponentSource filePath="/components/ui/cover.tsx" />

            {/* Props */}
            <DocsProps
                props={[
                    {
                        name: "url",
                        type: "string",
                        defaultValue: "undefined",
                        description: "The URL of the cover image",
                    },
                    {
                        name: "size",
                        type: "'default' | 'sm' | 'lg' | 'full'",
                        defaultValue: "default",
                        description: "The height of the cover",
                    },
                    {
                        name: "preview",
                        type: "boolean",
                        defaultValue: "false",
                        description: "If true, hides action buttons (view-only mode)",
                    },
                    {
                        name: "onChange",
                        type: "() => void",
                        defaultValue: "undefined",
                        description: "Callback when 'Change cover' button is clicked",
                    },
                    {
                        name: "onRemove",
                        type: "() => void",
                        defaultValue: "undefined",
                        description: "Callback when 'Remove' button is clicked",
                    },
                    {
                        name: "children",
                        type: "ReactNode",
                        defaultValue: "undefined",
                        description: "Content to render inside the cover (e.g., overlays)",
                    },
                    {
                        name: "className",
                        type: "string",
                        defaultValue: "undefined",
                        description: "Additional CSS classes",
                    },
                ]}
            />
        </div>
    );
}
