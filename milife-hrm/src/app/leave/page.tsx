"use client";

import { useState } from "react";
import { CalendarClock, WalletCards } from "lucide-react";

import { MobileAppShell } from "@/app/components/layout/MobileAppShell";
import { FadeIn } from "@/app/components/shared/FadeIn";
import { AnimatedList } from "@/app/components/shared/AnimatedList";
import { AnimatedListItem } from "@/app/components/shared/AnimatedListItem";

import { leaveRequests, leaveTypes } from "@/app/features/leave/data";
import { ApplyLeaveSheet } from "@/app/features/leave/components/ApplyLeaveSheet";
import { LeaveTimelineItem } from "@/app/features/leave/components/LeaveTimelineItem";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function LeavePage() {
  const [selectedLeaveTypeId, setSelectedLeaveTypeId] = useState("annual");

  const selectedLeaveType =
    leaveTypes.find((type) => type.id === selectedLeaveTypeId) ?? leaveTypes[0];

  const usedPercentage =
    (selectedLeaveType.used / selectedLeaveType.entitled) * 100;

  return (
    <MobileAppShell>
      <section className="px-4 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-500">Time off</p>

            <h2 className="mt-1 text-2xl font-bold text-slate-950">Leave</h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Apply for leave, track balances, and follow approval progress.
            </p>
          </div>

          <ApplyLeaveSheet />
        </div>
      </section>

      <FadeIn className="px-4">
        <section className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-sm">
          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-300">
                  {selectedLeaveType.name} Leave Balance
                </p>

                <p className="mt-2 text-4xl font-bold tracking-tight">
                  {selectedLeaveType.remaining}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  days remaining out of {selectedLeaveType.entitled}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                <WalletCards className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-medium text-slate-400">Used leave</p>

                <p className="text-xs font-bold text-emerald-300">
                  {selectedLeaveType.used}/{selectedLeaveType.entitled} days
                </p>
              </div>

              <Progress value={usedPercentage} className="h-2 bg-white/10" />
            </div>
          </div>
        </section>
      </FadeIn>

      <section className="mt-5 px-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-950">Leave types</h3>

            <p className="text-sm text-slate-500">Tap a type to view balance</p>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {leaveTypes.map((type) => {
            const isSelected = selectedLeaveTypeId === type.id;

            return (
              <Button
                key={type.id}
                type="button"
                size="sm"
                variant={isSelected ? "default" : "outline"}
                onClick={() => setSelectedLeaveTypeId(type.id)}
                className={
                  isSelected
                    ? "h-10 shrink-0 rounded-full bg-emerald-600 px-4 text-xs font-semibold text-white hover:bg-emerald-700"
                    : "h-10 shrink-0 rounded-full border-slate-200 bg-white px-4 text-xs font-semibold text-slate-600"
                }
              >
                {type.name}
              </Button>
            );
          })}
        </div>
      </section>

      <section className="mt-6 px-4 pb-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-950">
              Recent requests
            </h3>

            <p className="text-sm text-slate-500">Latest leave activity</p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
            <CalendarClock className="h-5 w-5" />
          </div>
        </div>

        <AnimatedList>
          {leaveRequests.map((request, index) => (
            <AnimatedListItem key={request.id}>
              <LeaveTimelineItem
                request={request}
                isLast={index === leaveRequests.length - 1}
              />
            </AnimatedListItem>
          ))}
        </AnimatedList>
      </section>
    </MobileAppShell>
  );
}
