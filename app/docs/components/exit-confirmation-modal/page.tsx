"use client";

import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";
import { useState } from "react";
// import ExitConfirmationModal from "@/components/ui/exit-confirmation-modal"; // Assuming default export

export default function ExitConfirmationModalDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Exit Confirmation Modal"
                description="A modal that prompts the user for confirmation when attempting to leave the page with unsaved changes."
            />

            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

