"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  FileText,
  FolderOpen,
  Home,
  Plane,
  Settings,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";

type DesktopSidebarProps = {
  isCollapsed: boolean;
  onToggle: () => void;
};

const sidebarItems = [
  {
    label: "Dashboard",
    href: "/",
    type: "home",
  },
  {
    label: "Employees",
    href: "/employees",
    type: "employees",
  },
  {
    label: "Leave",
    href: "/leave",
    type: "leave",
  },
  {
    label: "Approvals",
    href: "/approvals",
    type: "approvals",
  },
  {
    label: "Performance",
    href: "/performance",
    type: "performance",
  },
  {
    label: "Documents",
    href: "/documents",
    type: "documents",
  },
  {
    label: "Reports",
    href: "/reports",
    type: "reports",
  },
  {
    label: "Settings",
    href: "/settings",
    type: "settings",
  },
  {
    label: "Admin",
    href: "/admin",
    type: "admin",
  },
];

function renderSidebarIcon(type: string) {
  if (type === "home") return <Home className="h-5 w-5" />;
  if (type === "employees") return <Users className="h-5 w-5" />;
  if (type === "leave") return <Plane className="h-5 w-5" />;
  if (type === "approvals") return <CheckCircle2 className="h-5 w-5" />;
  if (type === "performance") return <Trophy className="h-5 w-5" />;
  if (type === "documents") return <FolderOpen className="h-5 w-5" />;
  if (type === "reports") return <BarChart3 className="h-5 w-5" />;
  if (type === "settings") return <Settings className="h-5 w-5" />;

  return <ShieldCheck className="h-5 w-5" />;
}

export function DesktopSidebar({ isCollapsed, onToggle }: DesktopSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={
        isCollapsed
          ? "hidden h-screen w-24 shrink-0 overflow-y-auto border-r border-slate-200 bg-white px-3 py-5 transition-all duration-300 lg:sticky lg:top-0 lg:block"
          : "hidden h-screen w-72 shrink-0 overflow-y-auto border-r border-slate-200 bg-white px-4 py-5 transition-all duration-300 lg:sticky lg:top-0 lg:block"
      }
    >
      <div
        className={
          isCollapsed
            ? "mb-8 flex items-center justify-center"
            : "mb-8 flex items-start justify-between gap-3 px-2"
        }
      >
        {!isCollapsed ? (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              miLife Insurance
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-950">HRM</h1>
          </div>
        ) : (
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-sm font-bold text-white">
            HR
          </div>
        )}

        <button
          type="button"
          onClick={onToggle}
          className={
            isCollapsed
              ? "mt-3 flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm"
              : "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm"
          }
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>

      <nav className="space-y-1">
        {sidebarItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              title={isCollapsed ? item.label : undefined}
              className={
                isActive
                  ? isCollapsed
                    ? "flex items-center justify-center rounded-2xl bg-emerald-50 px-2 py-3 text-emerald-700"
                    : "flex items-center gap-3 rounded-2xl bg-emerald-50 px-3 py-3 text-sm font-bold text-emerald-700"
                  : isCollapsed
                    ? "flex items-center justify-center rounded-2xl px-2 py-3 text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
                    : "flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
              }
            >
              <span
                className={
                  isActive
                    ? "flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white"
                    : "flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500"
                }
              >
                {renderSidebarIcon(item.type)}
              </span>

              {!isCollapsed ? <span>{item.label}</span> : null}
            </Link>
          );
        })}
      </nav>

      {!isCollapsed ? (
        <div className="mt-8 rounded-3xl bg-slate-950 p-4 text-white">
          <p className="text-sm font-bold">HR command center</p>

          <p className="mt-2 text-xs leading-5 text-slate-400">
            Manage employees, leave, approvals, performance, documents, and
            reports.
          </p>
        </div>
      ) : null}
    </aside>
  );
}
