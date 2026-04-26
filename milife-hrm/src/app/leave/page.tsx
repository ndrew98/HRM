import { MobileAppShell } from "@/app/components/layout/MobileAppShell";

export default function LeavePage() {
  return (
    <MobileAppShell>
      <section className="px-4 py-5">
        <p className="text-sm font-medium text-slate-500">Time off</p>

        <h2 className="mt-1 text-2xl font-bold text-slate-950">Leave</h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Apply for leave, track balances, and follow approval progress.
        </p>
      </section>
    </MobileAppShell>
  );
}
