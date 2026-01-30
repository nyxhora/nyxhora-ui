import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CodeBlockWrapper, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
};

export default function TabsDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader title="Tabs" description="A set of layered sections of content—known as tab panels—that are displayed one at a time." />

            <DocsPreview
                title="Preview"
                previewCode={
                    <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="password">Password</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Account</CardTitle>
                                    <CardDescription>Make changes to your account here.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" defaultValue="Pedro Duarte" />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Password</CardTitle>
                                    <CardDescription>Change your password here.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="current">Current password</Label>
                                        <Input id="current" type="password" />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                }
                code={`<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>Make changes to your account here.</CardDescription>
      </CardHeader>
      <CardContent>
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="Pedro Duarte" />
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="password">
    <Card>
      <CardHeader>
        <CardTitle>Password</CardTitle>
        <CardDescription>Change your password here.</CardDescription>
      </CardHeader>
      <CardContent>
        <Label htmlFor="current">Current password</Label>
        <Input id="current" type="password" />
      </CardContent>
    </Card>
  </TabsContent>
</Tabs>`}
            />

            <CodeBlockWrapper
                title="Usage"
                code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MyComponent() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
    </Tabs>
  )
}`}
                language="tsx"
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <DocsPreview
                    variant="Simple Tabs"
                    previewCode={
                        <Tabs defaultValue="overview" className="w-[400px]">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                                <TabsTrigger value="reports">Reports</TabsTrigger>
                            </TabsList>
                            <TabsContent value="overview" className="p-4">
                                <p className="text-sm text-muted-foreground">Overview content goes here.</p>
                            </TabsContent>
                            <TabsContent value="analytics" className="p-4">
                                <p className="text-sm text-muted-foreground">Analytics content goes here.</p>
                            </TabsContent>
                            <TabsContent value="reports" className="p-4">
                                <p className="text-sm text-muted-foreground">Reports content goes here.</p>
                            </TabsContent>
                        </Tabs>
                    }
                    code={`<Tabs defaultValue="overview" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-3">
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="reports">Reports</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="analytics">Analytics content</TabsContent>
  <TabsContent value="reports">Reports content</TabsContent>
</Tabs>`}
                />

                <DocsPreview
                    variant="Disabled Tab"
                    previewCode={
                        <Tabs defaultValue="active" className="w-[300px]">
                            <TabsList>
                                <TabsTrigger value="active">Active</TabsTrigger>
                                <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
                            </TabsList>
                            <TabsContent value="active" className="p-4">
                                <p className="text-sm text-muted-foreground">This tab is active.</p>
                            </TabsContent>
                        </Tabs>
                    }
                    code={`<Tabs defaultValue="active">
  <TabsList>
    <TabsTrigger value="active">Active</TabsTrigger>
    <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
  </TabsList>
  <TabsContent value="active">This tab is active.</TabsContent>
</Tabs>`}
                />
            </section>
            <DocsProps props={[
                {name:"Tabs",description:"The root component that manges tab state and layout.",required:true},
                {name:"TabsList",description:"Container for tab triggers.",required:true},
                {name:"TabsTrigger",description:"Individual tab trigger.",required:true},
                {name:"TabsContent",description:"Content panel for a tab.",required:true}
            ]}/>

        </div>
    );
}
