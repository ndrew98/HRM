import { BarChart3, Download, PieChart } from "lucide-react";

import { MobileAppShell } from "@/app/components/layout/MobileAppShell";
import { Button } from "@/components/ui/button";

export default function ReportsPage() {
  return (
    <MobileAppShell>
      <section className="px-4 py-5">
        <p className="text-sm font-medium text-slate-500">HR insights</p>

        <h2 className="mt-1 text-2xl font-bold text-slate-950">Reports</h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          View headcount, leave, performance, documents, approvals, and audit
          reports.
        </p>
      </section>

      <section className="px-4">
        <div className="rounded-[2rem] bg-slate-950 p-5 text-white shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
            <BarChart3 className="h-6 w-6" />
          </div>

          <h3 className="mt-5 text-xl font-bold">HR reporting center</h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Turn employee, leave, approval, and performance data into
            management-ready reports.
          </p>

          <Button className="mt-5 rounded-full bg-emerald-600 text-white hover:bg-emerald-700">
            <Download className="mr-2 h-4 w-4" />
            Export report
          </Button>
        </div>
      </section>

      <section className="mt-5 px-4 pb-6">
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center">
          <PieChart className="mx-auto h-8 w-8 text-slate-400" />

          <p className="mt-3 text-sm font-semibold text-slate-900">
            Reports module coming next
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            We’ll add report cards, charts, filters, exports, and printable
            report views here.
          </p>
        </div>
      </section>
    </MobileAppShell>
  );
}
