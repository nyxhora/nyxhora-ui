import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Background Lines",
    description: "Animated background lines pattern.",
};

export default function BackgroundLinesDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Background Lines"
                description="Animated background lines pattern."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

