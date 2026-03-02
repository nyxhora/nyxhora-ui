import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { CodeBlock } from "@/registry/ui/code-block";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Code Block",
    description: "A beautiful code snippet component with syntax highlighting and copy functionality.",
    category: "Display",
});


export default function CodeBlockDocsPage() {
    const faqSchema = generateComponentFAQSchema("Code Block", getDefaultComponentFAQs("Code Block"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Code Block", url: "https://ui.nyxhora.com/docs/components/code-block" },
    ]);

    
    const exampleCode = `function helloWorld() {
  console.log("Hello, World!");
}`;

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            <DocsHeader
                title="Code Block"
                description="A beautiful code snippet component with syntax highlighting and copy functionality."
            />

            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="w-full max-w-lg">
                        <CodeBlock code={exampleCode} language="typescript" filename="example.ts" browserLayout={true} />
                    </div>
                }
                code={`<CodeBlock 
  code={\`function helloWorld() {
  console.log("Hello, World!");
}\`} 
  language="typescript" 
  filename="example.ts" 
  browserLayout={true} 
/>`}
            />

            <DocsInstallation name="code-block" />

            <CodeBlockWrapper
                title="Usage"
                code={`import { CodeBlock } from "@/registry/ui/code-block"

export default function Documentation() {
   const code = \`const a = 1;
const b = 2;
console.log(a + b);\`;

  return (
    <CodeBlock 
       code={code} 
       language="javascript"
       browserLayout={false}
    />
  )
}`}
                language="tsx"
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <DocsPreview
                    title="Standard Layout"
                    previewCode={
                        <div className="w-full max-w-lg">
                            <CodeBlock code={exampleCode} language="typescript" filename="example.ts" browserLayout={false} />
                        </div>
                    }
                    code={`<CodeBlock 
  code={code} 
  language="typescript" 
  filename="example.ts" 
  browserLayout={false} 
/>`}
                />

                <DocsPreview
                    title="Browser Window Layout"
                    previewCode={
                        <div className="w-full max-w-lg">
                            <CodeBlock code={exampleCode} language="typescript" filename="app.tsx" browserLayout={true} />
                        </div>
                    }
                    code={`<CodeBlock 
  code={code} 
  language="typescript" 
  filename="app.tsx" 
  browserLayout={true} 
/>`}
                />
            </section>

            <DocsProps
                props={[
                    {
                        name: "code",
                        type: "string",
                        description: "The source code to display.",
                        required: true,
                    },
                    {
                        name: "language",
                        type: "string",
                        description: "Programming language for syntax highlighting (e.g., 'typescript', 'javascript', 'css') (default: 'typescript').",
                    },
                    {
                        name: "filename",
                        type: "string",
                        description: "Optional filename or title to display in the header.",
                    },
                    {
                        name: "showLineNumbers",
                        type: "boolean",
                        description: "Whether to show line numbers (default: true).",
                    },
                    {
                        name: "browserLayout",
                        type: "boolean",
                        description: "If true, renders a browser-like window header (traffic lights) (default: false).",
                    },
                    {
                        name: "className",
                        type: "string",
                        description: "Additional CSS classes.",
                    },
                ]}
            />
        </div>
        </>
    );
}
