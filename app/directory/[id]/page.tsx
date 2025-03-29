"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ResidentForm } from "../resident-form";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardShell } from "@/components/dashboard-shell";
import type { ResidentFormValues } from "../resident-form";

export default function EditResidentPage() {
  const { id } = useParams();
  const [resident, setResident] = useState<
    (ResidentFormValues & { id: string }) | null
  >(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResident = async () => {
      try {
        const response = await fetch(`/api/directory/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch resident");
        }
        const data = await response.json();
        setResident({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          unitNumber: data.unitNumber,
          residentType: data.residentType,
          id: data._id,
        });
      } catch (error) {
        console.error("Error fetching resident:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResident();
  }, [id]);

  if (isLoading) {
    return (
      <DashboardShell>
        <DashboardHeader
          heading="Edit Resident"
          text="Loading resident information..."
        />
      </DashboardShell>
    );
  }

  if (!resident) {
    return (
      <DashboardShell>
        <DashboardHeader heading="Edit Resident" text="Resident not found." />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Edit Resident"
        text="Update resident information."
      />
      <div className="grid gap-6">
        <ResidentForm
          initialData={{
            firstName: resident.firstName,
            lastName: resident.lastName,
            email: resident.email,
            phone: resident.phone,
            unitNumber: resident.unitNumber,
            residentType: resident.residentType,
            id: resident.id,
          }}
        />
      </div>
    </DashboardShell>
  );
}
