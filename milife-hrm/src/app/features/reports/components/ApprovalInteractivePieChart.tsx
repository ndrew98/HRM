"use client";

import { useState } from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { approvalStatusBreakdown } from "@/app/features/reports/data";
import { ReportChartCard } from "@/app/features/reports/components/ReportChartCard";

export function ApprovalInteractivePieChart() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = approvalStatusBreakdown[activeIndex];

  return (
    <ReportChartCard
      title="Approval status breakdown"
      description="Tap a slice to inspect workflow status totals."
    >
      <div className="relative h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip />
            <Pie
              data={approvalStatusBreakdown}
              dataKey="count"
              nameKey="status"
              innerRadius={58}
              outerRadius={92}
              paddingAngle={4}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onClick={(_, index) => setActiveIndex(index)}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-slate-950">
            {activeItem.count}
          </p>

          <p className="text-xs font-semibold text-slate-500">
            {activeItem.status}
          </p>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2">
        {approvalStatusBreakdown.map((item, index) => (
          <button
            key={item.status}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={
              activeIndex === index
                ? "rounded-2xl bg-emerald-50 px-3 py-2 text-left text-xs font-semibold text-emerald-700"
                : "rounded-2xl bg-slate-50 px-3 py-2 text-left text-xs font-semibold text-slate-600"
            }
          >
            {item.status}: {item.count}
          </button>
        ))}
      </div>
    </ReportChartCard>
  );
}
