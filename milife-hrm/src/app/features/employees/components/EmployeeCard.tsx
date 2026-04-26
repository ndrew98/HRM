import { Mail, MapPin, UserRound } from "lucide-react";

import { StatusBadge } from "@/app/components/shared/StatusBadge";

type EmployeeCardProps = {
  employee: {
    id: string;
    staffId: string;
    name: string;
    email: string;
    department: string;
    branch: string;
    jobTitle: string;
    status: string;
  };
};

export function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
          <UserRound className="h-6 w-6" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="truncate text-base font-bold text-slate-950">
                {employee.name}
              </h3>

              <p className="mt-0.5 text-xs font-medium text-slate-500">
                {employee.staffId}
              </p>
            </div>

            <StatusBadge status={employee.status} />
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold text-slate-800">
              {employee.jobTitle}
            </p>

            <p className="text-sm text-slate-600">{employee.department}</p>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="h-4 w-4" />
              <span>{employee.branch}</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Mail className="h-4 w-4" />
              <span className="truncate">{employee.email}</span>
            </div>
          </div>

          <button
            type="button"
            className="mt-4 w-full rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"
          >
            View profile
          </button>
        </div>
      </div>
    </article>
  );
}
