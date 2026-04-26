import { CheckCircle2, Home, MoreHorizontal, Plane, Users } from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
    active: true,
  },
  {
    label: "Employees",
    href: "/employees",
    icon: Users,
    active: false,
  },
  {
    label: "Leave",
    href: "/leave",
    icon: Plane,
    active: false,
  },
  {
    label: "Approvals",
    href: "/approvals",
    icon: CheckCircle2,
    active: false,
  },
  {
    label: "More",
    href: "/more",
    icon: MoreHorizontal,
    active: false,
  },
];

export function BottomNav() {
  return (
    <nav className="sticky bottom-0 z-30 border-t border-slate-200 bg-white px-2 pb-3 pt-2">
      <div className="grid grid-cols-5 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              className={
                item.active
                  ? "flex flex-col items-center justify-center rounded-2xl bg-emerald-50 px-2 py-2 text-emerald-700"
                  : "flex flex-col items-center justify-center rounded-2xl px-2 py-2 text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }
            >
              <Icon className="h-5 w-5" />

              <span className="mt-1 text-[11px] font-medium">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
