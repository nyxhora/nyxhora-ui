import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { ParticleBurstButton } from "@/registry/ui/awesome-button";
import { ComponentSource } from "@/registry/ui/component-source";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Awesome Button",
    description: "A beautiful animated button with particle burst effects on click. Uses Framer Motion for smooth animations.",
    category: "Effects",
});


export default function AwesomeButtonDocsPage() {
    const faqSchema = generateComponentFAQSchema("Awesome Button", getDefaultComponentFAQs("Awesome Button"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Awesome Button", url: "https://ui.nyxhora.com/docs/components/awesome-button" },
    ]);

    
  return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
      <DocsHeader
        title="Awesome Button"
        description="A beautiful animated button with particle burst effects on click. Uses Framer Motion for smooth animations."
      />

      <DocsPreview
        title="Preview"
        previewCode={
          <div className="flex gap-4">
            <ParticleBurstButton>Click Me!</ParticleBurstButton>
            <ParticleBurstButton className="bg-gradient-to-r from-purple-500 to-pink-500">Magic ✨</ParticleBurstButton>
          </div>
        }
        code={`<ParticleBurstButton>Click Me!</ParticleBurstButton>

<ParticleBurstButton className="bg-gradient-to-r from-purple-500 to-pink-500">
  Magic ✨
</ParticleBurstButton>`}
      />
      <DocsInstallation name="Awesome-button" />


      <CodeBlockWrapper
        title="Usage"
        code={`import { ParticleBurstButton } from "@/registry/ui/Awesomebutton"

export default function MyComponent() {
  return (
    <ParticleBurstButton>
      Click for particles!
    </ParticleBurstButton>
  )
}`}
        language="tsx"
      />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <DocsPreview
          variant="Custom Styling"
          previewCode={
            <div className="flex flex-wrap gap-4">
              <ParticleBurstButton className="bg-blue-500 hover:bg-blue-600">Blue</ParticleBurstButton>
              <ParticleBurstButton className="bg-green-500 hover:bg-green-600">Green</ParticleBurstButton>
              <ParticleBurstButton className="bg-red-500 hover:bg-red-600">Red</ParticleBurstButton>
            </div>
          }
          code={`<ParticleBurstButton className="bg-blue-500">Blue</ParticleBurstButton>
<ParticleBurstButton className="bg-green-500">Green</ParticleBurstButton>
<ParticleBurstButton className="bg-red-500">Red</ParticleBurstButton>`}
        />
      </section>

      <DocsProps
        props={[
          {
            name: "children",
            type: "ReactNode",
            description: "Button content",
            required: true,
          },
          {
            name: "className",
            type: "string",
            description: "Additional CSS classes",
          },
        ]}
      />
    </div>
        </>
    );
}


