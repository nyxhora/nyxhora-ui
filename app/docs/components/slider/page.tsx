import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { CodeBlockWrapper, DocsHeader, DocsPreview } from "@/components/ui/docs-documentation";
import { ComponentSource } from "@/components/ui/component-source";
import { SliderDemo } from "./slider-interactivity";

export default function SliderDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader title="Slider" description="An input for selecting a value from a range." />

            <DocsPreview
                title="Preview"
                previewCode={<Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />}
                code={`<Slider defaultValue={[50]} max={100} step={1} />`}
            />

            <CodeBlockWrapper
                title="Usage"
                code={`import { Slider } from "@/components/ui/slider"

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
                    previewCode={<Slider defaultValue={[25, 75]} max={100} step={1} className="w-[60%]" />}
                    code={`<Slider defaultValue={[25, 75]} max={100} step={1} />`}
                />
            </section>
            <CodeBlockWrapper
                title="Dependencies"
                language="bash"
                code={`npm install @radix-ui/react-slider`}
            />
            <ComponentSource filePath="components/ui/slider.tsx" />
        </div>
    );
}
