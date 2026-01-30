"use client";

import { DocsHeader, DocsPreview, DocsProps, CodeBlockWrapper } from "@/components/ui/docs-documentation";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function CalendarDocsPage() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <div className="space-y-10">
            <DocsHeader
                title="Calendar"
                description="A date field component that allows users to enter and edit date."
            />

            <DocsPreview
                title="Default"
                previewCode={
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                    />
                }
                code={`const [date, setDate] = useState<Date | undefined>(new Date())

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>`}
            />

            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add calendar`}
            />
        </div>
    );
}
