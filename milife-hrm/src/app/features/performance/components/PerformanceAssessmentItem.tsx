import { Target } from "lucide-react";

import { RatingPill } from "@/app/features/performance/components/RatingPill";
import type { PerformanceContractItem } from "@/app/features/performance/data";

type PerformanceAssessmentItemProps = {
  item: PerformanceContractItem;
};

export function PerformanceAssessmentItem({
  item,
}: PerformanceAssessmentItemProps) {
  return (
    <div className="border-b border-slate-100 px-4 py-4 last:border-b-0">
      <div className="flex gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
          <Target className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold text-slate-950">{item.title}</h3>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>

            <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
              {item.weight}%
            </span>
          </div>

          <div className="mt-3 rounded-2xl bg-slate-50 px-3 py-2">
            <p className="text-[11px] font-medium text-slate-500">Target</p>

            <p className="mt-1 text-sm font-semibold text-slate-800">
              {item.target}
            </p>
          </div>

          {item.evidence ? (
            <div className="mt-3 rounded-2xl bg-emerald-50 px-3 py-2">
              <p className="text-[11px] font-medium text-emerald-700">
                Evidence
              </p>

              <p className="mt-1 text-sm leading-6 text-emerald-800">
                {item.evidence}
              </p>
            </div>
          ) : null}

          <div className="mt-3 grid grid-cols-2 gap-2">
            <RatingPill label="Self score" score={item.selfScore} />
            <RatingPill label="Manager score" score={item.managerScore} />
          </div>
        </div>
      </div>
    </div>
  );
}
