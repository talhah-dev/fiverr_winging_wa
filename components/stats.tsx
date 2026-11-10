"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Delta, DeltaIcon, DeltaValue } from "@/components/delta";
import { Mail, Package, Video, CalendarCheck } from "lucide-react";

interface StatsData {
	totalContacts: number;
	newContacts: number;
	totalEquipment: number;
	featuredEquipmentCount: number;
	totalYoutube: number;
}

export function DashboardStats() {
	const [data, setData] = useState<StatsData | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("/api/dashboard/stats")
			.then((res) => res.json())
			.then((res) => {
				if (res.success && res.data) {
					setData(res.data);
				}
			})
			.catch((err) => console.error(err))
			.finally(() => setIsLoading(false));
	}, []);

	const stats = [
		{
			label: "Contact Inquiries",
			value: data ? String(data.totalContacts) : "...",
			delta: 18.2,
			footnote: data ? `${data.newContacts} new pending action` : "4 new today",
			href: "/dashboard/contacts",
			icon: <Mail className="size-4 text-[#ef0e0a]" />,
		},
		{
			label: "Featured Equipment",
			value: data ? `${data.totalEquipment} Items` : "...",
			delta: data?.featuredEquipmentCount ?? 6,
			footnote: data ? `${data.featuredEquipmentCount} active on home slider` : "6 on home slider",
			href: "/dashboard/equipment",
			icon: <Package className="size-4 text-orange-400" />,
		},
		{
			label: "Home YouTube Links",
			value: data ? `${data.totalYoutube} Active` : "...",
			delta: 100,
			footnote: "Slot 1: AFS • Slot 2: Manta",
			href: "/dashboard/youtube-links",
			icon: <Video className="size-4 text-red-500" />,
		},
		{
			label: "WA Demo Bookings",
			value: "9 Sessions",
			delta: 28.5,
			footnote: "Swan River & Woodman Pt",
			href: "/dashboard/contacts",
			icon: <CalendarCheck className="size-4 text-emerald-400" />,
		},
	];

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
							{isLoading ? (
								<Skeleton className="h-8 w-24 bg-white/10 rounded-md" />
							) : (
								<p className="font-bold text-2xl tabular-nums text-white group-hover:text-red-400 transition-colors">
									{s.value}
								</p>
							)}
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
