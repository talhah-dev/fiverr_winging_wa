import Link from "next/link";
import { cn } from "@/lib/utils";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Delta, DeltaIcon, DeltaValue } from "@/components/delta";
import { Mail, Package, Video, CalendarCheck } from "lucide-react";

type Stat = {
	label: string;
	value: string;
	delta: number;
	footnote: string;
	lowerIsBetter: boolean;
	href: string;
	icon: React.ReactNode;
};

const stats: readonly Stat[] = [
	{
		label: "Contact Inquiries",
		value: "24",
		delta: 18.2,
		footnote: "vs last month (4 new today)",
		lowerIsBetter: false,
		href: "/dashboard/contacts",
		icon: <Mail className="size-4 text-[#ef0e0a]" />,
	},
	{
		label: "Featured Equipment",
		value: "18 Items",
		delta: 6,
		footnote: "featured on home slider",
		lowerIsBetter: false,
		href: "/dashboard/equipment",
		icon: <Package className="size-4 text-orange-400" />,
	},
	{
		label: "Home YouTube Links",
		value: "2 Active",
		delta: 100,
		footnote: "Slot 1: AFS • Slot 2: Manta",
		lowerIsBetter: false,
		href: "/dashboard/youtube-links",
		icon: <Video className="size-4 text-red-500" />,
	},
	{
		label: "WA Demo Bookings",
		value: "9 Sessions",
		delta: 28.5,
		footnote: "Swan River & Woodman Pt",
		lowerIsBetter: false,
		href: "/dashboard/contacts",
		icon: <CalendarCheck className="size-4 text-emerald-400" />,
	},
];

export function DashboardStats() {
	return (
		<>
			{stats.map((s) => (
				<Link href={s.href} key={s.label} className="block group">
					<Card className={cn("shadow-none dark:ring-0 bg-[#383D47] border-white/10 hover:border-[#ef0e0a]/50 transition-all duration-200 cursor-pointer h-full")}>
						<CardHeader className="flex flex-row items-center justify-between pb-2">
							<CardTitle className="font-medium text-slate-300 text-xs">
								{s.label}
							</CardTitle>
							{s.icon}
						</CardHeader>
						<CardContent className="flex flex-col gap-2">
							<p className="font-bold text-2xl tabular-nums text-white group-hover:text-red-400 transition-colors">
								{s.value}
							</p>
							<div className="flex items-center gap-1.5 text-xs">
								<Delta value={s.delta}>
									<DeltaIcon />
									<DeltaValue />
								</Delta>
								<span className="text-slate-400 truncate">{s.footnote}</span>
							</div>
						</CardContent>
					</Card>
				</Link>
			))}
		</>
	);
}
