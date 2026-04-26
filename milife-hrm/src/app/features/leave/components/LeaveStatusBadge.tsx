import { Badge } from "@/components/ui/badge";
import type { LeaveRequest } from "@/app/features/leave/data";

type LeaveStatusBadgeProps = {
  status: LeaveRequest["status"];
};

export function LeaveStatusBadge({ status }: LeaveStatusBadgeProps) {
  const statusClasses =
    status === "Approved"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : status === "Pending"
        ? "border-amber-200 bg-amber-50 text-amber-700"
        : status === "Rejected"
          ? "border-red-200 bg-red-50 text-red-700"
          : "border-purple-200 bg-purple-50 text-purple-700";

  return (
    <Badge
      variant="outline"
      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClasses}`}
    >
      {status}
    </Badge>
  );
}
