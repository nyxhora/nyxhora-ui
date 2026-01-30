import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Theme Toggle",
    description: "A button to toggle between light and dark modes.",
};

export default function ThemeToggleDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Theme Toggle"
                description="A button to toggle between light and dark modes."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

