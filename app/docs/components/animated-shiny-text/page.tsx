import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Animated Shiny Text",
    description: "Text with an animated shimmering effect.",
};

export default function AnimatedShinyTextDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Animated Shiny Text"
                description="Text with an animated shimmering effect."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

