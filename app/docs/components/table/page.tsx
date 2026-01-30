import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Table",
    description: "A responsive table component.",
};

export default function TableDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Table"
                description="A responsive table component."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add table`}
            />
        </div>
    );
}

