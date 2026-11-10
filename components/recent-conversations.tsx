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
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { MailIcon, ArrowRightIcon, MapPin } from "lucide-react";
import { initialContactSubmissions, ContactSubmission } from "@/data/contactSubmissions";

function getStatusBadge(status: ContactSubmission["status"]) {
	switch (status) {
		case "new":
			return <Badge className="bg-red-500/20 text-red-300 border-red-500/30">New</Badge>;
		case "contacted":
			return <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Contacted</Badge>;
		case "demo-booked":
			return <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">Demo Booked</Badge>;
		case "closed":
			return <Badge variant="outline" className="text-slate-400 border-white/10">Closed</Badge>;
	}
}

export function RecentConversations({
	className,
	...props
}: ComponentProps<typeof Card>) {
	const recentInquiries = initialContactSubmissions.slice(0, 4);

	return (
		<Card
			className={cn("gap-0 shadow-none md:col-span-2 dark:ring-0 bg-[#383D47] border-white/10 text-white", className)}
			{...props}
		>
			<CardHeader className="border-b border-white/10 p-5">
				<div className="flex items-center justify-between">
					<div>
						<CardTitle className="text-base font-bold text-white">Recent Contact Inquiries</CardTitle>
						<CardDescription className="text-xs text-slate-400">
							Latest customer inquiries and demo requests received from the website
						</CardDescription>
					</div>
					<Badge className="bg-[#ef0e0a]/20 text-red-300 border-[#ef0e0a]/30">
						{initialContactSubmissions.length} Total
					</Badge>
				</div>
			</CardHeader>
			<CardContent className="p-0">
				<Table>
					<TableHeader className="border-b border-white/10 bg-white/5">
						<TableRow className="hover:bg-transparent border-white/10">
							<TableHead className="pl-6 text-slate-300 text-xs font-semibold">Customer</TableHead>
							<TableHead className="hidden sm:table-cell text-slate-300 text-xs font-semibold">Gear Interest</TableHead>
							<TableHead className="text-slate-300 text-xs font-semibold">Category</TableHead>
							<TableHead className="pr-6 text-right text-slate-300 text-xs font-semibold">Status</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{recentInquiries.map((inquiry) => (
							<TableRow
								className="h-14 hover:bg-white/5 border-white/5 transition-colors"
								key={inquiry.id}
							>
								<TableCell className="max-w-44 truncate pl-6">
									<div className="flex flex-col">
										<span className="font-semibold text-sm text-white">{inquiry.name}</span>
										<span className="text-[11px] text-slate-400 flex items-center gap-1">
											<MapPin className="size-3 text-slate-500" />
											{inquiry.location}
										</span>
									</div>
								</TableCell>
								<TableCell className="hidden max-w-48 sm:table-cell">
									<span className="line-clamp-1 text-slate-300 text-xs font-medium">
										{inquiry.interest}
									</span>
									<span className="text-[11px] text-slate-400">
										{inquiry.submittedAt}
									</span>
								</TableCell>
								<TableCell>
									<span className="inline-flex items-center gap-1.5 font-medium text-xs text-slate-200 capitalize">
										<MailIcon className="size-3 text-slate-400" />
										{inquiry.category}
									</span>
								</TableCell>
								<TableCell className="pr-6 text-right">
									{getStatusBadge(inquiry.status)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<div className="flex justify-center border-t border-white/10 py-3 bg-white/5">
					<Button
						size="sm"
						variant="ghost"
						render={<Link href="/dashboard/contacts" />}
						nativeButton={false}
						className="text-slate-300 hover:text-white hover:bg-white/10 text-xs font-semibold"
					>
						View all contact submissions
						<ArrowRightIcon className="size-3.5 ml-1.5" />
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
