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
                description: "Welcome to NyxhoraUI - Modern UI components for Next.js",
            },
            {
                title: "Installation",
                href: "/docs/installation",
                description: "How to install and set up NyxhoraUI in your project",
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
            {
                title: "Form",
                href: "/docs/components/form",
                description: "Form validation and handling",
            },
            {
                title: "Calendar",
                href: "/docs/components/calendar",
                description: "Date picker calendar",
            },
            {
                title: "Icon Picker",
                href: "/docs/components/icon-picker",
                description: "Icon selection component",
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
            // {
            //     title: "Avatar Group",
            //     href: "/docs/components/avatar-group",
            //     description: "Stacked avatar display",
            // },
            {
                title: "Badge",
                href: "/docs/components/badge",
                description: "Status indicators and labels",
            },
            // {
            //     title: "Unread Badge",
            //     href: "/docs/components/unread-badge",
            //     description: "Notification counter badge",
            // },
            {
                title: "Card",
                href: "/docs/components/card",
                description: "Container for content",
            },
            {
                title: "Display Card",
                href: "/docs/components/display-card",
                description: "Enhanced display card",
            },
            {
                title: "Component Showcard",
                href: "/docs/components/component-showcard",
                description: "Component showcase card",
                isNew: true,
            },
            {
                title: "Comet Card",
                href: "/docs/components/comet-card",
                description: "Animated comet effect card",
                isNew: true,
            },
            {
                title: "Expandable Card",
                href: "/docs/components/expandable-card",
                description: "Expandable content cards",
            },
            {
                title: "Skeleton",
                href: "/docs/components/skeleton",
                description: "Loading placeholder",
            },
            {
                title: "Progress",
                href: "/docs/components/progress",
                description: "Progress indicators",
            },
            {
                title: "Table",
                href: "/docs/components/table",
                description: "Data tables",
            },
            {
                title: "Chart",
                href: "/docs/components/chart",
                description: "Data visualization charts",
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
            // {
            //     title: "Alert Dialog",
            //     href: "/docs/components/alert-dialog",
            //     description: "Modal dialogs for confirmations",
            // },
            {
                title: "Sheet",
                href: "/docs/components/sheet",
                description: "Slide-out panels",
            },
            {
                title: "Drawer",
                href: "/docs/components/drawer",
                description: "Drawer navigation panels",
            },
            {
                title: "Popover",
                href: "/docs/components/popover",
                description: "Floating content panels",
            },
            {
                title: "Tooltip",
                href: "/docs/components/tooltip",
                description: "Hover information tips",
            },
            {
                title: "Dropdown Menu",
                href: "/docs/components/dropdown-menu",
                description: "Context and action menus",
            },
            {
                title: "Context Menu",
                href: "/docs/components/context-menu",
                description: "Right-click context menus",
            },
            {
                title: "Command",
                href: "/docs/components/command",
                description: "Command palette / search",
            },
            {
                title: "Sonner",
                href: "/docs/components/sonner",
                description: "Toast notifications",
            },
            {
                title: "Exit Confirmation Modal",
                href: "/docs/components/exit-confirmation-modal",
                description: "Unsaved changes warning",
            },
        ],
    },
    {
        title: "Navigation",
        items: [
            {
                title: "Navbar",
                href: "/docs/components/navbar",
                description: "Top navigation bar",
            },
            {
                title: "Navbar Menu",
                href: "/docs/components/navbar-menu",
                description: "Navigation menu items",
            },
            {
                title: "Floating Navbar",
                href: "/docs/components/floating-navbar",
                description: "Floating navigation bar",
            },
            {
                title: "Sidebar",
                href: "/docs/components/sidebar",
                description: "Navigation sidebars",
            },
            {
                title: "Content Sidebar",
                href: "/docs/components/content-sidebar",
                description: "Content navigation sidebar",
            },
            {
                title: "TOC Sidebar",
                href: "/docs/components/toc-sidebar",
                description: "Table of contents sidebar",
            },
            {
                title: "Breadcrumb",
                href: "/docs/components/breadcrumb",
                description: "Hierarchical navigation",
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
                title: "Floating Dock",
                href: "/docs/components/floating-dock",
                description: "macOS-style dock navigation",
                isNew: true,
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
                title: "Smart Sidebar",
                href: "/docs/components/smart-sidebar",
                description: "Dual-pane sidebar for desktop apps",
                isNew: true,
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
                title: "Resizable",
                href: "/docs/components/resizable",
                description: "Resizable panels and layouts",
            },
            {
                title: "Collapsible",
                href: "/docs/components/collapsible",
                description: "Expandable sections",
            },
            {
                title: "Carousel",
                href: "/docs/components/carousel",
                description: "Image and content sliders",
                isNew: true,
            },
            {
                title: "Bento Grid",
                href: "/docs/components/bento-grid",
                description: "Bento box grid layout",
                isNew: true,
            },
            {
                title: "Toggle",
                href: "/docs/components/toggle",
                description: "Toggle button",
            },
            {
                title: "Toggle Group",
                href: "/docs/components/toggle-group",
                description: "Toggle button groups",
            },
            {
                title: "Theme Toggle",
                href: "/docs/components/theme-toggle",
                description: "Dark/light mode toggle",
            },
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
                title: "Flip Words",
                href: "/docs/components/flip-words",
                description: "Word flip animation",
            },
            {
                title: "Text Hover Effect",
                href: "/docs/components/text-hover-effect",
                description: "Text hover animations",
            },
        ],
    },
    {
        title: "Utilities",
        items: [
            {
                title: "Logo",
                href: "/docs/components/logo",
                description: "Brand logo component",
            },
            {
                title: "Workspace Switcher",
                href: "/docs/components/workspace-switcher",
                description: "Workspace switching label",
            },
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
