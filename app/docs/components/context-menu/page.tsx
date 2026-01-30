import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Context Menu",
    description: "Displays a menu to the user — such as a set of actions or functions — triggered by a right-click.",
};

export default function ContextMenuDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Context Menu"
                description="Displays a menu to the user — such as a set of actions or functions — triggered by a right-click."
            />

            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>

            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add context-menu`}
            />
        </div>
    );
}

