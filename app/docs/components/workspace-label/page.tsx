"use client";

import { useState, useRef, useEffect } from "react";
import { Copy, Check, Code2, Building2, Users, Settings, Bell, X, ChevronRight, ChevronsUpDown, Plus, Briefcase, Calendar, Eye, UserPlus, Settings2, GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils";
import { DocsHeader } from "@/components/ui/docs-documentation";

// Demo Data
const demoWorkspaces = [
    { id: "1", name: "Personal", description: "My personal workspace", icon: "🏠", color: "#3B82F6" },
    { id: "2", name: "Acme Corp", description: "Company workspace", icon: "🏢", color: "#10B981" },
    { id: "3", name: "Design Team", description: "Creative projects", icon: "🎨", color: "#8B5CF6" },
    { id: "4", name: "Marketing", description: "Marketing campaigns", icon: "📈", color: "#F59E0B" },
];

const demoMembers = [
    { id: "1", name: "John Doe", email: "john@example.com", role: "admin", image: null },
    { id: "2", name: "Jane Smith", email: "jane@example.com", role: "member", image: null },
    { id: "3", name: "Bob Wilson", email: "bob@example.com", role: "member", image: null },
    { id: "4", name: "Alice Brown", email: "alice@example.com", role: "member", image: null },
    { id: "5", name: "Charlie Davis", email: "charlie@example.com", role: "member", image: null },
];

const demoPendingRequests = [
    { id: "1", name: "New User", email: "newuser@example.com", message: "I'd like to join your team!", date: "Jan 28" },
];

// Demo WorkspaceLabel Component
const DemoWorkspaceLabel = () => {
    const [currentWorkspace, setCurrentWorkspace] = useState(demoWorkspaces[0]);
    const [showInfoCard, setShowInfoCard] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false);
    const infoCardRef = useRef<HTMLDivElement>(null);

    const displayedMembers = demoMembers.slice(0, 3);
    const remainingCount = demoMembers.length - 3;

    return (
        <div className="relative w-full max-w-sm">
            {/* Main Workspace Button */}
            <div className="group relative">
                <button
                    onClick={() => setShowInfoCard(!showInfoCard)}
                    className="w-full flex items-center gap-3 text-left p-3 rounded-lg hover:bg-accent/50 transition-all duration-200 cursor-pointer border border-border/50"
                >
                    {/* Workspace Icon */}
                    <div
                        className="flex h-10 w-10 items-center justify-center rounded-lg text-lg shrink-0 transition-all duration-200 group-hover:scale-105 shadow-sm ring-1 ring-border/20"
                        style={{
                            backgroundColor: currentWorkspace.color + "15",
                            color: currentWorkspace.color,
                        }}
                    >
                        {currentWorkspace.icon}
                    </div>

                    {/* Workspace Name and Members */}
                    <div className="flex flex-col flex-1 min-w-0">
                        <span className="text-sm font-semibold text-foreground truncate">
                            {currentWorkspace.name}
                        </span>
                        <div className="flex items-center gap-2 mt-0.5">
                            <div className="flex -space-x-1">
                                {displayedMembers.map((member) => (
                                    <div
                                        key={member.id}
                                        className="h-4 w-4 rounded-full bg-muted border border-background ring-1 ring-border/30 flex items-center justify-center text-[8px] font-medium"
                                    >
                                        {member.name.charAt(0)}
                                    </div>
                                ))}
                                {remainingCount > 0 && (
                                    <div className="h-4 w-4 rounded-full bg-muted border border-background ring-1 ring-border/30 flex items-center justify-center">
                                        <span className="text-[7px] font-medium text-muted-foreground">+{remainingCount}</span>
                                    </div>
                                )}
                            </div>
                            <span className="text-xs text-muted-foreground">
                                {demoMembers.length} members
                            </span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-1 shrink-0">
                        {/* Pending Requests Badge */}
                        {demoPendingRequests.length > 0 && (
                            <button className="relative p-1.5 rounded-md hover:bg-amber-500/10 transition-colors" onClick={(e) => e.stopPropagation()}>
                                <Bell className="h-3.5 w-3.5 text-amber-500" />
                                <div className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 bg-destructive rounded-full animate-pulse" />
                            </button>
                        )}

                        {/* Workspace Switcher */}
                        <div className="relative">
                            <button
                                className="flex items-center justify-center h-7 w-7 rounded-md hover:bg-accent/60 transition-colors"
                                onClick={(e) => { e.stopPropagation(); setShowDropdown(!showDropdown); }}
                            >
                                <ChevronsUpDown className="h-3.5 w-3.5 text-muted-foreground" />
                            </button>

                            {showDropdown && (
                                <div className="absolute top-full right-0 mt-2 w-72 rounded-lg border bg-popover shadow-lg z-50 animate-in fade-in slide-in-from-top-2">
                                    <div className="p-2 text-xs text-muted-foreground font-medium">Switch Workspace</div>
                                    <div className="border-t" />
                                    {demoWorkspaces.map((ws, index) => (
                                        <button
                                            key={ws.id}
                                            onClick={() => { setCurrentWorkspace(ws); setShowDropdown(false); }}
                                            className="w-full flex items-center gap-3 p-3 hover:bg-accent/50 transition-colors"
                                        >
                                            <div
                                                className="flex h-8 w-8 items-center justify-center rounded-lg text-sm ring-1 ring-border/20"
                                                style={{ backgroundColor: ws.color + "15", color: ws.color }}
                                            >
                                                {ws.icon}
                                            </div>
                                            <div className="flex flex-col flex-1 min-w-0 text-left">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-medium text-sm truncate">{ws.name}</span>
                                                    {ws.id === currentWorkspace.id && (
                                                        <span className="text-xs px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground">Current</span>
                                                    )}
                                                </div>
                                                <span className="text-xs text-muted-foreground">{ws.description}</span>
                                            </div>
                                            {index < 9 && (
                                                <kbd className="px-1 py-0.5 text-xs font-mono text-muted-foreground bg-muted border rounded">⌘{index + 1}</kbd>
                                            )}
                                        </button>
                                    ))}
                                    <div className="border-t" />
                                    <button className="w-full flex items-center gap-3 p-3 hover:bg-accent/50 transition-colors">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-dashed border-muted-foreground/50">
                                            <Plus className="h-4 w-4 text-muted-foreground" />
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <span className="font-medium text-sm">Create workspace</span>
                                            <span className="text-xs text-muted-foreground">Start a new workspace</span>
                                        </div>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Info Toggle */}
                        <button
                            className={cn("flex items-center justify-center h-7 w-7 rounded-md transition-all duration-200 hover:bg-accent/60", showInfoCard && "bg-accent/60")}
                            onClick={(e) => { e.stopPropagation(); setShowInfoCard(!showInfoCard); }}
                        >
                            <Settings2 className={cn("h-3.5 w-3.5 transition-all duration-300", showInfoCard && "rotate-90")} />
                        </button>
                    </div>
                </button>
            </div>

            {/* Info Card */}
            {showInfoCard && (
                <div ref={infoCardRef} className="absolute left-0 right-0 mt-2 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="rounded-xl border bg-background/95 backdrop-blur-sm shadow-xl">
                        {/* Header */}
                        <div className="p-4 border-b">
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-lg text-lg"
                                        style={{ backgroundColor: currentWorkspace.color + "20", color: currentWorkspace.color }}
                                    >
                                        {currentWorkspace.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold">{currentWorkspace.name}</h3>
                                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                                            <Calendar className="h-3 w-3" /> Updated Jan 28, 2026
                                        </p>
                                    </div>
                                </div>
                                <button onClick={() => setShowInfoCard(false)} className="p-1.5 rounded-md hover:bg-accent">
                                    <X className="h-3.5 w-3.5" />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-4 space-y-4">
                            <p className="text-xs text-muted-foreground">{currentWorkspace.description}</p>

                            <div className="border-t pt-4">
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-xs font-medium">Team Members</h4>
                                    <span className="text-xs px-2 py-0.5 rounded bg-secondary">{demoMembers.length}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        {displayedMembers.map((member) => (
                                            <div
                                                key={member.id}
                                                className="h-7 w-7 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium"
                                            >
                                                {member.name.charAt(0)}
                                            </div>
                                        ))}
                                        {remainingCount > 0 && (
                                            <div className="h-7 w-7 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs">
                                                +{remainingCount}
                                            </div>
                                        )}
                                    </div>
                                    <button className="ml-auto text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
                                        <Eye className="h-3 w-3" /> View all <ChevronRight className="h-3 w-3" />
                                    </button>
                                </div>
                            </div>

                            <div className="border-t pt-4">
                                <h4 className="text-xs font-medium mb-3">Quick Actions</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    <button className="flex items-center gap-1.5 px-3 py-2 text-xs rounded-lg border hover:bg-accent/50 transition-colors">
                                        <UserPlus className="h-3 w-3" /> Invite
                                    </button>
                                    <button className="flex items-center gap-1.5 px-3 py-2 text-xs rounded-lg border hover:bg-accent/50 transition-colors">
                                        <Bell className="h-3 w-3" /> Requests
                                        <span className="ml-auto text-xs px-1.5 py-0.5 rounded bg-destructive text-destructive-foreground">{demoPendingRequests.length}</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t flex justify-between">
                            <button className="p-2 rounded-md hover:bg-accent">
                                <Settings className="h-3.5 w-3.5" />
                            </button>
                            <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
                                <UserPlus className="h-3 w-3" /> Join
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Click outside to close dropdown */}
            {showDropdown && <div className="fixed inset-0 z-40" onClick={() => setShowDropdown(false)} />}
        </div>
    );
};

export default function WorkspaceLabelDocsPage() {
    const [showDemo, setShowDemo] = useState(true);

    return (
        <div className="space-y-10">
            <DocsHeader
                title="Workspace Label"
                description="A comprehensive workspace switcher component with member avatars, pending request notifications, info card panel, and keyboard shortcuts for rapid workspace navigation."
            />

            <section className="space-y-4 h-">
                <h2 className="text-2xl font-bold">Preview</h2>
                <div className="rounded-xl border border-border/50 overflow-hidden h-auto">
                    <div className="p-4 bg-muted/30 border-b border-border/50">
                        <button
                            onClick={() => setShowDemo(!showDemo)}
                            className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                        >
                            {showDemo ? "Hide Demo" : "Click to Show WorkspaceLabel"}
                        </button>
                    </div>
                    <div className="p-8 bg-background min-h-[600px]">
                        {showDemo ? (
                            <div className="max-w-sm">
                                <DemoWorkspaceLabel />
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-64 text-muted-foreground">
                                <div className="text-center">
                                    <Building2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                    <p className="text-sm">Click the button above to see the demo</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Features</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
                        <h3 className="font-medium mb-2 flex items-center gap-2"><ChevronsUpDown className="h-4 w-4 text-primary" /> Workspace Switcher</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Dropdown with all workspaces</li>
                            <li>• Current workspace indicator</li>
                            <li>• Keyboard shortcuts (⌘1-9)</li>
                            <li>• Create new workspace option</li>
                        </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
                        <h3 className="font-medium mb-2 flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> Member Display</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Stacked avatar preview (3 visible)</li>
                            <li>• "+N more" overflow indicator</li>
                            <li>• Hover tooltips with details</li>
                            <li>• Total member count</li>
                        </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
                        <h3 className="font-medium mb-2 flex items-center gap-2"><Bell className="h-4 w-4 text-primary" /> Admin Notifications</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Pending request badge (animated pulse)</li>
                            <li>• Request approval/rejection modal</li>
                            <li>• Invite members quick action</li>
                            <li>• Admin-only visibility</li>
                        </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
                        <h3 className="font-medium mb-2 flex items-center gap-2"><Settings2 className="h-4 w-4 text-primary" /> Info Card Panel</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Toggle with ⌘, shortcut</li>
                            <li>• Workspace description</li>
                            <li>• Team members overview</li>
                            <li>• Quick action buttons</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Keyboard Shortcuts</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead><tr className="border-b border-border"><th className="py-3 px-4 text-left font-semibold">Shortcut</th><th className="py-3 px-4 text-left font-semibold">Action</th></tr></thead>
                        <tbody>
                            <tr className="border-b border-border/50"><td className="py-3 px-4"><kbd className="px-2 py-1 text-xs bg-muted border rounded">⌘,</kbd></td><td className="py-3 px-4 text-muted-foreground">Toggle info card panel</td></tr>
                            <tr className="border-b border-border/50"><td className="py-3 px-4"><kbd className="px-2 py-1 text-xs bg-muted border rounded">⌘1</kbd> - <kbd className="px-2 py-1 text-xs bg-muted border rounded">⌘9</kbd></td><td className="py-3 px-4 text-muted-foreground">Switch to workspace 1-9</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Usage</h2>
                <CodeBlock code={`import WorkspaceLabel from "@/components/ui/workspacelable"

// In your sidebar or layout
export default function AppSidebar() {
  return (
    <aside className="w-64 border-r">
      <div className="p-4">
        <WorkspaceLabel />
      </div>
      {/* Rest of sidebar */}
    </aside>
  )
}`} language="tsx" />
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Dependencies</h2>
                <CodeBlock code={`# Required packages
npm install lucide-react @radix-ui/react-tooltip @radix-ui/react-dropdown-menu


# The component uses these internal hooks:
# - useUserStore (Zustand store for current workspace)
# - useIsMobile (responsive hook)
# - UseWorkspace (workspace modal hook)`} language="bash" />
            </section>
        </div>
    );
}

function CodeBlock({ code, language, title }: { code: string; language: string; title?: string }) {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };
    return (
        <div className="relative group rounded-xl overflow-hidden">
            <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <button onClick={handleCopy} className="flex items-center gap-1.5 px-2 py-1 text-xs text-zinc-400 hover:text-white bg-zinc-800 rounded-md">{copied ? <><Check className="h-3 w-3 text-green-500" /> Copied!</> : <><Copy className="h-3 w-3" /> Copy</>}</button>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border-b border-zinc-800"><Code2 className="h-4 w-4 text-zinc-500" /><span className="text-xs text-zinc-500">{title || language}</span></div>
            <pre className="bg-zinc-950 p-4 overflow-x-auto max-h-[400px]"><code className="text-sm text-zinc-100">{code}</code></pre>
        </div>
    );
}
