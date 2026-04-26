import type { RatingValue } from "@/app/features/performance/data";

type RatingPillProps = {
  score?: RatingValue;
  label: string;
};

export function RatingPill({ score, label }: RatingPillProps) {
  return (
    <div className="rounded-2xl bg-slate-50 px-3 py-2">
      <p className="text-[11px] font-medium text-slate-500">{label}</p>

      <p className="mt-1 text-sm font-bold text-slate-950">
        {score ? `${score}/5` : "Not scored"}
      </p>
    </div>
  );
}
