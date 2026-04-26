import { MobileAppShell } from "@/app/components/layout/MobileAppShell";

export default function ApprovalsPage() {
  return (
    <MobileAppShell>
      <section className="px-4 py-5">
        <p className="text-sm font-medium text-slate-500">Workflow tasks</p>

        <h2 className="mt-1 text-2xl font-bold text-slate-950">Approvals</h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Review leave requests, appraisal actions, and other HR workflow items.
        </p>
      </section>
    </MobileAppShell>
  );
}
