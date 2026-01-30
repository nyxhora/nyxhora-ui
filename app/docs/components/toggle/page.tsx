import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Toggle",
    description: "A two-state button that can be either on or off.",
};

export default function ToggleDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Toggle"
                description="A two-state button that can be either on or off."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add toggle`}
            />
        </div>
    );
}

