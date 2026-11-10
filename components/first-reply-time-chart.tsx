"use client";

import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";
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
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { Delta, DeltaIcon, DeltaValue } from "@/components/delta";

type ReplyRow = {
	day: string;
	minutes: number;
};

const chartRows: ReplyRow[] = [
	{ day: "Mon", minutes: 2.4 },
	{ day: "Tue", minutes: 1.9 },
	{ day: "Wed", minutes: 2.2 },
	{ day: "Thu", minutes: 1.7 },
	{ day: "Fri", minutes: 1.5 },
	{ day: "Sat", minutes: 2.0 },
	{ day: "Sun", minutes: 1.2 },
];

const firstMinutes = chartRows[0]?.minutes ?? 0;
const lastMinutes = chartRows.at(-1)?.minutes ?? firstMinutes;

const replyImprovementPct =
	firstMinutes > 0 ? ((firstMinutes - lastMinutes) / firstMinutes) * 100 : 0;

const chartConfig = {
	minutes: {
		label: "Hours",
		color: "#f97316",
	},
} satisfies ChartConfig;

export function FirstReplyTimeChart({
	className,
	...props
}: ComponentProps<typeof Card>) {
	return (
		<Card
			className={cn("shadow-none md:col-span-2 dark:ring-0 bg-[#383D47] border-white/10 text-white", className)}
			{...props}
		>
			<CardHeader className="space-y-1 p-5 pb-2">
				<div className="flex flex-wrap items-center gap-2">
					<CardTitle className="text-base font-bold text-white">Inquiry Response Speed</CardTitle>
					<Delta value={replyImprovementPct} variant="badge">
						<DeltaIcon variant="trend" />
						<DeltaValue suffix="%" />
					</Delta>
				</div>
				<CardDescription className="text-xs text-slate-400">
					Average hours to reply or confirm on-water demo bookings (last 7 days)
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer className="aspect-video w-full" config={chartConfig}>
					<LineChart
						accessibilityLayer
						data={chartRows}
						margin={{ top: 24, left: 20, right: 12, bottom: 8 }}
					>
						<CartesianGrid className="stroke-white/10" vertical={false} />
						<XAxis
							axisLine={false}
							dataKey="day"
							interval={0}
							tickFormatter={(value) => String(value).slice(0, 3)}
							tickLine={false}
							tickMargin={8}
						/>
						<ChartTooltip
							content={<ChartTooltipContent indicator="line" />}
							cursor={false}
						/>
						<Line
							activeDot={{ r: 6 }}
							dataKey="minutes"
							dot={{ fill: "#f97316" }}
							stroke="#f97316"
							strokeWidth={2}
							type="natural"
						>
							<LabelList
								className="fill-slate-200"
								dataKey="minutes"
								fontSize={12}
								formatter={(label) => {
									const n = Number(label);
									return Number.isFinite(n)
										? `${n.toFixed(1)}h`
										: String(label ?? "");
								}}
								offset={12}
								position="top"
							/>
						</Line>
					</LineChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
