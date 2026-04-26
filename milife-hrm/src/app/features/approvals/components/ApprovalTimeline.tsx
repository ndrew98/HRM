import { CheckCircle2, Clock3, RotateCcw, XCircle } from "lucide-react";

import type { ApprovalStep } from "@/app/features/approvals/data";

type ApprovalTimelineProps = {
  steps: ApprovalStep[];
};

function getStepIcon(status: ApprovalStep["status"]) {
  if (status === "Approved") return CheckCircle2;
  if (status === "Returned") return RotateCcw;
  if (status === "Rejected") return XCircle;
  return Clock3;
}

function getStepClasses(status: ApprovalStep["status"]) {
  if (status === "Approved") {
    return "bg-emerald-50 text-emerald-700";
  }

  if (status === "Returned") {
    return "bg-purple-50 text-purple-700";
  }

  if (status === "Rejected") {
    return "bg-red-50 text-red-700";
  }

  return "bg-amber-50 text-amber-700";
}

export function ApprovalTimeline({ steps }: ApprovalTimelineProps) {
  return (
    <div className="space-y-0">
      {steps.map((step, index) => {
        const Icon = getStepIcon(step.status);
        const isLast = index === steps.length - 1;

        return (
          <div key={step.id} className="relative flex gap-3 pb-5 last:pb-0">
            {!isLast ? (
              <div className="absolute left-5 top-10 h-full w-px bg-slate-200" />
            ) : null}

            <div
              className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${getStepClasses(
                step.status,
              )}`}
            >
              <Icon className="h-5 w-5" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-slate-950">
                    {step.actor}
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-slate-500">
                    {step.role}
                  </p>
                </div>

                <p className="text-xs font-semibold text-slate-500">
                  {step.date ?? step.status}
                </p>
              </div>

              {step.comment ? (
                <p className="mt-2 rounded-2xl bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-600">
                  {step.comment}
                </p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
