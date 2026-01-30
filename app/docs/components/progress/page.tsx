"use client";

import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { CodeBlockWrapper, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";

export default function ProgressDocsPage() {
    const [progress, setProgress] = useState(33);

    return (
        <div className="space-y-10">
            <DocsHeader title="Progress" description="Displays an indicator showing the completion progress of a task, typically displayed as a progress bar." />

            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="w-[60%]">
                        <Progress value={33} />
                    </div>
                }
                code={`<Progress value={33} />`}
            />

            <CodeBlockWrapper
                title="Usage"
                code={`import { Progress } from "@/components/ui/progress"

export default function MyComponent() {
  return <Progress value={60} />
}`}
                language="tsx"
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <DocsPreview
                    variant="Different Values"
                    previewCode={
                        <div className="w-full max-w-md space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm"><span>25%</span><span className="text-muted-foreground">Low</span></div>
                                <Progress value={25} />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm"><span>50%</span><span className="text-muted-foreground">Medium</span></div>
                                <Progress value={50} />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm"><span>75%</span><span className="text-muted-foreground">High</span></div>
                                <Progress value={75} />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm"><span>100%</span><span className="text-muted-foreground">Complete</span></div>
                                <Progress value={100} />
                            </div>
                        </div>
                    }
                    code={`<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>25%</span>
    <span className="text-muted-foreground">Low</span>
  </div>
  <Progress value={25} />
</div>

<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>100%</span>
    <span className="text-muted-foreground">Complete</span>
  </div>
  <Progress value={100} />
</div>`}
                />

                <DocsPreview
                    variant="Custom Colors"
                    previewCode={
                        <div className="w-full max-w-md space-y-4">
                            <Progress value={60} className="[&>div]:bg-blue-500" />
                            <Progress value={40} className="[&>div]:bg-green-500" />
                            <Progress value={80} className="[&>div]:bg-purple-500" />
                            <Progress value={30} className="[&>div]:bg-orange-500" />
                        </div>
                    }
                    code={`<Progress value={60} className="[&>div]:bg-blue-500" />
<Progress value={40} className="[&>div]:bg-green-500" />
<Progress value={80} className="[&>div]:bg-purple-500" />
<Progress value={30} className="[&>div]:bg-orange-500" />`}
                />

                <DocsPreview
                    variant="With Label"
                    previewCode={
                        <div className="w-full max-w-md space-y-2">
                            <div className="flex justify-between text-sm font-medium">
                                <span>Uploading...</span>
                                <span>67%</span>
                            </div>
                            <Progress value={67} />
                            <p className="text-xs text-muted-foreground">Please wait while your file uploads</p>
                        </div>
                    }
                    code={`<div className="w-full max-w-md space-y-2">
  <div className="flex justify-between text-sm font-medium">
    <span>Uploading...</span>
    <span>67%</span>
  </div>
  <Progress value={67} />
  <p className="text-xs text-muted-foreground">
    Please wait while your file uploads
  </p>
</div>`}
                />

                <DocsPreview
                    variant="Sizes"
                    previewCode={
                        <div className="w-full max-w-md space-y-4">
                            <div className="space-y-1">
                                <span className="text-sm text-muted-foreground">Small</span>
                                <Progress value={60} className="h-1" />
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm text-muted-foreground">Default</span>
                                <Progress value={60} />
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm text-muted-foreground">Large</span>
                                <Progress value={60} className="h-4" />
                            </div>
                        </div>
                    }
                    code={`<Progress value={60} className="h-1" />  // Small
<Progress value={60} />                 // Default
<Progress value={60} className="h-4" /> // Large`}
                />
            </section>
            <CodeBlockWrapper 
            title="Installation"
            code={`npx shadcn@latest add progress`}
            language="bash"
            />

            <DocsProps
                props={[
                    { name: "value", type: "number", defaultValue: "0", description: "The progress value (0-100)" },
                    { name: "max", type: "number", defaultValue: "100", description: "The maximum value" },
                    { name: "className", type: "string", description: "Additional CSS classes" },
                ]}
            />
        </div>
    );
}
