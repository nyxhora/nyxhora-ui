import { Suspense } from "react";
import { UrlTabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/url-tabs";
import { DocsHeader, DocsPreview, DocsProps, CodeBlockWrapper } from "@/components/ui/docs-documentation";
import { ComponentSource } from "@/components/ui/component-source";

export default function UrlTabsDocsPage() {
  return (
    <div className="space-y-10">
      <DocsHeader
        title="URL Tabs"
        description="Enhanced Tabs component that syncs with URL parameters. Perfect for shareable tab states and deep linking."
      />

      <DocsPreview
        title="Preview"
        previewCode={
          <Suspense fallback={<div>Loading...</div>}>
            <UrlTabs defaultValue="overview" className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="members">Members</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="p-4 border rounded-lg mt-2">Overview content here</TabsContent>
              <TabsContent value="members" className="p-4 border rounded-lg mt-2">Members list here</TabsContent>
              <TabsContent value="settings" className="p-4 border rounded-lg mt-2">Settings form here</TabsContent>
            </UrlTabs>
          </Suspense>
        }
        code={`<UrlTabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="members">Members</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="members">Members content</TabsContent>
</UrlTabs>`}
      />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Installation</h2>
        <p className="text-muted-foreground">Copy and paste the following code into your project.</p>

      </section>

      <CodeBlockWrapper
        title="Usage"
        code={`import { UrlTabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/url-tabs"

export default function MyPage() {
  return (
    <UrlTabs defaultValue="overview" paramName="section">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="members">Members</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content</TabsContent>
      <TabsContent value="members">Members content</TabsContent>
    </UrlTabs>
  )
}

// URL will be: /page?section=members`}
        language="tsx"
      />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <DocsPreview
          variant="Custom Parameter Name"
          previewCode={
            <Suspense fallback={<div>Loading...</div>}>
              <UrlTabs defaultValue="tab1" paramName="view" className="w-full max-w-md">
                <TabsList><TabsTrigger value="tab1">First</TabsTrigger><TabsTrigger value="tab2">Second</TabsTrigger></TabsList>
                <TabsContent value="tab1" className="p-4 border rounded-lg mt-2">First tab content</TabsContent>
                <TabsContent value="tab2" className="p-4 border rounded-lg mt-2">Second tab content</TabsContent>
              </UrlTabs>
            </Suspense>
          }
          code={`<UrlTabs defaultValue="tab1" paramName="view">
  // URL will be: ?view=tab2
</UrlTabs>`}
        />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Replace History</h3>
          <CodeBlockWrapper code={`// Replace history entry instead of pushing
<UrlTabs defaultValue="tab1" replaceHistory={true}>
  ...
</UrlTabs>`} language="tsx" />
        </div>
      </section>
      <ComponentSource filePath="/components/ui/url-tabs.tsx" />

      <DocsProps props={[
        { name: "paramName", type: "string", defaultValue: '"tab"', description: "URL parameter name" },
        { name: "updateUrl", type: "boolean", defaultValue: "true", description: "Whether to update URL" },
        { name: "replaceHistory", type: "boolean", defaultValue: "false", description: "Replace vs push history" },
        { name: "defaultValue", type: "string", description: "Default active tab" }
      ]} />
    </div>
  );
}

