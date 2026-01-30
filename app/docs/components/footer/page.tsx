import { Metadata } from "next";
import Footer from "@/components/ui/footer";
import { CodeBlockWrapper, DocsHeader } from "@/components/ui/docs-documentation";

const componentCode = `"use client";

import Link from "next/link";
import { Twitter, ExternalLink, Linkedin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background px-6 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Nyxhora
              </h3>
              <p className="text-sm text-muted-foreground">
                Your Complete Digital Workspace
              </p>
              <div className="flex space-x-4">
                <Link href="https://twitter.com/@nyxhora" className="text-muted-foreground hover:text-foreground">
                  <Twitter size={20} />
                </Link>
                <Link href="https://discord.gg/qR3xTWWB" className="text-muted-foreground hover:text-foreground">
                  {/* Discord SVG */}
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M20.317 4.3698a19.79 19.79 0 00-4.885-1.515..." />
                  </svg>
                </Link>
                <a href="https://linkedin.com/company/107792893" className="text-muted-foreground hover:text-blue-600">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              {["Features", "Pricing"].map((item) => (
                <li key={item}>
                  <Link href={\`/\${item.toLowerCase()}\`} className="text-sm text-muted-foreground hover:text-foreground">
                    {item}
                  </Link>
                </li>
              ))}
              <li><Link href="/tools" className="text-sm text-muted-foreground hover:text-foreground">Free Tools</Link></li>
              <li><Link href="/market" className="text-sm text-muted-foreground hover:text-foreground">Templates</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {["About", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={\`/\${item.toLowerCase()}\`} className="text-sm text-muted-foreground hover:text-foreground">
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="https://github.com/your-repo" target="_blank" className="text-sm text-muted-foreground hover:text-foreground flex items-center">
                  GitHub <ExternalLink size={14} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground flex items-center">
                  Documentation <ExternalLink size={14} className="ml-1" />
                </Link>
              </li>
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
              <li>
                <Link href="https://discord.gg/your-server" target="_blank" className="text-sm text-muted-foreground hover:text-foreground flex items-center">
                  Community <ExternalLink size={14} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© {year} Nyxhora. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">Privacy Policy</Link>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">Terms of Service</Link>
              <Link href="/cookies" className="text-xs text-muted-foreground hover:text-foreground">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;`;

export const metadata: Metadata = {
    title: "Footer",
    description: "A comprehensive footer component with brand section, social links, navigation columns, and legal links. Fully responsive and customizable.",
};

export default function FooterDocsPage() {
  return (
    <div className="space-y-10">
      <DocsHeader title="Footer" description="A comprehensive footer component with brand section, social links, navigation columns, and legal links. Fully responsive and customizable." />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Preview</h2>
        <div className="rounded-xl border border-border/50 overflow-hidden">
          <div className="bg-background">
            <Footer />
          </div>
        </div>
      </section>

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
        title="Installation"
        code={componentCode}
        language="tsx"
      />

      <CodeBlockWrapper
        title="Usage"
        code={`import Footer from "@/components/ui/footer"

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

      <CodeBlockWrapper
        title="Dependencies"
        code={`npm install lucide-react next/link`}
        language="bash"
      />
    </div>
  );
}
