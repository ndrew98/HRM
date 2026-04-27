"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { dashboardTrend } from "@/app/features/dashboard/data";

export function DashboardTrendChart() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
      <div>
        <h3 className="text-base font-bold text-slate-950">
          Monthly workflow trend
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          Approvals and leave activity across recent months.
        </p>
      </div>

      <div className="mt-4 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dashboardTrend}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              fontSize={11}
            />
            <YAxis tickLine={false} axisLine={false} fontSize={11} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="approvals"
              strokeWidth={2}
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="leave"
              strokeWidth={2}
              fillOpacity={0.15}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
