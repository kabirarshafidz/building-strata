import { ResidentForm } from "../resident-form";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardShell } from "@/components/dashboard-shell";

export default function NewResidentPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Add New Resident"
        text="Add a new resident to the directory."
      />
      <div className="grid gap-6">
        <ResidentForm />
      </div>
    </DashboardShell>
  );
}
