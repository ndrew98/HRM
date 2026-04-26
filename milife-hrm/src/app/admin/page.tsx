import { ShieldCheck, UserCog, UsersRound } from "lucide-react";

import { MobileAppShell } from "@/app/components/layout/MobileAppShell";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  return (
    <MobileAppShell>
      <section className="px-4 py-5">
        <p className="text-sm font-medium text-slate-500">Admin tools</p>

        <h2 className="mt-1 text-2xl font-bold text-slate-950">Admin</h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Manage users, roles, permissions, audit logs, and workflow
          configuration.
        </p>
      </section>

      <section className="px-4">
        <div className="rounded-[2rem] bg-slate-950 p-5 text-white shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
            <ShieldCheck className="h-6 w-6" />
          </div>

          <h3 className="mt-5 text-xl font-bold">Access control</h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Protect HR records with role-based access, permissions, and complete
            audit trails.
          </p>

          <Button className="mt-5 rounded-full bg-emerald-600 text-white hover:bg-emerald-700">
            <UserCog className="mr-2 h-4 w-4" />
            Manage access
          </Button>
        </div>
      </section>

      <section className="mt-5 px-4 pb-6">
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center">
          <UsersRound className="mx-auto h-8 w-8 text-slate-400" />

          <p className="mt-3 text-sm font-semibold text-slate-900">
            Admin module coming next
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            We’ll add user management, role permissions, system logs, and
            admin-only workflows here.
          </p>
        </div>
      </section>
    </MobileAppShell>
  );
}
