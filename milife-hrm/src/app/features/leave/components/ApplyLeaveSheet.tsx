"use client";

import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import {
  eachDayOfInterval,
  format,
  isSameDay,
  isWeekend,
  parseISO,
} from "date-fns";

import { DatePicker } from "@/app/components/shared/DatePicker";
import { leaveTypes } from "@/app/features/leave/data";
import { publicHolidays } from "@/app/features/leave/components/holidays";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// Helper function to calculate the number of leave days, excluding weekends
function getPublicHolidayForDate(date: Date) {
  return publicHolidays.find((holiday) =>
    isSameDay(parseISO(holiday.date), date),
  );
}

function calculateWorkingLeaveDays(startDate: Date, endDate: Date) {
  const days = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const workingDays = days.filter((day) => {
    const isPublicHoliday = Boolean(getPublicHolidayForDate(day));

    return !isWeekend(day) && !isPublicHoliday;
  });

  return workingDays.length;
}

function getExcludedPublicHolidays(startDate: Date, endDate: Date) {
  const days = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  return days
    .map((day) => getPublicHolidayForDate(day))
    .filter((holiday): holiday is NonNullable<typeof holiday> =>
      Boolean(holiday),
    );
}

export function ApplyLeaveSheet() {
  const [leaveTypeId, setLeaveTypeId] = useState("");
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  const selectedLeaveType = leaveTypes.find((type) => type.id === leaveTypeId);

  const totalLeaveDays = useMemo(() => {
    if (!startDate || !endDate) {
      return 0;
    }

    if (endDate < startDate) {
      return 0;
    }

    return calculateWorkingLeaveDays(startDate, endDate);
  }, [startDate, endDate]);

  const excludedPublicHolidays = useMemo(() => {
    if (!startDate || !endDate || endDate < startDate) {
      return [];
    }

    return getExcludedPublicHolidays(startDate, endDate);
  }, [startDate, endDate]);

  const hasValidDates = Boolean(startDate && endDate && totalLeaveDays > 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="h-11 rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700">
          <Plus className="mr-2 h-4 w-4" />
          Apply Leave
        </Button>
      </SheetTrigger>

      <SheetContent side="bottom" className="rounded-t-3xl">
        <SheetHeader>
          <SheetTitle>Apply for leave</SheetTitle>
          <SheetDescription>
            Submit a leave request for manager and HR approval.
          </SheetDescription>
        </SheetHeader>

        <form
          className="mt-6 space-y-4"
          onSubmit={(event) => {
            event.preventDefault();

            if (!leaveTypeId || !startDate || !endDate) {
              toast.error(
                "Please select leave type, start date, and end date.",
              );
              return;
            }

            if (endDate < startDate) {
              toast.error("End date cannot be before start date.");
              return;
            }

            if (totalLeaveDays === 0) {
              toast.error("Selected dates do not include any working days.");
              return;
            }

            toast.success(
              `Leave request drafted for ${totalLeaveDays} day${
                totalLeaveDays > 1 ? "s" : ""
              }.`,
            );
          }}
        >
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Leave type
            </label>

            <Select value={leaveTypeId} onValueChange={setLeaveTypeId}>
              <SelectTrigger className="h-11 rounded-2xl">
                <SelectValue placeholder="Select leave type" />
              </SelectTrigger>

              <SelectContent>
                {leaveTypes.map((type) => (
                  <SelectItem key={type.id} value={type.id}>
                    {type.name} Leave
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <DatePicker
              label="Start date"
              date={startDate}
              onDateChange={setStartDate}
              placeholder="Select start date"
            />

            <DatePicker
              label="End date"
              date={endDate}
              onDateChange={setEndDate}
              placeholder="Select end date"
              disabled={(date) => {
                if (!startDate) return false;

                return date < startDate;
              }}
            />
          </div>

          {hasValidDates ? (
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-4">
              <p className="text-sm font-semibold text-emerald-800">
                Working leave duration
              </p>

              <p className="mt-2 text-3xl font-bold tracking-tight text-emerald-950">
                {totalLeaveDays} day{totalLeaveDays > 1 ? "s" : ""}
              </p>

              <p className="mt-1 text-sm leading-6 text-emerald-700">
                {format(startDate!, "PPP")} to {format(endDate!, "PPP")}
              </p>

              <p className="mt-1 text-xs font-medium text-emerald-700">
                Weekends and Public holidays are excluded from this calculation.
              </p>

              {excludedPublicHolidays.length > 0 ? (
                <div className="mt-3 rounded-2xl bg-white px-3 py-2">
                  <p className="text-xs font-bold text-slate-700">
                    Public holidays excluded
                  </p>

                  <ul className="mt-2 space-y-1">
                    {excludedPublicHolidays.map((holiday) => (
                      <li
                        key={`${holiday.date}-${holiday.name}`}
                        className="text-xs text-slate-600"
                      >
                        {format(parseISO(holiday.date), "PPP")} · {holiday.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {selectedLeaveType ? (
                <p className="mt-2 text-xs font-medium text-emerald-700">
                  {selectedLeaveType.remaining} days currently available for{" "}
                  {selectedLeaveType.name.toLowerCase()} leave.
                </p>
              ) : null}

              {selectedLeaveType &&
              totalLeaveDays > selectedLeaveType.remaining ? (
                <p className="mt-2 rounded-2xl bg-white px-3 py-2 text-xs font-semibold text-red-600">
                  This request is more than the available balance.
                </p>
              ) : null}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-700">
                Working leave duration
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Select a start date and end date to calculate the number of
                working leave days.
              </p>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Reason
            </label>

            <Textarea
              placeholder="Add a short reason"
              className="min-h-24 rounded-2xl"
            />
          </div>

          <Button
            type="submit"
            className="h-11 w-full rounded-full bg-emerald-600 font-semibold text-white hover:bg-emerald-700"
          >
            Save request
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
