import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { DocsHeader, DocsProps, CodeBlockWrapper } from "@/components/ui/docs-documentation";
import { ComponentSource } from "@/registry/ui/component-source";
import {
    CoverDemo,
    CoverSizeDefault,
    CoverSizeSmall,
    CoverSizeLarge,
    CoverPlaceholder,
    CoverWithChildren,
} from "./cover-demo";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Cover",
    description: "A flexible cover component for displaying featured images with optional action buttons for changing or removing the cover.",
    category: "Display",
});


export default function CoverDocsPage() {
    const faqSchema = generateComponentFAQSchema("Cover", getDefaultComponentFAQs("Cover"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Cover", url: "https://ui.nyxhora.com/docs/components/cover" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            {/* Header */}
            <DocsHeader
                title="Cover"
                description="A flexible cover component for displaying featured images with optional action buttons for changing or removing the cover."
            />

            {/* Preview */}
            <CoverDemo />

            {/* Installation */}
            <DocsInstallation name="cover" />
            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { Cover } from "@/registry/ui/cover"

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
        </>
    );
}
