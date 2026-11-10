import { AppShell } from "@/components/app-shell";
import { ContactSubmissions } from "@/components/contact-submissions";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function ContactsDashboardPage() {
  return (
    <div className="dashboard-theme min-h-screen bg-background text-foreground">
      <TooltipProvider>
        <AppShell pathname="/dashboard/contacts">
          <ContactSubmissions />
        </AppShell>
      </TooltipProvider>
    </div>
  );
}

