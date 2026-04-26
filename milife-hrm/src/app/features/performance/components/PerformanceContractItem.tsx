"use client";

import Link from "next/link";
import { ChevronRight, Gauge, UserRound } from "lucide-react";

import { PerformanceStatusBadge } from "@/app/features/performance/components/PerformanceStatusBadge";
import type { PerformanceContract } from "@/app/features/performance/data";

import { Progress } from "@/components/ui/progress";

type PerformanceContractItemProps = {
  contract: PerformanceContract;
};

export function PerformanceContractItem({
  contract,
}: PerformanceContractItemProps) {
  const averageProgress = Math.round(
    (contract.kpiProgress + contract.competencyProgress) / 2,
  );

  return (
    <Link
      href={`/performance/${contract.id}`}
      className="group block w-full border-b border-slate-100 bg-white px-4 py-4 text-left transition hover:bg-slate-50 last:border-b-0"
    >
      <div className="flex gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
          <Gauge className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="truncate text-sm font-bold text-slate-950">
                {contract.employeeName}
              </h3>

              <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <UserRound className="h-3.5 w-3.5" />
                <span className="truncate">
                  {contract.role} · {contract.department}
                </span>
              </p>
            </div>

            <PerformanceStatusBadge status={contract.status} />
          </div>

          <p className="mt-2 text-xs font-semibold text-emerald-700">
            {contract.currentStage}
          </p>

          <div className="mt-3">
            <div className="mb-1.5 flex items-center justify-between">
              <p className="text-xs font-medium text-slate-500">
                Overall progress
              </p>

              <p className="text-xs font-bold text-slate-700">
                {averageProgress}%
              </p>
            </div>

            <Progress value={averageProgress} className="h-2" />
          </div>

          {contract.finalScore && contract.rating ? (
            <div className="mt-3 rounded-2xl bg-slate-50 px-3 py-2">
              <p className="text-xs font-medium text-slate-500">Final rating</p>

              <p className="mt-1 text-sm font-bold text-slate-950">
                {contract.finalScore} · {contract.rating}
              </p>
            </div>
          ) : null}

          <div className="mt-3 flex justify-end">
            <ChevronRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-emerald-600" />
          </div>
        </div>
      </div>
    </Link>
  );
}
