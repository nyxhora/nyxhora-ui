import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata = generateComponentMetadata({
    name: "Sidebar",
    description: "A collapsible sidebar navigation component.",
    category: "Navigation",
});


export default function SidebarDocsPage() {
    const faqSchema = generateComponentFAQSchema("Sidebar", getDefaultComponentFAQs("Sidebar"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Sidebar", url: "https://ui.nyxhora.com/docs/components/sidebar" },
    ]);

    
  return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
      <DocsHeader
        title="Sidebar"
        description="A collapsible sidebar navigation component."
      />

      <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
        <p>Interactive preview coming soon.</p>
      </div>
    </div>
        </>
    );
}

