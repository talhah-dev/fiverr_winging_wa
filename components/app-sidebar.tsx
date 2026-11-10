import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavGroup } from "@/components/nav-group";
import { footerNavLinks, navGroups } from "@/components/app-shared";
import { PlusIcon, SearchIcon } from "lucide-react";

export function AppSidebar({ pathname }: { pathname?: string }) {
	return (
		<Sidebar
			collapsible="icon"
			variant="sidebar"
			className="bg-[#343943] text-white border-r border-white/10 [&_[data-slot=sidebar-inner]]:bg-[#343943]"
		>
			<SidebarHeader className="h-16 justify-center border-b border-white/10 px-3 bg-[#343943]">
				<SidebarMenuButton
					size="lg"
					render={<Link href="/" className="flex items-center gap-2 overflow-hidden" />}
				>
					<Image
						src="/logo.png"
						alt="Winging WA"
						width={160}
						height={48}
						className="h-9 w-auto max-w-full object-contain"
						priority
					/>
				</SidebarMenuButton>
			</SidebarHeader>
			<SidebarContent data-lenis-prevent className="bg-[#343943] text-white">
				<SidebarGroup>
					<SidebarMenuItem className="flex items-center gap-2">
						<SidebarMenuButton
							className="min-w-8 bg-[#ef0e0a] text-white duration-200 ease-linear hover:bg-[#c40c08] hover:text-white active:bg-[#a80a07] active:text-white font-semibold shadow-xs cursor-pointer"
							tooltip="Quick Create"
						>
							<PlusIcon className="size-4 text-white" />
							<span>New Action</span>
						</SidebarMenuButton>
						<Button
							aria-label="Search"
							className="size-8 group-data-[collapsible=icon]:opacity-0 border-white/15 bg-white/5 hover:bg-white/10 text-white shadow-xs cursor-pointer"
							size="icon"
							variant="outline"
						>
							<SearchIcon className="size-4 text-slate-300" />
							<span className="sr-only">Search</span>
						</Button>
					</SidebarMenuItem>
				</SidebarGroup>
				{navGroups.map((group, index) => (
					<NavGroup
						key={`sidebar-group-${index}`}
						{...group}
						pathname={pathname}
					/>
				))}
			</SidebarContent>
			{footerNavLinks.length > 0 && (
				<SidebarFooter className="bg-[#343943] border-t border-white/10">
					<SidebarMenu className="mt-2">
						{footerNavLinks.map((item) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton
									className="text-slate-300 hover:bg-white/10 hover:text-white"
									isActive={item.path === pathname}
									size="sm"
									render={<Link href={item.path ?? "#"} />}
								>
									{item.icon}
									<span>{item.title}</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarFooter>
			)}
		</Sidebar>
	);
}
