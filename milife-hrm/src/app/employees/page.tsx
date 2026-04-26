"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, UserPlus, Users } from "lucide-react";

import { MobileAppShell } from "@/app/components/layout/MobileAppShell";
import { AnimatedList } from "@/app/components/shared/AnimatedList";
import { AnimatedListItem } from "@/app/components/shared/AnimatedListItem";
import { EmployeeListItem } from "@/app/features/employees/components/EmployeeListItem";
import { employees } from "@/app/features/employees/data";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const statusFilters = ["All", "Active", "Probation", "Suspended"];

export default function EmployeesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredEmployees = employees.filter((employee) => {
    const searchText = searchQuery.toLowerCase();

    const matchesSearch =
      employee.name.toLowerCase().includes(searchText) ||
      employee.staffId.toLowerCase().includes(searchText) ||
      employee.email.toLowerCase().includes(searchText) ||
      employee.department.toLowerCase().includes(searchText) ||
      employee.branch.toLowerCase().includes(searchText) ||
      employee.jobTitle.toLowerCase().includes(searchText) ||
      employee.status.toLowerCase().includes(searchText);

    const matchesStatus =
      selectedStatus === "All" || employee.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <MobileAppShell>
      <section className="px-4 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Employee records
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-950">
              Employees
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              View staff profiles, departments, roles, and employment status.
            </p>
          </div>

          <Button
            type="button"
            size="icon"
            className="h-11 w-11 shrink-0 rounded-full bg-emerald-600 text-white shadow-sm hover:bg-emerald-700"
            aria-label="Add employee"
          >
            <UserPlus className="h-5 w-5" />
          </Button>
        </div>
      </section>

      <section className="px-4">
        <div className="rounded-3xl bg-slate-950 p-4 text-white shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-slate-300">Total staff</p>

              <p className="mt-2 text-3xl font-bold tracking-tight">128</p>

              <p className="mt-1 text-xs font-medium text-slate-400">
                112 active employees
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
              <Users className="h-6 w-6" />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4 px-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <Input
            type="search"
            placeholder="Search employees"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="h-12 rounded-2xl border-slate-200 bg-white pl-10 text-sm shadow-sm"
          />
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {statusFilters.map((status) => {
              const isSelected = selectedStatus === status;

              return (
                <Button
                  key={status}
                  type="button"
                  size="sm"
                  variant={isSelected ? "default" : "outline"}
                  onClick={() => setSelectedStatus(status)}
                  className={
                    isSelected
                      ? "h-9 shrink-0 rounded-full bg-emerald-600 px-4 text-xs font-semibold text-white hover:bg-emerald-700"
                      : "h-9 shrink-0 rounded-full border-slate-200 bg-white px-4 text-xs font-semibold text-slate-600"
                  }
                >
                  {status}
                </Button>
              );
            })}
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                type="button"
                size="icon"
                variant="outline"
                className="h-9 w-9 shrink-0 rounded-full border-slate-200 bg-white"
                aria-label="Open filters"
              >
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </SheetTrigger>

            <SheetContent side="bottom" className="rounded-t-3xl">
              <SheetHeader>
                <SheetTitle>Filter employees</SheetTitle>
                <SheetDescription>
                  Narrow the staff directory by employment status.
                </SheetDescription>
              </SheetHeader>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {statusFilters.map((status) => {
                  const isSelected = selectedStatus === status;

                  return (
                    <Button
                      key={status}
                      type="button"
                      variant={isSelected ? "default" : "outline"}
                      onClick={() => setSelectedStatus(status)}
                      className={
                        isSelected
                          ? "rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700"
                          : "rounded-2xl border-slate-200 bg-white text-slate-700"
                      }
                    >
                      {status}
                    </Button>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </section>

      <section className="mt-5 px-4 pb-6">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-950">
              Staff directory
            </h3>

            <p className="text-sm text-slate-500">
              Showing {filteredEmployees.length} of {employees.length} employees
            </p>
          </div>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {selectedStatus}
          </span>
        </div>

        {filteredEmployees.length > 0 ? (
          <AnimatedList>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              {filteredEmployees.map((employee) => (
                <AnimatedListItem key={employee.id}>
                  <EmployeeListItem employee={employee} />
                </AnimatedListItem>
              ))}
            </div>
          </AnimatedList>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center">
            <p className="text-sm font-semibold text-slate-900">
              No employees found
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Try searching by name, staff ID, department, branch, role, or
              status.
            </p>
          </div>
        )}
      </section>
    </MobileAppShell>
  );
}
