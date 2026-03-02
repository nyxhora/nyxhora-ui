import { Metadata } from "next";
import { DocsLayoutWrapper } from "@/components/ui/docs-layout-wrapper";
import { TooltipProvider } from "@/registry/ui/tooltip";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Documentation - Nyxhora UI",
  },
  description:
    "Comprehensive documentation for Nyxhora UI - A collection of beautifully designed, accessible, and customizable React UI components for web applications.",
  keywords: [
    "React components",
    "UI library",
    "Next.js components",
    "Tailwind CSS",
    "TypeScript",
    "accessible components",
    "modern UI",
    "Nyxhora UI",
    "component library",
    "web development",
  ],
  openGraph: {
    title: "Nyxhora UI",
    description:
      "Build beautiful interfaces with modern, accessible React components.",
    type: "website",
    siteName: "Nyxhora UI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nyxhora UI Documentation",
    description:
      "Build beautiful interfaces with modern, accessible React components.",
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DocsLayoutWrapper>
      <TooltipProvider>{children}</TooltipProvider>
    </DocsLayoutWrapper>
  );
}
