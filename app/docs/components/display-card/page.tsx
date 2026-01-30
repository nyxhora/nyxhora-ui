import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Display Card",
    description: "Enhanced card component for displaying content.",
};

export default function DisplayCardDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Display Card"
                description="Enhanced card component for displaying content."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

