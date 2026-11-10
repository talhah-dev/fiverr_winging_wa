import { AppShell } from "@/components/app-shell";
import { YoutubeLinksManager } from "@/components/youtube/YoutubeLinksManager";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashboardYoutubeLinksPage() {
  return (
    <div className="dashboard-theme min-h-screen bg-background text-foreground">
      <TooltipProvider>
        <AppShell pathname="/dashboard/youtube-links">
          <YoutubeLinksManager />
        </AppShell>
      </TooltipProvider>
    </div>
  );
}

