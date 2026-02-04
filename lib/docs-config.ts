// Documentation Navigation Configuration
// This file defines all documentation pages and their navigation structure
// The order of items determines the prev/next navigation

export interface DocsNavItem {
    title: string;
    href: string;
    description?: string;
    isNew?: boolean;
    isUpdated?: boolean;
    special?: boolean;
}

export interface DocsNavCategory {
    title: string;
    items: DocsNavItem[];
}

export const docsConfig: DocsNavCategory[] = [
    {
        title: "Getting Started",
        items: [
            {
                title: "Introduction",
                href: "/docs",
                description: "Welcome to Nyxhora UI- Composable UI for modern builders",
            },
            {
                title: "Installation",
                href: "/docs/installation",
                description: "How to install and set up Nyxhora UIin your project",
            },
            {
                title: "Components",
                href: "/docs/components",
                description: "All available components",
            },
            {
                title: "Changelog",
                href: "/docs/changelog",
                description: "Latest updates and changes",
                isNew: true,
            },
        ],
    },
    {
        title: "Form Components",
        items: [
            {
                title: "Button",
                href: "/docs/components/button",
                description: "Interactive button elements with variants",
                isUpdated: true,
            },
            {
                title: "Awesome Button",
                href: "/docs/components/awesome-button",
                description: "Enhanced animated button component",
                isNew: true,
            },
            {
                title: "Magic Button",
                href: "/docs/components/magic-button",
                description: "Enhanced Magic button component",
                isNew: true,
            },
            {
                title: "Input",
                href: "/docs/components/input",
                description: "Text input fields",
            },
            {
                title: "Textarea",
                href: "/docs/components/textarea",
                description: "Multi-line text input",
            },
            {
                title: "Checkbox",
                href: "/docs/components/checkbox",
                description: "Selection controls",
            },
            {
                title: "Radio Group",
                href: "/docs/components/radio-group",
                description: "Radio button groups",
            },
            {
                title: "Select",
                href: "/docs/components/select",
                description: "Selection dropdowns",
            },
            {
                title: "Slider",
                href: "/docs/components/slider",
                description: "Range input controls",
            },
            {
                title: "Switch",
                href: "/docs/components/switch",
                description: "Toggle switches",
            },
            {
                title: "Label",
                href: "/docs/components/label",
                description: "Form labels",
            },

        ],
    },
    {
        title: "Display Components",
        items: [
            {
                title: "Alert",
                href: "/docs/components/alert",
                description: "Display important messages",
            },
            {
                title: "Avatar",
                href: "/docs/components/avatar",
                description: "User profile images",
            },
            {
                title: "Badge",
                href: "/docs/components/badge",
                description: "Status indicators and labels",
            },
            {
                title: "Shiny Card",
                href: "/docs/components/shiny-card",
                description: "Shimmering shiny card",
                isNew: true,
            },
            {
                title: "Magic Card",
                href: "/docs/components/magic-card",
                description: "Animated magic card",
                isNew: true,
            },
            {
                title: "Magic Text",
                href: "/docs/components/magic-text",
                description: "Text with magic border effect",
                isNew: true,
            },
            {
                title: "Spotlight Text",
                href: "/docs/components/spotlight-text",
                description: "Stencil text with spotlight",
                isNew: true,
            },
            {
                title: "Variable Shadow Text",
                href: "/docs/components/variable-shadow-text",
                description: "Variable font shadow effect",
                isNew: true,
            },
            {
                title: "Sparkles",
                href: "/docs/components/sparkles",
                description: "Sparkles effect for text or components",
            },
            {
                title: "Component Showcard",
                href: "/docs/components/component-showcard",
                description: "Component showcase card",
                isNew: true,
            },
            {
                title: "Skeleton",
                href: "/docs/components/skeleton",
                description: "Loading placeholder",
            },
            {
                title: "Spinner",
                href: "/docs/components/spinner",
                description: "Loading spinner with variants",
                isNew: true,
            },
            {
                title: "Progress",
                href: "/docs/components/progress",
                description: "Progress indicators",
            },

            {
                title: "Separator",
                href: "/docs/components/separator",
                description: "Visual dividers",
            },
            {
                title: "Cover",
                href: "/docs/components/cover",
                description: "Cover image component",
            },
        ],
    },
    {
        title: "Overlay Components",
        items: [
            {
                title: "Dialog",
                href: "/docs/components/dialog",
                description: "Modal dialog windows",
            },
            {
                title: "Sheet",
                href: "/docs/components/sheet",
                description: "Slide-out panels",
            },
            {
                title: "Action Bar",
                href: "/docs/components/action-bar",
                description: "Expanding action list",
                isNew: true,
            },
            {
                title: "3D Card",
                href: "/docs/components/three-d-card",
                description: "3D perspective card",
                isNew: true,
            },
            {
                title: "Tooltip",
                href: "/docs/components/tooltip",
                description: "Hover information tips",
            },
            {
                title: "Sonner",
                href: "/docs/components/sonner",
                description: "Toast notifications",
            },
            {
                title: "Dynamic Island",
                href: "/docs/components/dynamic-island",
                description: "iOS-style notification island",
                isNew: true,
            },
        ],
    },
    {
        title: "Navigation",
        items: [
            {
                title: "Navbar Menu",
                href: "/docs/components/navbar-menu",
                description: "Navigation menu items",
            },
            {
                title: "Tabs",
                href: "/docs/components/tabs",
                description: "Tabbed navigation",
            },
            {
                title: "URL Tabs",
                href: "/docs/components/url-tabs",
                description: "URL-synced tabs",
            },
            {
                title: "Floating Dock Dialog",
                href: "/docs/components/floating-dock-dialog",
                description: "Enhanced dock with bottom sheet dialog",
                isNew: true,
            },
            {
                title: "Footer",
                href: "/docs/components/footer",
                description: "Page footer component",
            },
            {
                title: "Workspace Label",
                href: "/docs/components/workspace-label",
                description: "Workspace switcher with member avatars",
                isNew: true,
            },
        ],
    },
    {
        title: "Layout",
        items: [
            {
                title: "Scroll Area",
                href: "/docs/components/scroll-area",
                description: "Custom scrollable containers",
            },
            {
                title: "Image Slider",
                href: "/docs/components/image-slider",
                description: "Responsive image slider",
                isNew: true,
            },
            {
                title: "Corner Grid",
                href: "/docs/components/corner-grid",
                description: "Tech-inspired corner grid",
                isNew: true,
            },
            {
                title: "Image Grid",
                href: "/docs/components/image-grid",
                description: "Interactive hero image grid",
                isNew: true,
            }
        ],
    },
    {
        title: "Effects & Animations",
        items: [
            {
                title: "Background Beams",
                href: "/docs/components/background-beams",
                description: "Animated beam effects",
            },
            {
                title: "Background Lines",
                href: "/docs/components/background-lines",
                description: "Animated line patterns",
            },
            {
                title: "Geist Background",
                href: "/docs/components/geist-background",
                description: "Flickering geist-inspired background",
                isNew: true,
            },
            {
                title: "Shooting Stars",
                href: "/docs/components/shooting-stars",
                description: "Animated starfield with shooting stars",
                isNew: true,
            },
            {
                title: "Color Drip",
                href: "/docs/components/color-drip",
                description: "Animated falling color lines",
                isNew: true,
            },
            {
                title: "Glowing Dot Grid",
                href: "/docs/components/glowing-dot-grid",
                description: "Interactive dot grid with glow effects",
                isNew: true,
            },
            {
                title: "Glowing Effect",
                href: "/docs/components/glowing-effect",
                description: "Glow animations",
            },
            {
                title: "Sparkles",
                href: "/docs/components/sparkles",
                description: "Particle effects",
            },
            {
                title: "Spotlight",
                href: "/docs/components/spotlight",
                description: "Spotlight hover effects",
            },
            {
                title: "Smooth Cursor",
                href: "/docs/components/smooth-cursor",
                description: "Smooth cursor following",
                isNew: true,
            },
            {
                title: "Animated Shiny Text",
                href: "/docs/components/animated-shiny-text",
                description: "Shimmering text effect",
            },
            {
                title: "Gradient Text",
                href: "/docs/components/gradient-text",
                description: "Customizable gradient text",
                isNew: true,
            },
            {
                title: "Hover Reveal Text",
                href: "/docs/components/hover-reveal-text",
                description: "Blur-to-reveal text effect",
                isNew: true,
            },
            {
                title: "Flip Words",
                href: "/docs/components/flip-words",
                description: "Word flip animation",
            },
            {
                title: "Text Hover Effect",
                href: "/docs/components/text-hover-effect",
                description: "Text hover animations",
            },
            {
                title: "Rainbow Button",
                href: "/docs/components/rainbow-button",
                description: "Animated rainbow gradient button",
                isNew: true,
            },
            {
                title: "Ants Card",
                href: "/docs/components/ants-card",
                description: "Card with animated walking ants",
                isNew: true,
            },
            {
                title: "Gradient Background",
                href: "/docs/components/gradient-background",
                description: "Configurable gradient background",
                isNew: true,
            },
            {
                title: "Code Block",
                href: "/docs/components/code-block",
                description: "Code block with syntax highlighting",
                isNew: true,
            },
            {
                title: "Anime Card",
                href: "/docs/components/anime-card",
                description: "Glassmorphism anime card",
                isNew: true,
            },
            {
                title: "Music Player",
                href: "/docs/components/music-player",
                description: "Glassmorphism music player",
                isNew: true,
            },
        ],
    },
    {
        title: "Utilities",
        items: [
            {
                title: "Exit Intent Demo",
                href: "/docs/components/exit-intent-demo",
                description: "Exit intent detection demo",
                special: true,
            },
        ],
    },
];

// Flatten all items for pagination
export function getAllDocsItems(): DocsNavItem[] {
    return docsConfig.flatMap((category) => category.items);
}

// Get previous and next items for pagination
export function getDocsPagination(currentHref: string): {
    prev: DocsNavItem | null;
    next: DocsNavItem | null;
} {
    const allItems = getAllDocsItems();
    const currentIndex = allItems.findIndex((item) => item.href === currentHref);

    return {
        prev: currentIndex > 0 ? allItems[currentIndex - 1] : null,
        next: currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null,
    };
}

// Find category for a given href
export function getDocsCategory(href: string): DocsNavCategory | null {
    return docsConfig.find((category) =>
        category.items.some((item) => item.href === href)
    ) || null;
}

// Get total component count
export function getComponentCount(): number {
    return docsConfig
        .filter((cat) => cat.title !== "Getting Started")
        .flatMap((cat) => cat.items).length;
}
