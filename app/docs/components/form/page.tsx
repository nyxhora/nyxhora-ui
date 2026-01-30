import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Form",
    description: "Building forms with React Hook Form and Zod.",
};

export default function FormDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Form"
                description="Building forms with React Hook Form and Zod."
            />

            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>

            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add form`}
            />
        </div>
    );
}

