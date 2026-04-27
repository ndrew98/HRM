import Link from "next/link";
import { CalendarPlus, CheckCircle2, FileUp, Trophy } from "lucide-react";

type QuickActionTileProps = {
  label: string;
  href: string;
  type: string;
};

function renderQuickActionIcon(type: string) {
  if (type === "leave") {
    return <CalendarPlus className="h-5 w-5" />;
  }

  if (type === "documents") {
    return <FileUp className="h-5 w-5" />;
  }

  if (type === "approvals") {
    return <CheckCircle2 className="h-5 w-5" />;
  }

  return <Trophy className="h-5 w-5" />;
}

export function QuickActionTile({ label, href, type }: QuickActionTileProps) {
  return (
    <Link
      href={href}
      className="rounded-3xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:border-emerald-100 hover:bg-emerald-50"
    >
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
        {renderQuickActionIcon(type)}
      </div>

      <p className="mt-3 text-xs font-bold text-slate-950">{label}</p>
    </Link>
  );
}
