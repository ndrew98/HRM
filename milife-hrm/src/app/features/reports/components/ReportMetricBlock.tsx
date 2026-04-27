import type { ReactNode } from "react";

type ReportMetricBlockProps = {
  label: string;
  value: string;
  helper: string;
  icon: ReactNode;
};

export function ReportMetricBlock({
  label,
  value,
  helper,
  icon,
}: ReportMetricBlockProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>

          <p className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
            {value}
          </p>

          <p className="mt-1 text-xs font-medium text-slate-500">{helper}</p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
          {icon}
        </div>
      </div>
    </div>
  );
}
