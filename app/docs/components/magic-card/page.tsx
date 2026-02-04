
import { Metadata } from "next";
import { MagicCard, MagicCardHeader, MagicCardTitle, MagicCardDescription, MagicCardContent, MagicCardFooter } from "@/registry/ui/magic-card";
import { CodeBlockWrapper, DocsHeader, DocsPreview } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata: Metadata = {
    title: "Magic Card",
    description: "A card component with a magical spinning border effect and dark theme styling.",
};

export default function MagicCardDocsPage() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <DocsHeader title="Magic Card" description="A card component with a magical spinning border effect and dark theme styling." />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={
                    <MagicCard className="w-[350px]">
                        <MagicCardHeader>
                            <MagicCardTitle>Notification</MagicCardTitle>
                            <MagicCardDescription>You have 3 unread messages.</MagicCardDescription>
                        </MagicCardHeader>
                        <MagicCardContent>
                            <p>Your subscription is expiring soon. Please renew to continue using the premium features.</p>
                        </MagicCardContent>
                        <MagicCardFooter>
                            <button className="text-sm font-medium text-blue-400 hover:text-blue-300">Mark all as read</button>
                        </MagicCardFooter>
                    </MagicCard>
                }
                code={`<MagicCard className="w-[350px]">
  <MagicCardHeader>
    <MagicCardTitle>Notification</MagicCardTitle>
    <MagicCardDescription>You have 3 unread messages.</MagicCardDescription>
  </MagicCardHeader>
  <MagicCardContent>
    <p>Your subscription is expiring soon. Please renew to continue using the premium features.</p>
  </MagicCardContent>
  <MagicCardFooter>
    <button className="text-sm font-medium text-blue-400 hover:text-blue-300">Mark all as read</button>
  </MagicCardFooter>
</MagicCard>`}
            />

            {/* Installation */}
            <DocsInstallation name={"magic-card"} />

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { 
  MagicCard, 
  MagicCardHeader, 
  MagicCardTitle, 
  MagicCardDescription, 
  MagicCardContent, 
  MagicCardFooter 
} from "@/registry/ui/magic-card";

export default function Example() {
  return (
    <MagicCard className="w-[350px]">
      <MagicCardHeader>
        <MagicCardTitle>Card Title</MagicCardTitle>
        <MagicCardDescription>Card Description</MagicCardDescription>
      </MagicCardHeader>
      <MagicCardContent>
        <p>Card Content</p>
      </MagicCardContent>
      <MagicCardFooter>
        <p>Card Footer</p>
      </MagicCardFooter>
    </MagicCard>
  );
}`}
                language="tsx"
            />
        </div>
    );
}
