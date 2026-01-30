import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Spotlight",
    description: "A spotlight effect that follows the cursor.",
};

export default function SpotlightDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Spotlight"
                description="A spotlight effect that follows the cursor."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

