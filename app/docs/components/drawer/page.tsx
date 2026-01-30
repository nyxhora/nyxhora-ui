import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Drawer",
    description: "A drawer component for React.",
};

export default function DrawerDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Drawer"
                description="A drawer component for React."
            />

            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>

            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add drawer`}
            />
        </div>
    );
}

