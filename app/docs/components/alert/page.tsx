import { Metadata } from "next";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import { ComponentSource } from "@/components/ui/component-source";

export const metadata: Metadata = {
    title: "Alert",
    description: "Displays a callout for user attention with various styles.",
};

export default function AlertDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader title="Alert" description="Displays a callout for user attention with various styles." />

            <DocsPreview
                title="Preview"
                previewCode={
                    <Alert>
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                            You can add components to your app using the cli.
                        </AlertDescription>
                    </Alert>
                }
                code={`<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`}
            />

            <CodeBlockWrapper
                title="Usage"
                code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function MyComponent() {
  return (
    <Alert>
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>Alert Description</AlertDescription>
    </Alert>
  )
}`}
                language="tsx"
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <DocsPreview
                    variant="Default"
                    previewCode={
                        <Alert className="max-w-lg">
                            <Info className="h-4 w-4" />
                            <AlertTitle>Information</AlertTitle>
                            <AlertDescription>
                                This is a default alert for general information.
                            </AlertDescription>
                        </Alert>
                    }
                    code={`<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    This is a default alert for general information.
  </AlertDescription>
</Alert>`}
                />

                <DocsPreview
                    variant="Destructive"
                    previewCode={
                        <Alert variant="destructive" className="max-w-lg">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>
                                Your session has expired. Please log in again.
                            </AlertDescription>
                        </Alert>
                    }
                    code={`<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`}
                />

                <DocsPreview
                    variant="Success (Custom Styling)"
                    previewCode={
                        <Alert className="max-w-lg border-green-500/50 text-green-600 dark:text-green-400 [&>svg]:text-green-600 dark:[&>svg]:text-green-400">
                            <CheckCircle2 className="h-4 w-4" />
                            <AlertTitle>Success!</AlertTitle>
                            <AlertDescription className="text-green-600/80 dark:text-green-400/80">
                                Your changes have been saved successfully.
                            </AlertDescription>
                        </Alert>
                    }
                    code={`<Alert className="border-green-500/50 text-green-600 dark:text-green-400 [&>svg]:text-green-600">
  <CheckCircle2 className="h-4 w-4" />
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription className="text-green-600/80 dark:text-green-400/80">
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>`}
                />

                <DocsPreview
                    variant="Warning (Custom Styling)"
                    previewCode={
                        <Alert className="max-w-lg border-yellow-500/50 text-yellow-600 dark:text-yellow-400 [&>svg]:text-yellow-600 dark:[&>svg]:text-yellow-400">
                            <AlertTriangle className="h-4 w-4" />
                            <AlertTitle>Warning</AlertTitle>
                            <AlertDescription className="text-yellow-600/80 dark:text-yellow-400/80">
                                Your trial period is ending in 3 days.
                            </AlertDescription>
                        </Alert>
                    }
                    code={`<Alert className="border-yellow-500/50 text-yellow-600 dark:text-yellow-400 [&>svg]:text-yellow-600">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription className="text-yellow-600/80 dark:text-yellow-400/80">
    Your trial period is ending in 3 days.
  </AlertDescription>
</Alert>`}
                />
            </section>
            <CodeBlockWrapper
                title="Dependency"
                code={`npm install @radix-ui/react-alert`}
                language="tsx"
            />
            <ComponentSource filePath="/components/ui/alert.tsx" />

            <DocsProps
                props={[
                    {
                        name: "variant",
                        type: '"default" | "destructive"',
                        defaultValue: "default",
                        description: "The visual style of the alert",
                    },
                    {
                        name: "className",
                        type: "string",
                        description: "Additional CSS classes",
                    },
                ]}
            />
        </div>
    );
}
