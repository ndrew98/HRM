import type { ReactNode } from "react";

type ReportChartCardProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function ReportChartCard({
  title,
  description,
  children,
}: ReportChartCardProps) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
      <div>
        <h3 className="text-base font-bold text-slate-950">{title}</h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
      </div>

      <div className="mt-4">{children}</div>
    </div>
  );
}
