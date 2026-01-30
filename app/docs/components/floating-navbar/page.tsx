import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Floating Navbar",
    description: "A floating navigation bar that appears on scroll.",
};

export default function FloatingNavbarDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Floating Navbar"
                description="A floating navigation bar that appears on scroll."
            />

            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

