import { Badge } from "@/components/ui/badge";
import type { PerformanceStatus } from "@/app/features/performance/data";

type PerformanceStatusBadgeProps = {
  status: PerformanceStatus;
};

export function PerformanceStatusBadge({
  status,
}: PerformanceStatusBadgeProps) {
  const statusClasses =
    status === "Approved"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : status === "Pending Review"
        ? "border-amber-200 bg-amber-50 text-amber-700"
        : status === "Returned"
          ? "border-purple-200 bg-purple-50 text-purple-700"
          : status === "In Progress"
            ? "border-blue-200 bg-blue-50 text-blue-700"
            : "border-slate-200 bg-slate-100 text-slate-700";

  return (
    <Badge
      variant="outline"
      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClasses}`}
    >
      {status}
    </Badge>
  );
}
