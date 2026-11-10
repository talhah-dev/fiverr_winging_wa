import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { initialDashboardEquipment } from "@/data/dashboardEquipment";
import { Package, ArrowRightIcon, Sparkles } from "lucide-react";

export function FeaturedEquipmentSpotlight({
	className,
	...props
}: ComponentProps<typeof Card>) {
	const homeItems = initialDashboardEquipment.filter((item) => item.featuredOnHome).slice(0, 4);

	return (
		<Card
			className={cn(
				"shadow-none dark:ring-0 bg-[#383D47] border-white/10 text-white flex flex-col justify-between md:col-span-2",
				className
			)}
			{...props}
		>
			<CardHeader className="border-b border-white/10 p-5">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="p-1.5 rounded-lg bg-orange-500/20 text-orange-400">
							<Package className="size-4" />
						</div>
						<div>
							<CardTitle className="text-base font-bold text-white">Featured Equipment</CardTitle>
							<CardDescription className="text-xs text-slate-400">
								Active gear on the home page showcase slider
							</CardDescription>
						</div>
					</div>
					<Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 text-[11px] flex items-center gap-1">
						<Sparkles className="size-3" />
						6 On Home
					</Badge>
				</div>
			</CardHeader>
			<CardContent className="p-0">
				<div className="divide-y divide-white/10">
					{homeItems.map((item) => (
						<div
							key={item.id}
							className="p-3.5 hover:bg-white/5 transition-colors flex items-center justify-between gap-3"
						>
							<div className="flex items-center gap-3 min-w-0">
								<div className="size-11 rounded-lg bg-black/40 border border-white/10 overflow-hidden relative shrink-0">
									<Image
										src={item.image}
										alt={item.name}
										fill
										sizes="44px"
										className="object-contain p-1"
									/>
								</div>
								<div className="min-w-0 flex-1">
									<div className="flex items-center gap-2">
										<span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
											{item.brand}
										</span>
										<Badge variant="outline" className="text-[10px] py-0 px-1.5 border-white/15 text-slate-300">
											{item.category}
										</Badge>
									</div>
									<p className="font-semibold text-xs text-white truncate mt-0.5">
										{item.name}
									</p>
									<span className="text-xs font-bold text-orange-400">
										{item.price}
									</span>
								</div>
							</div>
							<Badge
								variant="outline"
								className={cn(
									"text-[10px] shrink-0 font-medium",
									item.stockStatus.includes("In Stock")
										? "border-emerald-500/30 text-emerald-300 bg-emerald-500/10"
										: "border-sky-500/30 text-sky-300 bg-sky-500/10"
								)}
							>
								{item.stockStatus}
							</Badge>
						</div>
					))}
				</div>
				<div className="border-t border-white/10 p-3 bg-white/5 flex justify-center">
					<Button
						size="sm"
						variant="ghost"
						render={<Link href="/dashboard/equipment" />}
						nativeButton={false}
						className="text-slate-300 hover:text-white hover:bg-white/10 text-xs font-semibold"
					>
						Manage Equipment Catalog
						<ArrowRightIcon className="size-3.5 ml-1.5" />
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}

