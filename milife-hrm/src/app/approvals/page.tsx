"use client";

import { useState } from "react";
import { CheckCircle2, Clock3, RotateCcw } from "lucide-react";

import { MobileAppShell } from "@/app/components/layout/MobileAppShell";
import { AnimatedList } from "@/app/components/shared/AnimatedList";
import { AnimatedListItem } from "@/app/components/shared/AnimatedListItem";
import { FadeIn } from "@/app/components/shared/FadeIn";

import { ApprovalDetailSheet } from "@/app/features/approvals/components/ApprovalDetailSheet";
import { ApprovalQueueItem } from "@/app/features/approvals/components/ApprovalQueueItem";
import {
  approvals,
  type ApprovalItem,
  type ApprovalStatus,
} from "@/app/features/approvals/data";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const approvalFilters: {
  label: string;
  value: "All" | ApprovalStatus;
}[] = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "Pending",
    value: "Pending",
  },
  {
    label: "Returned",
    value: "Returned",
  },
  {
    label: "Approved",
    value: "Approved",
  },
];

export default function ApprovalsPage() {
  const [selectedFilter, setSelectedFilter] = useState<"All" | ApprovalStatus>(
    "Pending",
  );
  const [selectedApproval, setSelectedApproval] = useState<ApprovalItem | null>(
    null,
  );
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const filteredApprovals =
    selectedFilter === "All"
      ? approvals
      : approvals.filter((approval) => approval.status === selectedFilter);

  const pendingCount = approvals.filter(
    (approval) => approval.status === "Pending",
  ).length;

  const returnedCount = approvals.filter(
    (approval) => approval.status === "Returned",
  ).length;

  const approvedCount = approvals.filter(
    (approval) => approval.status === "Approved",
  ).length;

  function openApproval(approval: ApprovalItem) {
    setSelectedApproval(approval);
    setIsSheetOpen(true);
  }

  return (
    <MobileAppShell>
      <section className="px-4 py-5">
        <p className="text-sm font-medium text-slate-500">Workflow tasks</p>

        <h2 className="mt-1 text-2xl font-bold text-slate-950">Approvals</h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Review leave requests, appraisal actions, documents, and other HR
          workflow items.
        </p>
      </section>

      <FadeIn className="px-4">
        <section className="rounded-[2rem] bg-slate-950 p-4 text-white shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-slate-300">
                Pending approvals
              </p>

              <p className="mt-2 text-4xl font-bold tracking-tight">
                {pendingCount}
              </p>

              <p className="mt-1 text-xs font-medium text-slate-400">
                Items waiting for your action
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
              <Clock3 className="h-6 w-6" />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/10 p-3">
              <div className="mb-2 flex items-center gap-2 text-emerald-300">
                <CheckCircle2 className="h-4 w-4" />
                <p className="text-xs font-semibold">Approved</p>
              </div>

              <p className="text-xl font-bold">{approvedCount}</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-3">
              <div className="mb-2 flex items-center gap-2 text-purple-300">
                <RotateCcw className="h-4 w-4" />
                <p className="text-xs font-semibold">Returned</p>
              </div>

              <p className="text-xl font-bold">{returnedCount}</p>
            </div>
          </div>
        </section>
      </FadeIn>

      <section className="mt-5 px-4">
        <Tabs
          value={selectedFilter}
          onValueChange={(value) =>
            setSelectedFilter(value as "All" | ApprovalStatus)
          }
        >
          <TabsList className="grid h-11 grid-cols-4 rounded-2xl bg-slate-100 p-1">
            {approvalFilters.map((filter) => (
              <TabsTrigger
                key={filter.value}
                value={filter.value}
                className="rounded-xl text-xs"
              >
                {filter.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </section>

      <section className="mt-5 px-4 pb-6">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-950">
              Approval queue
            </h3>

            <p className="text-sm text-slate-500">
              Showing {filteredApprovals.length} item
              {filteredApprovals.length === 1 ? "" : "s"}
            </p>
          </div>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {selectedFilter}
          </span>
        </div>

        {filteredApprovals.length > 0 ? (
          <AnimatedList>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              {filteredApprovals.map((approval) => (
                <AnimatedListItem key={approval.id}>
                  <ApprovalQueueItem
                    approval={approval}
                    onOpen={openApproval}
                  />
                </AnimatedListItem>
              ))}
            </div>
          </AnimatedList>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center">
            <p className="text-sm font-semibold text-slate-900">
              No approvals found
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              There are no workflow items under this status.
            </p>
          </div>
        )}
      </section>

      <ApprovalDetailSheet
        approval={selectedApproval}
        open={isSheetOpen}
        onOpenChange={setIsSheetOpen}
      />
    </MobileAppShell>
  );
}
