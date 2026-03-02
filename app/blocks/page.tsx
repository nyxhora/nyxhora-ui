
import { BackgroundBeams } from "@/registry/ui/background-beams";
import { FlipWords } from "@/registry/ui/flip-words";
import Link from "next/link";
import { MagicButton } from "@/registry/ui/magic-button";
import { MagicCard, MagicCardHeader, MagicCardTitle, MagicCardDescription, MagicCardContent } from "@/registry/ui/magic-card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blocks - Coming Soon",
    description: "Premium building blocks for your next React project. Nyxhora UI blocks are coming soon — pre-built sections, layouts, and page templates.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function BlocksPage() {
    const words = ["Blocks", "Sections", "Templates", "Layouts"];

    return (
        <div className="h-[calc(100vh-4rem)] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
            <div className="max-w-4xl mx-auto p-4 flex flex-col items-center justify-center z-10">
                <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                    We are coming soon with <br />
                    <FlipWords words={words} className="text-neutral-200" colors={["#18CCFC", "#AE48FF", "#22C55E", "#F97316"]} />
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-4 text-sm md:text-base text-center relative z-10">
                    Stay tuned! We are crafting premium building blocks for your next project.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-8">
                    <MagicCard className="w-full">
                        <MagicCardHeader>
                            <MagicCardTitle>Premium Design</MagicCardTitle>
                            <MagicCardDescription>Aesthetic perfection</MagicCardDescription>
                        </MagicCardHeader>
                        <MagicCardContent>
                            Crafted with attention to detail and modern aesthetics.
                        </MagicCardContent>
                    </MagicCard>
                    <MagicCard className="w-full" gradientColor="conic-gradient(from 90deg at 50% 50%, #FF80B5 0%, #FFD166 50%, #FF80B5 100%)">
                        <MagicCardHeader>
                            <MagicCardTitle>Copy & Paste</MagicCardTitle>
                            <MagicCardDescription>Easy integration</MagicCardDescription>
                        </MagicCardHeader>
                        <MagicCardContent>
                            Simply copy code and paste into your project.
                        </MagicCardContent>
                    </MagicCard>
                    <MagicCard className="w-full" gradientColor="conic-gradient(from 90deg at 50% 50%, #72EDF2 0%, #5151E5 50%, #72EDF2 100%)">
                        <MagicCardHeader>
                            <MagicCardTitle>Open Source</MagicCardTitle>
                            <MagicCardDescription>Community driven</MagicCardDescription>
                        </MagicCardHeader>
                        <MagicCardContent>
                            Free to use and modify for your personal needs.
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
