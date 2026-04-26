import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StatusBadge } from "@/app/components/shared/StatusBadge";
import type { Employee } from "@/app/features/employees/data";

type EmployeeListItemProps = {
  employee: Employee;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function EmployeeListItem({ employee }: EmployeeListItemProps) {
  return (
    <Link
      href={`/employees/${employee.id}`}
      className="group block border-b border-slate-100 bg-white px-4 py-4 transition hover:bg-slate-50"
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-11 w-11 rounded-2xl">
          <AvatarFallback className="rounded-2xl bg-emerald-50 text-sm font-bold text-emerald-700">
            {getInitials(employee.name)}
          </AvatarFallback>
        </Avatar>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="truncate text-sm font-bold text-slate-950">
                {employee.name}
              </h3>

              <p className="mt-0.5 truncate text-sm font-medium text-slate-600">
                {employee.jobTitle}
              </p>
            </div>

            <StatusBadge status={employee.status} />
          </div>

          <div className="mt-2 flex items-center justify-between gap-3">
            <p className="truncate text-xs text-slate-500">
              {employee.department} · {employee.branch}
            </p>

            <ChevronRight className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-emerald-600" />
          </div>
        </div>
      </div>
    </Link>
  );
}
