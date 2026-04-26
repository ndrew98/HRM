"use client";

import { useState } from "react";
import { Search, UserPlus, Users } from "lucide-react";

import { MobileAppShell } from "@/app/components/layout/MobileAppShell";
import { MetricCard } from "@/app/components/shared/MetricCard";
import { EmployeeCard } from "@/app/features/employees/components/EmployeeCard";

const employees = [
  {
    id: "1",
    staffId: "MIL-0012",
    name: "Akosua Mensah",
    email: "akosua.mensah@milife.com",
    department: "Human Resources",
    branch: "Head Office",
    jobTitle: "HR Officer",
    status: "Active",
  },
  {
    id: "2",
    staffId: "MIL-0048",
    name: "Kwame Boateng",
    email: "kwame.boateng@milife.com",
    department: "Sales",
    branch: "Kumasi Branch",
    jobTitle: "Sales Executive",
    status: "Probation",
  },
  {
    id: "3",
    staffId: "MIL-0075",
    name: "Ama Owusu",
    email: "ama.owusu@milife.com",
    department: "Finance",
    branch: "Head Office",
    jobTitle: "Accounts Officer",
    status: "Active",
  },
  {
    id: "4",
    staffId: "MIL-0104",
    name: "Kojo Appiah",
    email: "kojo.appiah@milife.com",
    department: "Operations",
    branch: "Takoradi Branch",
    jobTitle: "Operations Supervisor",
    status: "Suspended",
  },
];

export default function EmployeesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEmployees = employees.filter((employee) => {
    const searchText = searchQuery.toLowerCase();

    return (
      employee.name.toLowerCase().includes(searchText) ||
      employee.staffId.toLowerCase().includes(searchText) ||
      employee.email.toLowerCase().includes(searchText) ||
      employee.department.toLowerCase().includes(searchText) ||
      employee.branch.toLowerCase().includes(searchText) ||
      employee.jobTitle.toLowerCase().includes(searchText) ||
      employee.status.toLowerCase().includes(searchText)
    );
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
              View and manage staff profiles, departments, roles, and employment
              status.
            </p>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm"
            aria-label="Add employee"
          >
            <UserPlus className="h-5 w-5" />
          </button>
        </div>
      </section>

      <section className="px-4">
        <MetricCard
          title="Total staff"
          value="128"
          helper="112 active employees"
          icon={Users}
        />
      </section>

      <section className="mt-4 px-4">
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-3 shadow-sm">
          <Search className="h-5 w-5 text-slate-400" />

          <input
            type="search"
            placeholder="Search employees"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
          />
        </div>
      </section>

      <section className="mt-5 px-4 pb-6">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-950">Staff list</h3>

            <p className="text-sm text-slate-500">
              Showing {filteredEmployees.length} of {employees.length} employees
            </p>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-emerald-700"
          >
            Filter
          </button>
        </div>

        {filteredEmployees.length > 0 ? (
          <div className="space-y-3">
            {filteredEmployees.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </div>
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
