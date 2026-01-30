import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";
// import { IconPicker } from "@/components/ui/icon-picker";

export const metadata: Metadata = {
    title: "Icon Picker",
    description: "A component to select icons from a library.",
};

export default function IconPickerDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Icon Picker"
                description="A component to select icons from a library."
            />

            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

