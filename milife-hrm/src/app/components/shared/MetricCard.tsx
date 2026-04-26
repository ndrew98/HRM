import { LucideIcon } from "lucide-react";

type MetricCardProps = {
  title: string;
  value: string;
  helper: string;
  icon: LucideIcon;
};

export function MetricCard({
  title,
  value,
  helper,
  icon: Icon,
}: MetricCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            {value}
          </p>

          <p className="mt-1 text-xs font-medium text-slate-500">{helper}</p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
