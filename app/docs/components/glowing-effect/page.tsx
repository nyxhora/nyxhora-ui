import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Glowing Effect",
    description: "A glowing effect for cards and containers.",
};

export default function GlowingEffectDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Glowing Effect"
                description="A glowing effect for cards and containers."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

