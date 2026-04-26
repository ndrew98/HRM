import Link from "next/link";
import {
  BarChart3,
  ChevronRight,
  FileText,
  FolderOpen,
  Settings,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";

import { MobileAppShell } from "@/app/components/layout/MobileAppShell";
import { Badge } from "@/components/ui/badge";

const moduleItems = [
  {
    title: "Documents",
    description: "Letters, contracts, policies, and uploads",
    href: "/documents",
    type: "documents",
  },
  {
    title: "Reports",
    description: "Headcount, leave, performance, and audit reports",
    href: "/reports",
    type: "reports",
  },
  {
    title: "Settings",
    description: "Departments, roles, branches, and setup",
    href: "/settings",
    type: "settings",
  },
  {
    title: "Admin",
    description: "Users, permissions, workflows, and audit logs",
    href: "/admin",
    type: "admin",
  },
];

function renderModuleIcon(type: string) {
  if (type === "documents") {
    return <FolderOpen className="h-5 w-5" />;
  }

  if (type === "reports") {
    return <BarChart3 className="h-5 w-5" />;
  }

  if (type === "settings") {
    return <Settings className="h-5 w-5" />;
  }

  return <ShieldCheck className="h-5 w-5" />;
}

export default function MorePage() {
  return (
    <MobileAppShell>
      <section className="px-4 py-5">
        <p className="text-sm font-medium text-slate-500">More options</p>

        <h2 className="mt-1 text-2xl font-bold text-slate-950">Command hub</h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Open deeper HR modules, reports, configuration, and admin tools.
        </p>
      </section>

      <section className="px-4">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-5 text-white shadow-sm">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/20 blur-2xl" />
          <div className="absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />

          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                <Sparkles className="h-6 w-6" />
              </div>

              <Badge
                variant="outline"
                className="border-white/10 bg-white/10 text-slate-200"
              >
                HRM v1.0
              </Badge>
            </div>

            <p className="text-sm font-medium text-slate-300">miLife HRM</p>

            <h3 className="mt-2 text-2xl font-bold tracking-tight">
              People operations, organized.
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Manage the deeper parts of HR from performance cycles to
              documents, reports, and system configuration.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-5 px-4">
        <Link
          href="/performance"
          className="group block overflow-hidden rounded-[2rem] border border-emerald-100 bg-emerald-50 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-100"
        >
          <div className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
                <Trophy className="h-6 w-6" />
              </div>

              <ChevronRight className="h-5 w-5 text-emerald-500 transition group-hover:translate-x-0.5" />
            </div>

            <div className="mt-5">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-emerald-950">
                  Performance
                </h3>

                <Badge className="rounded-full bg-emerald-600 text-white">
                  Active
                </Badge>
              </div>

              <p className="mt-2 text-sm leading-6 text-emerald-800">
                Manage performance contracts, KPI progress, appraisals, manager
                reviews, and final ratings.
              </p>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              <div className="rounded-2xl bg-white/70 p-3">
                <p className="text-lg font-bold text-emerald-950">128</p>
                <p className="mt-1 text-[11px] font-medium text-emerald-700">
                  Contracts
                </p>
              </div>

              <div className="rounded-2xl bg-white/70 p-3">
                <p className="text-lg font-bold text-emerald-950">59</p>
                <p className="mt-1 text-[11px] font-medium text-emerald-700">
                  Completed
                </p>
              </div>

              <div className="rounded-2xl bg-white/70 p-3">
                <p className="text-lg font-bold text-emerald-950">24</p>
                <p className="mt-1 text-[11px] font-medium text-emerald-700">
                  Reviews
                </p>
              </div>
            </div>
          </div>
        </Link>
      </section>

      <section className="mt-6 px-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-950">Modules</h3>

            <p className="text-sm text-slate-500">
              More HR tools and configuration
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {moduleItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group min-h-36 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-emerald-100 hover:bg-emerald-50"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 group-hover:bg-emerald-100 group-hover:text-emerald-700">
                  {renderModuleIcon(item.type)}
                </div>

                <ChevronRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-emerald-600" />
              </div>

              <h4 className="mt-4 text-sm font-bold text-slate-950">
                {item.title}
              </h4>

              <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-500">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-6 px-4 pb-6">
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
              <FileText className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-950">System note</p>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Some modules are placeholders for now. We’ll build them step by
                step after Performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MobileAppShell>
  );
}
