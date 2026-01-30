import { ContentSidebar } from "@/components/ui/content-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            {/* <ContentSidebar /> */}
            <div className="w-full h-full">
                {children}
            </div>
        </SidebarProvider>
    );
}
