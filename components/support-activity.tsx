import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { CalendarCheck, Mail, Video, PackageCheck, ArrowRightIcon } from "lucide-react";

const items = [
	{
		title: "Manta TakeOff Evo Assist demo booked for Point Walter",
		time: "12 min ago",
		icon: <CalendarCheck className="text-emerald-400" />,
	},
	{
		title: "New inquiry: AFS Silk v2 850 carbon foil stock in Perth",
		time: "28 min ago",
		icon: <Mail className="text-red-400" />,
	},
	{
		title: "Home YouTube Video Slot 1 updated to AFS Blackbird Review",
		time: "1 hr ago",
		icon: <Video className="text-orange-400" />,
	},
	{
		title: "Equipment catalog updated: Mini Electric Pump marked In Stock",
		time: "3 hr ago",
		icon: <PackageCheck className="text-sky-400" />,
	},
] as const;

export function SupportActivity({
	className,
	...props
}: ComponentProps<typeof Card>) {
	return (
		<Card className={cn("gap-0 shadow-none dark:ring-0 bg-[#383D47] border-white/10 text-white flex flex-col justify-between md:col-span-2", className)} {...props}>
			<CardHeader className="border-b border-white/10 p-5">
				<CardTitle className="text-base font-bold text-white">Recent Operations</CardTitle>
				<CardDescription className="text-xs text-slate-400">Live gear updates and customer actions</CardDescription>
			</CardHeader>
			<CardContent className="px-0 py-2">
				<ul className="flex flex-col divide-y divide-white/10">
					{items.map((item) => (
						<li className="flex h-16 items-center gap-3 px-4 hover:bg-white/5 transition-colors" key={item.title}>
							<span
								aria-hidden="true"
								className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 [&_svg]:size-4"
							>
								{item.icon}
							</span>
							<div className="min-w-0 flex-1 space-y-0.5">
								<p className="line-clamp-2 text-pretty text-white text-xs font-medium leading-snug">
									{item.title}
								</p>
								<p className="text-slate-400 text-[11px] tabular-nums">
									{item.time}
								</p>
							</div>
						</li>
					))}
				</ul>
			</CardContent>
			<div className="flex items-center justify-center border-t border-white/10 p-3 bg-white/5">
				<Button
					size="sm"
					variant="ghost"
					render={<Link href="/dashboard/contacts" />}
					nativeButton={false}
					className="text-slate-300 hover:text-white hover:bg-white/10 text-xs font-semibold"
				>
					View All Inquiries
					<ArrowRightIcon className="size-3.5 ml-1.5" />
				</Button>
			</div>
		</Card>
	);
}
