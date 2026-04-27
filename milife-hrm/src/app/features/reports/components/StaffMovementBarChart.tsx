"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { staffMovementByMonth } from "@/app/features/reports/data";
import { ReportChartCard } from "@/app/features/reports/components/ReportChartCard";

export function StaffMovementBarChart() {
  return (
    <ReportChartCard
      title="Staff movement"
      description="Shows monthly hires as positive movement and exits as negative movement."
    >
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={staffMovementByMonth}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              fontSize={11}
            />
            <YAxis tickLine={false} axisLine={false} fontSize={11} />
            <Tooltip />
            <ReferenceLine y={0} />
            <Bar dataKey="hires" radius={[8, 8, 0, 0]} />
            <Bar dataKey="exits" radius={[0, 0, 8, 8]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ReportChartCard>
  );
}
