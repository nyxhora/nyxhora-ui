import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "TOC Sidebar",
    description: "Table of Contents sidebar for documentation pages.",
};

export default function TocSidebarDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="TOC Sidebar"
                description="Table of Contents sidebar for documentation pages."
            />

            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

