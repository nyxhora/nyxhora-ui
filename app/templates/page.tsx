
import { BackgroundBeams } from "@/registry/ui/background-beams";
import { FlipWords } from "@/registry/ui/flip-words";
import Link from "next/link";
import { MagicButton } from "@/registry/ui/magic-button";
import { MagicCard, MagicCardHeader, MagicCardTitle, MagicCardDescription, MagicCardContent } from "@/registry/ui/magic-card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Templates - Coming Soon",
    description: "Production-ready Next.js templates built with Nyxhora UI components. Templates are coming soon — beautiful starter projects for SaaS, portfolios, and dashboards.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function TemplatesPage() {
    const words = ["Templates", "Layouts", "Sections", "Pages"];

    return (
        <div className="h-[calc(100vh-4rem)] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
            <div className="max-w-4xl mx-auto p-4 flex flex-col items-center justify-center z-10">
                <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                    We are coming soon with <br />
                    <FlipWords words={words} className="text-neutral-200" colors={["#AE48FF", "#18CCFC", "#F97316", "#22C55E"]} />
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-4 text-sm md:text-base text-center relative z-10">
                    Stay tuned! We are crafting premium templates to kickstart your next project.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-8">
                    <MagicCard className="w-full">
                        <MagicCardHeader>
                            <MagicCardTitle>Modern Stack</MagicCardTitle>
                            <MagicCardDescription>Latest technologies</MagicCardDescription>
                        </MagicCardHeader>
                        <MagicCardContent>
                            Built with Next.js, Tailwind CSS, and Framer Motion.
                        </MagicCardContent>
                    </MagicCard>
                    <MagicCard className="w-full" gradientColor="conic-gradient(from 90deg at 50% 50%, #FFD166 0%, #06D6A0 50%, #FFD166 100%)">
                        <MagicCardHeader>
                            <MagicCardTitle>Production Ready</MagicCardTitle>
                            <MagicCardDescription>Optimized & Clean</MagicCardDescription>
                        </MagicCardHeader>
                        <MagicCardContent>
                            SEO optimized, accessible, and performant code.
                        </MagicCardContent>
                    </MagicCard>
                    <MagicCard className="w-full" gradientColor="conic-gradient(from 90deg at 50% 50%, #118AB2 0%, #EF476F 50%, #118AB2 100%)">
                        <MagicCardHeader>
                            <MagicCardTitle>Beautiful Design</MagicCardTitle>
                            <MagicCardDescription>Pixel perfect</MagicCardDescription>
                        </MagicCardHeader>
                        <MagicCardContent>
                            Stunning visuals that will impress your users.
                        </MagicCardContent>
                    </MagicCard>
                </div>

                <div className="relative z-10 mt-12">
                    <Link href="/">
                        <MagicButton title="Go Home" />
                    </Link>
                </div>
            </div>
            <BackgroundBeams />
        </div>
    );
}
