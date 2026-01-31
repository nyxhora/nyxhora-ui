"use client";

import { Cover } from "@/components/ui/cover";
import { useState } from "react";
import { toast } from "sonner";
import { DocsPreview, ComponentPreview } from "@/components/ui/docs-documentation";

export function CoverDemo() {
    const [coverUrl, setCoverUrl] = useState<string | undefined>(
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    );

    const handleRemove = () => {
        setCoverUrl(undefined);
        toast.success("Cover removed");
    };

    const handleChange = () => {
        toast.info("Change cover clicked");
    };

    return (
        <DocsPreview
            title="Preview"
            previewCode={
                <div className="w-full rounded-lg overflow-hidden border border-border">
                    <Cover
                        url={coverUrl}
                        onChange={handleChange}
                        onRemove={handleRemove}
                    />
                </div>
            }
            code={`<Cover
  url="https://images.unsplash.com/..."
  onChange={() => handleCoverChange()}
  onRemove={() => handleCoverRemove()}
/>`}
        />
    );
}

export function CoverSizeDefault() {
    return (
        <ComponentPreview
            preview={
                <div className="w-full rounded-lg overflow-hidden border border-border">
                    <Cover
                        url="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1000&q=80"
                        preview
                    />
                </div>
            }
            code={`<Cover url="..." />`}
        />
    );
}

export function CoverSizeSmall() {
    return (
        <ComponentPreview
            preview={
                <div className="w-full rounded-lg overflow-hidden border border-border">
                    <Cover
                        url="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1000&q=80"
                        size="sm"
                        preview
                    />
                </div>
            }
            code={`<Cover url="..." size="sm" />`}
        />
    );
}

export function CoverSizeLarge() {
    return (
        <ComponentPreview
            preview={
                <div className="w-full rounded-lg overflow-hidden border border-border">
                    <Cover
                        url="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1000&q=80"
                        size="lg"
                        preview
                    />
                </div>
            }
            code={`<div className="w-full rounded-lg overflow-hidden border border-border">
    <Cover
        url="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1000&q=80"
        size="lg"
        preview
    />
</div>`}
        />
    );
}

export function CoverPlaceholder() {
    return (
        <ComponentPreview
            preview={
                <div className="w-full rounded-lg overflow-hidden border border-border">
                    <Cover />
                </div>
            }
            code={`<div className="w-full rounded-lg overflow-hidden border border-border">
    <Cover />
</div>`}
        />
    );
}

export function CoverWithChildren() {
    return (
        <ComponentPreview
            preview={
                <div className="w-full rounded-lg overflow-hidden border border-border">
                    <Cover
                        url="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1000&q=80"
                        preview
                    >
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <h2 className="text-2xl font-bold text-white">
                                Hero Title
                            </h2>
                            <p className="text-white/80 mt-2">
                                Subtitle or description text
                            </p>
                        </div>
                    </Cover>
                </div>
            }
            code={`<div className="w-full rounded-lg overflow-hidden border border-border">
    <Cover url="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1000&q=80">
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h2 className="text-2xl font-bold text-white">Hero Title</h2>
            <p className="text-white/80 mt-2">Subtitle</p>
        </div>
    </Cover>
</div>`}
        />
    );
}
