"use client";

import { useState } from "react";
import { Copy, Check, Code2, Monitor, Smartphone, Layout, ChevronRight, Search, FileText, Star, Settings, User, Hash, GitBranch, Sparkles, Plus, BarChart3, Inbox, LayoutDashboard, Building2, Trash, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { DocsHeader } from "@/components/ui/docs-documentation";

// Demo Primary Sidebar
const DemoPrimarySidebar = ({ activeSection, onSectionChange }: { activeSection: string; onSectionChange: (s: string) => void }) => {
    const sections = [
        { id: "workspace", icon: "🏠", label: "Workspace", group: "workspace" },
        { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", group: "main" },
        { id: "search", icon: Search, label: "Search", shortcut: "⌘K", group: "tools" },
        { id: "ai", icon: Sparkles, label: "Ask AI", shortcut: "⌘I", group: "tools", special: true },
        { id: "inbox", icon: Inbox, label: "Inbox", badge: 3, group: "tools" },
        { id: "create", icon: Plus, label: "Create New", shortcut: "⌘.", group: "tools", special: true },
        { id: "favorites", icon: Star, label: "Favorites", expandable: true, group: "content" },
        { id: "channels", icon: Hash, label: "Channels", badge: 5, expandable: true, group: "content" },
        { id: "documents", icon: FileText, label: "Documents", expandable: true, group: "content" },
        { id: "workflows", icon: GitBranch, label: "Workflows", expandable: true, group: "content" },
        { id: "usage", icon: BarChart3, label: "Usage", expandable: true, group: "system" },
        { id: "trash", icon: Trash, label: "Trash", expandable: true, group: "system" },
        { id: "settings", icon: Settings, label: "Settings", group: "system" },
        { id: "user", icon: User, label: "Account", expandable: true, group: "user" },
    ];

    const groupOrder = ["workspace", "main", "tools", "content", "system", "user"];

    return (
        <div className="h-[500px] w-16 flex flex-col bg-background border-r border-border overflow-hidden">
            {groupOrder.map((group, groupIdx) => (
                <div key={group} className={cn("flex flex-col items-center gap-1 py-2", groupIdx > 0 && groupIdx < 5 && "border-t border-border/50")}>
                    {sections.filter(s => s.group === group).map((section) => {
                        const isActive = activeSection === section.id;
                        return (
                            <button
                                key={section.id}
                                onClick={() => section.expandable ? onSectionChange(isActive ? "" : section.id) : null}
                                className={cn(
                                    "relative flex items-center justify-center w-10 h-10 rounded-xl transition-all cursor-pointer",
                                    "hover:bg-accent/30 hover:scale-105",
                                    isActive && "bg-primary text-primary-foreground",
                                    section.special && !isActive && "bg-foreground text-background"
                                )}
                                title={section.label}
                            >
                                {typeof section.icon === "string" ? (
                                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-sm">{section.icon}</div>
                                ) : (
                                    <section.icon className="h-4 w-4" />
                                )}
                                {section.badge && (
                                    <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] text-white">{section.badge}</span>
                                )}
                                {isActive && section.expandable && (
                                    <ChevronRight className="absolute -right-0.5 h-3 w-3 text-primary-foreground/70" />
                                )}
                            </button>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

// Demo Secondary Sidebar
const DemoSecondarySidebar = ({ section, onClose }: { section: string; onClose: () => void }) => {
    const sectionContent: Record<string, { title: string; items: string[] }> = {
        favorites: { title: "Favorites", items: ["📄 Project Roadmap", "📊 Q4 Report", "💬 #general", "📋 Sprint Board"] },
        documents: { title: "Documents", items: ["📁 Projects", "📁 Notes", "📁 Templates", "📄 Getting Started", "📄 API Docs"] },
        channels: { title: "Channels", items: ["💬 #general", "💬 #random", "💬 #dev", "💬 #design", "💬 #announcements"] },
        workflows: { title: "Workflows", items: ["📋 Sprint Planning", "📋 Bug Tracker", "🔀 CI/CD Pipeline", "🔀 Deployment Flow"] },
        usage: { title: "Usage", items: ["📊 Documents: 45/100", "📊 Channels: 5/10", "📊 Storage: 2.5GB/5GB", "📊 Members: 3/5"] },
        user: { title: "Account", items: ["👤 Profile", "🔔 Notifications", "🎨 Appearance", "🔐 Security", "📧 Email Settings"] },
        trash: { title: "Trash", items: ["📄 Old Draft (3 days)", "📊 Test Board (1 week)", "📄 Notes (2 weeks)"] },
    };

    const content = sectionContent[section];
    if (!content) return null;

    return (
        <div className="h-[500px] w-64 bg-background border-r border-border flex flex-col">
            <div className="p-4 border-b border-border flex items-center justify-between">
                <h3 className="font-semibold">{content.title}</h3>
                <button onClick={onClose} className="text-muted-foreground hover:text-foreground text-sm">×</button>
            </div>
            <div className="flex-1 p-3 space-y-1 overflow-auto">
                {content.items.map((item, i) => (
                    <div key={i} className="px-3 py-2 rounded-lg hover:bg-accent/50 cursor-pointer text-sm">{item}</div>
                ))}
            </div>
        </div>
    );
};

// Full Demo
const FullSmartSidebarDemo = () => {
    const [activeSection, setActiveSection] = useState("");

    return (
        <div className="flex h-[700px] rounded-xl overflow-hidden border border-border">
            <DemoPrimarySidebar activeSection={activeSection} onSectionChange={setActiveSection} />
            {activeSection && <DemoSecondarySidebar section={activeSection} onClose={() => setActiveSection("")} />}
            <div className="flex-1 bg-muted/20 flex items-center justify-center p-4">
                <div className="text-center text-muted-foreground">
                    <Layout className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="text-sm">Main Content Area</p>
                    <p className="text-xs mt-2">Click expandable icons in the sidebar →</p>
                </div>
            </div>
        </div>
    );
};

export default function SmartSidebarDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Smart Sidebar"
                description="A modern dual-pane navigation system designed for desktop web applications. Features a primary icon sidebar that expands into a secondary content panel on click."
            />
            <div className="flex items-center gap-2 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <Monitor className="h-5 w-5 text-yellow-600" />
                <span className="text-sm"><strong>Desktop Only:</strong> Use <code className="bg-muted px-1 rounded">useMediaQuery</code> hook to show a traditional sidebar on mobile</span>
            </div>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Preview</h2>
                <p className="text-sm text-muted-foreground">Click on expandable icons (Favorites, Documents, Channels, etc.) to see the secondary panel</p>
                <FullSmartSidebarDemo />
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Architecture</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
                        <h3 className="font-medium mb-2 flex items-center gap-2"><span className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs">1</span> Primary Sidebar</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Fixed 64px width icon rail</li>
                            <li>• Grouped sections (workspace, tools, content, system)</li>
                            <li>• Tooltips with keyboard shortcuts</li>
                            <li>• Notification badges for inbox/channels</li>
                            <li>• Route-based highlighting</li>
                        </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
                        <h3 className="font-medium mb-2 flex items-center gap-2"><span className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs">2</span> Secondary Sidebar</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Expandable 24rem content panel</li>
                            <li>• Context-aware content per section</li>
                            <li>• Favorites, Documents, Channels, Workflows</li>
                            <li>• User settings, Usage stats, Trash</li>
                            <li>• Toggle on/off by clicking primary icon</li>
                        </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
                        <h3 className="font-medium mb-2 flex items-center gap-2"><Smartphone className="w-5 h-5 text-primary" /> Mobile Fallback</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Shows traditional full sidebar overlay</li>
                            <li>• Uses <code className="bg-muted px-1 rounded text-xs">useMediaQuery("(min-width: 768px)")</code></li>
                            <li>• Auto-closes secondary on mobile</li>
                            <li>• Backdrop click to dismiss</li>
                        </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
                        <h3 className="font-medium mb-2 flex items-center gap-2"><Sparkles className="w-5 h-5 text-primary" /> Special Features</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• AI Assistant panel (⌘I)</li>
                            <li>• Global Search (⌘K)</li>
                            <li>• Quick Create menu (⌘.)</li>
                            <li>• Workspace switcher with keyboard cycling</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">File Structure</h2>
                <CodeBlock code={`components/ui/smart-sidebar/
├── SmartSidebar.tsx          # Main container with mobile detection
├── SmartSidebarTrigger.tsx   # Context provider & hook
├── PrimarySidebar.tsx        # Icon rail navigation (64px)
├── SecondarySidebar.tsx      # Expandable content panel
├── FavoritesContent.tsx      # Pinned items content
├── SecondaryUsageSummary.tsx # Usage stats panel
└── SmartCustomButton.tsx     # Create new item dialog`} language="plaintext" />
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Usage with Mobile Detection</h2>
                <CodeBlock code={`import { SmartSidebar } from "@/components/ui/smart-sidebar/SmartSidebar"
import { AppSidebar } from "@/components/ui/SideBar"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function AppLayout({ children }) {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  
  return (
    <div className="flex h-screen">
      {isDesktop ? (
        // Desktop: Smart dual-pane sidebar
        <SmartSidebar primaryWidth={64} />
      ) : (
        // Mobile: Traditional full sidebar
        <MobileSidebarWrapper>
          <AppSidebar />
        </MobileSidebarWrapper>
      )}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}`} language="tsx" />
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Context Hook</h2>
                <CodeBlock code={`// Access sidebar state from any component
import { useSmartSidebar } from "@/components/ui/smart-sidebar/SmartSidebarTrigger"

function MyComponent() {
  const { activeSection, setActiveSection, isSmartSidebarEnabled } = useSmartSidebar()
  
  return (
    <button onClick={() => setActiveSection("documents")}>
      Open Documents Panel
    </button>
  )
}`} language="tsx" />
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Primary Sidebar Sections</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead><tr className="border-b border-border"><th className="py-3 px-4 text-left font-semibold">Section</th><th className="py-3 px-4 text-left font-semibold">Icon</th><th className="py-3 px-4 text-left font-semibold">Expandable</th><th className="py-3 px-4 text-left font-semibold">Shortcut</th></tr></thead>
                        <tbody>
                            <tr className="border-b border-border/50"><td className="py-2 px-4">Workspace</td><td className="py-2 px-4">Building2 / Custom</td><td className="py-2 px-4">✅</td><td className="py-2 px-4">-</td></tr>
                            <tr className="border-b border-border/50"><td className="py-2 px-4">Dashboard</td><td className="py-2 px-4">LayoutDashboard</td><td className="py-2 px-4">❌ (route)</td><td className="py-2 px-4">⌘'</td></tr>
                            <tr className="border-b border-border/50"><td className="py-2 px-4">Search</td><td className="py-2 px-4">Search</td><td className="py-2 px-4">✅</td><td className="py-2 px-4">⌘K</td></tr>
                            <tr className="border-b border-border/50"><td className="py-2 px-4">Ask AI</td><td className="py-2 px-4">Sparkles</td><td className="py-2 px-4">✅</td><td className="py-2 px-4">⌘I</td></tr>
                            <tr className="border-b border-border/50"><td className="py-2 px-4">Inbox</td><td className="py-2 px-4">Inbox</td><td className="py-2 px-4">❌ (route)</td><td className="py-2 px-4">-</td></tr>
                            <tr className="border-b border-border/50"><td className="py-2 px-4">Create New</td><td className="py-2 px-4">Plus</td><td className="py-2 px-4">❌ (action)</td><td className="py-2 px-4">⌘.</td></tr>
                            <tr className="border-b border-border/50"><td className="py-2 px-4">Favorites</td><td className="py-2 px-4">Star</td><td className="py-2 px-4">✅</td><td className="py-2 px-4">-</td></tr>
                            <tr className="border-b border-border/50"><td className="py-2 px-4">Channels</td><td className="py-2 px-4">Hash</td><td className="py-2 px-4">✅</td><td className="py-2 px-4">-</td></tr>
                            <tr className="border-b border-border/50"><td className="py-2 px-4">Documents</td><td className="py-2 px-4">FileText</td><td className="py-2 px-4">✅</td><td className="py-2 px-4">-</td></tr>
                            <tr className="border-b border-border/50"><td className="py-2 px-4">Workflows</td><td className="py-2 px-4">GitBranch</td><td className="py-2 px-4">✅</td><td className="py-2 px-4">-</td></tr>
                            <tr className="border-b border-border/50"><td className="py-2 px-4">Usage</td><td className="py-2 px-4">BarChart3</td><td className="py-2 px-4">✅</td><td className="py-2 px-4">-</td></tr>
                            <tr className="border-b border-border/50"><td className="py-2 px-4">Trash</td><td className="py-2 px-4">Trash</td><td className="py-2 px-4">✅</td><td className="py-2 px-4">-</td></tr>
                            <tr className="border-b border-border/50"><td className="py-2 px-4">Settings</td><td className="py-2 px-4">Settings</td><td className="py-2 px-4">❌ (route)</td><td className="py-2 px-4">-</td></tr>
                            <tr><td className="py-2 px-4">Account</td><td className="py-2 px-4">User</td><td className="py-2 px-4">✅</td><td className="py-2 px-4">-</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Props</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead><tr className="border-b border-border"><th className="py-3 px-4 text-left font-semibold">Prop</th><th className="py-3 px-4 text-left font-semibold">Type</th><th className="py-3 px-4 text-left font-semibold">Default</th><th className="py-3 px-4 text-left font-semibold">Description</th></tr></thead>
                        <tbody>
                            <tr className="border-b border-border/50"><td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">primaryWidth</code></td><td className="py-3 px-4 text-muted-foreground">number</td><td className="py-3 px-4 text-muted-foreground">64</td><td className="py-3 px-4 text-muted-foreground">Width of primary icon rail</td></tr>
                            <tr><td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">className</code></td><td className="py-3 px-4 text-muted-foreground">string</td><td className="py-3 px-4 text-muted-foreground">-</td><td className="py-3 px-4 text-muted-foreground">Additional CSS classes</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Dependencies</h2>
                <CodeBlock code={`# Required packages
npm install lucide-react @radix-ui/react-tooltip

# For mobile detection
# Create hooks/use-media-query.ts:
import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)
  
  useEffect(() => {
    const media = window.matchMedia(query)
    setMatches(media.matches)
    const listener = () => setMatches(media.matches)
    media.addEventListener("change", listener)
    return () => media.removeEventListener("change", listener)
  }, [query])
  
  return matches
}`} language="bash" />
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
