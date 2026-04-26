import { MobileAppShell } from "@/app/components/layout/MobileAppShell";

export default function EmployeesPage() {
  return (
    <MobileAppShell>
      <section className="px-4 py-5">
        <p className="text-sm font-medium text-slate-500">Employee records</p>

        <h2 className="mt-1 text-2xl font-bold text-slate-950">Employees</h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          View and manage staff profiles, departments, roles, and employment
          status.
        </p>
      </section>
    </MobileAppShell>
  );
}
