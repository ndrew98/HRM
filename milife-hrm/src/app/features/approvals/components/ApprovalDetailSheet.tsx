"use client";

import { toast } from "sonner";

import { ApprovalStatusBadge } from "@/app/features/approvals/components/ApprovalStatusBadge";
import { ApprovalTimeline } from "@/app/features/approvals/components/ApprovalTimeline";
import type { ApprovalItem } from "@/app/features/approvals/data";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

type ApprovalDetailSheetProps = {
  approval: ApprovalItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ApprovalDetailSheet({
  approval,
  open,
  onOpenChange,
}: ApprovalDetailSheetProps) {
  if (!approval) {
    return null;
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="max-h-[88vh] overflow-y-auto rounded-t-3xl"
      >
        <SheetHeader>
          <div className="flex items-start justify-between gap-3">
            <div>
              <SheetTitle>{approval.title}</SheetTitle>

              <SheetDescription className="mt-1">
                {approval.employeeName} · {approval.department}
              </SheetDescription>
            </div>

            <ApprovalStatusBadge status={approval.status} />
          </div>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          <section>
            <p className="text-sm font-bold text-slate-950">Request summary</p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {approval.summary}
            </p>
          </section>

          <Separator />

          <section>
            <p className="mb-3 text-sm font-bold text-slate-950">Details</p>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              {approval.details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-start justify-between gap-4 border-b border-slate-100 px-4 py-3 last:border-b-0"
                >
                  <p className="text-xs font-medium text-slate-500">
                    {detail.label}
                  </p>

                  <p className="text-right text-sm font-semibold text-slate-950">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="mb-3 text-sm font-bold text-slate-950">
              Approval timeline
            </p>

            <ApprovalTimeline steps={approval.timeline} />
          </section>

          {approval.status === "Pending" ? (
            <>
              <Separator />

              <section>
                <label className="text-sm font-bold text-slate-950">
                  Comment
                </label>

                <Textarea
                  placeholder="Add an optional approval comment"
                  className="mt-2 min-h-24 rounded-2xl"
                />
              </section>

              <div className="sticky bottom-0 -mx-6 bg-white/95 px-6 pb-2 pt-3 backdrop-blur">
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full border-purple-200 text-purple-700"
                    onClick={() => {
                      toast.info("Request returned to employee");
                      onOpenChange(false);
                    }}
                  >
                    Return
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full border-red-200 text-red-700"
                    onClick={() => {
                      toast.error("Request rejected");
                      onOpenChange(false);
                    }}
                  >
                    Reject
                  </Button>

                  <Button
                    type="button"
                    className="rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
                    onClick={() => {
                      toast.success("Request approved");
                      onOpenChange(false);
                    }}
                  >
                    Approve
                  </Button>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </SheetContent>
    </Sheet>
  );
}
