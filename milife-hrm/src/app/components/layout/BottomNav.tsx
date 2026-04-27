"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CheckCircle2, Home, MoreHorizontal, Plane, Users } from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Employees",
    href: "/employees",
    icon: Users,
  },
  {
    label: "Leave",
    href: "/leave",
    icon: Plane,
  },
  {
    label: "Approvals",
    href: "/approvals",
    icon: CheckCircle2,
  },
  {
    label: "More",
    href: "/more",
    icon: MoreHorizontal,
  },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-30 border-t border-slate-200 bg-white px-2 pb-3 pt-2 lg:hidden">
      <div className="grid grid-cols-5 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={
                isActive
                  ? "flex flex-col items-center justify-center rounded-2xl bg-emerald-50 px-2 py-2 text-emerald-700"
                  : "flex flex-col items-center justify-center rounded-2xl px-2 py-2 text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }
            >
              <Icon className="h-5 w-5" />

              <span className="mt-1 text-[11px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
