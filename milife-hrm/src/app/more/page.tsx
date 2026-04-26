import { MobileAppShell } from "@/app/components/layout/MobileAppShell";

export default function MorePage() {
  return (
    <MobileAppShell>
      <section className="px-4 py-5">
        <p className="text-sm font-medium text-slate-500">More options</p>

        <h2 className="mt-1 text-2xl font-bold text-slate-950">More</h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Access performance, documents, reports, settings, and admin tools.
        </p>
      </section>
    </MobileAppShell>
  );
}
