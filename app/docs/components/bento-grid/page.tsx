import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Bento Grid",
    description: "A bento-style grid layout component.",
};

export default function BentoGridDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Bento Grid"
                description="A bento-style grid layout component."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

