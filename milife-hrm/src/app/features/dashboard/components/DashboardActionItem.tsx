import Link from "next/link";
import { ChevronRight, Clock3 } from "lucide-react";

type DashboardActionItemProps = {
  title: string;
  description: string;
  meta: string;
  href: string;
};

export function DashboardActionItem({
  title,
  description,
  meta,
  href,
}: DashboardActionItemProps) {
  return (
    <Link
      href={href}
      className="group block border-b border-slate-100 bg-white px-4 py-4 transition hover:bg-slate-50 last:border-b-0"
    >
      <div className="flex gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
          <Clock3 className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold text-slate-950">{title}</h3>

              <p className="mt-1 line-clamp-2 text-sm leading-5 text-slate-600">
                {description}
              </p>
            </div>

            <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
              {meta}
            </span>
          </div>

          <div className="mt-3 flex justify-end">
            <ChevronRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-emerald-600" />
          </div>
        </div>
      </div>
    </Link>
  );
}
