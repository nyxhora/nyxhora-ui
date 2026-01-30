import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";
// import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
    title: "Breadcrumb",
    description: "Displays the path to the current resource using a hierarchy of links.",
};

export default function BreadcrumbDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Breadcrumb"
                description="Displays the path to the current resource using a hierarchy of links."
            />

            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>

            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add breadcrumb`}
            />
        </div>
    );
}

