import { Metadata } from "next";
import { DocsHeader, DocsPreview, DocsProps, CodeBlockWrapper } from "@/components/ui/docs-documentation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ComponentSource } from "@/components/ui/component-source";

export const metadata: Metadata = {
    title: "Radio Group",
    description: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
};

export default function RadioGroupDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Radio Group"
                description="A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."
            />

            <DocsPreview
                title="Default"
                previewCode={
                    <RadioGroup defaultValue="option-one">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-one" id="option-one" />
                            <Label htmlFor="option-one">Option One</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-two" id="option-two" />
                            <Label htmlFor="option-two">Option Two</Label>
                        </div>
                    </RadioGroup>
                }
                code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`}
            />
            <DocsPreview
                title="Success Color"
                variant="Blue"
                previewCode={
                    <RadioGroup defaultValue="option-one-blue-1">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-one-blue-1" id="option-one-blue-1" onSuccessColor="blue" />
                            <Label htmlFor="option-one-blue-1">Option One</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-two-blue-2" id="option-two-blue-2" onSuccessColor="blue" />
                            <Label htmlFor="option-two-blue-2">Option Two</Label>
                        </div>
                    </RadioGroup>
                }
                code={`<RadioGroup defaultValue="option-one-blue-1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one-blue-1" id="option-one-blue-1" onSuccessColor="blue" />
    <Label htmlFor="option-one-blue-1">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two-blue-2" id="option-two-blue-2" onSuccessColor="blue" />
    <Label htmlFor="option-two-blue-2">Option Two</Label>
  </div>
</RadioGroup>`}
            />
            <DocsPreview
                variant="Red"

                previewCode={
                    <RadioGroup defaultValue="option-one-red-1">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-one-red-1" id="option-one-red-1" onSuccessColor="red" />
                            <Label htmlFor="option-one-red-1">Option One</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-two-red-2" id="option-two-red-2" onSuccessColor="red" />
                            <Label htmlFor="option-two-red-2">Option Two</Label>
                        </div>
                    </RadioGroup>
                }
                code={`<RadioGroup defaultValue="option-one-red-1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one-red-1" id="option-one-red-1" onSuccessColor="red" />
    <Label htmlFor="option-one-red-1">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two-red-2" id="option-two-red-2" onSuccessColor="red" />
    <Label htmlFor="option-two-red-2">Option Two</Label>
  </div>
</RadioGroup>`}
            />
            <DocsPreview
                variant="Green"

                previewCode={
                    <RadioGroup defaultValue="option-one-green-1">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-one-green-1" id="option-one-green-1" onSuccessColor="green" />
                            <Label htmlFor="option-one-green-1">Option One</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-two-green-2" id="option-two-green-2" onSuccessColor="green" />
                            <Label htmlFor="option-two-green-2">Option Two</Label>
                        </div>
                    </RadioGroup>
                }
                code={`<RadioGroup defaultValue="option-one-green-1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one-green-1" id="option-one-green-1" onSuccessColor="green" />
    <Label htmlFor="option-one-green-1">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two-green-2" id="option-two-green-2" onSuccessColor="green" />
    <Label htmlFor="option-two-green-2">Option Two</Label>
  </div>
</RadioGroup>`}
            />
            <DocsPreview
                variant="Purple"

                previewCode={
                    <RadioGroup defaultValue="option-one-purple-1">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-one-purple-1" id="option-one-purple-1" onSuccessColor="purple" />
                            <Label htmlFor="option-one-purple-1">Option One</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-two-purple-2" id="option-two-purple-2" onSuccessColor="purple" />
                            <Label htmlFor="option-two-purple-2">Option Two</Label>
                        </div>
                    </RadioGroup>
                }
                code={`<RadioGroup defaultValue="option-one-purple-1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one-purple-1" id="option-one-purple-1" onSuccessColor="purple" />
    <Label htmlFor="option-one-purple-1">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two-purple-2" id="option-two-purple-2" onSuccessColor="purple" />
    <Label htmlFor="option-two-purple-2">Option Two</Label>
  </div>
</RadioGroup>`}
            />
            <DocsPreview
                variant="Orange"

                previewCode={
                    <RadioGroup defaultValue="option-one-orange-1">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-one-orange-1" id="option-one-orange-1" onSuccessColor="orange" />
                            <Label htmlFor="option-one-orange-1">Option One</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-two-orange-2" id="option-two-orange-2" onSuccessColor="orange" />
                            <Label htmlFor="option-two-orange-2">Option Two</Label>
                        </div>
                    </RadioGroup>
                }
                code={`<RadioGroup defaultValue="option-one-orange-1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one-orange-1" id="option-one-orange-1" onSuccessColor="orange" />
    <Label htmlFor="option-one-orange-1">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two-orange-2" id="option-two-orange-2" onSuccessColor="orange" />
    <Label htmlFor="option-two-orange-2">Option Two</Label>
  </div>
</RadioGroup>`}
            />

            <CodeBlockWrapper
                title="Dependencies"
                language="bash"
                code={`npm install @radix-ui/react-radio-group`}
            />
            <ComponentSource filePath="components/ui/radio-group.tsx" />
        </div>
    );
}
