import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Content Sidebar",
    description: "A sidebar designed for navigating content structures.",
};

export default function ContentSidebarDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Content Sidebar"
                description="A sidebar designed for navigating content structures."
            />

            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

