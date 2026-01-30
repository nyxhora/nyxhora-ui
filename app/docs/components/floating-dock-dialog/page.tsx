"use client";

import { useState } from "react";
import { Copy, Check, Code2, Eye, Dock, Plus, Heart, X, GalleryVerticalEnd, Monitor, Smartphone } from "lucide-react";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { DocsHeader } from "@/components/ui/docs-documentation";

// Demo Desktop Dock
const DemoDesktopDock = () => {
  const demoItems = [
    { id: "1", name: "Personal", icon: "🏠", color: "#3B82F6", isFav: true },
    { id: "2", name: "Work", icon: "💼", color: "#10B981", isFav: false },
    { id: "3", name: "Design", icon: "🎨", color: "#8B5CF6", isFav: true },
    { id: "4", name: "Marketing", icon: "📈", color: "#F59E0B", isFav: false },
  ];

  return (
    <div className="w-full flex items-end justify-center h-24">
      <div className="flex h-20 items-end gap-5 rounded-2xl bg-muted/50 px-6 pb-3">
        {demoItems.map((item) => (
          <div key={item.id} className="relative flex flex-col items-center group cursor-pointer">
            <div className="relative">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-200 group-hover:scale-125 group-hover:w-16 group-hover:h-16"
                style={{ backgroundColor: item.color }}
              >
                <span className="text-lg group-hover:text-2xl transition-all">{item.icon}</span>
              </div>
              {item.isFav && (
                <div className="absolute -top-1 -right-1 bg-background rounded-full p-0.5 shadow-sm">
                  <Heart className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary text-primary-foreground shadow-md hover:scale-110 transition-transform cursor-pointer">
            <Plus className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo Mobile Dock
const DemoMobileDock = () => {
  const [isOpen, setIsOpen] = useState(false);
  const demoItems = [
    { id: "1", name: "Personal", icon: "🏠", color: "#3B82F6", isFav: true },
    { id: "2", name: "Work", icon: "💼", color: "#10B981", isFav: false },
    { id: "3", name: "Design", icon: "🎨", color: "#8B5CF6", isFav: true },
    { id: "4", name: "Marketing", icon: "📈", color: "#F59E0B", isFav: false },
  ];

  return (
    <div className="relative w-full flex items-end justify-center h-64">
      {isOpen && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-background border border-border rounded-2xl p-4 shadow-xl">
          <div className="grid grid-cols-4 gap-3">
            {demoItems.map((item) => (
              <div key={item.id} className="flex flex-col items-center gap-1.5">
                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform cursor-pointer"
                    style={{ backgroundColor: item.color }}
                  >
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  {item.isFav && (
                    <div className="absolute -top-1 -right-1 bg-background rounded-full p-0.5 shadow-sm">
                      <Heart className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    </div>
                  )}
                </div>
                <span className="text-xs font-medium">{item.name}</span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary text-primary-foreground shadow-md hover:scale-105 transition-transform cursor-pointer">
                <Plus className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium">New</span>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-md hover:scale-105 transition-all"
      >
        {isOpen ? <X className="h-5 w-5" /> : <IconLayoutNavbarCollapse className="h-5 w-5" />}
      </button>
    </div>
  );
};

// Full Dialog Demo
const DemoFullDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const demoItems = [
    { id: "1", name: "Personal", icon: "🏠", color: "#3B82F6", isFav: true },
    { id: "2", name: "Work", icon: "💼", color: "#10B981", isFav: false },
    { id: "3", name: "Design", icon: "🎨", color: "#8B5CF6", isFav: true },
    { id: "4", name: "Marketing", icon: "📈", color: "#F59E0B", isFav: false },
  ];

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg">
        Open Bottom Sheet Dialog
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="absolute bottom-0 left-0 right-0 bg-background border-t border-border rounded-t-2xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative p-6 pt-10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <button onClick={() => setIsOpen(false)} className="flex h-8 w-16 items-center justify-center rounded-full border bg-background/80 shadow-sm hover:bg-muted">
                  <div className="w-8 h-1 bg-muted-foreground/40 rounded-full" />
                </button>
              </div>
              <h2 className="text-xl font-semibold text-center mb-6">Workspaces</h2>
              <div className="flex h-20 items-end gap-5 justify-center pb-3">
                {demoItems.map((item) => (
                  <div key={item.id} className="relative flex flex-col items-center group cursor-pointer">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-200 group-hover:scale-125 group-hover:w-16 group-hover:h-16" style={{ backgroundColor: item.color }}>
                        <span className="text-lg group-hover:text-2xl transition-all">{item.icon}</span>
                      </div>
                      {item.isFav && <div className="absolute -top-1 -right-1 bg-background rounded-full p-0.5 shadow-sm"><Heart className="h-3 w-3 fill-yellow-400 text-yellow-400" /></div>}
                    </div>
                  </div>
                ))}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary text-primary-foreground shadow-md hover:scale-110 transition-transform cursor-pointer"><Plus className="h-5 w-5" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function FloatingDockWithDialogDocsPage() {
  const [activeDemo, setActiveDemo] = useState<"desktop" | "mobile" | "dialog">("desktop");

  return (
    <div className="space-y-10">
      <DocsHeader
        title="Floating Dock with Dialog"
        description="An enhanced floating dock with responsive mobile/desktop variants. Opens in a bottom sheet dialog, features workspace cards with custom icons, colors, favorites, and smooth spring physics animations."
      />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Preview</h2>
        <div className="flex gap-2 mb-4">
          <button onClick={() => setActiveDemo("desktop")} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeDemo === "desktop" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
            <Monitor className="h-4 w-4" /> Desktop
          </button>
          <button onClick={() => setActiveDemo("mobile")} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeDemo === "mobile" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
            <Smartphone className="h-4 w-4" /> Mobile
          </button>
          <button onClick={() => setActiveDemo("dialog")} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeDemo === "dialog" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
            <Dock className="h-4 w-4" /> Full Dialog
          </button>
        </div>
        <div className="rounded-xl border border-border/50 overflow-hidden">
          <div className="p-4 bg-muted/30 border-b border-border/50 text-sm text-muted-foreground">
            {activeDemo === "desktop" && "Desktop: Full-width dock with macOS-style spring physics scaling on hover"}
            {activeDemo === "mobile" && "Mobile: Expandable grid layout with toggle button"}
            {activeDemo === "dialog" && "Dialog: Bottom sheet modal that wraps both mobile and desktop docks"}
          </div>
          <div className="p-8 bg-background min-h-[280px] flex items-end justify-center">
            {activeDemo === "desktop" && <DemoDesktopDock />}
            {activeDemo === "mobile" && <DemoMobileDock />}
            {activeDemo === "dialog" && <DemoFullDialog />}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Component Variants</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
            <div className="flex items-center gap-2 mb-2"><Monitor className="h-5 w-5 text-primary" /><h3 className="font-medium">Desktop Dock</h3></div>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Full-width horizontal layout</li>
              <li>• Spring physics hover scaling</li>
              <li>• Icons expand 40→90px on proximity</li>
              <li>• Animated tooltips with description</li>
              <li>• Hidden on mobile (md:flex)</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
            <div className="flex items-center gap-2 mb-2"><Smartphone className="h-5 w-5 text-primary" /><h3 className="font-medium">Mobile Dock</h3></div>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Toggle button to expand/collapse</li>
              <li>• 4-column grid layout</li>
              <li>• Staggered animation on open</li>
              <li>• Workspace names under icons</li>
              <li>• Hidden on desktop (block md:hidden)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Bottom Sheet Dialog:</strong> Opens as a polished bottom sheet with backdrop blur</li>
          <li><strong>Responsive:</strong> Automatically switches between desktop and mobile layouts</li>
          <li><strong>Spring Physics:</strong> Icons scale based on mouse proximity (desktop)</li>
          <li><strong>Custom Icons & Colors:</strong> Each workspace can have emoji icons and hex colors</li>
          <li><strong>Favorite Indicators:</strong> Yellow heart badge shows favorite workspaces</li>
          <li><strong>Active State:</strong> Ring highlight for currently active workspace</li>
          <li><strong>Add Workspace:</strong> Built-in plus button for creating new workspaces</li>
          <li><strong>Rich Tooltips:</strong> Hover tooltips with name and description (desktop)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Installation</h2>
        <p className="text-muted-foreground">Copy the component code below. This version uses dummy data - replace with your own data source.</p>
        <CodeBlock title="components/ui/floating-dock-dialog.tsx" code={componentCode} language="tsx" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <CodeBlock code={`import { FloatingDockWithDialog } from "@/components/ui/floating-dock-dialog"

const workspaces = [
  { _id: "1", name: "Personal", Appearance: { icon: "🏠", color: "#3B82F6" }, isfav: true },
  { _id: "2", name: "Work", Appearance: { icon: "💼", color: "#10B981" }, isfav: false },
]

export default function WorkspaceLayout() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Workspaces</button>
      <FloatingDockWithDialog
        items={workspaces}
        activeId="1"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onAddWorkspace={() => console.log("Add workspace")}
      />
    </>
  )
}`} language="tsx" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border"><th className="py-3 px-4 text-left font-semibold">Prop</th><th className="py-3 px-4 text-left font-semibold">Type</th><th className="py-3 px-4 text-left font-semibold">Description</th></tr></thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">items</code></td><td className="py-3 px-4 text-muted-foreground">WorkspaceItem[]</td><td className="py-3 px-4 text-muted-foreground">Array of workspace items</td></tr>
              <tr className="border-b border-border/50"><td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">activeId</code></td><td className="py-3 px-4 text-muted-foreground">string</td><td className="py-3 px-4 text-muted-foreground">Currently active workspace ID</td></tr>
              <tr className="border-b border-border/50"><td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">isOpen</code></td><td className="py-3 px-4 text-muted-foreground">boolean</td><td className="py-3 px-4 text-muted-foreground">Controls dialog visibility</td></tr>
              <tr className="border-b border-border/50"><td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">onClose</code></td><td className="py-3 px-4 text-muted-foreground">() =&gt; void</td><td className="py-3 px-4 text-muted-foreground">Called when dialog closes</td></tr>
              <tr><td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">onAddWorkspace</code></td><td className="py-3 px-4 text-muted-foreground">() =&gt; void</td><td className="py-3 px-4 text-muted-foreground">Called when + button clicked</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Dependencies</h2>
        <CodeBlock code={`npm install motion/react @radix-ui/react-dialog @tabler/icons-react lucide-react`} language="bash" />
      </section>
    </div>
  );
}

const componentCode = `"use client";

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { AnimatePresence, MotionValue, motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { GalleryVerticalEnd, Heart, Minus, Plus, X } from "lucide-react";
import React from "react";

// Color utility
const isLightColor = (color: string): boolean => {
  if (!color) return true;
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 125;
};

type WorkspaceItem = {
  _id: string;
  name: string;
  description?: string;
  Appearance?: { color: string; icon: string };
  isfav?: boolean;
};

// Dialog Components
const Dialog = DialogPrimitive.Root;
const DialogOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/80 backdrop-blur-sm", className)} {...props} />
  )
);

const BottomDialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(
  ({ className, children, ...props }, ref) => (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogPrimitive.Content ref={ref}
        className={cn("fixed bottom-0 left-0 right-0 z-50 w-full border-t bg-background/95 backdrop-blur-sm shadow-lg rounded-t-2xl", className)} {...props}>
        <div className="relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <DialogPrimitive.Close className="flex h-8 w-16 items-center justify-center rounded-full border bg-background/80 shadow-sm hover:bg-muted">
              <Minus className="h-4 w-4 text-muted-foreground" />
            </DialogPrimitive.Close>
          </div>
          <div className="p-6 pt-10">{children}</div>
        </div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
);

// Main Export
export const FloatingDockWithDialog = ({ items, activeId, isOpen, onClose, onAddWorkspace }: {
  items: WorkspaceItem[]; activeId?: string; isOpen: boolean; onClose: () => void; onAddWorkspace?: () => void;
}) => {
  if (!items) return null;
  const sortedItems = [...items].sort((a, b) => (a.isfav && !b.isfav ? -1 : !a.isfav && b.isfav ? 1 : 0));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <BottomDialogContent>
        <h2 className="text-xl font-semibold text-center mb-4">Workspaces</h2>
        <FloatingDockDesktop items={sortedItems} activeId={activeId} onAddWorkspace={onAddWorkspace} />
        <FloatingDockMobile items={sortedItems} activeId={activeId} onAddWorkspace={onAddWorkspace} />
      </BottomDialogContent>
    </Dialog>
  );
};

// Desktop Dock (hidden on mobile)
const FloatingDockDesktop = ({ items, activeId, onAddWorkspace }: { items: WorkspaceItem[]; activeId?: string; onAddWorkspace?: () => void }) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div onMouseMove={(e) => mouseX.set(e.pageX)} onMouseLeave={() => mouseX.set(Infinity)}
      className="hidden md:flex mx-auto h-20 items-end gap-5 rounded-2xl px-6 pb-3">
      {items.map((item) => (
        <IconContainer key={item._id} mouseX={mouseX} item={item} isActive={activeId === item._id} />
      ))}
      <motion.div whileHover={{ scale: 1.05 }}>
        <button onClick={onAddWorkspace} className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
          <Plus className="h-5 w-5" />
        </button>
      </motion.div>
    </motion.div>
  );
};

// Mobile Dock (hidden on desktop)
const FloatingDockMobile = ({ items, activeId, onAddWorkspace }: { items: WorkspaceItem[]; activeId?: string; onAddWorkspace?: () => void }) => {
  return (
    <div className="md:hidden grid grid-cols-4 gap-3">
      {items.map((item, idx) => (
        <motion.div key={item._id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
          <div className="flex flex-col items-center gap-1.5">
            <div className="relative">
              <div className={cn("flex h-12 w-12 items-center justify-center rounded-full shadow-md",
                item.Appearance?.color ? (isLightColor(item.Appearance.color) ? "text-gray-800" : "text-white") : "bg-card",
                activeId === item._id && "ring-2 ring-primary")}
                style={{ backgroundColor: item.Appearance?.color }}>
                {item.Appearance?.icon ? <span className="text-base">{item.Appearance.icon}</span> : <GalleryVerticalEnd className="h-5 w-5" />}
              </div>
              {item.isfav && <div className="absolute -top-1 -right-1 bg-background rounded-full p-0.5"><Heart className="h-3 w-3 fill-yellow-400 text-yellow-400" /></div>}
            </div>
            <span className="text-xs font-medium text-center line-clamp-1">{item.name}</span>
          </div>
        </motion.div>
      ))}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: items.length * 0.05 }}>
        <div className="flex flex-col items-center gap-1.5">
          <button onClick={onAddWorkspace} className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
            <Plus className="h-5 w-5" />
          </button>
          <span className="text-xs font-medium">New</span>
        </div>
      </motion.div>
    </div>
  );
};

// Icon Container with spring physics (Desktop)
function IconContainer({ mouseX, item, isActive }: { mouseX: MotionValue; item: WorkspaceItem; isActive?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const width = useSpring(useTransform(distance, [-200, 0, 200], [50, 90, 50]), { mass: 0.2, stiffness: 180, damping: 15 });
  const height = useSpring(useTransform(distance, [-200, 0, 200], [50, 90, 50]), { mass: 0.2, stiffness: 180, damping: 15 });
  const iconSize = useSpring(useTransform(distance, [-200, 0, 200], [28, 48, 28]), { mass: 0.2, stiffness: 180, damping: 15 });

  return (
    <motion.div className="relative flex flex-col items-center" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }}
            className="absolute -top-24 w-48 rounded-lg border bg-popover px-4 py-3 text-sm shadow-md z-50">
            <div className="font-semibold text-center">{item.name}</div>
            <div className="text-xs text-muted-foreground text-center">{item.description || "No description"}</div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative">
        <motion.div ref={ref} style={{ width, height, backgroundColor: item.Appearance?.color || "hsl(var(--card))" }}
          className={cn("flex items-center justify-center rounded-full shadow-md cursor-pointer", isActive && "ring-2 ring-primary")}>
          <motion.div style={{ width: iconSize, height: iconSize }}
            className={cn("flex items-center justify-center", item.Appearance?.color ? (isLightColor(item.Appearance.color) ? "text-gray-800" : "text-white") : "text-foreground")}>
            {item.Appearance?.icon ? <span className="text-2xl">{item.Appearance.icon}</span> : <span className="text-2xl">{item.name.charAt(0)}</span>}
          </motion.div>
        </motion.div>
        {item.isfav && <motion.div className="absolute -top-1 -right-1 bg-background rounded-full p-0.5"><Heart className="h-4 w-4 fill-yellow-400 text-yellow-400" /></motion.div>}
      </div>
    </motion.div>
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
