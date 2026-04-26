import {
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Users,
} from "lucide-react";

import { MobileAppShell } from "@/app/components/layout/MobileAppShell";
import { ActionCard } from "@/app/components/shared/ActionCard";
import { MetricCard } from "@/app/components/shared/MetricCard";

const dashboardStats = [
  {
    title: "Employees",
    value: "128",
    helper: "+4 this month",
    icon: Users,
  },
  {
    title: "Approvals",
    value: "12",
    helper: "Need attention",
    icon: CheckCircle2,
  },
  {
    title: "Leave",
    value: "7",
    helper: "Requests pending",
    icon: CalendarClock,
  },
  {
    title: "Appraisals",
    value: "24",
    helper: "Due this cycle",
    icon: ClipboardList,
  },
];

const pendingActions = [
  {
    title: "Leave approval pending",
    description: "Akosua Mensah requested 5 days annual leave.",
    meta: "Today",
    icon: CalendarClock,
    actionLabel: "Review",
  },
  {
    title: "Performance contract pending",
    description: "Kwame Boateng needs manager review for his 2026 KPIs.",
    meta: "2 days",
    icon: ClipboardList,
    actionLabel: "Open",
  },
];

export default function HomePage() {
  return (
    <MobileAppShell>
      <section className="px-4 py-5">
        <p className="text-sm font-medium text-slate-500">
          Welcome back Andrew
        </p>

        <h2 className="mt-1 text-2xl font-bold text-slate-950">
          Your HR workspace
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Manage leave, approvals, employee records, documents, and performance
          from one place.
        </p>
      </section>

      <section className="px-4">
        <div className="grid grid-cols-2 gap-3">
          {dashboardStats.map((stat) => (
            <MetricCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              helper={stat.helper}
              icon={stat.icon}
            />
          ))}
        </div>
      </section>

      <section className="mt-6 px-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-950">
              Pending actions
            </h2>

            <p className="text-sm text-slate-500">
              Items that need your attention
            </p>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-emerald-700"
          >
            View all
          </button>
        </div>

        <div className="space-y-3">
          {pendingActions.map((action) => (
            <ActionCard
              key={action.title}
              title={action.title}
              description={action.description}
              meta={action.meta}
              icon={action.icon}
              actionLabel={action.actionLabel}
            />
          ))}
        </div>
      </section>

      <section className="mt-6 px-4 pb-6">
        <div className="rounded-3xl border border-dashed border-emerald-200 bg-emerald-50 p-5">
          <p className="text-sm font-semibold text-emerald-800">
            Today&apos;s focus
          </p>

          <p className="mt-2 text-sm leading-6 text-emerald-700">
            Review pending approvals and complete employee records with missing
            documents.
          </p>
        </div>
      </section>
    </MobileAppShell>
  );
}
