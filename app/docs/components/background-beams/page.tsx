import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Background Beams",
    description: "Animated background beams effect.",
};

export default function BackgroundBeamsDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Background Beams"
                description="Animated background beams effect."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

