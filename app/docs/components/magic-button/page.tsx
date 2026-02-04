
import { Metadata } from "next";
import { MagicButton } from "@/registry/ui/magic-button";
import { Send } from "lucide-react";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata: Metadata = {
    title: "Magic Button",
    description: "A button with a magic border animation effect.",
};

export default function MagicButtonDocsPage() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <DocsHeader title="Magic Button" description="A button with a magic border animation effect." />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={<MagicButton title="Magic Button" />}
                code={`<MagicButton title="Magic Button" />`}
            />

            {/* Installation */}
            <DocsInstallation name={"magic-button"} />

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { MagicButton } from "@/registry/ui/magic-button";
import { Send } from "lucide-react";

export default function MyComponent() {
  return (
    <MagicButton 
      title="Click me" 
      icon={<Send className="w-4 h-4" />}
      position="right"
    />
  );
}`}
                language="tsx"
            />

            {/* Examples */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                {/* With Icon Left */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">With Icon Left</h3>
                    <ComponentPreview
                        preview={<MagicButton title="Send Message" icon={<Send className="w-4 h-4" />} position="left" />}
                        code={`<MagicButton 
  title="Send Message" 
  icon={<Send className="w-4 h-4" />} 
  position="left" 
/>`}
                    />
                </div>

                {/* With Icon Right */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">With Icon Right</h3>
                    <ComponentPreview
                        preview={<MagicButton title="Next Step" icon={<Send className="w-4 h-4" />} position="right" />}
                        code={`<MagicButton 
  title="Next Step" 
  icon={<Send className="w-4 h-4" />} 
  position="right" 
/>`}
                    />
                </div>

                {/* Custom Classes */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Custom Classes</h3>
                    <ComponentPreview
                        preview={<MagicButton title="Custom Width" otherClasses="md:w-80" />}
                        code={`<MagicButton title="Custom Width" otherClasses="md:w-80" />`}
                    />
                </div>
            </section>

            {/* Props */}
            <DocsProps
                props={[
                    {
                        name: "title",
                        type: "string",
                        defaultValue: "-",
                        description: "The text to display inside the button.",
                    },
                    {
                        name: "icon",
                        type: "React.ReactNode",
                        defaultValue: "undefined",
                        description: "The icon component to display.",
                    },
                    {
                        name: "position",
                        type: "'left' | 'right'",
                        defaultValue: "undefined",
                        description: "Position of the icon relative to the title.",
                    },
                    {
                        name: "handleClick",
                        type: "() => void",
                        defaultValue: "undefined",
                        description: "Function to execute on click.",
                    },
                    {
                        name: "otherClasses",
                        type: "string",
                        defaultValue: "undefined",
                        description: "Additional CSS classes for custom styling.",
                    },
                ]}
            />
        </div>
    );
}
