import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppHeader } from "@/components/app-header";
import { AppSidebar } from "@/components/app-sidebar";

export function AppShell({
	children,
	pathname = "/dashboard",
}: {
	children: React.ReactNode;
	pathname?: string;
}) {
	return (
		<div className="h-screen w-full overflow-hidden bg-[#4A505B] text-foreground">
			<SidebarProvider className="relative h-full w-full bg-[#4A505B] [&>[data-slot=sidebar-wrapper]]:min-h-0 [&>[data-slot=sidebar-wrapper]]:h-full [&>[data-slot=sidebar-wrapper]]:bg-[#4A505B]">
				<AppSidebar pathname={pathname} />
				<SidebarInset className="flex h-full min-h-0 flex-1 flex-col overflow-hidden !m-0 !rounded-none bg-[#4A505B] text-foreground shadow-none border-none">
					<AppHeader pathname={pathname} />
					<div
						data-lenis-prevent
						className="flex-1 min-h-0 overflow-y-auto p-4 md:p-6 bg-[#4A505B] text-foreground no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
					>
						{children}
					</div>
				</SidebarInset>
			</SidebarProvider>
		</div>
	);
}
