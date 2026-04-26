"use client";

import { useState } from "react";
import {
  ClipboardCheck,
  Gauge,
  LineChart,
  ListChecks,
  TimerReset,
} from "lucide-react";

import { MobileAppShell } from "@/app/components/layout/MobileAppShell";
import { AnimatedList } from "@/app/components/shared/AnimatedList";
import { AnimatedListItem } from "@/app/components/shared/AnimatedListItem";
import { FadeIn } from "@/app/components/shared/FadeIn";

import {
  activePerformanceCycle,
  performanceContracts,
  type PerformanceStatus,
} from "@/app/features/performance/data";
import { PerformanceContractItem } from "@/app/features/performance/components/PerformanceContractItem";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const performanceFilters: {
  label: string;
  value: "All" | PerformanceStatus;
}[] = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "Progress",
    value: "In Progress",
  },
  {
    label: "Review",
    value: "Pending Review",
  },
  {
    label: "Approved",
    value: "Approved",
  },
  {
    label: "Returned",
    value: "Returned",
  },
];

export default function PerformancePage() {
  const [selectedFilter, setSelectedFilter] = useState<
    "All" | PerformanceStatus
  >("All");

  const filteredContracts =
    selectedFilter === "All"
      ? performanceContracts
      : performanceContracts.filter(
          (contract) => contract.status === selectedFilter,
        );

  return (
    <MobileAppShell>
      <section className="px-4 py-5">
        <p className="text-sm font-medium text-slate-500">Appraisal cycle</p>

        <h2 className="mt-1 text-2xl font-bold text-slate-950">Performance</h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Track contracts, KPI progress, appraisals, reviews, and final ratings.
        </p>
      </section>

      <FadeIn className="px-4">
        <section className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-sm">
          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-300">
                  Active cycle
                </p>

                <h3 className="mt-2 text-xl font-bold leading-tight">
                  {activePerformanceCycle.name}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {activePerformanceCycle.period}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                <ClipboardCheck className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-medium text-slate-400">
                  Cycle completion
                </p>

                <p className="text-xs font-bold text-emerald-300">
                  {activePerformanceCycle.completion}%
                </p>
              </div>

              <Progress
                value={activePerformanceCycle.completion}
                className="h-2 bg-white/10"
              />
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              <CycleMiniStat
                icon={ListChecks}
                label="Contracts"
                value={activePerformanceCycle.contractsTotal}
              />

              <CycleMiniStat
                icon={Gauge}
                label="Completed"
                value={activePerformanceCycle.contractsCompleted}
              />

              <CycleMiniStat
                icon={TimerReset}
                label="Reviews"
                value={activePerformanceCycle.pendingReviews}
              />
            </div>
          </div>
        </section>
      </FadeIn>

      <section className="mt-5 px-4">
        <div className="grid grid-cols-2 gap-3">
          <InsightBlock
            icon={LineChart}
            label="KPI progress"
            value="72%"
            helper="Average completion"
          />

          <InsightBlock
            icon={Gauge}
            label="Competencies"
            value="58%"
            helper="Average completion"
          />
        </div>
      </section>

      <section className="mt-5 px-4">
        <Tabs
          value={selectedFilter}
          onValueChange={(value) =>
            setSelectedFilter(value as "All" | PerformanceStatus)
          }
        >
          <TabsList className="grid h-11 grid-cols-5 rounded-2xl bg-slate-100 p-1">
            {performanceFilters.map((filter) => (
              <TabsTrigger
                key={filter.value}
                value={filter.value}
                className="rounded-xl text-[11px]"
              >
                {filter.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </section>

      <section className="mt-5 px-4 pb-6">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-950">
              Performance contracts
            </h3>

            <p className="text-sm text-slate-500">
              Showing {filteredContracts.length} contract
              {filteredContracts.length === 1 ? "" : "s"}
            </p>
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            className="rounded-full border-slate-200 bg-white text-xs"
          >
            Export
          </Button>
        </div>

        {filteredContracts.length > 0 ? (
          <AnimatedList>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              {filteredContracts.map((contract) => (
                <AnimatedListItem key={contract.id}>
                  <PerformanceContractItem contract={contract} />
                </AnimatedListItem>
              ))}
            </div>
          </AnimatedList>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center">
            <p className="text-sm font-semibold text-slate-900">
              No contracts found
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              There are no performance contracts under this filter.
            </p>
          </div>
        )}
      </section>
    </MobileAppShell>
  );
}

type CycleMiniStatProps = {
  icon: React.ElementType;
  label: string;
  value: number;
};

function CycleMiniStat({ icon: Icon, label, value }: CycleMiniStatProps) {
  return (
    <div className="rounded-2xl bg-white/10 p-3">
      <Icon className="h-4 w-4 text-emerald-300" />

      <p className="mt-2 text-lg font-bold text-white">{value}</p>

      <p className="mt-1 text-[11px] font-medium text-slate-400">{label}</p>
    </div>
  );
}

type InsightBlockProps = {
  icon: React.ElementType;
  label: string;
  value: string;
  helper: string;
};

function InsightBlock({ icon: Icon, label, value, helper }: InsightBlockProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
        <Icon className="h-5 w-5" />
      </div>

      <p className="mt-4 text-sm font-medium text-slate-500">{label}</p>

      <p className="mt-1 text-2xl font-bold text-slate-950">{value}</p>

      <p className="mt-1 text-xs font-medium text-slate-500">{helper}</p>
    </div>
  );
}
