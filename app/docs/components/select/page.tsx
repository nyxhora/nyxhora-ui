import { Metadata } from "next";
import { DocsHeader, DocsPreview, DocsProps, CodeBlockWrapper } from "@/components/ui/docs-documentation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/ui/select";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata: Metadata = {
    title: "Select",
    description: "Displays a list of options for the user to pick from—triggered by a button.",
};

export default function SelectDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Select"
                description="Displays a list of options for the user to pick from—triggered by a button."
            />

            <DocsPreview
                title="Default"
                previewCode={
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                }
                code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>`}
            />

            <DocsInstallation name="select" />
        </div>
    );
}
