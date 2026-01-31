"use client";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose,
} from "@/components/ui/sheet";
import { DocsPreview, ComponentPreview } from "@/components/ui/docs-documentation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SheetDemo() {
    return (
        <DocsPreview
            title="Preview"
            previewCode={
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline">Open Sheet</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Edit Profile</SheetTitle>
                            <SheetDescription>
                                Make changes to your profile here. Click save when you&apos;re done.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4 px-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Username
                                </Label>
                                <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Save changes</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            }
            code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4 px-4">
      {/* Your form content */}
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button type="submit">Save changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
        />
    );
}

export function SheetSideLeft() {
    return (
        <ComponentPreview
            preview={
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline">Open Left</Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>Left Sheet</SheetTitle>
                            <SheetDescription>
                                This sheet slides in from the left side.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            }
            code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Left</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Left Sheet</SheetTitle>
      <SheetDescription>
        This sheet slides in from the left side.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
        />
    );
}

export function SheetSideRight() {
    return (
        <ComponentPreview
            preview={
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline">Open Right</Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <SheetHeader>
                            <SheetTitle>Right Sheet</SheetTitle>
                            <SheetDescription>
                                This sheet slides in from the right side (default).
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            }
            code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Right</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Right Sheet</SheetTitle>
      <SheetDescription>
        This sheet slides in from the right side (default).
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
        />
    );
}

export function SheetSideTop() {
    return (
        <ComponentPreview
            preview={
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline">Open Top</Button>
                    </SheetTrigger>
                    <SheetContent side="top">
                        <SheetHeader>
                            <SheetTitle>Top Sheet</SheetTitle>
                            <SheetDescription>
                                This sheet slides in from the top.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            }
            code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Top</Button>
  </SheetTrigger>
  <SheetContent side="top">
    <SheetHeader>
      <SheetTitle>Top Sheet</SheetTitle>
      <SheetDescription>
        This sheet slides in from the top.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
        />
    );
}

export function SheetSideBottom() {
    return (
        <ComponentPreview
            preview={
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline">Open Bottom</Button>
                    </SheetTrigger>
                    <SheetContent side="bottom">
                        <SheetHeader>
                            <SheetTitle>Bottom Sheet</SheetTitle>
                            <SheetDescription>
                                This sheet slides in from the bottom.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            }
            code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Bottom</Button>
  </SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>Bottom Sheet</SheetTitle>
      <SheetDescription>
        This sheet slides in from the bottom.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
        />
    );
}
