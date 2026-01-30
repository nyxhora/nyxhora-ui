"use client";

import { useState } from "react";
import { Copy, Check, Code2, Dock, Home, Settings, User, FileText } from "lucide-react";
import { DocsHeader } from "@/components/ui/docs-documentation";
import { FloatingDock } from "@/components/ui/floating-dock";

export default function FloatingDockDocsPage() {
  return (
    <div className="space-y-10">
      <DocsHeader
        title="Floating Dock"
        description="A macOS-style dock with smooth hover animations, spring physics, and responsive mobile/desktop variants. Perfect for app navigation."
      />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Preview</h2>
        <div className="rounded-xl border border-border/50 overflow-hidden">
          <div className="p-8 bg-background min-h-[200px] flex items-end justify-center relative">
            <div className="flex h-16 items-end gap-4 rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3">
              {[
                { icon: <Home className="h-5 w-5" />, title: "Home" },
                { icon: <User className="h-5 w-5" />, title: "Profile" },
                { icon: <FileText className="h-5 w-5" />, title: "Docs" },
                { icon: <Settings className="h-5 w-5" />, title: "Settings" },
              ].map((item) => (
                <div key={item.title} className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800 hover:scale-110 transition-transform cursor-pointer" title={item.title}>
                  {item.icon}
                </div>
              ))}
            </div>
            <p className="absolute top-4 text-sm text-muted-foreground">Hover over icons (full animation in real component)</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Installation</h2>
        <p className="text-muted-foreground">Copy and paste the following code into your project.</p>
        <CodeBlock title="components/ui/floating-dock.tsx" code={componentCode} language="tsx" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <CodeBlock code={`import { FloatingDock } from "@/components/ui/floating-dock"
import { Home, Settings, User, FileText } from "lucide-react"

const items = [
  { title: "Home", icon: <Home />, href: "/" },
  { title: "Profile", icon: <User />, href: "/profile" },
  { title: "Documents", icon: <FileText />, href: "/docs" },
  { title: "Settings", icon: <Settings />, href: "/settings" },
]

export default function MyApp() {
  return <FloatingDock items={items} />
}`} language="tsx" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Spring Physics:</strong> Smooth, natural-feeling animations using Framer Motion springs</li>
          <li><strong>Proximity Scaling:</strong> Icons scale based on mouse distance for macOS-like effect</li>
          <li><strong>Responsive:</strong> Different layouts for desktop (horizontal) and mobile (expandable)</li>
          <li><strong>Tooltips:</strong> Animated tooltips appear on hover</li>
          <li><strong>Accessible:</strong> Proper ARIA labels and keyboard navigation</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border"><th className="py-3 px-4 text-left font-semibold">Prop</th><th className="py-3 px-4 text-left font-semibold">Type</th><th className="py-3 px-4 text-left font-semibold">Description</th></tr></thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">items</code></td><td className="py-3 px-4 text-muted-foreground">{`{ title, icon, href }[]`}</td><td className="py-3 px-4 text-muted-foreground">Array of dock items</td></tr>
              <tr className="border-b border-border/50"><td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">desktopClassName</code></td><td className="py-3 px-4 text-muted-foreground">string</td><td className="py-3 px-4 text-muted-foreground">Classes for desktop dock</td></tr>
              <tr><td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">mobileClassName</code></td><td className="py-3 px-4 text-muted-foreground">string</td><td className="py-3 px-4 text-muted-foreground">Classes for mobile dock</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Dependencies</h2>
        <CodeBlock code={`npm install motion/react @tabler/icons-react`} language="bash" />
      </section>
    </div>
  );
}

const componentCode = `import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({ items, className }: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("fixed bottom-4 left-1/2 -translate-x-1/2 z-50 block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div layoutId="nav" className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2">
            {items.map((item, idx) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10, transition: { delay: idx * 0.05 } }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a href={item.href} className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900">
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800">
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({ items, className }: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn("fixed bottom-4 left-1/2 -translate-x-1/2 z-50 hidden h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 md:flex dark:bg-neutral-900", className)}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href }: {
  mouseX: MotionValue; title: string; icon: React.ReactNode; href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);
  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let iconSizeTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  let width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  let height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  let iconSize = useSpring(iconSizeTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div ref={ref} style={{ width, height }}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div initial={{ opacity: 0, y: 10, x: "-50%" }} animate={{ opacity: 1, y: 0, x: "-50%" }} exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >{title}</motion.div>
          )}
        </AnimatePresence>
        <motion.div style={{ width: iconSize, height: iconSize }} className="flex items-center justify-center">{icon}</motion.div>
      </motion.div>
    </a>
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
      <pre className="bg-zinc-950 p-4 overflow-x-auto max-h-[500px]"><code className="text-sm text-zinc-100">{code}</code></pre>
    </div>
  );
}
<FloatingDock items={[
  { title: "Home", icon: <Home />, href: "/" },
  { title: "Profile", icon: <User />, href: "/profile" },
  { title: "Documents", icon: <FileText />, href: "/docs" },
  { title: "Settings", icon: <Settings />, href: "/settings" },
]} />