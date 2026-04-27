import { CheckCircle2, FileCheck2, Gauge, UsersRound } from "lucide-react";

import { MobileAppShell } from "@/app/components/layout/MobileAppShell";
import { AnimatedList } from "@/app/components/shared/AnimatedList";
import { AnimatedListItem } from "@/app/components/shared/AnimatedListItem";
import { FadeIn } from "@/app/components/shared/FadeIn";

import { DashboardActionItem } from "@/app/features/dashboard/components/DashboardActionItem";
import { DashboardTrendChart } from "@/app/features/dashboard/components/DashboardTrendChart";
import { QuickActionTile } from "@/app/features/dashboard/components/QuickActionTile";
import {
  dashboardActions,
  dashboardSummary,
  quickActions,
  recentActivities,
} from "@/app/features/dashboard/data";

export default function HomePage() {
  return (
    <MobileAppShell>
      <section className="px-4 py-5">
        <p className="text-sm font-medium text-slate-500">Welcome back</p>

        <h2 className="mt-1 text-2xl font-bold text-slate-950">
          Your HR workspace
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Track people operations, pending work, leave, documents, and
          performance from one place.
        </p>
      </section>

      <FadeIn className="px-4">
        <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-5 text-white shadow-sm">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/20 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />

          <div className="relative">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-300">
                  Today’s HR pulse
                </p>

                <p className="mt-2 text-4xl font-bold tracking-tight">
                  {dashboardSummary.pendingApprovals}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Pending approvals need attention
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                <CheckCircle2 className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/10 p-3">
                <p className="text-xs font-medium text-slate-400">Employees</p>

                <p className="mt-2 text-xl font-bold">
                  {dashboardSummary.totalEmployees}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-3">
                <p className="text-xs font-medium text-slate-400">
                  Appraisal completion
                </p>

                <p className="mt-2 text-xl font-bold">
                  {dashboardSummary.appraisalCompletion}%
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <section className="mt-5 px-4">
        <div className="mb-3">
          <h3 className="text-base font-bold text-slate-950">Quick actions</h3>

          <p className="text-sm text-slate-500">Common HR tasks</p>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {quickActions.map((action) => (
            <QuickActionTile
              key={action.id}
              label={action.label}
              href={action.href}
              type={action.type}
            />
          ))}
        </div>
      </section>

      <section className="mt-5 px-4">
        <div className="grid grid-cols-2 gap-3">
          <MiniInsight
            icon={<UsersRound className="h-5 w-5" />}
            label="Leave requests"
            value={String(dashboardSummary.leaveRequests)}
            helper="Pending this week"
          />

          <MiniInsight
            icon={<FileCheck2 className="h-5 w-5" />}
            label="Documents"
            value={`${dashboardSummary.documentCompliance}%`}
            helper="Compliance score"
          />

          <MiniInsight
            icon={<Gauge className="h-5 w-5" />}
            label="Performance"
            value={`${dashboardSummary.appraisalCompletion}%`}
            helper="Cycle progress"
          />

          <MiniInsight
            icon={<CheckCircle2 className="h-5 w-5" />}
            label="Approvals"
            value={String(dashboardSummary.pendingApprovals)}
            helper="Awaiting action"
          />
        </div>
      </section>

      <section className="mt-6 px-4">
        <DashboardTrendChart />
      </section>

      <section className="mt-6 px-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-950">
              Pending actions
            </h3>

            <p className="text-sm text-slate-500">Items that need attention</p>
          </div>
        </div>

        <AnimatedList>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {dashboardActions.map((action) => (
              <AnimatedListItem key={action.id}>
                <DashboardActionItem
                  title={action.title}
                  description={action.description}
                  meta={action.meta}
                  href={action.href}
                />
              </AnimatedListItem>
            ))}
          </div>
        </AnimatedList>
      </section>

      <section className="mt-6 px-4 pb-6">
        <div className="mb-3">
          <h3 className="text-base font-bold text-slate-950">
            Recent activity
          </h3>

          <p className="text-sm text-slate-500">Latest system updates</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex gap-3">
                <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />

                <div>
                  <p className="text-sm font-bold text-slate-950">
                    {activity.title}
                  </p>

                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    {activity.description}
                  </p>

                  <p className="mt-1 text-xs font-medium text-slate-400">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MobileAppShell>
  );
}

type MiniInsightProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  helper: string;
};

function MiniInsight({ icon, label, value, helper }: MiniInsightProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
        {icon}
      </div>

      <p className="mt-4 text-sm font-medium text-slate-500">{label}</p>

      <p className="mt-1 text-2xl font-bold text-slate-950">{value}</p>

      <p className="mt-1 text-xs font-medium text-slate-500">{helper}</p>
    </div>
  );
}
