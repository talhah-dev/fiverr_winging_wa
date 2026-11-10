import Link from "next/link";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import type { SidebarNavGroup } from "@/components/app-shared";
import { ChevronRightIcon } from "lucide-react";

export function NavGroup({
	label,
	items,
	pathname,
}: SidebarNavGroup & { pathname?: string }) {
	return (
		<SidebarGroup>
			{label && (
				<SidebarGroupLabel className="text-xs font-medium text-slate-400 px-2 py-1">
					{label}
				</SidebarGroupLabel>
			)}
			<SidebarMenu>
				{items.map((item) => (
					<Collapsible
						className="group/collapsible"
						defaultOpen={
							item.path === pathname ||
							item.subItems?.some((subItem) => subItem.path === pathname)
						}
						key={item.title}
						render={<SidebarMenuItem />}
					>
						{item.subItems?.length ? (
							<>
								<CollapsibleTrigger
									render={
										<SidebarMenuButton
											isActive={item.path === pathname}
											className={
												item.path === pathname
													? "!bg-white/15 !text-white font-semibold rounded-lg [&_svg]:!text-white"
													: "!text-slate-300 hover:!bg-white/10 hover:!text-white font-medium rounded-lg transition-colors [&_svg]:!text-slate-400 hover:[&_svg]:!text-white"
											}
										/>
									}
								>
									{item.icon}
									<span>{item.title}</span>
									<ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 text-slate-400" />
								</CollapsibleTrigger>
								<CollapsibleContent>
									<SidebarMenuSub>
										{item.subItems?.map((subItem) => (
											<SidebarMenuSubItem key={subItem.title}>
												<SidebarMenuSubButton
													isActive={subItem.path === pathname}
													className={
														subItem.path === pathname
															? "!bg-white/15 !text-white font-semibold rounded-md [&_svg]:!text-white"
															: "!text-slate-300 hover:!bg-white/10 hover:!text-white font-medium rounded-md transition-colors [&_svg]:!text-slate-400 hover:[&_svg]:!text-white"
													}
													render={<Link href={subItem.path ?? "#"} />}
												>
													{subItem.icon}
													<span>{subItem.title}</span>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								</CollapsibleContent>
							</>
						) : (
							<SidebarMenuButton
								isActive={item.path === pathname}
								className={
									item.path === pathname
										? "!bg-white/15 !text-white font-semibold rounded-lg shadow-xs [&_svg]:!text-white"
										: "!text-slate-300 hover:!bg-white/10 hover:!text-white font-medium rounded-lg transition-colors [&_svg]:!text-slate-400 hover:[&_svg]:!text-white"
								}
								render={<Link href={item.path ?? "#"} />}
							>
								{item.icon}
								<span>{item.title}</span>
							</SidebarMenuButton>
						)}
					</Collapsible>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
