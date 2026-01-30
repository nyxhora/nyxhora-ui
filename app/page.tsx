"use client";

import Footer from "@/components/ui/footer";
import Link from "next/link";
import { ArrowRight, Check, Copy, Terminal, Sparkles, MousePointer2, Layout, Navigation, LayoutDashboard, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ComponentShowcard, ShowcardGrid } from "@/components/ui/component-showcard";
import { motion } from "framer-motion";
import { ParticleBurstButton } from "@/components/ui/awsomebutton";

// Mini Navbar Preview Component
function NavbarPreview() {
  return (
    <div className="w-full max-w-md">
      <div className="flex items-center justify-between px-4 py-3 bg-background/80 backdrop-blur-md rounded-xl border border-border/50 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="font-semibold text-sm">NyxhoraUI</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-xs text-muted-foreground">
          <span className="hover:text-foreground cursor-pointer transition-colors">Docs</span>
          <span className="hover:text-foreground cursor-pointer transition-colors">Components</span>
          <span className="hover:text-foreground cursor-pointer transition-colors">Examples</span>
        </div>
        <button className="px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
}

// Mini Footer Preview Component  
function FooterPreview() {
  return (
    <div className="w-full max-w-md scale-90">
      <div className="px-6 py-4 bg-background/80 backdrop-blur-md rounded-xl border border-border/50 shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">N</span>
            </div>
            <span className="font-medium text-xs">NyxhoraUI</span>
          </div>
          <div className="flex gap-3">
            {["Twitter", "GitHub", "Discord"].map((item) => (
              <span key={item} className="text-[10px] text-muted-foreground hover:text-foreground cursor-pointer">{item}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-border/30">
          <span className="text-[10px] text-muted-foreground">© 2024 NyxhoraUI</span>
          <div className="flex gap-2">
            <span className="text-[10px] text-muted-foreground">Privacy</span>
            <span className="text-[10px] text-muted-foreground">Terms</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Workspace Label Preview
function WorkspaceLabelPreview() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 px-4 py-3 bg-background/80 backdrop-blur-md rounded-xl border border-border/50 shadow-lg">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold">
          P
        </div>
        <div>
          <div className="font-medium text-sm">Project Alpha</div>
          <div className="text-xs text-muted-foreground">Free Plan</div>
        </div>
      </div>
      <div className="flex items-center gap-3 px-4 py-3 bg-background/80 backdrop-blur-md rounded-xl border border-primary/30 shadow-lg">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center text-white font-bold">
          N
        </div>
        <div>
          <div className="font-medium text-sm">Nyxhora</div>
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <Sparkles className="h-3 w-3 text-amber-500" />
            Pro Plan
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-500 opacity-20 blur-[100px]"></div>
        <div className="absolute right-[20%] top-[40%] -z-10 h-[200px] w-[200px] rounded-full bg-blue-500 opacity-10 blur-[80px]"></div>
        <div className="absolute left-[10%] bottom-[20%] -z-10 h-[250px] w-[250px] rounded-full bg-pink-500 opacity-10 blur-[90px]"></div>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="space-y-6 pb-8 pt-32 md:pb-12 md:pt-48 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="https://twitter.com/nyxhora"
                className="inline-flex items-center gap-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 px-4 py-1.5 text-sm font-medium hover:bg-muted transition-colors"
                target="_blank"
              >
                <Sparkles className="h-4 w-4 text-amber-500" />
                Now with 50+ components
                <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>

            <motion.h1
              className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">
                Build Premium
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                Web Experiences.
              </span>
            </motion.h1>

            <motion.p
              className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let&apos;s make your development a little smoother with copy-paste UI components based on shadcn. Beautiful, reusable, and built with Tailwind CSS.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button asChild size="lg" className="h-12 px-8 rounded-full text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-purple-500/20">
                <Link href="/docs">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-full text-base">
                <Link href="https://github.com/nyxhora/ui" target="_blank">
                  GitHub
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Component Showcase Section */}
        <section className="container py-16 md:py-24 mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                <Layers className="h-3 w-3" />
                Featured Components
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Beautiful components, ready to use
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our collection of premium UI components. Each one is carefully crafted for the best developer experience.
              </p>
            </motion.div>
          </div>

          <ShowcardGrid columns={2} gap="md" className="max-w-5xl mx-auto">
            {/* Navbar Showcase */}
            <ComponentShowcard
              title="Navbar"
              description="Responsive navigation with dropdown menus and mobile support"
              href="/docs/components/navbar"
              gradient="from-sky-500/10 to-blue-500/10"
              animationDelay={0.1}
              badge="Popular"
              badgeVariant="info"
            >
              <NavbarPreview />
            </ComponentShowcard>

            {/* Footer Showcase */}
            <ComponentShowcard
              title="Footer"
              description="Modern footer with links, social icons, and newsletter"
              href="/docs/components/footer"
              gradient="from-purple-500/10 to-pink-500/10"
              animationDelay={0.2}
            >
              <FooterPreview />
            </ComponentShowcard>

            {/* Workspace Label Showcase */}
            <ComponentShowcard
              title="Workspace Label"
              description="Display workspace info with avatars and plan badges"
              href="/docs/components/workspace-label"
              gradient="from-emerald-500/10 to-teal-500/10"
              animationDelay={0.3}
              badge="New"
              badgeVariant="success"
            >
              <WorkspaceLabelPreview />
            </ComponentShowcard>

            {/* Awesome Button Showcase */}
            <ComponentShowcard
              title="Particle Button"
              description="Interactive button with particle burst animations"
              href="/docs/components/button"
              gradient="from-orange-500/10 to-amber-500/10"
              animationDelay={0.4}
              badge="Interactive"
              badgeVariant="warning"
            >
              <div className="flex flex-col items-center gap-4">
                <ParticleBurstButton className="px-8">
                  Click me!
                </ParticleBurstButton>
                <span className="text-xs text-muted-foreground">
                  Try clicking the button
                </span>
              </div>
            </ComponentShowcard>
          </ShowcardGrid>


          {/* View All Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/docs/components/button">
                View All Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="container space-y-6 py-8 md:py-12 lg:py-24 mx-auto">
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm p-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex h-[180px] flex-col justify-between rounded-xl p-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Shadcn Compatible</h3>
                  <p className="text-sm text-muted-foreground">
                    Seamlessly integrates with your existing shadcn/ui projects.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm p-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex h-[180px] flex-col justify-between rounded-xl p-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <Copy className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Copy & Paste</h3>
                  <p className="text-sm text-muted-foreground">
                    Simply copy the component code and paste it into your project.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm p-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex h-[180px] flex-col justify-between rounded-xl p-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                  <Terminal className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Fully Typed</h3>
                  <p className="text-sm text-muted-foreground">
                    Built with TypeScript for a robust and type-safe development experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-8 md:py-12 lg:py-24 mx-auto">
          <motion.div
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20 rounded-full" />
              <h2 className="relative font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                Ready to build?
              </h2>
            </div>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Nyxhora UI is open source and free to use. Join the community and start building today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 rounded-full text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-purple-500/20">
                <Link href="/docs">
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-full text-base">
                <Link href="/docs/components/button">
                  Browse Components
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
