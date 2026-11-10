"use client";

import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { LabelList, Pie, PieChart } from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
} from "@/components/ui/chart";
import { Delta, DeltaIcon, DeltaValue } from "@/components/delta";

type ChannelKey = "foils" | "manta" | "demos";

type ChannelDatum = {
	channel: ChannelKey;
	share: number;
	fill: string;
};

const chartData: ChannelDatum[] = [
	{ channel: "foils", share: 45, fill: "#ef0e0a" },
	{ channel: "manta", share: 35, fill: "#f97316" },
	{ channel: "demos", share: 20, fill: "#38bdf8" },
];

const chartConfig = {
	share: {
		label: "Share",
	},
	foils: {
		label: "AFS Foils",
		color: "#ef0e0a",
	},
	manta: {
		label: "Manta Assist",
		color: "#f97316",
	},
	demos: {
		label: "Demo Sessions",
		color: "#38bdf8",
	},
} satisfies ChartConfig;

export function ChannelBreakdownChart({
	className,
	...props
}: ComponentProps<typeof Card>) {
	return (
		<Card
			className={cn("flex flex-col shadow-none dark:ring-0 bg-[#383D47] border-white/10 text-white", className)}
			{...props}
		>
			<CardHeader className="items-center space-y-1 pb-0 sm:items-start">
				<div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
					<CardTitle>Inquiries by Category</CardTitle>
					<Delta value={4.2} variant="badge">
						<DeltaIcon variant="trend" />
						<DeltaValue suffix="%" />
					</Delta>
				</div>
				<CardDescription>
					Breakdown of customer interest across product lines
				</CardDescription>
			</CardHeader>
			<CardContent className="my-auto">
				<ChartContainer
					className="mx-auto aspect-square max-h-72 w-full"
					config={chartConfig}
				>
					<PieChart accessibilityLayer>
						<Pie
							cornerRadius={8}
							data={chartData}
							dataKey="share"
							innerRadius={36}
							nameKey="channel"
							outerRadius="88%"
							stroke="var(--card)"
							strokeWidth={4}
						>
							<LabelList
								className="fill-background font-medium"
								dataKey="share"
								fill="currentColor"
								fontWeight={500}
								formatter={(label) => {
									const n = Number(label);
									return Number.isFinite(n) ? `${n}%` : String(label ?? "");
								}}
								position="inside"
								stroke="none"
							/>
						</Pie>
						<ChartLegend content={<ChartLegendContent nameKey="channel" />} />
					</PieChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
