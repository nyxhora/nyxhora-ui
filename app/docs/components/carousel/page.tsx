import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Carousel",
    description: "A carousel with motion and swipe built using Embla.",
};

export default function CarouselDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Carousel"
                description="A carousel with motion and swipe built using Embla."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add carousel`}
            />
        </div>
    );
}

