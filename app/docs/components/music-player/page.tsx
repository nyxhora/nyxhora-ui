import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { MusicPlayer } from "@/registry/ui/music-player";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Music Player",
    description: "A stylish, glassmorphism music player component for media applications.",
    category: "Display",
});


export default function MusicPlayerDocsPage() {
    const faqSchema = generateComponentFAQSchema("Music Player", getDefaultComponentFAQs("Music Player"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Music Player", url: "https://ui.nyxhora.com/docs/components/music-player" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            <DocsHeader
                title="Music Player"
                description="A stylish, glassmorphism music player component for media applications."
            />

            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="p-10 flex justify-center bg-zinc-950 rounded-lg">
                        <MusicPlayer
                            title="Midnight City"
                            artist="M83"
                            album="Hurry Up, We're Dreaming"
                            currentTime="1:20"
                            totalTime="4:03"
                            progress={40}
                            image="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop"
                        />
                    </div>
                }
                code={`<MusicPlayer 
  title="Midnight City"
  artist="M83"
  album="Hurry Up, We're Dreaming"
  currentTime="1:20"
  totalTime="4:03"
  progress={40}
  image="/path/to/album-art.jpg"
/>`}
            />

            <DocsInstallation name="music-player" />

            <CodeBlockWrapper
                title="Usage"
                code={`import { MusicPlayer } from "@/registry/ui/music-player"

export default function Dashboard() {
  return (
    <div>
      <MusicPlayer 
        title="Song Title" 
        artist="Artist Name" 
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
                        description: "URL of the album art image (default: Unsplash Image).",
                    },
                    {
                        name: "title",
                        type: "string",
                        description: "Song title (default: 'Until I Found You').",
                    },
                    {
                        name: "artist",
                        type: "string",
                        description: "Artist name (default: 'Stephen Sanchez').",
                    },
                    {
                        name: "album",
                        type: "string",
                        description: "Album name or subtitle (default: 'Single • 2022').",
                    },
                    {
                        name: "currentTime",
                        type: "string",
                        description: "Current playback time string (default: '2:05').",
                    },
                    {
                        name: "totalTime",
                        type: "string",
                        description: "Total duration string (default: '4:08').",
                    },
                    {
                        name: "progress",
                        type: "number",
                        description: "Progress percentage (0-100) (default: 33).",
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
