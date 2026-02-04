import { Metadata } from "next";
import { ImageGrid } from "@/registry/ui/image-grid";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata: Metadata = {
    title: "Image Grid",
    description: "A dynamic image grid with interactive hero swapping.",
};

const items1 = [
    { id: 1, src: "https://images.unsplash.com/photo-1708247874023-f6d71a45113a?q=80&w=2344&auto=format&fit=crop", alt: "Image 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1437751059337-ea72d4f73fcf?q=80&w=2322&auto=format&fit=crop", alt: "Image 2" },
    { id: 3, src: "https://images.unsplash.com/photo-1515594515116-863345d8507c?q=80&w=2340&auto=format&fit=crop", alt: "Image 3" },
    { id: 4, src: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=2340&auto=format&fit=crop", alt: "Image 4" },
    { id: 5, src: "https://images.unsplash.com/photo-1517953377824-516f2dca803b?q=80&w=2378&auto=format&fit=crop", alt: "Image 5" },
];

const items2 = [
    { id: 6, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2340&auto=format&fit=crop", alt: "Mountain 1" },
    { id: 7, src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2352&auto=format&fit=crop", alt: "Mountain 2" },
    { id: 8, src: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=2340&auto=format&fit=crop", alt: "Mountain 3" },
    { id: 9, src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2340&auto=format&fit=crop", alt: "Mountain 4" },
    { id: 10, src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2340&auto=format&fit=crop", alt: "Mountain 5" },
];

const items3 = [
    { id: 11, src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2346&auto=format&fit=crop", alt: "Beach 1" },
    { id: 12, src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2340&auto=format&fit=crop", alt: "Beach 2" },
    { id: 13, src: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2340&auto=format&fit=crop", alt: "Beach 3" },
    { id: 14, src: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=2344&auto=format&fit=crop", alt: "Beach 4" },
    { id: 15, src: "https://images.unsplash.com/photo-1468413253771-d4f1f6631c0d?q=80&w=2340&auto=format&fit=crop", alt: "Beach 5" },
];

export default function ImageGridDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Image Grid"
                description="An interactive gallery that lets users swap the hero image by clicking on thumbnails."
            />

            <DocsPreview
                title="Preview"
                previewCode={<ImageGrid items={items1} />}
                code={`import { ImageGrid } from "@/registry/ui/image-grid"

const items = [
    { id: 1, src: "...", alt: "..." },
    { id: 2, src: "...", alt: "..." },
    { id: 3, src: "...", alt: "..." },
    { id: 4, src: "...", alt: "..." },
    { id: 5, src: "...", alt: "..." },
];

export function ImageGridDemo() {
  return <ImageGrid items={items} />
}`}
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Hero Right</h2>
                <ComponentPreview
                    preview={<ImageGrid items={items2} layout="hero-right" />}
                    code={`<ImageGrid items={items} layout="hero-right" />`}
                />
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Hero Top</h2>
                <ComponentPreview
                    preview={<ImageGrid items={items3} layout="hero-top" />}
                    code={`<ImageGrid items={items} layout="hero-top" />`}
                />
            </section>

            <DocsInstallation name={"image-grid"} />

            <DocsProps
                props={[
                    {
                        name: "items",
                        type: "ImageGridItem[]",
                        defaultValue: "-",
                        description: "Array of image objects {id, src, alt}",
                    },
                    {
                        name: "layout",
                        type: '"hero-left" | "hero-right" | "hero-top"',
                        defaultValue: '"hero-left"',
                        description: "The layout configuration",
                    },
                    {
                        name: "enableSwapping",
                        type: "boolean",
                        defaultValue: "true",
                        description: "Enable swapping images on click",
                    },
                ]}
            />
        </div>
    );
}
