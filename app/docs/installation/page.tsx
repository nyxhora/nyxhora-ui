import { Metadata } from "next";
import InstallationClient from "./installation-client";

export const metadata: Metadata = {
    title: "Installation - Get Started with Nyxhora UI",
    description:
        "Install Nyxhora UI in your Next.js project in minutes. Step-by-step guide to set up the React component library with Tailwind CSS, TypeScript, and Framer Motion.",
    keywords: [
        "install Nyxhora UI",
        "React component library setup",
        "Next.js UI library installation",
        "Tailwind CSS components setup",
        "shadcn UI alternative installation",
    ],
    openGraph: {
        title: "Installation - Nyxhora UI",
        description:
            "Get started with Nyxhora UI. Install 75+ React components in your Next.js project in minutes.",
        url: "https://ui.nyxhora.com/docs/installation",
        type: "article",
    },
    alternates: {
        canonical: "https://ui.nyxhora.com/docs/installation",
    },
};

export default function InstallationPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        name: "How to Install Nyxhora UI",
                        description:
                            "Step-by-step guide to install Nyxhora UI React component library in your Next.js project.",
                        step: [
                            {
                                "@type": "HowToStep",
                                name: "Create a new project",
                                text: "Start by creating a new Next.js project: npx create-next-app@latest my-app --typescript --tailwind --eslint",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Install dependencies",
                                text: "Install required dependencies: npm install class-variance-authority clsx tailwind-merge lucide-react",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Configure utilities",
                                text: "Create a lib/utils.ts file with the cn helper function for class name merging.",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Add components",
                                text: "Copy component files from Nyxhora UI documentation into your components/ui directory, or use the CLI: npx shadcn@latest add.",
                            },
                        ],
                    }),
                }}
            />
            <InstallationClient />
        </>
    );
}

