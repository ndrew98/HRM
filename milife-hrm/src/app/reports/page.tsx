"use client";

import { useState } from "react";
import {
  BarChart3,
  Download,
  FileSpreadsheet,
  Gauge,
  PieChart,
  UsersRound,
  Workflow,
} from "lucide-react";

import { MobileAppShell } from "@/app/components/layout/MobileAppShell";
import { FadeIn } from "@/app/components/shared/FadeIn";
import { AnimatedList } from "@/app/components/shared/AnimatedList";
import { AnimatedListItem } from "@/app/components/shared/AnimatedListItem";

import { ApprovalInteractivePieChart } from "@/app/features/reports/components/ApprovalInteractivePieChart";
import { HeadcountBarChart } from "@/app/features/reports/components/HeadcountBarChart";
import { LeaveAreaChart } from "@/app/features/reports/components/LeaveAreaChart";
import { PerformanceRatingChart } from "@/app/features/reports/components/PerformanceRatingChart";
import { RadialMetricChart } from "@/app/features/reports/components/RadialMetricChart";
import { ReportMetricBlock } from "@/app/features/reports/components/ReportMetricBlock";
import { StaffMovementBarChart } from "@/app/features/reports/components/StaffMovementBarChart";
import {
  radialMetrics,
  reportCategories,
  reportSummary,
  type ReportCategory,
} from "@/app/features/reports/data";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ReportsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<ReportCategory>("Overview");

  return (
    <MobileAppShell>
      <section className="px-4 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-500">HR insights</p>

            <h2 className="mt-1 text-2xl font-bold text-slate-950">Reports</h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              View headcount, leave, performance, approval, document, and audit
              insights.
            </p>
          </div>

          <Button
            type="button"
            size="icon"
            className="h-11 w-11 shrink-0 rounded-full bg-emerald-600 text-white shadow-sm hover:bg-emerald-700"
          >
            <Download className="h-5 w-5" />
          </Button>
        </div>
      </section>

      <FadeIn className="px-4">
        <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-5 text-white shadow-sm">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/20 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />

          <div className="relative">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-300">
                  Executive HR summary
                </p>

                <p className="mt-2 text-4xl font-bold tracking-tight">
                  {reportSummary.totalEmployees}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Total employee records
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                <BarChart3 className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/10 p-3">
                <p className="text-xs font-medium text-slate-400">
                  Appraisal completion
                </p>

                <p className="mt-2 text-xl font-bold">
                  {reportSummary.appraisalCompletion}%
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-3">
                <p className="text-xs font-medium text-slate-400">
                  Document compliance
                </p>

                <p className="mt-2 text-xl font-bold">
                  {reportSummary.documentCompliance}%
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <section className="mt-5 px-4">
        <Tabs
          value={selectedCategory}
          onValueChange={(value) =>
            setSelectedCategory(value as ReportCategory)
          }
        >
          <TabsList className="grid h-11 grid-cols-5 rounded-2xl bg-slate-100 p-1">
            {reportCategories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="rounded-xl text-[10px]"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </section>

      <section className="mt-5 px-4">
        <div className="grid grid-cols-2 gap-3">
          <ReportMetricBlock
            label="Active staff"
            value={String(reportSummary.activeEmployees)}
            helper="Currently active"
            icon={<UsersRound className="h-5 w-5" />}
          />

          <ReportMetricBlock
            label="Approvals"
            value={String(reportSummary.pendingApprovals)}
            helper="Pending action"
            icon={<Workflow className="h-5 w-5" />}
          />

          <ReportMetricBlock
            label="Leave usage"
            value={`${reportSummary.leaveUtilization}%`}
            helper="Year to date"
            icon={<Gauge className="h-5 w-5" />}
          />

          <ReportMetricBlock
            label="Exports"
            value="8"
            helper="Generated this month"
            icon={<FileSpreadsheet className="h-5 w-5" />}
          />
        </div>
      </section>

      {selectedCategory === "Overview" ||
      selectedCategory === "Performance" ||
      selectedCategory === "Leave" ? (
        <section className="mt-6 px-4">
          <div className="mb-3">
            <h3 className="text-base font-bold text-slate-950">
              Progress indicators
            </h3>

            <p className="text-sm text-slate-500">
              Radial charts for key HR completion metrics
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {radialMetrics.map((metric) => (
              <RadialMetricChart
                key={metric.label}
                label={metric.label}
                value={metric.value}
                description={metric.description}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-6 px-4 pb-6">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-950">
              Analytics visuals
            </h3>

            <p className="text-sm text-slate-500">
              {selectedCategory} report view
            </p>
          </div>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            Mock data
          </span>
        </div>

        <AnimatedList>
          <div className="space-y-4">
            {selectedCategory === "Overview" ||
            selectedCategory === "Headcount" ? (
              <AnimatedListItem>
                <HeadcountBarChart />
              </AnimatedListItem>
            ) : null}

            {selectedCategory === "Overview" ||
            selectedCategory === "Headcount" ? (
              <AnimatedListItem>
                <StaffMovementBarChart />
              </AnimatedListItem>
            ) : null}

            {selectedCategory === "Overview" || selectedCategory === "Leave" ? (
              <AnimatedListItem>
                <LeaveAreaChart />
              </AnimatedListItem>
            ) : null}

            {selectedCategory === "Overview" ||
            selectedCategory === "Performance" ? (
              <AnimatedListItem>
                <PerformanceRatingChart />
              </AnimatedListItem>
            ) : null}

            {selectedCategory === "Overview" ||
            selectedCategory === "Approvals" ? (
              <AnimatedListItem>
                <ApprovalInteractivePieChart />
              </AnimatedListItem>
            ) : null}
          </div>
        </AnimatedList>

        <div className="mt-4 rounded-3xl border border-dashed border-slate-300 bg-white p-4">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
              <PieChart className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-950">Analytics note</p>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                These visuals currently use mock data. In the backend phase,
                they will be powered by report endpoints and date-range filters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MobileAppShell>
  );
}
