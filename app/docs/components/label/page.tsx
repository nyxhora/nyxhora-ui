import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { Label } from "@/registry/ui/label";
import { Input } from "@/registry/ui/input";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Label",
    description: "Renders an accessible label for form controls.",
    category: "Form",
});


export default function LabelDocsPage() {
    const faqSchema = generateComponentFAQSchema("Label", getDefaultComponentFAQs("Label"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Label", url: "https://ui.nyxhora.com/docs/components/label" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            <DocsHeader title="Label" description="Renders an accessible label for form controls." />

            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" />
                    </div>
                }
                code={`<Label htmlFor="email">Email</Label>\n<Input type="email" id="email" placeholder="Email" />`}
            />
            <DocsInstallation name="label" />

            <CodeBlockWrapper
                title="Usage"
                code={`import { Label } from "@/registry/ui/label"

export default function MyComponent() {
  return <Label htmlFor="field">Label</Label>
}`}
                language="tsx"
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <DocsPreview
                    variant="With Required Indicator"
                    previewCode={
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
                            <Input id="name" placeholder="Enter your name" required />
                        </div>
                    }
                    code={`<Label htmlFor="name">Name <span className="text-red-500">*</span></Label>\n<Input id="name" required />`}
                />
            </section>
        </div>
        </>
    );
}
