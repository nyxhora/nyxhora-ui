import { AntsCard } from "@/registry/ui/ants-card";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export default function AntsCardDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Ants Card"
                description="A delightful card component with animated ants walking around it. Perfect for adding a playful touch to your UI, onboarding screens, or empty states."
            />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="relative py-20 w-full rounded-lg overflow-hidden flex items-center justify-center"
                        style={{
                            background: "linear-gradient(45deg, #7ae298 0%, #9af282 100%)",
                        }}
                    >
                        <AntsCard title="Nyxhora UI" />
                    </div>
                }
                code={`<AntsCard title="Nyxhora UI" />`}
            />

            {/* Installation */}
            <DocsInstallation name="ants-card" />

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { AntsCard } from "@/registry/ui/ants-card"

export default function FunCard() {
  return (
    <div className="flex items-center justify-center p-16 bg-gradient-to-br from-green-300 to-green-400">
      <AntsCard 
        title="Welcome!"
        antCount={4}
        size={280}
      />
    </div>
  )
}`}
                language="tsx"
            />

            {/* Variations */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Variations</h2>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Fun Message</h3>
                        <div className="relative py-16 w-full rounded-lg overflow-hidden flex items-center justify-center"
                            style={{
                                background: "linear-gradient(45deg, #f093fb 0%, #f5576c 100%)",
                            }}
                        >
                            <AntsCard title="Bugs are features! 🐛" antCount={3} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Developer Vibes</h3>
                        <div className="relative py-16 w-full rounded-lg overflow-hidden flex items-center justify-center"
                            style={{
                                background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
                            }}
                        >
                            <AntsCard title="Ship it! 🚀" antCount={2} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Examples */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Single Ant</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative py-16 w-full rounded-lg overflow-hidden flex items-center justify-center"
                                style={{
                                    background: "linear-gradient(45deg, #ffecd2 0%, #fcb69f 100%)",
                                }}
                            >
                                <AntsCard title="Lone Explorer" antCount={1} antColor="#8B4513" />
                            </div>
                        }
                        code={`<AntsCard title="Lone Explorer" antCount={1} antColor="#8B4513" />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">All Four Ants</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative py-16 w-full rounded-lg overflow-hidden flex items-center justify-center"
                                style={{
                                    background: "linear-gradient(45deg, #a8edea 0%, #fed6e3 100%)",
                                }}
                            >
                                <AntsCard title="Ant Colony! 🐜" antCount={4} />
                            </div>
                        }
                        code={`<AntsCard title="Ant Colony! 🐜" antCount={4} />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Custom Size</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative py-16 w-full rounded-lg overflow-hidden flex items-center justify-center"
                                style={{
                                    background: "linear-gradient(45deg, #c1dfc4 0%, #deecdd 100%)",
                                }}
                            >
                                <AntsCard title="Big Card!" size={300} antCount={4} />
                            </div>
                        }
                        code={`<AntsCard title="Big Card!" size={300} antCount={4} />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Dark Theme</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative py-16 w-full rounded-lg overflow-hidden flex items-center justify-center bg-neutral-900">
                                <AntsCard
                                    title="Dark Mode 🌙"
                                    backgroundColor="#1f1f1f"
                                    antColor="#ffffff"
                                />
                            </div>
                        }
                        code={`<AntsCard 
  title="Dark Mode 🌙" 
  backgroundColor="#1f1f1f" 
  antColor="#ffffff"
/>`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Custom Content</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative py-16 w-full rounded-lg overflow-hidden flex items-center justify-center"
                                style={{
                                    background: "linear-gradient(45deg, #89f7fe 0%, #66a6ff 100%)",
                                }}
                            >
                                <AntsCard antCount={3}>
                                    <div className="text-center p-4">
                                        <div className="text-4xl mb-2">🎉</div>
                                        <h3 className="text-lg font-bold">Congratulations!</h3>
                                        <p className="text-sm text-gray-600">You found the ants</p>
                                    </div>
                                </AntsCard>
                            </div>
                        }
                        code={`<AntsCard antCount={3}>
  <div className="text-center p-4">
    <div className="text-4xl mb-2">🎉</div>
    <h3 className="text-lg font-bold">Congratulations!</h3>
    <p className="text-sm text-gray-600">You found the ants</p>
  </div>
</AntsCard>`}
                    />
                </div>
            </section>

            {/* Nyxhora Fun */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Nyxhora Sayings 😄</h2>

                <div className="grid gap-6 md:grid-cols-3">
                    <div className="relative py-12 rounded-lg overflow-hidden flex items-center justify-center"
                        style={{
                            background: "linear-gradient(45deg, #ff9a9e 0%, #fecfef 100%)",
                        }}
                    >
                        <AntsCard title="Bug-free since never" size={180} antCount={2} />
                    </div>
                    <div className="relative py-12 rounded-lg overflow-hidden flex items-center justify-center"
                        style={{
                            background: "linear-gradient(45deg, #a18cd1 0%, #fbc2eb 100%)",
                        }}
                    >
                        <AntsCard title="Works on my machine" size={180} antCount={3} />
                    </div>
                    <div className="relative py-12 rounded-lg overflow-hidden flex items-center justify-center"
                        style={{
                            background: "linear-gradient(45deg, #fad0c4 0%, #ffd1ff 100%)",
                        }}
                    >
                        <AntsCard title="It's not a bug" size={180} antCount={4} />
                    </div>
                </div>
            </section>

            {/* Props */}
            <DocsProps
                props={[
                    {
                        name: "title",
                        type: "string",
                        defaultValue: "Nyxhora UI",
                        description: "Card title text",
                    },
                    {
                        name: "antCount",
                        type: "number",
                        defaultValue: "4",
                        description: "Number of ants (1-4)",
                    },
                    {
                        name: "size",
                        type: "number",
                        defaultValue: "250",
                        description: "Card size in pixels",
                    },
                    {
                        name: "backgroundColor",
                        type: "string",
                        defaultValue: "#ffffff",
                        description: "Card background color",
                    },
                    {
                        name: "antColor",
                        type: "string",
                        defaultValue: "#000000",
                        description: "Ant color",
                    },
                    {
                        name: "borderRadius",
                        type: "number",
                        defaultValue: "16",
                        description: "Card border radius in pixels",
                    },
                    {
                        name: "children",
                        type: "React.ReactNode",
                        defaultValue: "undefined",
                        description: "Custom content instead of title",
                    },
                    {
                        name: "className",
                        type: "string",
                        defaultValue: "undefined",
                        description: "Additional CSS classes",
                    },
                ]}
            />
        </div>
    );
}
