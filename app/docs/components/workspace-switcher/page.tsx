"use client";

import { useState } from "react";
import { Copy, Check, Code2, Eye, Layers, Keyboard, Building2 } from "lucide-react";
import { DocsHeader } from "@/components/ui/docs-documentation";

export default function WorkspaceSwitcherDocsPage() {
  return (
    <div className="space-y-10">
      <DocsHeader
        title="Workspace Switcher"
        description="A macOS-style workspace cycling overlay with keyboard shortcuts, smooth animations, and visual feedback. Supports Ctrl+` for quick switching between workspaces."
      />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Preview</h2>
        <div className="rounded-xl border border-border/50 overflow-hidden">
          <div className="p-8 bg-background min-h-[300px] flex items-center justify-center">
            <div className="relative bg-background/95 backdrop-blur-2xl border border-border/50 rounded-[28px] shadow-2xl p-8 max-w-md">
              <h3 className="text-base font-semibold mb-4 text-center">Switch Workspace</h3>
              <div className="flex gap-4 items-center justify-center mb-6">
                {["⚡", "📊", "🎨", "📝"].map((icon, i) => (
                  <div key={i} className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${i === 1 ? "bg-primary/10 border-primary/30 border scale-105" : "bg-foreground/5 border-border/30 border hover:bg-foreground/10"}`}>
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center text-lg" style={{ backgroundColor: ["#3B82F6", "#10B981", "#8B5CF6", "#F59E0B"][i] + "E0" }}>{icon}</div>
                    <span className="text-[10px]">Work {i + 1}</span>
                  </div>
                ))}
              </div>
              <div className="p-3 rounded-xl bg-foreground/5 border border-border/30 flex items-center justify-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-green-500/80 flex items-center justify-center">📊</div>
                <div className="text-center"><div className="text-sm font-semibold">Workspace 2</div><div className="text-xs text-primary">Release Ctrl to switch</div></div>
              </div>
              <div className="mt-4 pt-3 border-t border-border/30 text-center">
                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 bg-foreground/10 border border-border/40 rounded text-[10px]">←</kbd><kbd className="px-1.5 py-0.5 bg-foreground/10 border border-border/40 rounded text-[10px]">→</kbd> Navigate</div>
                  <div className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 bg-foreground/10 border border-border/40 rounded text-[10px]">Enter</kbd> Select</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Keyboard Shortcuts</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
            <div className="flex items-center gap-2 mb-2"><Keyboard className="h-4 w-4 text-primary" /><span className="font-medium">Ctrl + `</span></div>
            <p className="text-sm text-muted-foreground">Open workspace switcher and cycle through workspaces</p>
          </div>
          <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
            <div className="flex items-center gap-2 mb-2"><Keyboard className="h-4 w-4 text-primary" /><span className="font-medium">← / →</span></div>
            <p className="text-sm text-muted-foreground">Navigate between workspaces in the overlay</p>
          </div>
          <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
            <div className="flex items-center gap-2 mb-2"><Keyboard className="h-4 w-4 text-primary" /><span className="font-medium">Enter</span></div>
            <p className="text-sm text-muted-foreground">Confirm selection and switch to workspace</p>
          </div>
          <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
            <div className="flex items-center gap-2 mb-2"><Keyboard className="h-4 w-4 text-primary" /><span className="font-medium">Escape / Release Ctrl</span></div>
            <p className="text-sm text-muted-foreground">Close overlay or auto-switch on Ctrl release</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Installation</h2>
        <p className="text-muted-foreground">This component has multiple parts. Copy the full source code below.</p>
        <CodeBlock title="components/ui/WorkspaceSwitcherlabel.tsx" code={componentCode} language="tsx" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <CodeBlock code={`import { WorkspaceSwitcherLabel } from "@/components/ui/WorkspaceSwitcherlabel"

// In your sidebar or layout
export default function SidebarLayout() {
  return (
    <Sidebar>
      <SidebarHeader>
        <WorkspaceSwitcherLabel />
      </SidebarHeader>
      {/* ... */}
    </Sidebar>
  )
}`} language="tsx" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>macOS-style Cycling:</strong> Hold Ctrl and press ` to cycle through workspaces</li>
          <li><strong>Visual Overlay:</strong> Beautiful centered overlay with workspace cards</li>
          <li><strong>Keyboard Navigation:</strong> Arrow keys, Enter, Escape support</li>
          <li><strong>Auto-switch:</strong> Releases Ctrl to instantly switch to selected workspace</li>
          <li><strong>Custom Icons:</strong> Supports emoji or custom icons per workspace</li>
          <li><strong>Color Themes:</strong> Automatic color based on workspace name or custom color</li>
          <li><strong>Switch Notifications:</strong> Toast-style notification when switching</li>
          <li><strong>Loading States:</strong> Skeleton loading for async data</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Components</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border"><th className="py-3 px-4 text-left font-semibold">Component</th><th className="py-3 px-4 text-left font-semibold">Description</th></tr></thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">WorkspaceSwitcherLabel</code></td><td className="py-3 px-4 text-muted-foreground">Main component with keyboard handling</td></tr>
              <tr className="border-b border-border/50"><td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">WorkspaceCyclingOverlay</code></td><td className="py-3 px-4 text-muted-foreground">The visual overlay modal</td></tr>
              <tr className="border-b border-border/50"><td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">WorkspaceIcon</code></td><td className="py-3 px-4 text-muted-foreground">Icon with color and emoji support</td></tr>
              <tr><td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">WorkspaceSwitchingNotification</code></td><td className="py-3 px-4 text-muted-foreground">Toast notification on switch</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Dependencies</h2>
        <CodeBlock code={`npm install motion/react lucide-react
# Also requires: next/navigation`} language="bash" />
      </section>
    </div>
  );
}

const componentCode = `"use client";

import * as React from "react";
import { ChevronsUpDown, Check, Building2, X } from "lucide-react";
import { useRouter } from "next/navigation";

import { AnimatePresence, motion } from "motion/react";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { UseWorkspace } from "@/hooks/use-workspace";

import { cn } from "@/lib/utils";

// Workspace Icon Component
const WorkspaceIcon = ({ workspace, isActive = false, size = "default" }: {
  workspace: any; isActive?: boolean; size?: "sm" | "default" | "lg";
}) => {
  const name = workspace?.name || "";
  const appearance = workspace?.Appearance;
  const fallbackColors = ["#3B82F6", "#10B981", "#8B5CF6", "#F59E0B", "#EC4899", "#6366F1", "#14B8A6", "#EF4444"];
  const colorIndex = name.split("").reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0) % fallbackColors.length;
  const backgroundColor = appearance?.color || fallbackColors[colorIndex];
  const sizeClasses = { sm: "size-6", default: "size-8", lg: "size-12" };
  const textSizeClasses = { sm: "text-[10px]", default: "text-xs", lg: "text-base" };

  return (
    <div className={cn("flex items-center justify-center rounded-2xl text-white font-medium transition-all", sizeClasses[size], isActive && "shadow-xl ring-2 ring-primary/40 scale-105")}
      style={{ backgroundColor: backgroundColor + (isActive ? "F0" : "E8"), border: \`1px solid \${backgroundColor}15\` }}>
      {appearance?.icon ? <span className={textSizeClasses[size]}>{appearance.icon}</span> : name.length > 0 ? <span className={textSizeClasses[size]}>{name.charAt(0).toUpperCase()}</span> : <Building2 className="size-4" />}
    </div>
  );
};

// Workspace Cycling Overlay
const WorkspaceCyclingOverlay = ({ currentWorkspace, allWorkspaces, selectedIndex, isVisible, onClose, onWorkspaceSelect }: {
  currentWorkspace: any; allWorkspaces: any[]; selectedIndex: number; isVisible: boolean; onClose: () => void; onWorkspaceSelect: (id: string) => void;
}) => {
  if (!isVisible || !allWorkspaces.length) return null;
  const selectedWorkspace = allWorkspaces[selectedIndex];

  return (
    <AnimatePresence mode="wait">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral/30" onClick={onClose}>
        <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 30, stiffness: 500 }}
          className="relative bg-background/95 backdrop-blur-2xl border border-border/50 rounded-[28px] shadow-2xl p-8" onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose} className="absolute top-6 right-6 w-8 h-8 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center">
            <X className="w-4 h-4 text-foreground/70" />
          </button>
          <h3 className="text-base font-semibold mb-4 text-center">Switch Workspace</h3>
          <div className="flex gap-6 items-center justify-center mb-10">
            {allWorkspaces.map((workspace, index) => {
              const isSelected = index === selectedIndex;
              return (
                <motion.div key={workspace._id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                  className={cn("relative flex flex-col items-center gap-2 p-3 rounded-xl cursor-pointer w-24", 
                    "bg-foreground/3 hover:bg-foreground/6 border border-border/30",
                    isSelected && "bg-primary/8 border-primary/30 ring-1 ring-primary/20")}
                  onClick={(e) => { e.stopPropagation(); onWorkspaceSelect(workspace._id); }}>
                  {isSelected && <motion.div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <Check className="w-2 h-2 text-primary-foreground" />
                  </motion.div>}
                  <WorkspaceIcon workspace={workspace} size="default" isActive={isSelected} />
                  <span className="text-[10px]">{workspace.name.slice(0, 8)}</span>
                </motion.div>
              );
            })}
          </div>
          <div className="p-3 rounded-xl bg-foreground/3 border border-border/30 flex items-center justify-center gap-3">
            <WorkspaceIcon workspace={selectedWorkspace} size="default" isActive={true} />
            <div className="text-center">
              <div className="text-sm font-semibold">{selectedWorkspace?.name}</div>
              <div className="text-xs text-primary">Release Ctrl to switch</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Main Component (condensed - see full source for complete implementation)
export function WorkspaceSwitcherLabel() {
  const router = useRouter();
  const [isCycling, setIsCycling] = React.useState(false);
  const [selectedWorkspaceIndex, setSelectedWorkspaceIndex] = React.useState(0);

  const handleWorkspaceSwitch = React.useCallback((workspaceId: string) => {
    router.push(\`/workspace/\${workspaceId}\`);
    setIsCycling(false);
  }, [router]);

  // Keyboard shortcut: Ctrl + \`
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "\`") {
        e.preventDefault();
        if (!userWorkspaces?.length) return;
        if (!isCycling) {
          setIsCycling(true);
          const currentIndex = userWorkspaces.findIndex((ws) => ws._id === currentWorkspaceId) || 0;
          setSelectedWorkspaceIndex((currentIndex + 1) % userWorkspaces.length);
        } else {
          setSelectedWorkspaceIndex((prev) => (prev + 1) % userWorkspaces.length);
        }
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (isCycling && e.key === "Control") {
        const selectedWorkspace = userWorkspaces?.[selectedWorkspaceIndex];
        if (selectedWorkspace && selectedWorkspace._id !== currentWorkspaceId) {
          handleWorkspaceSwitch(selectedWorkspace._id);
        }
        setIsCycling(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => { window.removeEventListener("keydown", handleKeyDown); window.removeEventListener("keyup", handleKeyUp); };
  }, [userWorkspaces, currentWorkspaceId, isCycling, selectedWorkspaceIndex, handleWorkspaceSwitch]);

  if (!currentWorkspace) return null;

  return (
    <WorkspaceCyclingOverlay
      currentWorkspace={currentWorkspace}
      allWorkspaces={userWorkspaces || []}
      selectedIndex={selectedWorkspaceIndex}
      isVisible={isCycling}
      onClose={() => setIsCycling(false)}
      onWorkspaceSelect={handleWorkspaceSwitch}
    />
  );
}`;

function CodeBlock({ code, language, title }: { code: string; language: string; title?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="relative group rounded-xl overflow-hidden">
      <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button onClick={handleCopy} className="flex items-center gap-1.5 px-2 py-1 text-xs text-zinc-400 hover:text-white bg-zinc-800 rounded-md">{copied ? <><Check className="h-3 w-3 text-green-500" /> Copied!</> : <><Copy className="h-3 w-3" /> Copy</>}</button>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border-b border-zinc-800"><Code2 className="h-4 w-4 text-zinc-500" /><span className="text-xs text-zinc-500">{title || language}</span></div>
      <pre className="bg-zinc-950 p-4 overflow-x-auto max-h-[600px]"><code className="text-sm text-zinc-100">{code}</code></pre>
    </div>
  );
}
