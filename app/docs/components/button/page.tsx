import { Metadata } from "next";
import { Button } from "@/registry/ui/button";
import { Code2 } from "lucide-react";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata: Metadata = {
    title: "Button Component - React Button with Tailwind CSS",
    description: "Copy-paste Button component for React & Next.js. Includes 6 variants (default, secondary, destructive, outline, ghost, link), 4 sizes, loading states, and icon support. Built with Tailwind CSS and Radix UI. Free and accessible.",
    keywords: [
        "react button component",
        "tailwind button",
        "nextjs button",
        "button variants",
        "accessible button",
        "radix button",
        "button sizes",
        "loading button",
        "button with icon",
        "nyxhora button",
    ],
    openGraph: {
        title: "Button Component - React Button with Tailwind CSS | Nyxhora UI",
        description: "Beautiful, accessible React button component with 6 variants and 4 sizes. Copy-paste for Next.js projects.",
        type: "article",
        url: "https://ui.nyxhora.com/docs/components/button",
    },
};

// FAQPage structured data for this component
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How do I install the Button component?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Install the Button component using the shadcn CLI: npx shadcn@latest add \"https://ui.nyxhora.com/r/button.json\". Alternatively, copy the component code directly from the documentation page."
            }
        },
        {
            "@type": "Question",
            "name": "What variants are available for the Button component?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Button component includes 6 variants: default (primary), secondary, destructive (for dangerous actions), outline, ghost (minimal style), and link (text-only style). Each variant is fully customizable with Tailwind CSS."
            }
        },
        {
            "@type": "Question",
            "name": "Is the Button component accessible?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, the Button component is built with accessibility in mind using Radix UI primitives. It supports keyboard navigation, screen readers, focus states, and follows WCAG guidelines for accessible interactive elements."
            }
        },
        {
            "@type": "Question",
            "name": "Can I use the Button component with Next.js?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, the Button component is fully compatible with Next.js 14+. It supports both the App Router and Pages Router, works with server-side rendering, and can be used as a client or server component."
            }
        }
    ]
};

export default function ButtonDocsPage() {
    return (
        <>
            {/* FAQPage Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />

            <div className="space-y-10">
                {/* Header */}
                <DocsHeader title="Button" description="Displays a button or a component that looks like a button." />

                {/* Preview */}
                <DocsPreview
                    title="Preview"
                    previewCode={<Button>Button</Button>}
                    code={`<Button>Button</Button>`}
                />
                <DocsPreview variant="with variants" previewCode={<div className="flex flex-wrap gap-4">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                </div>} code={`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`} />

                {/* Installation */}
                <DocsInstallation name={"button"} />

                {/* Usage */}
                <CodeBlockWrapper
                    title="Usage"
                    code={`import { Button } from "@/registry/ui/button"

export default function MyComponent() {
  return <Button>Click me</Button>
}`}
                    language="tsx"
                />

                {/* Variants */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold">Variants</h2>

                    {/* Default */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Default</h3>
                        <ComponentPreview
                            preview={<Button>Default Button</Button>}
                            code={`<Button>Default Button</Button>`}
                        />
                    </div>

                    {/* Secondary */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Secondary</h3>
                        <ComponentPreview
                            preview={<Button variant="secondary">Secondary</Button>}
                            code={`<Button variant="secondary">Secondary</Button>`}
                        />
                    </div>

                    {/* Destructive */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Destructive</h3>
                        <ComponentPreview
                            preview={<Button variant="destructive">Destructive</Button>}
                            code={`<Button variant="destructive">Destructive</Button>`}
                        />
                    </div>

                    {/* Outline */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Outline</h3>
                        <ComponentPreview
                            preview={<Button variant="outline">Outline</Button>}
                            code={`<Button variant="outline">Outline</Button>`}
                        />
                    </div>

                    {/* Ghost */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Ghost</h3>
                        <ComponentPreview
                            preview={<Button variant="ghost">Ghost</Button>}
                            code={`<Button variant="ghost">Ghost</Button>`}
                        />
                    </div>

                    {/* Link */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Link</h3>
                        <ComponentPreview
                            preview={<Button variant="link">Link</Button>}
                            code={`<Button variant="link">Link</Button>`}
                        />
                    </div>
                </section>

                {/* Sizes */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">Sizes</h2>
                    <ComponentPreview
                        preview={
                            <div className="flex flex-wrap items-center gap-4">
                                <Button size="sm">Small</Button>
                                <Button size="default">Default</Button>
                                <Button size="lg">Large</Button>
                                <Button size="icon">
                                    <Code2 className="h-4 w-4" />
                                </Button>
                            </div>
                        }
                        code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">
  <Icon className="h-4 w-4" />
</Button>`}
                    />
                </section>

                {/* Props */}
                <DocsProps
                    props={[
                        {
                            name: "variant",
                            type: "string",
                            defaultValue: "default",
                            description: "The visual style of the button",
                        },
                        {
                            name: "size",
                            type: "string",
                            defaultValue: "default",
                            description: "The size of the button",
                        },
                        {
                            name: "asChild",
                            type: "boolean",
                            defaultValue: "false",
                            description: "Render as child element",
                        },
                        {
                            name: "disabled",
                            type: "boolean",
                            defaultValue: "false",
                            description: "Disable the button",
                        },
                    ]}
                />
            </div>
        </>
    );
}


