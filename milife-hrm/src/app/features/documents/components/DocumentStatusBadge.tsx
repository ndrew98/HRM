import { Badge } from "@/components/ui/badge";
import type { DocumentStatus } from "@/app/features/documents/data";

type DocumentStatusBadgeProps = {
  status: DocumentStatus;
};

export function DocumentStatusBadge({ status }: DocumentStatusBadgeProps) {
  const statusClasses =
    status === "Verified"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : status === "Pending"
        ? "border-amber-200 bg-amber-50 text-amber-700"
        : status === "Expired"
          ? "border-red-200 bg-red-50 text-red-700"
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
