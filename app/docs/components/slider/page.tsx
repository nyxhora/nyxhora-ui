import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { Slider } from "@/registry/ui/slider";
import {
  CodeBlockWrapper,
  DocsHeader,
  DocsPreview,
} from "@/components/ui/docs-documentation";
import { SliderDemo } from "./slider-interactivity";
import DocsInstallation from "@/components/ui/docs-installation";
import { Label } from "@/registry/ui/label";

export const metadata = generateComponentMetadata({
    name: "Slider",
    description: "An input for selecting a value from a range.",
    category: "Form",
});


export default function SliderDocsPage() {
    const faqSchema = generateComponentFAQSchema("Slider", getDefaultComponentFAQs("Slider"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Slider", url: "https://ui.nyxhora.com/docs/components/slider" },
    ]);

    
  return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
      <DocsHeader
        title="Slider"
        description="An input for selecting a value from a range."
      />

      <DocsPreview
        title="Preview"
        previewCode={
          <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
        }
        code={`<Slider defaultValue={[50]} max={100} step={1} />`}
      />
      <DocsInstallation name="slider" />
      <CodeBlockWrapper
        title="Usage"
        code={`import { Slider } from "@/registry/ui/slider"

export default function MyComponent() {
  return <Slider defaultValue={[33]} max={100} step={1} />
}`}
        language="tsx"
      />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <DocsPreview
          variant="With Value Display"
          previewCode={<SliderDemo />}
          code={`const [value, setValue] = useState([50])

<div className="flex justify-between">
  <Label>Volume</Label>
  <span>{value[0]}%</span>
</div>
<Slider value={value} onValueChange={setValue} max={100} />`}
        />

        <DocsPreview
          variant="Range Slider"
          previewCode={
            <Slider
              defaultValue={[25, 75]}
              max={100}
              step={1}
              className="w-[60%]"
            />
          }
          code={`<Slider defaultValue={[25, 75]} max={100} step={1} />`}
        />
        <DocsPreview
          variant="Disabled"
          previewCode={
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              disabled
              className="w-[60%]"
            />
          }
          code={`<Slider defaultValue={[50]} max={100} step={1} disabled />`}
        />
        <DocsPreview
          variant="With Custom Step"
          previewCode={<SliderDemo type="custom-step" />}
          code={`<div className="w-[60%] space-y-4">
  <div className="flex justify-between">
    <Label>{step}</Label>
    <span className="text-sm">{value[0]}%</span>
  </div>
  <Slider value={value} onValueChange={setValue} max={100} step={1} />
</div>`}
        />
      </section>
    </div>
        </>
    );
}
