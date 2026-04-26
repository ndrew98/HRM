import { LucideIcon } from "lucide-react";

type ActionCardProps = {
  title: string;
  description: string;
  meta: string;
  icon: LucideIcon;
  actionLabel: string;
};

export function ActionCard({
  title,
  description,
  meta,
  icon: Icon,
  actionLabel,
}: ActionCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold text-slate-950">{title}</h3>

              <p className="mt-1 text-sm leading-5 text-slate-600">
                {description}
              </p>
            </div>

            <span className="shrink-0 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700">
              {meta}
            </span>
          </div>

          <button
            type="button"
            className="mt-4 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700"
          >
            {actionLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
