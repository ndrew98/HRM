"use client";

import {
  CalendarClock,
  ChevronRight,
  ClipboardCheck,
  FileText,
  UserRound,
} from "lucide-react";

import { ApprovalStatusBadge } from "@/app/features/approvals/components/ApprovalStatusBadge";
import type { ApprovalItem } from "@/app/features/approvals/data";

type ApprovalQueueItemProps = {
  approval: ApprovalItem;
  onOpen: (approval: ApprovalItem) => void;
};

function renderApprovalIcon(type: ApprovalItem["type"]) {
  if (type === "Leave") {
    return <CalendarClock className="h-5 w-5" />;
  }

  if (type === "Performance") {
    return <ClipboardCheck className="h-5 w-5" />;
  }

  return <FileText className="h-5 w-5" />;
}

export function ApprovalQueueItem({
  approval,
  onOpen,
}: ApprovalQueueItemProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(approval)}
      className="group w-full border-b border-slate-100 bg-white px-4 py-4 text-left transition hover:bg-slate-50 last:border-b-0"
    >
      <div className="flex gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
          {renderApprovalIcon(approval.type)}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="truncate text-sm font-bold text-slate-950">
                {approval.title}
              </h3>

              <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <UserRound className="h-3.5 w-3.5" />
                <span className="truncate">{approval.employeeName}</span>
              </p>
            </div>

            <ApprovalStatusBadge status={approval.status} />
          </div>

          <p className="mt-2 line-clamp-2 text-sm leading-5 text-slate-600">
            {approval.summary}
          </p>

          <div className="mt-3 flex items-center justify-between gap-3">
            <p className="truncate text-xs font-semibold text-emerald-700">
              {approval.currentStage}
            </p>

            <ChevronRight className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-emerald-600" />
          </div>
        </div>
      </div>
    </button>
  );
}
