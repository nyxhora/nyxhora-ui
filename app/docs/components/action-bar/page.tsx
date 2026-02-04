import { Metadata } from "next";
import { ActionBar, ActionBarItem } from "@/registry/ui/action-bar";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";
import { Activity, Camera, Settings, Share2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Action Bar",
    description: "An interactive list of expanding action items with glassmorphism effects.",
};

export default function ActionBarDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Action Bar"
                description="An interactive list of expanding action items with glassmorphism effects, inspired by modern control centers."
            />

            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="w-full relative h-[600px] flex items-center justify-center bg-zinc-950 p-6 rounded-lg overflow-hidden">
                        {/* Background for context */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-emerald-500/20" />

                        <ActionBar className="relative z-10 w-full max-w-sm">
                            <ActionBarItem id="item-1" label="Action button" icon={<Activity className="w-6 h-6 text-orange-500" />}>
                                <p><strong>Action button.</strong> One quick press gives you precise, physical control over a variety of customizable functions — like starting a workout, marking a segment, or turning on the flashlight.</p>
                            </ActionBarItem>
                            <ActionBarItem id="item-2" label="Camera Control" icon={<Camera className="w-6 h-6 text-blue-500" />}>
                                <p><strong>Camera Control.</strong> The Action button gives you a direct line to the camera. Press it to open the Camera app, then press it again to snap a photo.</p>
                            </ActionBarItem>
                            <ActionBarItem id="item-3" label="System Settings" icon={<Settings className="w-6 h-6 text-zinc-400" />}>
                                <p><strong>System Settings.</strong> Quickly access your most used settings. Toggle Wi-Fi, Bluetooth, or Do Not Disturb without diving into menus.</p>
                            </ActionBarItem>
                        </ActionBar>
                    </div>
                }
                code={`import { ActionBar, ActionBarItem } from "@/registry/ui/action-bar";
import { Activity, Camera, Settings } from "lucide-react";

export function ActionBarDemo() {
  return (
    <ActionBar>
      <ActionBarItem 
        id="item-1" 
        label="Action button" 
        icon={<Activity className="w-6 h-6 text-orange-500" />}
      >
        <p><strong>Action button.</strong> One quick press gives you precise, physical control over a variety of customizable functions.</p>
      </ActionBarItem>
      <ActionBarItem 
        id="item-2" 
        label="Camera Control" 
        icon={<Camera className="w-6 h-6 text-blue-500" />}
      >
        <p><strong>Camera Control.</strong> The Action button gives you a direct line to the camera.</p>
      </ActionBarItem>
    </ActionBar>
  );
}`}
            />

            <DocsInstallation name={"action-bar"} />

            <CodeBlockWrapper
                title="Usage"
                code={`import { ActionBar, ActionBarItem } from "@/registry/ui/action-bar"

export default function MyComponent() {
  return (
    <ActionBar>
        <ActionBarItem id="1" label="My Item">
            Content goes here...
        </ActionBarItem>
    </ActionBar>
  )
}`}
                language="tsx"
            />
        </div>
    );
}
