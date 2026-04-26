import { Building2, Settings, SlidersHorizontal } from "lucide-react";

import { MobileAppShell } from "@/app/components/layout/MobileAppShell";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <MobileAppShell>
      <section className="px-4 py-5">
        <p className="text-sm font-medium text-slate-500">Configuration</p>

        <h2 className="mt-1 text-2xl font-bold text-slate-950">Settings</h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Configure departments, branches, roles, leave types, performance
          cycles, and workflows.
        </p>
      </section>

      <section className="px-4">
        <div className="rounded-[2rem] bg-slate-950 p-5 text-white shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
            <Settings className="h-6 w-6" />
          </div>

          <h3 className="mt-5 text-xl font-bold">System configuration</h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Control the setup data that powers employee records, leave,
            approvals, and appraisal cycles.
          </p>

          <Button className="mt-5 rounded-full bg-emerald-600 text-white hover:bg-emerald-700">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Configure
          </Button>
        </div>
      </section>

      <section className="mt-5 px-4 pb-6">
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center">
          <Building2 className="mx-auto h-8 w-8 text-slate-400" />

          <p className="mt-3 text-sm font-semibold text-slate-900">
            Settings module coming next
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            We’ll add departments, branches, job titles, leave types, approval
            workflows, and public holidays here.
          </p>
        </div>
      </section>
    </MobileAppShell>
  );
}
