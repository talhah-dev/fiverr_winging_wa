import { AppShell } from "@/components/app-shell";
import { Dashboard } from "@/components/dashboard";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashboardPage() {
  return (
    <div className="dashboard-theme min-h-screen bg-background text-foreground">
      <TooltipProvider>
        <AppShell pathname="/dashboard">
          <Dashboard />
        </AppShell>
      </TooltipProvider>
    </div>
  );
}
