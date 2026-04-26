"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { RatingValue } from "@/app/features/performance/data";

type ScoreSelectorProps = {
  label: string;
  value?: RatingValue;
  onChange: (value: RatingValue) => void;
};

const scores: RatingValue[] = [1, 2, 3, 4, 5];

export function ScoreSelector({ label, value, onChange }: ScoreSelectorProps) {
  return (
    <div className="rounded-2xl bg-slate-50 p-3">
      <p className="text-[11px] font-medium text-slate-500">{label}</p>

      <RadioGroup
        value={value ? String(value) : ""}
        onValueChange={(selectedValue) => {
          onChange(Number(selectedValue) as RatingValue);
        }}
        className="mt-3 grid grid-cols-5 gap-2"
      >
        {scores.map((score) => (
          <label
            key={score}
            className={
              value === score
                ? "flex h-9 cursor-pointer items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white shadow-sm"
                : "flex h-9 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-bold text-slate-600"
            }
          >
            <RadioGroupItem value={String(score)} className="sr-only" />
            {score}
          </label>
        ))}
      </RadioGroup>
    </div>
  );
}
