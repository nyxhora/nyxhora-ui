import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Sparkles",
    description: "Sparkle particle effects.",
};

export default function SparklesDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Sparkles"
                description="Sparkle particle effects."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

