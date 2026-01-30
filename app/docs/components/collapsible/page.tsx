import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";
// import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

export const metadata: Metadata = {
    title: "Collapsible",
    description: "An interactive component which expands/collapses a panel.",
};

export default function CollapsibleDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Collapsible"
                description="An interactive component which expands/collapses a panel."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add collapsible`}
            />
        </div>
    );
}

