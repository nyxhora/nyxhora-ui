"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from "./sidebar";

const sidebarConfig = [
    {
        category: "Getting Started",
        items: [
            { name: "Introduction", href: "" },
            { name: "Installation", href: "/installation" },
            { name: "Changelog", href: "/changelog" },
        ],
    },
    {
        category: "Components",
        items: [
            { name: "Accordion", href: "/components/accordion" },
            { name: "Alert", href: "/components/alert" },
            { name: "Button", href: "/components/button" },
            { name: "Card", href: "/components/card" },
            { name: "Checkbox", href: "/components/checkbox" },
            { name: "Dialog", href: "/components/dialog" },
            { name: "Input", href: "/components/input" },
            { name: "Navbar", href: "/components/navbar" },
            { name: "Sidebar", href: "/components/sidebar" },
        ],
    },
    {
        category: "Layout",
        items: [
            { name: "Aspect Ratio", href: "/components/aspect-ratio" },
            { name: "Resizable", href: "/components/resizable" },
            { name: "Scroll Area", href: "/components/scroll-area" },
        ],
    },
];

export function ContentSidebar() {
    const pathname = usePathname();

    return (
        <div className="relative h-full flex">

            <Sidebar>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Application</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {sidebarConfig.map((item, index) => (
                                    <SidebarGroup>
                                        <SidebarGroupLabel>{item.category}</SidebarGroupLabel>
                                        <SidebarGroupContent>
                                            <SidebarMenu>
                                                {item.items.map((item) => (
                                                    <SidebarMenuItem key={item.name}>
                                                        <SidebarMenuButton asChild>
                                                            <a href={item.href}>
                                                                <span>{item.name}</span>
                                                            </a>
                                                        </SidebarMenuButton>
                                                    </SidebarMenuItem>
                                                ))}
                                            </SidebarMenu>
                                        </SidebarGroupContent>
                                    </SidebarGroup>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href="https://www.nyxhora.com">
                                    <span>Try Nyxhora</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
                <SidebarRail enableDrag={true} />
            </Sidebar>
        </div>
    )


}
