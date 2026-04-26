import { CalendarDays } from "lucide-react";

import { LeaveStatusBadge } from "@/app/features/leave/components/LeaveStatusBadge";
import type { LeaveRequest } from "@/app/features/leave/data";

type LeaveTimelineItemProps = {
  request: LeaveRequest;
  isLast?: boolean;
};

export function LeaveTimelineItem({
  request,
  isLast = false,
}: LeaveTimelineItemProps) {
  return (
    <div className="relative flex gap-3 pb-5 last:pb-0">
      {!isLast ? (
        <div className="absolute left-5 top-10 h-full w-px bg-slate-200" />
      ) : null}

      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
        <CalendarDays className="h-5 w-5" />
      </div>

      <div className="min-w-0 flex-1 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-slate-950">
              {request.type} Leave
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Submitted {request.submittedOn}
            </p>
          </div>

          <LeaveStatusBadge status={request.status} />
        </div>

        <div className="mt-4 rounded-2xl bg-slate-50 p-3">
          <p className="text-sm font-semibold text-slate-800">
            {request.startDate} - {request.endDate}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            {request.totalDays} day{request.totalDays > 1 ? "s" : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
