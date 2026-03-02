import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { DocsHeader, DocsPreview, DocsProps, CodeBlockWrapper } from "@/components/ui/docs-documentation";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";
import { Label } from "@/registry/ui/label";
import { ComponentSource } from "@/registry/ui/component-source";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Radio Group",
    description: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
    category: "Form",
});


export default function RadioGroupDocsPage() {
    const faqSchema = generateComponentFAQSchema("Radio Group", getDefaultComponentFAQs("Radio Group"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Radio Group", url: "https://ui.nyxhora.com/docs/components/radio-group" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
            <DocsInstallation name="radio-group" />
        </div>
        </>
    );
}
