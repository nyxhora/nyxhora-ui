import { DocsHeader, DocsPreview, CodeBlockWrapper, DocsProps } from "@/components/ui/docs-documentation";
import { Zap, Layers, Palette, Moon } from "lucide-react";
import NavbarMenu from "@/components/ui/navbar-menu";
import { ComponentSource } from "@/components/ui/component-source";
import { MenuDemo } from "./navbarMenuDemo";


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


export default function NavbarMenuDocsPage() {
  return (
    <div className="space-y-10">
      <DocsHeader title="Navbar Menu" description="Animated dropdown menu components for navigation with smooth spring animations and hover effects." />
      <DocsPreview title="Preview" previewCode={<MenuDemo />} code={`import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
const [active, setActive] = useState<string | null>(null);
<Menu setActive={setActive}>
  <MenuItem setActive={setActive} active={active} item="Products">
    <HoveredLink href="/web-dev">Web Development</HoveredLink>
  </MenuItem>
</Menu>`} />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Features</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <FeatureCard icon={Zap} title="Spring Animations" description="Physics-based spring animations using Framer Motion." />
          <FeatureCard icon={Layers} title="Shared Layout" description="Uses layoutId for smooth transitions between active items." />
          <FeatureCard icon={Palette} title="Product Cards" description="Built-in ProductItem for showcasing products with images." />
          <FeatureCard icon={Moon} title="Dark Mode Ready" description="Automatic styling for light and dark color schemes." />
        </div>
      </section>

      <CodeBlockWrapper title="Requirements" code={`npm install framer-motion`} language="bash" />
      <ComponentSource filePath="/components/ui/navbar-menu.tsx" />
      <NavbarMenu />

    </div>
  );
}
