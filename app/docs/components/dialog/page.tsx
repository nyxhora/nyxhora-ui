import { Metadata } from "next";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CodeBlockWrapper, DocsHeader, DocsPreview } from "@/components/ui/docs-documentation";
import { ComponentSource } from "@/components/ui/component-source";

export const metadata: Metadata = {
    title: "Dialog",
    description: "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",
};

export default function DialogDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader title="Dialog" description="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert." />

            <DocsPreview
                title="Preview"
                previewCode={
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">Open Dialog</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you&apos;re done.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">Name</Label>
                                    <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right">Username</Label>
                                    <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                }
                code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Name</Label>
        <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
            />

            <CodeBlockWrapper
                title="Usage"
                code={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function MyComponent() {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>Dialog description here.</DialogDescription>
        </DialogHeader>
        {/* Content */}
        <DialogFooter>
          <Button>Action</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`}
                language="tsx"
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <DocsPreview
                    variant="Simple Dialog"
                    previewCode={
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button>Show Message</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Welcome!</DialogTitle>
                                    <DialogDescription>
                                        Thank you for visiting. This is a simple dialog example.
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                    <Button variant="outline">Close</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    }
                    code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Show Message</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Welcome!</DialogTitle>
      <DialogDescription>
        Thank you for visiting. This is a simple dialog example.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Close</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
                />

                <DocsPreview
                    variant="Confirmation Dialog"
                    previewCode={
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="destructive">Delete Account</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                                    <DialogDescription>
                                        This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter className="gap-2">
                                    <Button variant="outline">Cancel</Button>
                                    <Button variant="destructive">Delete</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    }
                    code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="gap-2">
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
                />
            </section>

<ComponentSource filePath="/components/ui/dialog.tsx" />
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Components</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="py-3 px-4 text-left font-semibold">Component</th>
                                <th className="py-3 px-4 text-left font-semibold">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-border/50">
                                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">Dialog</code></td>
                                <td className="py-3 px-4 text-muted-foreground">The root component that manages dialog state</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">DialogTrigger</code></td>
                                <td className="py-3 px-4 text-muted-foreground">The button that opens the dialog</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">DialogContent</code></td>
                                <td className="py-3 px-4 text-muted-foreground">Contains content rendered in the dialog</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">DialogHeader</code></td>
                                <td className="py-3 px-4 text-muted-foreground">Contains the title and description</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">DialogTitle</code></td>
                                <td className="py-3 px-4 text-muted-foreground">The title of the dialog</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">DialogDescription</code></td>
                                <td className="py-3 px-4 text-muted-foreground">The description of the dialog</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">DialogFooter</code></td>
                                <td className="py-3 px-4 text-muted-foreground">Contains action buttons</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
