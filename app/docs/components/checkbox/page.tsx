
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CodeBlockWrapper, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import { ComponentSource } from "@/components/ui/component-source";

export default function CheckboxDocsPage() {

    return (
        <div className="space-y-10">
            <DocsHeader title="Checkbox" description="A control that allows the user to toggle between checked and not checked." />

            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">Accept terms and conditions</Label>
                    </div>
                }
                code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
            />

            <CodeBlockWrapper
                title="Usage"
                code={`import { Checkbox } from "@/components/ui/checkbox"

export default function MyComponent() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label htmlFor="terms">Accept terms</label>
    </div>
  )
}`}
                language="tsx"
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <DocsPreview
                    variant="With Text"
                    previewCode={
                        <div className="items-top flex space-x-2">
                            <Checkbox id="terms1" />
                            <div className="grid gap-1.5 leading-none">
                                <Label htmlFor="terms1">Accept terms and conditions</Label>
                                <p className="text-sm text-muted-foreground">
                                    You agree to our Terms of Service and Privacy Policy.
                                </p>
                            </div>
                        </div>
                    }
                    code={`<div className="items-top flex space-x-2">
  <Checkbox id="terms1" />
  <div className="grid gap-1.5 leading-none">
    <Label htmlFor="terms1">Accept terms and conditions</Label>
    <p className="text-sm text-muted-foreground">
      You agree to our Terms of Service and Privacy Policy.
    </p>
  </div>
</div>`}
                />

                <DocsPreview
                    variant="Disabled"
                    previewCode={
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms2" disabled />
                            <Label htmlFor="terms2" className="text-muted-foreground">
                                Disabled checkbox
                            </Label>
                        </div>
                    }
                    code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms2" disabled />
  <Label htmlFor="terms2" className="text-muted-foreground">
    Disabled checkbox
  </Label>
</div>`}
                />

                <DocsPreview
                    variant="Checkbox Group"
                    previewCode={
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="email" />
                                <Label htmlFor="email">Email notifications</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="sms" />
                                <Label htmlFor="sms">SMS notifications</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="push" defaultChecked />
                                <Label htmlFor="push">Push notifications</Label>
                            </div>
                        </div>
                    }
                    code={`<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Checkbox id="email" />
    <Label htmlFor="email">Email notifications</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="sms" />
    <Label htmlFor="sms">SMS notifications</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="push" defaultChecked />
    <Label htmlFor="push">Push notifications</Label>
  </div>
</div>`}
                />
            </section>
            <DocsPreview
                title="On Success Color"
                variant="Blue"
                previewCode={
                    <div className="flex items-center space-x-2">
                        <Checkbox id="termsBlue" onSuccessColor="blue" defaultChecked />
                        <Label htmlFor="termsBlue">Accept terms and conditions</Label>
                    </div>
                }
                code={`<div className="flex items-center space-x-2">
  <Checkbox id="termsBlue" onSuccessColor="blue" defaultChecked />
  <Label htmlFor="termsBlue">Accept terms and conditions</Label>
</div>`}
            />
            <DocsPreview
                variant="Red"
                previewCode={
                    <div className="flex items-center space-x-2">
                        <Checkbox id="termsRed" onSuccessColor="red" defaultChecked />
                        <Label htmlFor="termsRed">Accept terms and conditions</Label>
                    </div>
                }
                code={`<div className="flex items-center space-x-2">
  <Checkbox id="termsRed" onSuccessColor="red" defaultChecked />
  <Label htmlFor="termsRed">Accept terms and conditions</Label>
</div>`}
            />
            <DocsPreview
                variant="Green"
                previewCode={
                    <div className="flex items-center space-x-2">
                        <Checkbox id="termsGreen" onSuccessColor="green" defaultChecked />
                        <Label htmlFor="termsGreen">Accept terms and conditions</Label>
                    </div>
                }
                code={`<div className="flex items-center space-x-2">
  <Checkbox id="termsGreen" onSuccessColor="green" defaultChecked />
  <Label htmlFor="termsGreen">Accept terms and conditions</Label>
</div>`}
            />
            <DocsPreview

                variant="Purple"
                previewCode={
                    <div className="flex items-center space-x-2">
                        <Checkbox id="termsPurple" onSuccessColor="purple" defaultChecked />
                        <Label htmlFor="termsPurple">Accept terms and conditions</Label>
                    </div>
                }
                code={`<div className="flex items-center space-x-2">
  <Checkbox id="termsPurple" onSuccessColor="purple" defaultChecked />
  <Label htmlFor="termsPurple">Accept terms and conditions</Label>
</div>`}
            />
            <DocsPreview

                variant="Orange"
                previewCode={
                    <div className="flex items-center space-x-2">
                        <Checkbox id="termsOrange" onSuccessColor="orange" defaultChecked />
                        <Label htmlFor="termsOrange">Accept terms and conditions</Label>
                    </div>
                }
                code={`<div className="flex items-center space-x-2">
  <Checkbox id="termsOrange" onSuccessColor="orange" defaultChecked />
  <Label htmlFor="termsOrange">Accept terms and conditions</Label>
</div>`}
            />
            <CodeBlockWrapper
                title="Dependencies"
                code={`npm install @radix-ui/react-checkbox`}
                language="bash"
            />
            <ComponentSource filePath="components/ui/checkbox.tsx" />


            <DocsProps
                props={[
                    { name: "checked", type: "boolean", description: "Controlled checked state" },
                    { name: "onSuccessColor", type: "'red' | 'blue' | 'green' | 'purple' | 'orange' | 'default'", defaultValue: "default", description: "Color of the checkbox" },
                    { name: "defaultChecked", type: "boolean", defaultValue: "true", description: "Default checked state" },
                    { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Called when checked state changes" },
                    { name: "disabled", type: "boolean", defaultValue: "false", description: "Disable the checkbox" },
                ]}
            />
        </div>
    );
}
