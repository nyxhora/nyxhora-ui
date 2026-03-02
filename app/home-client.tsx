"use client";

import Link from "next/link";
import { ArrowRight, Sparkle } from "lucide-react";
import { Button } from "@/registry/ui/button";
import { motion } from "framer-motion";
import { GradientBackground } from "@/registry/ui/gradient-background";
import { AnimeCard } from "@/registry/ui/anime-card";
import { CodeBlockVisual } from "@/components/hero-visuals/code-block-visual";
import { MagicButton } from "@/registry/ui/magic-button";
import { MagicText } from "@/registry/ui/magic-text";
import { IconBrandFramerMotion, IconBrandNextjs, IconBrandReact, IconBrandTailwind, IconBrandTypescript } from "@tabler/icons-react";
import { CardContainer, CardBody, CardItem } from "@/registry/ui/three-d-card";
import { Spotlight } from "@/registry/ui/spotlight";
import Footer from "@/registry/ui/footer";

interface HomeClientProps {
  totalComponents: number;
  templatesCount: number;
  blocksCount: number;
}

export default function HomeClient({ totalComponents, templatesCount, blocksCount }: HomeClientProps) {
  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-200">

      <main className="flex-1 w-full">
        {/* HERO SECTION */}

        <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-visible">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
          <GradientBackground position="right" intensity="medium" />

          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

              {/* LEFT COLUMN: Content */}
              <div className="flex flex-col items-start text-left space-y-8">

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href="/docs/components/image-grid"
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 transition-colors backdrop-blur-md group"
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded  group-hover:text-white transition-colors">
                      <Sparkle className="w-3 h-3" />
                    </span>
                    <span className="text-xs font-medium dark:text-zinc-300">Image Grid</span>
                    <ArrowRight className="w-3 h-3 text-zinc-500 group-hover:dark:text-zinc-300 transition-colors ml-1" />
                  </Link>
                </motion.div>

                {/* Title */}
                <motion.h1
                  className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Composable   <br />
                  UI for
                  <br />
                  <MagicText>

                    modern builders.
                  </MagicText>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className="text-lg text-zinc-400 max-w-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Easily plug in the latest trending components and build stunning websites without stressing over design consistency or animations.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  className="flex flex-wrap gap-4 pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link href="/components">
                    <MagicButton
                      title="Browse Components"
                      icon={<ArrowRight className="ml-2 w-4 h-4" />}
                      position="right"
                    />
                  </Link>

                  <Button asChild variant="ghost" size="lg" className="rounded-full h-12 px-8 text-zinc-300 hover:text-white border border-zinc-800 hover:bg-zinc-800">
                    <Link href="/docs">
                      Documentation
                    </Link>
                  </Button>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  className="pt-8 space-y-4 w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Powered By</p>

                  <div className="flex items-center justify-between w-full">
                    {[
                      { name: "React", icon: IconBrandReact },
                      { name: "Next.js", icon: IconBrandNextjs },
                      { name: "TypeScript", icon: IconBrandTypescript },
                      { name: "Tailwind", icon: IconBrandTailwind },
                      { name: "Framer Motion", icon: IconBrandFramerMotion },
                    ].map((tech) => (
                      <div
                        key={tech.name}
                        className="group flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out"
                      >
                        <div className="p-2 rounded-xl bg-zinc-900/50 group-hover:bg-zinc-800 transition-colors border border-transparent group-hover:border-zinc-700">
                          <tech.icon className="w-6 h-6 text-zinc-500 group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-sm font-medium text-zinc-300 max-w-0 overflow-hidden opacity-0 group-hover:max-w-[100px] group-hover:opacity-100 transition-all duration-300 ease-in-out whitespace-nowrap">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="container mx-auto px-4 md:px-6 py-8">
                      <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-16 text-sm font-medium">
                        <Link href="/docs" className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                          <span className="text-white font-bold">{totalComponents}+</span> components
                          <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        </Link>
                        <Link href="/templates" className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                          <span className="text-white font-bold">0{templatesCount}</span> templates
                          <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        </Link>
                        <Link href="/blocks" className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                          <span className="text-white font-bold">0{blocksCount}</span> blocks
                          <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>

              {/* RIGHT COLUMN: Visual Elements */}
              <motion.div
                className="relative h-[600px] w-full hidden lg:flex items-center justify-center perspective-[1000px]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <>

                  <div className="absolute top-10 right-0">
                  </div>
                  <div className="scale-75 origin-bottom-left">
                    <CodeBlockVisual />
                  </div>
                  <div className="absolute -top-10 left-20">
                    <AnimeCard />
                  </div>
                  <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        Make things float in air
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                      >
                        Hover over this card to unleash the power of CSS perspective
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                        <div className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl bg-gradient-to-br from-violet-500 to-orange-300 flex items-center justify-center text-white font-bold text-2xl">
                          Hover Me!
                        </div>
                      </CardItem>
                      <div className="flex justify-between items-center mt-20">
                        <CardItem
                          translateZ={20}
                          as="button"
                          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                          <Link href="/docs">
                            Try now →
                          </Link>
                        </CardItem>
                        <CardItem
                          translateZ={20}
                          as="button"
                          className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
                        >
                          <MagicButton title={"Nyxhora UI"} />
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                </>

              </motion.div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
