import { AppShell } from "@/components/app-shell";
import { EquipmentList } from "@/components/equipment/EquipmentList";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashboardEquipmentPage() {
  return (
    <div className="dashboard-theme min-h-screen bg-background text-foreground">
      <TooltipProvider>
        <AppShell pathname="/dashboard/equipment">
          <EquipmentList />
        </AppShell>
      </TooltipProvider>
    </div>
  );
}

