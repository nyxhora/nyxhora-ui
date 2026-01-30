import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Smooth Cursor",
    description: "A smooth custom cursor that follows mouse movement.",
};

export default function SmoothCursorDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Smooth Cursor"
                description="A smooth custom cursor that follows mouse movement."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

