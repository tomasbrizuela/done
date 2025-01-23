import AppSidebar from "@/components/ui/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <SidebarProvider>
                <AppSidebar />
                <main>
                    <SidebarTrigger />
                    {children}
                </main>
            </SidebarProvider>
        </div>
    )
}