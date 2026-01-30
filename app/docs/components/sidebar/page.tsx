import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Sidebar",
    description: "A collapsible sidebar navigation component.",
};

export default function SidebarDocsPage() {
  return (
    <div className="space-y-10">
      <DocsHeader
        title="Sidebar"
        description="A collapsible sidebar navigation component."
      />

      <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
        <p>Interactive preview coming soon.</p>
      </div>
    </div>
  );
}

