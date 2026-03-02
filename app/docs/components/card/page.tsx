import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/registry/ui/card";
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";
import { Bell, CreditCard } from "lucide-react";
import { CodeBlockWrapper, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export default function CardDocsPage() {
    const faqSchema = generateComponentFAQSchema("Card", getDefaultComponentFAQs("Card"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Card", url: "https://ui.nyxhora.com/docs/components/card" },
    ]);

    
  return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
      <DocsHeader title="Card" description="Displays a card with header, content, and footer sections." />

      <DocsPreview
        title="Preview"
        previewCode={
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Your new project will be created with default settings.</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        }
        code={`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your new project will be created with default settings.</p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>`}
      />
      <DocsInstallation name="card" />

      <CodeBlockWrapper
        title="Usage"
        code={`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card"

export const metadata = generateComponentMetadata({
    name: "Card",
    description: "Displays a card with header, content, and footer sections.",
    category: "Display",
});


export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}`}
        language="tsx"
      />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <DocsPreview
          variant="With Form"
          previewCode={
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Make changes to your account here.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="pedro@example.com" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Save changes</Button>
              </CardFooter>
            </Card>
          }
          code={`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Account</CardTitle>
    <CardDescription>Make changes to your account here.</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" defaultValue="Pedro Duarte" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" defaultValue="pedro@example.com" />
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Save changes</Button>
  </CardFooter>
</Card>`}
        />

        <DocsPreview
          variant="Notification Card"
          previewCode={
            <Card className="w-[350px]">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notifications
                </CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-4 rounded-md border p-4">
                  <Bell className="h-5 w-5" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">Send notifications to device.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          }
          code={`<Card className="w-[350px]">
  <CardHeader className="pb-3">
    <CardTitle className="flex items-center gap-2">
      <Bell className="h-5 w-5" />
      Notifications
    </CardTitle>
    <CardDescription>You have 3 unread messages.</CardDescription>
  </CardHeader>
  <CardContent className="grid gap-4">
    <div className="flex items-center gap-4 rounded-md border p-4">
      <Bell className="h-5 w-5" />
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium">Push Notifications</p>
        <p className="text-sm text-muted-foreground">Send notifications to device.</p>
      </div>
    </div>
  </CardContent>
</Card>`}
        />

        <DocsPreview
          variant="Simple Card"
          previewCode={
            <Card className="w-[350px] p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Total Revenue</p>
                  <p className="text-2xl font-bold">$45,231.89</p>
                </div>
              </div>
            </Card>
          }
          code={`<Card className="w-[350px] p-6">
  <div className="flex items-center gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
      <CreditCard className="h-6 w-6 text-primary" />
    </div>
    <div>
      <p className="text-sm font-medium">Total Revenue</p>
      <p className="text-2xl font-bold">$45,231.89</p>
    </div>
  </div>
</Card>`}
        />
      </section>

      <section>
        <DocsProps
          props={[
            {
              name: "Card",
              description: "The root container component",
              type: "div",
              required: false,
            },
            {
              name: "CardHeader",
              description: "Contains the title and description",
              type: "div",
              required: false,
            },
            {
              name: "CardTitle",
              description: "The card title",
              type: "div",
              required: false,
            },
            {
              name: "CardDescription",
              description: "The card description",
              type: "div",
              required: false,
            },
            {
              name: "CardContent",
              description: "The main content area",
              type: "div",
              required: false,
            },
            {
              name: "CardFooter",
              description: "Contains actions or additional info",
              type: "div",
              required: false,
            },
          ]}
        />
      </section>
    </div>
        </>
    );
}
