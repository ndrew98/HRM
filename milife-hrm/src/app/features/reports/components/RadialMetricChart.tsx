"use client";

import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

type RadialMetricChartProps = {
  label: string;
  value: number;
  description: string;
};

export function RadialMetricChart({
  label,
  value,
  description,
}: RadialMetricChartProps) {
  const data = [
    {
      name: label,
      value,
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="h-36">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            data={data}
            startAngle={90}
            endAngle={90 - (value / 100) * 360}
            innerRadius="72%"
            outerRadius="100%"
          >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar dataKey="value" cornerRadius={999} background />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      <div className="-mt-24 flex h-24 flex-col items-center justify-center">
        <p className="text-2xl font-bold text-slate-950">{value}%</p>

        <p className="text-xs font-medium text-slate-500">{label}</p>
      </div>

      <p className="mt-3 text-center text-xs leading-5 text-slate-500">
        {description}
      </p>
    </div>
  );
}
