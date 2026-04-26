type StatusBadgeProps = {
  status: string;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const normalizedStatus = status.toLowerCase();

  const statusClasses =
    normalizedStatus === "active"
      ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
      : normalizedStatus === "probation"
        ? "bg-amber-50 text-amber-700 ring-amber-200"
        : normalizedStatus === "suspended"
          ? "bg-red-50 text-red-700 ring-red-200"
          : "bg-slate-100 text-slate-700 ring-slate-200";

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${statusClasses}`}
    >
      {status}
    </span>
  );
}
