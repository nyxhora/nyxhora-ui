import { Metadata } from "next";
import { DocsHeader } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Cover",
    description: "A cover component for displaying featured images and headers. Documentation coming soon.",
};

export default function CoverDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Cover"
                description="A cover component for displaying featured images and headers. Documentation coming soon."
            />
            <div className="flex items-center justify-center h-40 border border-dashed border-border rounded-lg">
                <span className="text-muted-foreground">Component documentation in progress</span>
            </div>
        </div>
    );
}
