import AppSidebar from "@/components/ui/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import GetUrl from '../../Utils/geturl'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <GetUrl>
            <div>
                <SidebarProvider>
                    <AppSidebar />
                    <main>
                        <SidebarTrigger />
                        {children}
                    </main>
                </SidebarProvider>
            </div>
        </GetUrl>
    )
}