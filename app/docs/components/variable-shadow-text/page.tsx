import { Metadata } from "next";
import { VariableShadowText } from "@/registry/ui/variable-shadow-text";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata: Metadata = {
    title: "Variable Shadow Text",
    description: "A variable font component with deep shadow effects that interact on hover.",
};

export default function VariableShadowTextDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Variable Shadow Text"
                description="Interactive text that transitions between weight, slant, and shadow depth using variable font settings."
            />

            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="w-full text-center">
                        <VariableShadowText text="HOVER ME" className="text-7xl md:text-9xl" />
                    </div>
                }
                code={`<VariableShadowText 
  text="HOVER ME" 
  className="text-7xl md:text-9xl" 
/>`}
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Reverse Mode</h2>
                <div className="text-muted-foreground mb-4">
                    In reverse mode, the text starts flat and expands/pops out on hover.
                </div>
                <ComponentPreview
                    preview={
                        <div className="w-full text-center">
                            <VariableShadowText text="EXPAND" reverse className="text-7xl md:text-9xl text-indigo-500" strokeColor="#4f46e5" />
                        </div>
                    }
                    code={`<VariableShadowText 
  text="EXPAND" 
  reverse 
  className="text-7xl md:text-9xl text-indigo-500"
  strokeColor="#4f46e5" 
/>`}
                />
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Custom Colors</h2>
                <ComponentPreview
                    preview={
                        <div className="w-full text-center">
                            <VariableShadowText
                                text="CYBER"
                                className="text-7xl md:text-9xl"
                                shadowColors={["#00ff00", "#00dd00", "#00bb00", "#009900", "#005500"]}
                                strokeColor="#aaffaa"
                            />
                        </div>
                    }
                    code={`<VariableShadowText 
  text="CYBER" 
  className="text-7xl md:text-9xl" 
  shadowColors={["#00ff00", "#00dd00", "#00bb00", "#009900", "#005500"]} // 5 layers
  strokeColor="#aaffaa"
/>`}
                />
            </section>

            <DocsInstallation name={"variable-shadow-text"} />

            <DocsProps
                props={[
                    {
                        name: "text",
                        type: "string",
                        defaultValue: "-",
                        description: "The text to display.",
                    },
                    {
                        name: "shadowColors",
                        type: "string[]",
                        defaultValue: "['#07bccc', ...]",
                        description: "Array of 5 colors for the shadow layers.",
                    },
                    {
                        name: "strokeColor",
                        type: "string",
                        defaultValue: "#d6f4f4",
                        description: "Color of the text stroke.",
                    },
                    {
                        name: "reverse",
                        type: "boolean",
                        defaultValue: "false",
                        description: "If true, effect expands on hover instead of collapsing.",
                    },
                    {
                        name: "className",
                        type: "string",
                        defaultValue: "-",
                        description: "Class for the text element (mainly font-size).",
                    },
                ]}
            />
        </div>
    );
}
