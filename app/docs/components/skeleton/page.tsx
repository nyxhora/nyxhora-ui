import { Metadata } from "next";
import { Skeleton } from "@/components/ui/skeleton";
import { CodeBlockWrapper, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Skeleton",
    description: "Use to show a placeholder while content is loading.",
};

export default function SkeletonDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader title="Skeleton" description="Use to show a placeholder while content is loading." />

            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="flex items-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
                }
                code={`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
            />

            <CodeBlockWrapper
                title="Usage"
                code={`import { Skeleton } from "@/components/ui/skeleton"

export default function MyComponent() {
  return <Skeleton className="w-[100px] h-[20px] rounded-full" />
}`}
                language="tsx"
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <DocsPreview
                    variant="Card Skeleton"
                    previewCode={
                        <div className="flex flex-col space-y-3 w-[300px]">
                            <Skeleton className="h-[125px] w-full rounded-xl" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-3/4" />
                            </div>
                        </div>
                    }
                    code={`<div className="flex flex-col space-y-3 w-[300px]">
  <Skeleton className="h-[125px] w-full rounded-xl" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-3/4" />
  </div>
</div>`}
                />

                <DocsPreview
                    variant="Profile Skeleton"
                    previewCode={
                        <div className="flex items-center space-x-4">
                            <Skeleton className="h-14 w-14 rounded-full" />
                            <div className="space-y-2">
                                <Skeleton className="h-5 w-[150px]" />
                                <Skeleton className="h-4 w-[100px]" />
                            </div>
                        </div>
                    }
                    code={`<div className="flex items-center space-x-4">
  <Skeleton className="h-14 w-14 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-5 w-[150px]" />
    <Skeleton className="h-4 w-[100px]" />
  </div>
</div>`}
                />

                <DocsPreview
                    variant="Table Skeleton"
                    previewCode={
                        <div className="w-full max-w-md space-y-3">
                            <div className="flex items-center justify-between">
                                <Skeleton className="h-4 w-[100px]" />
                                <Skeleton className="h-4 w-[80px]" />
                                <Skeleton className="h-4 w-[60px]" />
                            </div>
                            <div className="flex items-center justify-between">
                                <Skeleton className="h-4 w-[120px]" />
                                <Skeleton className="h-4 w-[70px]" />
                                <Skeleton className="h-4 w-[50px]" />
                            </div>
                            <div className="flex items-center justify-between">
                                <Skeleton className="h-4 w-[90px]" />
                                <Skeleton className="h-4 w-[85px]" />
                                <Skeleton className="h-4 w-[55px]" />
                            </div>
                        </div>
                    }
                    code={`<div className="w-full max-w-md space-y-3">
  <div className="flex items-center justify-between">
    <Skeleton className="h-4 w-[100px]" />
    <Skeleton className="h-4 w-[80px]" />
    <Skeleton className="h-4 w-[60px]" />
  </div>
  <div className="flex items-center justify-between">
    <Skeleton className="h-4 w-[120px]" />
    <Skeleton className="h-4 w-[70px]" />
    <Skeleton className="h-4 w-[50px]" />
  </div>
</div>`}
                />

                <DocsPreview
                    variant="Article Skeleton"
                    previewCode={
                        <div className="w-full max-w-lg space-y-4">
                            <Skeleton className="h-6 w-3/4" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6" />
                            </div>
                            <div className="flex gap-2 pt-2">
                                <Skeleton className="h-8 w-20 rounded-md" />
                                <Skeleton className="h-8 w-20 rounded-md" />
                            </div>
                        </div>
                    }
                    code={`<div className="w-full max-w-lg space-y-4">
  <Skeleton className="h-6 w-3/4" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-5/6" />
  </div>
  <div className="flex gap-2 pt-2">
    <Skeleton className="h-8 w-20 rounded-md" />
    <Skeleton className="h-8 w-20 rounded-md" />
  </div>
</div>`}
                />
            </section>
            <CodeBlockWrapper 
            title="Installation"
            code={`npx shadcn@latest add skeleton`}
            language="bash"
            />

            <DocsProps
                props={[
                    { name: "className", type: "string", description: "CSS classes for sizing and styling" },
                ]}
            />
        </div>
    );
}
