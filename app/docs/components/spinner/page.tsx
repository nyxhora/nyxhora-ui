import { Metadata } from "next";
import { Spinner } from "@/registry/ui/spinner";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata: Metadata = {
    title: "Spinner",
    description: "A loading spinner component with multiple variants.",
};

export default function SpinnerDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader title="Spinner" description="A loading spinner component with multiple variants." />

            <DocsPreview
                title="Preview"
                previewCode={<Spinner />}
                code={`<Spinner />`}
            />

            <DocsPreview variant="with variants" previewCode={<div className="flex flex-wrap gap-4 items-center">
                <Spinner variant="default" />
                <Spinner variant="dotted" />
                <Spinner variant="bars" />
                <Spinner variant="pulse" />
                <Spinner variant="gradient" />
            </div>} code={`<Spinner variant="default" />
<Spinner variant="dotted" />
<Spinner variant="bars" />
<Spinner variant="pulse" />
<Spinner variant="gradient" />`} />

            <DocsInstallation name={"spinner"} />

            <CodeBlockWrapper
                title="Usage"
                code={`import { Spinner } from "@/registry/ui/spinner"

export default function MyComponent() {
  return <Spinner />
}`}
                language="tsx"
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Variants</h2>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Default</h3>
                    <ComponentPreview
                        preview={<Spinner variant="default" />}
                        code={`<Spinner variant="default" />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Dotted</h3>
                    <ComponentPreview
                        preview={<Spinner variant="dotted" />}
                        code={`<Spinner variant="dotted" />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Bars</h3>
                    <ComponentPreview
                        preview={<Spinner variant="bars" />}
                        code={`<Spinner variant="bars" />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Pulse</h3>
                    <ComponentPreview
                        preview={<Spinner variant="pulse" />}
                        code={`<Spinner variant="pulse" />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Gradient</h3>
                    <ComponentPreview
                        preview={<Spinner variant="gradient" />}
                        code={`<Spinner variant="gradient" />`}
                    />
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Sizes</h2>
                <ComponentPreview
                    preview={
                        <div className="flex flex-wrap items-center gap-4">
                            <Spinner size="sm" />
                            <Spinner size="default" />
                            <Spinner size="lg" />
                            <Spinner size="xl" />
                        </div>
                    }
                    code={`<Spinner size="sm" />
<Spinner size="default" />
<Spinner size="lg" />
<Spinner size="xl" />`}
                />
            </section>

            <DocsProps
                props={[
                    {
                        name: "variant",
                        type: "string",
                        defaultValue: "default",
                        description: "The visual style of the spinner",
                    },
                    {
                        name: "size",
                        type: "string",
                        defaultValue: "default",
                        description: "The size of the spinner",
                    },
                    {
                        name: "loading",
                        type: "boolean",
                        defaultValue: "true",
                        description: "Whether the spinner is visible",
                    },
                ]}
            />
        </div>
    );
}
