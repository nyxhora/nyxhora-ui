import { Metadata } from "next";
import { CornerGrid, CornerCard } from "@/registry/ui/corner-grid";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";
import { Box, Code, Layers, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "Corner Grid",
    description: "A minimalist grid with tech-inspired corner accents.",
};

export default function CornerGridDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Corner Grid"
                description="A responsive bento grid layout featuring clean, tech-inspired corner accents."
            />

            <DocsPreview
                title="Preview"
                previewCode={
                    <CornerGrid>
                        <CornerCard
                            title="Minimal Design"
                            description="Clean lines and subtle details for a modern tech look."
                            className="md:col-span-2"
                            header={<div className="h-40 w-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-md mb-4" />}
                            icon={<Box className="w-6 h-6 text-indigo-500" />}
                        />
                        <CornerCard
                            title="Fast Performance"
                            description="Optimized for speed and efficiency."
                            header={<div className="h-40 w-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-md mb-4" />}
                            icon={<Zap className="w-6 h-6 text-emerald-500" />}
                        />
                        <CornerCard
                            title="Scalable"
                            description="Built to grow with your application."
                            header={<div className="h-40 w-full bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-md mb-4" />}
                            icon={<Layers className="w-6 h-6 text-orange-500" />}
                        />
                        <CornerCard
                            title="Clean Code"
                            description="Easy to maintain and extend."
                            className="md:col-span-2"
                            header={<div className="h-40 w-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-md mb-4" />}
                            icon={<Code className="w-6 h-6 text-blue-500" />}
                        />
                    </CornerGrid>
                }
                code={`import { CornerGrid, CornerCard } from "@/registry/ui/corner-grid";
import { Box, Code, Layers, Zap } from "lucide-react";

export function CornerGridDemo() {
  return (
    <CornerGrid>
        <CornerCard 
            title="Minimal Design"
            description="Clean lines and subtle details."
            className="md:col-span-2"
            header={<div className="h-40 w-full bg-indigo-500/20 rounded-md mb-4" />}
            icon={<Box className="w-6 h-6 text-indigo-500" />}
        />
        <CornerCard 
            title="Fast Performance"
            description="Optimized for speed and efficiency."
            header={<div className="h-40 w-full bg-emerald-500/20 rounded-md mb-4" />}
            icon={<Zap className="w-6 h-6 text-emerald-500" />}
        />
        <CornerCard 
            title="Scalable"
            description="Built to grow with your application."
            header={<div className="h-40 w-full bg-orange-500/20 rounded-md mb-4" />}
            icon={<Layers className="w-6 h-6 text-orange-500" />}
        />
        <CornerCard 
            title="Clean Code"
            description="Easy to maintain and extend."
            className="md:col-span-2"
            header={<div className="h-40 w-full bg-blue-500/20 rounded-md mb-4" />}
            icon={<Code className="w-6 h-6 text-blue-500" />}
        />
    </CornerGrid>
  );
}`}
            />

            <DocsInstallation name={"corner-grid"} />
        </div>
    );
}
