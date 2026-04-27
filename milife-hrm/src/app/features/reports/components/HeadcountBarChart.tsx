"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { headcountByDepartment } from "@/app/features/reports/data";
import { ReportChartCard } from "@/app/features/reports/components/ReportChartCard";

export function HeadcountBarChart() {
  return (
    <ReportChartCard
      title="Headcount by department"
      description="Shows employee distribution across major departments."
    >
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={headcountByDepartment}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="department"
              tickLine={false}
              axisLine={false}
              fontSize={11}
            />
            <YAxis tickLine={false} axisLine={false} fontSize={11} />
            <Tooltip />
            <Bar dataKey="employees" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ReportChartCard>
  );
}
