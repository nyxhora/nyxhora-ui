import { FlipWords } from "@/registry/ui/flip-words";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export default function FlipWordsDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Flip Words"
                description="Animated word cycling component that flips through an array of words with smooth letter-by-letter animations."
            />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="flex min-h-[150px] items-center justify-center">
                        <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                            Build
                            <FlipWords words={["beautiful", "modern", "amazing", "stunning"]} />
                            websites
                        </div>
                    </div>
                }
                code={`<div className="text-2xl font-bold">
  Build
  <FlipWords words={["beautiful", "modern", "amazing", "stunning"]} />
  websites
</div>`}
            />

            {/* Installation */}
            <DocsInstallation name="flip-words" />

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { FlipWords } from "@/registry/ui/flip-words"

export default function Hero() {
  const words = ["beautiful", "modern", "amazing", "stunning"]
  
  return (
    <h1 className="text-4xl font-bold">
      Build <FlipWords words={words} /> websites
    </h1>
  )
}`}
                language="tsx"
            />

            {/* Examples */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Faster Animation</h3>
                    <ComponentPreview
                        preview={
                            <div className="flex min-h-[100px] items-center justify-center">
                                <div className="text-xl font-semibold">
                                    Welcome to
                                    <FlipWords words={["Nyxhora", "the future", "innovation"]} duration={1500} />
                                </div>
                            </div>
                        }
                        code={`<FlipWords 
  words={["Nyxhora", "the future", "innovation"]} 
  duration={1500} 
/>`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Slower Animation</h3>
                    <ComponentPreview
                        preview={
                            <div className="flex min-h-[100px] items-center justify-center">
                                <div className="text-xl font-semibold">
                                    We are
                                    <FlipWords words={["developers", "designers", "creators"]} duration={5000} />
                                </div>
                            </div>
                        }
                        code={`<FlipWords 
  words={["developers", "designers", "creators"]} 
  duration={5000} 
/>`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Standalone Usage</h3>
                    <ComponentPreview
                        preview={
                            <div className="flex min-h-[100px] items-center justify-center">
                                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                                    <FlipWords words={["Hello", "Bonjour", "Hola", "Ciao", "こんにちは"]} />
                                </div>
                            </div>
                        }
                        code={`<div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
  <FlipWords words={["Hello", "Bonjour", "Hola", "Ciao", "こんにちは"]} />
</div>`}
                    />
                </div>
            </section>

            {/* Props */}
            <DocsProps
                props={[
                    {
                        name: "words",
                        type: "string[]",
                        defaultValue: "required",
                        description: "Array of words to cycle through",
                    },
                    {
                        name: "duration",
                        type: "number",
                        defaultValue: "3000",
                        description: "Duration in milliseconds to display each word before switching",
                    },
                    {
                        name: "className",
                        type: "string",
                        defaultValue: "undefined",
                        description: "Additional CSS classes for the word container",
                    },
                ]}
            />
        </div>
    );
}
