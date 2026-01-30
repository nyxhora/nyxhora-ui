import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Text Hover Effect",
    description: "Interactive hover effects for text elements.",
};

export default function TextHoverEffectDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Text Hover Effect"
                description="Interactive hover effects for text elements."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

