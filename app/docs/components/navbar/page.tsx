
import { DocsHeader, DocsPreview, CodeBlockWrapper } from "@/components/ui/docs-documentation";
import { Layers, Smartphone, Palette, Zap } from "lucide-react";
import { ComponentSource } from "@/components/ui/component-source";
import { NavbarDemo } from "./navbarDemo";

function FeatureCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-muted/50 border border-border/50 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}



export default function NavbarDocsPage() {
  return (
    <div className="space-y-10">
      <DocsHeader title="Navbar" description="A responsive navigation bar component with glassmorphism effects, mobile menu support, and smooth animations." />

      <DocsPreview title="Preview" previewCode={<NavbarDemo />} code={`import { Navbar } from "@/components/ui/navbar";

export default function MyPage() {
  return (
    <div>
      <Navbar />
      {/* Page content */}
    </div>
  );
}`} />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Features</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <FeatureCard icon={Palette} title="Glassmorphism Design" description="Beautiful backdrop blur effect with subtle transparency for a modern look." />
          <FeatureCard icon={Smartphone} title="Fully Responsive" description="Smooth mobile menu with slide-in animation and touch-friendly interactions." />
          <FeatureCard icon={Layers} title="Active State Indicators" description="Animated gradient underline shows the current active page." />
          <FeatureCard icon={Zap} title="Smooth Animations" description="Micro-interactions with scale, opacity, and transform transitions." />
        </div>
      </section>

      <CodeBlockWrapper title="Installation" code={`# No additional dependencies required
# Uses lucide-react icons and standard Next.js Link`} language="bash" />

      <CodeBlockWrapper title="Usage" code={`import { Navbar } from "@/components/ui/navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  );
}`} language="tsx" />

      <ComponentSource filePath="/components/ui/navbar.tsx" />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Notes</h2>
        <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-amber-500/5 p-6">
          <p className="text-sm"><strong className="text-amber-600 dark:text-amber-400">Fixed Positioning:</strong> The navbar uses <code className="bg-muted px-1.5 py-0.5 rounded text-xs">fixed top-0</code> positioning. Add <code className="bg-muted px-1.5 py-0.5 rounded text-xs">pt-16</code> to your main content.</p>
        </div>
      </section>
    </div>
  );
}
