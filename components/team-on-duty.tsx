"use client";

import Link from "next/link";
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
import { StatusIndicator } from "@/components/indicator";
import { initialHomeYoutubeVideos } from "@/data/homeYoutubeVideos";
import { Video, ArrowRightIcon, ExternalLink, Play } from "lucide-react";

export function TeamOnDuty({
	className,
	...props
}: ComponentProps<typeof Card>) {
	const videos = initialHomeYoutubeVideos;

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
						<div className="p-1.5 rounded-lg bg-[#ef0e0a]/20 text-[#ef0e0a]">
							<Video className="size-4" />
						</div>
						<div>
							<CardTitle className="text-base font-bold text-white">Home YouTube Features</CardTitle>
							<CardDescription className="text-xs text-slate-400">
								Media embeds displayed at the bottom of the home page
							</CardDescription>
						</div>
					</div>
					<Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-[11px]">
						2 / 2 Live
					</Badge>
				</div>
			</CardHeader>
			<CardContent className="p-0">
				<div className="divide-y divide-white/10">
					{videos.map((v) => (
						<div
							key={v.id}
							className="p-4 hover:bg-white/5 transition-colors flex items-start justify-between gap-3"
						>
							<div className="flex items-start gap-3 min-w-0">
								<div className="size-9 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5 text-red-400">
									<Play className="size-4 fill-current" />
								</div>
								<div className="min-w-0 flex-1">
									<div className="flex items-center gap-2">
										<span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
											Slot #{v.slotNumber}
										</span>
										<Badge variant="outline" className="text-[10px] py-0 px-1.5 border-white/15 text-slate-300">
											{v.category}
										</Badge>
									</div>
									<p className="font-semibold text-sm text-white truncate mt-0.5">
										{v.title}
									</p>
									<p className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-1">
										<StatusIndicator color="emerald" pulse />
										<span className="text-emerald-300">Active on Home</span>
										<span className="text-slate-600">•</span>
										<span className="font-mono text-slate-400">{v.videoId}</span>
									</p>
								</div>
							</div>
							<a
								href={v.youtubeUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors shrink-0"
								title="Watch on YouTube"
							>
								<ExternalLink className="size-4" />
							</a>
						</div>
					))}
				</div>
				<div className="border-t border-white/10 p-3 bg-white/5 flex justify-center">
					<Button
						size="sm"
						variant="ghost"
						render={<Link href="/dashboard/youtube-links" />}
						nativeButton={false}
						className="text-slate-300 hover:text-white hover:bg-white/10 text-xs font-semibold"
					>
						Manage YouTube Links
						<ArrowRightIcon className="size-3.5 ml-1.5" />
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
