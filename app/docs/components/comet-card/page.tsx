import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Comet Card",
    description: "A card with an animated comet effect border.",
};

export default function CometCardDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Comet Card"
                description="A card with an animated comet effect border."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

