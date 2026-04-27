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

import { performanceRatings } from "@/app/features/reports/data";
import { ReportChartCard } from "@/app/features/reports/components/ReportChartCard";

export function PerformanceRatingChart() {
  return (
    <ReportChartCard
      title="Performance rating distribution"
      description="Shows final rating distribution for completed appraisals."
    >
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={performanceRatings} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis
              type="number"
              tickLine={false}
              axisLine={false}
              fontSize={11}
            />
            <YAxis
              type="category"
              dataKey="rating"
              tickLine={false}
              axisLine={false}
              fontSize={11}
              width={100}
            />
            <Tooltip />
            <Bar dataKey="count" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ReportChartCard>
  );
}
