"use client";

import { useState, useMemo } from "react";
import {
  Search,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  MessageSquare,
  ExternalLink,
  X,
  Download,
  User,
  Sparkles,
  Layers,
  Eye,
  Filter,
} from "lucide-react";
import {
  ContactSubmission,
  initialContactSubmissions,
} from "@/data/contactSubmissions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const statusConfig = {
  new: {
    label: "New",
    badgeClass: "bg-[#ef0e0a]/20 text-orange-400 border border-[#ef0e0a]/40",
    dotClass: "bg-[#ef0e0a]",
  },
  contacted: {
    label: "Contacted",
    badgeClass: "bg-sky-500/20 text-sky-300 border border-sky-500/30",
    dotClass: "bg-sky-400",
  },
  "demo-booked": {
    label: "Demo Booked",
    badgeClass: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
    dotClass: "bg-emerald-400",
  },
  closed: {
    label: "Closed",
    badgeClass: "bg-slate-500/20 text-slate-300 border border-slate-500/30",
    dotClass: "bg-slate-400",
  },
} as const;

export function ContactSubmissions() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>(
    initialContactSubmissions
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedSubmission, setSelectedSubmission] =
    useState<ContactSubmission | null>(null);

  const filteredSubmissions = useMemo(() => {
    return submissions.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone.includes(searchTerm) ||
        item.interest.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.message.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        categoryFilter === "all" || item.category === categoryFilter;

      const matchesStatus =
        statusFilter === "all" || item.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [submissions, searchTerm, categoryFilter, statusFilter]);

  const metrics = useMemo(() => {
    const total = submissions.length;
    const newCount = submissions.filter((s) => s.status === "new").length;
    const demoCount = submissions.filter(
      (s) => s.category === "demo" || s.status === "demo-booked"
    ).length;
    const foilsCount = submissions.filter((s) => s.category === "foils").length;
    const mantaCount = submissions.filter((s) => s.category === "manta").length;
    return { total, newCount, demoCount, foilsCount, mantaCount };
  }, [submissions]);

  const updateStatus = (
    id: string,
    newStatus: ContactSubmission["status"]
  ) => {
    setSubmissions((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, status: newStatus } : sub))
    );
    if (selectedSubmission && selectedSubmission.id === id) {
      setSelectedSubmission((prev) =>
        prev ? { ...prev, status: newStatus } : null
      );
    }
  };

  const handleExportCSV = () => {
    const headers = [
      "ID",
      "Name",
      "Email",
      "Phone",
      "Location",
      "Interest",
      "Category",
      "Status",
      "Submitted At",
      "Message",
    ];

    const rows = filteredSubmissions.map((s) => [
      s.id,
      `"${s.name.replace(/"/g, '""')}"`,
      s.email,
      s.phone,
      `"${s.location.replace(/"/g, '""')}"`,
      `"${s.interest.replace(/"/g, '""')}"`,
      s.category,
      s.status,
      `"${s.submittedAt}"`,
      `"${s.message.replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `winging-wa-contact-submissions-${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-white/10">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ef0e0a]">
              Admin Management
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Feed
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Contact Form Submissions
          </h1>
          <p className="text-sm text-slate-300">
            Review customer gear inquiries, arrange Western Australian demo sessions, and manage customer leads.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Button
            onClick={handleExportCSV}
            variant="outline"
            size="sm"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10 cursor-pointer font-medium"
          >
            <Download className="size-4 mr-1.5" />
            Export CSV
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-[#383D47] border-white/10 text-white">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Total Inquiries
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 flex items-baseline justify-between">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              {metrics.total}
            </div>
            <span className="text-xs font-medium text-emerald-400">
              +6 this week
            </span>
          </CardContent>
        </Card>

        <Card className="bg-[#383D47] border-white/10 text-white">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Pending / New
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 flex items-baseline justify-between">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#ef0e0a]">
              {metrics.newCount}
            </div>
            <span className="text-xs text-orange-300/80">Action required</span>
          </CardContent>
        </Card>

        <Card className="bg-[#383D47] border-white/10 text-white">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Demo Requests
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 flex items-baseline justify-between">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              {metrics.demoCount}
            </div>
            <span className="text-xs text-slate-400">Swan & Ocean</span>
          </CardContent>
        </Card>

        <Card className="bg-[#383D47] border-white/10 text-white">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              AFS Foils & Manta Assist
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 flex items-baseline justify-between">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              {metrics.foilsCount + metrics.mantaCount}
            </div>
            <span className="text-xs text-slate-400">
              {metrics.mantaCount} Manta / {metrics.foilsCount} AFS
            </span>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#383D47] p-3.5 rounded-2xl border border-white/10">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by customer name, email, phone, location or gear..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-10 pl-9 pr-4 rounded-xl bg-black/25 border border-white/10 text-sm text-white placeholder:text-slate-400 focus:outline-hidden focus:border-[#ef0e0a]"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          <div className="flex items-center bg-black/25 rounded-xl p-1 border border-white/10">
            <button
              onClick={() => setCategoryFilter("all")}
              className={cn(
                "px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer",
                categoryFilter === "all"
                  ? "bg-[#ef0e0a] text-white shadow-xs"
                  : "text-slate-300 hover:text-white"
              )}
            >
              All
            </button>
            <button
              onClick={() => setCategoryFilter("foils")}
              className={cn(
                "px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer",
                categoryFilter === "foils"
                  ? "bg-[#ef0e0a] text-white shadow-xs"
                  : "text-slate-300 hover:text-white"
              )}
            >
              AFS Foils
            </button>
            <button
              onClick={() => setCategoryFilter("manta")}
              className={cn(
                "px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer",
                categoryFilter === "manta"
                  ? "bg-[#ef0e0a] text-white shadow-xs"
                  : "text-slate-300 hover:text-white"
              )}
            >
              Manta Assist
            </button>
            <button
              onClick={() => setCategoryFilter("demo")}
              className={cn(
                "px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer",
                categoryFilter === "demo"
                  ? "bg-[#ef0e0a] text-white shadow-xs"
                  : "text-slate-300 hover:text-white"
              )}
            >
              Demos
            </button>
            <button
              onClick={() => setCategoryFilter("stock")}
              className={cn(
                "px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer",
                categoryFilter === "stock"
                  ? "bg-[#ef0e0a] text-white shadow-xs"
                  : "text-slate-300 hover:text-white"
              )}
            >
              WA Stock
            </button>
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-10 px-3 bg-black/25 text-white border border-white/10 rounded-xl text-xs font-medium cursor-pointer focus:outline-hidden focus:border-[#ef0e0a]"
          >
            <option value="all" className="bg-[#383D47] text-white">
              Status: All
            </option>
            <option value="new" className="bg-[#383D47] text-white">
              Status: New
            </option>
            <option value="contacted" className="bg-[#383D47] text-white">
              Status: Contacted
            </option>
            <option value="demo-booked" className="bg-[#383D47] text-white">
              Status: Demo Booked
            </option>
            <option value="closed" className="bg-[#383D47] text-white">
              Status: Closed
            </option>
          </select>
        </div>
      </div>

      <div className="w-full rounded-2xl bg-[#383D47] border border-white/10 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-black/20 text-xs uppercase tracking-wider text-slate-400 border-b border-white/10 select-none">
              <tr>
                <th className="py-3 px-4 font-semibold">Customer</th>
                <th className="py-3 px-4 font-semibold">Gear Interest</th>
                <th className="py-3 px-4 font-semibold">Contact Info</th>
                <th className="py-3 px-4 font-semibold max-w-[320px]">
                  Enquiry Message
                </th>
                <th className="py-3 px-4 font-semibold whitespace-nowrap">
                  Date
                </th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredSubmissions.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="py-12 text-center text-slate-400 font-medium"
                  >
                    No contact submissions match your current filters.
                  </td>
                </tr>
              ) : (
                filteredSubmissions.map((sub) => {
                  const statusInfo = statusConfig[sub.status];

                  return (
                    <tr
                      key={sub.id}
                      onClick={() => setSelectedSubmission(sub)}
                      className="hover:bg-white/[0.04] transition-colors cursor-pointer group"
                    >
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="size-9 rounded-full bg-[#ef0e0a]/20 border border-[#ef0e0a]/30 text-orange-300 font-bold flex items-center justify-center text-xs shrink-0">
                            {sub.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold text-white group-hover:text-orange-300 transition-colors">
                              {sub.name}
                            </div>
                            <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                              <MapPin className="size-3 shrink-0" />
                              <span>{sub.location}</span>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-white/10 text-white border border-white/15">
                          {sub.interest}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-xs whitespace-nowrap">
                        <div className="flex flex-col gap-1">
                          <a
                            href={`mailto:${sub.email}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                          >
                            <Mail className="size-3 text-slate-400" />
                            <span>{sub.email}</span>
                          </a>
                          <a
                            href={`tel:${sub.phone.replace(/\s+/g, "")}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-slate-300 hover:text-orange-300 flex items-center gap-1.5 transition-colors font-mono"
                          >
                            <Phone className="size-3 text-slate-400" />
                            <span>{sub.phone}</span>
                          </a>
                        </div>
                      </td>

                      <td className="py-3.5 px-4 max-w-[320px]">
                        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                          {sub.message}
                        </p>
                      </td>

                      <td className="py-3.5 px-4 text-xs text-slate-400 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <Clock className="size-3" />
                          <span>{sub.submittedAt}</span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold",
                            statusInfo.badgeClass
                          )}
                        >
                          <span
                            className={cn(
                              "size-1.5 rounded-full",
                              statusInfo.dotClass
                            )}
                          />
                          {statusInfo.label}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedSubmission(sub);
                          }}
                          className="h-8 px-2.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer font-medium"
                        >
                          <Eye className="size-3.5 mr-1" />
                          View
                        </Button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedSubmission && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4"
          onClick={() => setSelectedSubmission(null)}
        >
          <div
            className="w-full max-w-2xl bg-[#343943] border border-white/15 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative flex flex-col gap-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3.5">
                <div className="size-12 rounded-full bg-[#ef0e0a]/20 border border-[#ef0e0a]/40 text-orange-300 font-bold flex items-center justify-center text-lg">
                  {selectedSubmission.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {selectedSubmission.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                    <MapPin className="size-3.5 text-[#ef0e0a]" />
                    <span>{selectedSubmission.location}</span>
                    <span>•</span>
                    <span>Submitted {selectedSubmission.submittedAt}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedSubmission(null)}
                className="size-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href={`tel:${selectedSubmission.phone.replace(/\s+/g, "")}`}
                className="flex items-center justify-between p-3.5 rounded-xl bg-black/25 border border-white/10 hover:border-white/25 transition-all text-white group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="size-8 rounded-lg bg-[#ef0e0a]/20 flex items-center justify-center text-orange-400">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Phone Number
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-orange-300 font-mono">
                      {selectedSubmission.phone}
                    </div>
                  </div>
                </div>
                <ExternalLink className="size-4 text-slate-400 group-hover:text-white" />
              </a>

              <a
                href={`mailto:${selectedSubmission.email}`}
                className="flex items-center justify-between p-3.5 rounded-xl bg-black/25 border border-white/10 hover:border-white/25 transition-all text-white group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="size-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Email Address
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-sky-300 truncate max-w-[180px]">
                      {selectedSubmission.email}
                    </div>
                  </div>
                </div>
                <ExternalLink className="size-4 text-slate-400 group-hover:text-white" />
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Gear Interest
              </span>
              <div className="p-3 rounded-xl bg-black/25 border border-white/10 font-semibold text-white flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#ef0e0a]" />
                {selectedSubmission.interest}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Customer Message
              </span>
              <div className="p-4 rounded-xl bg-black/25 border border-white/10 text-sm text-slate-200 leading-relaxed whitespace-pre-wrap">
                {selectedSubmission.message}
              </div>
            </div>

            {selectedSubmission.notes && (
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Internal Notes
                </span>
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-300">
                  {selectedSubmission.notes}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Update Lead Status
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => updateStatus(selectedSubmission.id, "new")}
                  className={cn(
                    "py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer text-center",
                    selectedSubmission.status === "new"
                      ? "bg-[#ef0e0a] text-white border-transparent shadow-sm"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  )}
                >
                  New
                </button>
                <button
                  type="button"
                  onClick={() =>
                    updateStatus(selectedSubmission.id, "contacted")
                  }
                  className={cn(
                    "py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer text-center",
                    selectedSubmission.status === "contacted"
                      ? "bg-sky-600 text-white border-transparent shadow-sm"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  )}
                >
                  Contacted
                </button>
                <button
                  type="button"
                  onClick={() =>
                    updateStatus(selectedSubmission.id, "demo-booked")
                  }
                  className={cn(
                    "py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer text-center",
                    selectedSubmission.status === "demo-booked"
                      ? "bg-emerald-600 text-white border-transparent shadow-sm"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  )}
                >
                  Demo Booked
                </button>
                <button
                  type="button"
                  onClick={() => updateStatus(selectedSubmission.id, "closed")}
                  className={cn(
                    "py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer text-center",
                    selectedSubmission.status === "closed"
                      ? "bg-slate-600 text-white border-transparent shadow-sm"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  )}
                >
                  Closed
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <Button
                variant="outline"
                onClick={() => setSelectedSubmission(null)}
                className="border-white/15 text-white hover:bg-white/10 cursor-pointer"
              >
                Close
              </Button>
              <a
                href={`mailto:${selectedSubmission.email}?subject=Winging WA - ${encodeURIComponent(
                  selectedSubmission.interest
                )}`}
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#ef0e0a] hover:bg-[#c40c08] text-white text-sm font-semibold transition-colors cursor-pointer shadow-sm"
              >
                <Mail className="size-4 mr-2" />
                Reply via Email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

