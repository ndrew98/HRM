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

import { leaveUsageByMonth } from "@/app/features/reports/data";
import { ReportChartCard } from "@/app/features/reports/components/ReportChartCard";

export function LeaveAreaChart() {
  return (
    <ReportChartCard
      title="Leave usage trend"
      description="Tracks annual and sick leave usage by month."
    >
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={leaveUsageByMonth}>
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
              dataKey="annual"
              strokeWidth={2}
              fillOpacity={0.25}
            />
            <Area
              type="monotone"
              dataKey="sick"
              strokeWidth={2}
              fillOpacity={0.15}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ReportChartCard>
  );
}
