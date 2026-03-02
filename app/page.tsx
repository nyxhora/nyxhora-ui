import { Metadata } from "next";
import { docsConfig } from "@/lib/docs-config";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "Nyxhora UI - Modern React Component Library | Tailwind CSS & Framer Motion",
  description:
    "Build stunning websites with 75+ beautiful, accessible React UI components. Copy-paste components built with Tailwind CSS, Framer Motion, and Radix UI. The best free and open source shadcn/ui alternative for 2026.",
  alternates: {
    canonical: "https://ui.nyxhora.com",
  },
  openGraph: {
    title: "Nyxhora UI - 75+ Modern React Components | Free & Open Source",
    description:
      "Copy-paste React UI components for Next.js. Beautiful, accessible, animated. Built with Tailwind CSS and Framer Motion. The shadcn alternative developers love.",
    url: "https://ui.nyxhora.com",
    type: "website",
  },
};

export default function Home() {
  const totalComponents = docsConfig
    .filter((cat) =>
      [
        "Form Components",
        "Display Components",
        "Overlay Components",
        "Navigation",
        "Layout",
        "Effects & Animations",
      ].includes(cat.title)
    )
    .reduce((acc, cat) => acc + cat.items.length, 0);

  const templatesCount = 0;
  const blocksCount =
    docsConfig.find((cat) => cat.title === "Blocks")?.items.length || 0;

  return (
    <HomeClient
      totalComponents={totalComponents}
      templatesCount={templatesCount}
      blocksCount={blocksCount}
    />
  );
}

