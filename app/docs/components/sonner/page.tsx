"use client";

import { DocsHeader, DocsPreview, CodeBlockWrapper } from "@/components/ui/docs-documentation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function SonnerDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Sonner"
                description="An opinionated toast component for React."
            />

            <DocsPreview
                title="Default"
                previewCode={
                    <Button
                        variant="outline"
                        onClick={() =>
                            toast("Event has been created", {
                                description: "Sunday, December 03, 2023 at 9:00 AM",
                                action: {
                                    label: "Undo",
                                    onClick: () => console.log("Undo"),
                                },
                            })
                        }
                    >
                        Show Toast
                    </Button>
                }
                code={`<Button
  variant="outline"
  onClick={() =>
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
  }
>
  Show Toast
</Button>`}
            />
            <DocsPreview title="Examples"
                variant="Types"
                previewCode={
                    <div className="flex flex-wrap gap-2">
                        <Button variant="outline" onClick={() => toast("Event has been created")}>
                            Default
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => toast.success("Event has been created")}
                        >
                            Success
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast.info("Be at the area 10 minutes before the event time")
                            }
                        >
                            Info
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast.warning("Event start time cannot be earlier than 8am")
                            }
                        >
                            Warning
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => toast.error("Event has not been created")}
                        >
                            Error
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => {
                                toast.promise<{ name: string }>(
                                    () =>
                                        new Promise((resolve) =>
                                            setTimeout(() => resolve({ name: "Event" }), 2000)
                                        ),
                                    {
                                        loading: "Loading...",
                                        success: (data) => `${data.name} has been created`,
                                        error: "Error",
                                    }
                                )
                            }}
                        >
                            Promise
                        </Button>
                    </div>
                }
                code={`<div className="flex flex-wrap gap-2">
    <Button variant="outline" onClick={() => toast("Event has been created")}>
        Default
    </Button>
    <Button
        variant="outline"
        onClick={() => toast.success("Event has been created")}
    >
        Success
    </Button>
    <Button
        variant="outline"
        onClick={() =>
            toast.info("Be at the area 10 minutes before the event time")
        }
    >
        Info
    </Button>
    <Button
        variant="outline"
        onClick={() =>
            toast.warning("Event start time cannot be earlier than 8am")
        }
    >
        Warning
    </Button>
    <Button
        variant="outline"
        onClick={() => toast.error("Event has not been created")}
    >
        Error
    </Button>
    <div className="flex flex-wrap gap-2">
    <Button variant="outline" onClick={() => toast("Event has been created")}>
        Default
    </Button>
    <Button
        variant="outline"
        onClick={() => toast.success("Event has been created")}
    >
        Success
    </Button>
    <Button
        variant="outline"
        onClick={() =>
            toast.info("Be at the area 10 minutes before the event time")
        }
    >
        Info
    </Button>
    <Button
        variant="outline"
        onClick={() =>
            toast.warning("Event start time cannot be earlier than 8am")
        }
    >
        Warning
    </Button>
    <Button
        variant="outline"
        onClick={() => toast.error("Event has not been created")}
    >
        Error
    </Button>

</div>`}
            />  

            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add sonner`}
            />
        </div>
    );
}
