import { Metadata } from "next";
import Footer from "@/registry/ui/footer";
import { CodeBlockWrapper, DocsHeader, DocsPreview } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata: Metadata = {
  title: "Footer",
  description: "A comprehensive footer component with brand section, social links, navigation columns, and legal links. Fully responsive and customizable.",
};

export default function FooterDocsPage() {
  return (
    <div className="space-y-10">
      <DocsHeader title="Footer" description="A comprehensive footer component with brand section, social links, navigation columns, and legal links. Fully responsive and customizable." />

      <DocsPreview previewCode={<Footer />} code={`<Footer/>`} />


      <DocsInstallation name="footer" />
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Brand Section:</strong> Logo, tagline, and social media links</li>
          <li><strong>Multi-column Layout:</strong> Product, Company, and Resources sections</li>
          <li><strong>Social Icons:</strong> Twitter, Discord, Instagram, LinkedIn</li>
          <li><strong>External Links:</strong> Icon indicator for external URLs</li>
          <li><strong>Legal Section:</strong> Privacy, Terms, and Cookie policies</li>
          <li><strong>Dynamic Year:</strong> Auto-updating copyright year</li>
          <li><strong>Responsive:</strong> Stacks on mobile, 4-column grid on desktop</li>
        </ul>
      </section>

      <CodeBlockWrapper
        title="Usage"
        code={`import Footer from "@/registry/ui/footer"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}`}
        language="tsx"
      />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Structure</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
            <h3 className="font-medium mb-2">Brand Section</h3>
            <p className="text-sm text-muted-foreground">Logo, description, and social media icons (Twitter, Discord, Instagram, LinkedIn)</p>
          </div>
          <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
            <h3 className="font-medium mb-2">Product Links</h3>
            <p className="text-sm text-muted-foreground">Features, Pricing, Free Tools, Templates, Blog</p>
          </div>
          <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
            <h3 className="font-medium mb-2">Company Links</h3>
            <p className="text-sm text-muted-foreground">About, Contact, GitHub (external)</p>
          </div>
          <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
            <h3 className="font-medium mb-2">Resources Links</h3>
            <p className="text-sm text-muted-foreground">Documentation, FAQ, Community (external)</p>
          </div>
        </div>
      </section>

    </div>
  );
}
