import { AnimatedShinyText } from "@/registry/ui/animated-shiny-text";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import { ArrowRightIcon } from "lucide-react";
import DocsInstallation from "@/components/ui/docs-installation";

export default function AnimatedShinyTextDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Animated Shiny Text"
                description="Text with an animated shimmer effect that creates a premium, dynamic appearance. Perfect for announcements and highlights."
            />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="flex min-h-[150px] items-center justify-center">
                        <div className="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                <span>✨ Introducing Nyxhora UI</span>
                                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </AnimatedShinyText>
                        </div>
                    </div>
                }
                code={`<div className="group rounded-full border bg-neutral-900">
  <AnimatedShinyText className="inline-flex items-center px-4 py-1">
    <span>✨ Introducing Nyxhora UI</span>
    <ArrowRightIcon className="ml-1 size-3" />
  </AnimatedShinyText>
</div>`}
            />

            {/* Installation */}
            <DocsInstallation name="animated-shiny-text" />

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { AnimatedShinyText } from "@/registry/ui/animated-shiny-text"

export default function Announcement() {
  return (
    <AnimatedShinyText shimmerWidth={100}>
      ✨ New Feature Released!
    </AnimatedShinyText>
  )
}`}
                language="tsx"
            />

            {/* Examples */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Standalone Text</h3>
                    <ComponentPreview
                        preview={
                            <div className="flex min-h-[100px] items-center justify-center">
                                <AnimatedShinyText className="text-xl font-semibold">
                                    Premium Quality Text
                                </AnimatedShinyText>
                            </div>
                        }
                        code={`<AnimatedShinyText className="text-xl font-semibold">
  Premium Quality Text
</AnimatedShinyText>`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Wide Shimmer</h3>
                    <ComponentPreview
                        preview={
                            <div className="flex min-h-[100px] items-center justify-center">
                                <AnimatedShinyText shimmerWidth={200} className="text-lg">
                                    Wider shimmer effect ✨
                                </AnimatedShinyText>
                            </div>
                        }
                        code={`<AnimatedShinyText shimmerWidth={200} className="text-lg">
  Wider shimmer effect ✨
</AnimatedShinyText>`}
                    />
                </div>
            </section>

            {/* Props */}
            <DocsProps
                props={[
                    {
                        name: "children",
                        type: "ReactNode",
                        defaultValue: "required",
                        description: "The text content to display with the shimmer effect",
                    },
                    {
                        name: "shimmerWidth",
                        type: "number",
                        defaultValue: "100",
                        description: "Width of the shimmer gradient in pixels",
                    },
                    {
                        name: "className",
                        type: "string",
                        defaultValue: "undefined",
                        description: "Additional CSS classes for styling",
                    },
                ]}
            />

            {/* Tailwind Config */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Tailwind Configuration</h2>
                <p className="text-muted-foreground">
                    Add the following animation to your <code className="text-primary">tailwind.config.js</code>:
                </p>
                <CodeBlockWrapper
                    title="tailwind.config.js"
                    code={`module.exports = {
  theme: {
    extend: {
      animation: {
        "shiny-text": "shiny-text 8s infinite",
      },
      keyframes: {
        "shiny-text": {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shiny-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shiny-width)) 0",
          },
        },
      },
    },
  },
}`}
                    language="javascript"
                />
            </section>
        </div>
    );
}
