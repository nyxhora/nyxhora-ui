"use client"

import { Button } from "@/registry/ui/button"
import { toast } from "sonner"

export function SonnerDemo() {
    return (
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
    )
}

export function SonnerExamples() {
    return (
        <div className="flex flex-col gap-4">
            <Button variant="outline" onClick={() => toast.success("Event has been created")}>Success</Button>
            <Button variant="outline" onClick={() => toast.info("Event has been created")}>Info</Button>
            <Button variant="outline" onClick={() => toast.warning("Event has been created")}>Warning</Button>
            <Button variant="outline" onClick={() => toast.error("Event has been created")}>Error</Button>
        </div>
    )
}

export function SonnerPositionDemo() {
    return (
        <div className="flex flex-wrap gap-4">
            <Button variant="outline" onClick={() => toast("Event has been created", { position: "top-left" })}>Top Left</Button>
            <Button variant="outline" onClick={() => toast("Event has been created", { position: "top-center" })}>Top Center</Button>
            <Button variant="outline" onClick={() => toast("Event has been created", { position: "top-right" })}>Top Right</Button>
            <Button variant="outline" onClick={() => toast("Event has been created", { position: "bottom-left" })}>Bottom Left</Button>
            <Button variant="outline" onClick={() => toast("Event has been created", { position: "bottom-center" })}>Bottom Center</Button>
            <Button variant="outline" onClick={() => toast("Event has been created", { position: "bottom-right" })}>Bottom Right</Button>
        </div>
    )
}
