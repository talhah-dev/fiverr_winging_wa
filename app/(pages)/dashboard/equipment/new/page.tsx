import { AppShell } from "@/components/app-shell";
import { EquipmentCreateForm } from "@/components/equipment/EquipmentCreateForm";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashboardEquipmentNewPage() {
  return (
    <div className="dashboard-theme min-h-screen bg-background text-foreground">
      <TooltipProvider>
        <AppShell pathname="/dashboard/equipment">
          <EquipmentCreateForm />
        </AppShell>
      </TooltipProvider>
    </div>
  );
}

