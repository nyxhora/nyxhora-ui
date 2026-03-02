import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { AnimeCard } from "@/registry/ui/anime-card";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Anime Card",
    description: "A glassmorphism-styled media card perfect for hero sections or media showcases.",
    category: "Effects",
});


export default function AnimeCardDocsPage() {
    const faqSchema = generateComponentFAQSchema("Anime Card", getDefaultComponentFAQs("Anime Card"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Anime Card", url: "https://ui.nyxhora.com/docs/components/anime-card" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            <DocsHeader
                title="Anime Card"
                description="A glassmorphism-styled media card perfect for hero sections or media showcases."
            />

            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="p-10 flex justify-center bg-zinc-950 rounded-lg">
                        <AnimeCard
                            title="Demon Slayer"
                            matchPercentage={98}
                            image="https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=687&auto=format&fit=crop"
                            badgeText="NEW"
                            badgeColor="bg-red-500"
                            progress={85}
                        />
                    </div>
                }
                code={`<AnimeCard 
  title="Demon Slayer" 
  matchPercentage={98} 
  image="/path/to/image.jpg"
  badgeText="NEW"
  badgeColor="bg-red-500"
  progress={85}
/>`}
            />

            <DocsInstallation name="anime-card" />

            <CodeBlockWrapper
                title="Usage"
                code={`import { AnimeCard } from "@/registry/ui/anime-card"

export default function MyPage() {
  return (
    <div className="flex justify-center p-8">
      <AnimeCard 
         title="Character Name"
         matchPercentage={90}
      />
    </div>
  )
}`}
                language="tsx"
            />

            <DocsProps
                props={[
                    {
                        name: "image",
                        type: "string",
                        description: "URL of the background image (default: Unsplash Image).",
                    },
                    {
                        name: "title",
                        type: "string",
                        description: "Title text displayed on the card (default: 'Person').",
                    },
                    {
                        name: "matchPercentage",
                        type: "number",
                        description: "Match percentage value (default: 95).",
                    },
                    {
                        name: "progress",
                        type: "number",
                        description: "Progress bar percentage (0-100) (default: 75).",
                    },
                    {
                        name: "badgeText",
                        type: "string",
                        description: "Text inside the top badge (default: 'AUTO').",
                    },
                    {
                        name: "badgeColor",
                        type: "string",
                        description: "Tailwind class for the badge/progress color (default: 'bg-green-500').",
                    },
                    {
                        name: "className",
                        type: "string",
                        description: "Additional CSS classes.",
                    },
                ]}
            />
        </div>
        </>
    );
}
