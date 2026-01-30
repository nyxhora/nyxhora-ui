import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";
import { User } from "lucide-react";

export const metadata: Metadata = {
    title: "Logo",
    description: "A branded logo component.",
};

export default function LogoDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Logo"
                description="A branded logo component."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

