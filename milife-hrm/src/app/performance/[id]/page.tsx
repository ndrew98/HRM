import { MobileAppShell } from "@/app/components/layout/MobileAppShell";
import { PerformanceContractDetailClient } from "@/app/features/performance/components/PerformanceContractDetailClient";
import { performanceContracts } from "@/app/features/performance/data";

type PerformanceContractDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PerformanceContractDetailPage({
  params,
}: PerformanceContractDetailPageProps) {
  const { id } = await params;

  const contract = performanceContracts.find((item) => item.id === id);

  if (!contract) {
    return (
      <MobileAppShell>
        <section className="px-4 py-6">
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center">
            <p className="text-sm font-semibold text-slate-900">
              Contract not found
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              The performance contract you are looking for does not exist.
            </p>
          </div>
        </section>
      </MobileAppShell>
    );
  }

  return <PerformanceContractDetailClient initialContract={contract} />;
}
