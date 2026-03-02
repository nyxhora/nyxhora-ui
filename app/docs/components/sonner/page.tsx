import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { DocsHeader, DocsPreview, CodeBlockWrapper } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";
import { SonnerDemo, SonnerExamples, SonnerPositionDemo } from "./sonner-demo";

export const metadata = generateComponentMetadata({
    name: "Sonner",
    description: "An opinionated toast component for React.",
    category: "Overlay",
});


export default function SonnerDocsPage() {
    const faqSchema = generateComponentFAQSchema("Sonner", getDefaultComponentFAQs("Sonner"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Sonner", url: "https://ui.nyxhora.com/docs/components/sonner" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            <DocsHeader
                title="Sonner"
                description="An opinionated toast component for React."
            />

            <DocsPreview
                title="Preview"
                previewCode={<SonnerDemo />}
                code={`import { toast } from "sonner"
 
<Button
  variant="outline"
  onClick={() =>
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
  }
>
  Show Toast
</Button>`}
            />
            <DocsInstallation name="sonner" />
            <DocsPreview title="Examples"
                variant="Types"
                previewCode={<SonnerExamples />}
                code={`toast.success("Event has been created")
toast.info("Event has been created")
toast.warning("Event has been created")
toast.error("Event has been created")`}
            />

            <DocsPreview
                variant="Position"
                previewCode={<SonnerPositionDemo />}
                code={`toast("Event has been created", { position: "top-center" })`}
            />

        </div>
        </>
    );
}
