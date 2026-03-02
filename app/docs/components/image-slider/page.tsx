import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { ImageSlider } from "@/registry/ui/image-slider";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Image Slider",
    description: "A responsive, customizable image slider with support for swipes, autoplay, and thumbnails.",
    category: "Display",
});


const images = [
    "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?q=80&w=2070&auto=format&fit=crop",
];

export default function ImageSliderDocsPage() {
    const faqSchema = generateComponentFAQSchema("Image Slider", getDefaultComponentFAQs("Image Slider"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Image Slider", url: "https://ui.nyxhora.com/docs/components/image-slider" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            <DocsHeader
                title="Image Slider"
                description="A responsive, customizable image slider with support for swipes, autoplay, and thumbnails."
            />

            <DocsPreview
                title="Preview"
                previewCode={<ImageSlider images={images} />}
                code={`<ImageSlider 
  images={[
    "https://images.unsplash.com/photo-1...",
    "https://images.unsplash.com/photo-2...",
    "https://images.unsplash.com/photo-3...",
  ]} 
/>`}
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Autoplay</h2>
                <ComponentPreview
                    preview={<ImageSlider images={images} autoplay={true} autoplayInterval={2000} />}
                    code={`<ImageSlider 
  images={images} 
  autoplay={true} 
  autoplayInterval={2000} 
/>`}
                />
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Minimal</h2>
                <ComponentPreview
                    preview={<ImageSlider images={images} showThumbnails={false} />}
                    code={`<ImageSlider 
  images={images} 
  showThumbnails={false} 
/>`}
                />
            </section>

            <DocsInstallation name={"image-slider"} />

            <DocsProps
                props={[
                    {
                        name: "images",
                        type: "string[] | {src: string, alt: string}[]",
                        defaultValue: "-",
                        description: "Array of image URLs or objects",
                    },
                    {
                        name: "showControls",
                        type: "boolean",
                        defaultValue: "true",
                        description: "Show previous/next arrows",
                    },
                    {
                        name: "showThumbnails",
                        type: "boolean",
                        defaultValue: "true",
                        description: "Show thumbnail navigation",
                    },
                    {
                        name: "autoplay",
                        type: "boolean",
                        defaultValue: "false",
                        description: "Enable automatic sliding",
                    },
                    {
                        name: "autoplayInterval",
                        type: "number",
                        defaultValue: "3000",
                        description: "Interval in milliseconds",
                    },
                ]}
            />
        </div>
        </>
    );
}
