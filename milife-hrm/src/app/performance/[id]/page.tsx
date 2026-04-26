import Link from "next/link";
import {
  ArrowLeft,
  ClipboardCheck,
  Gauge,
  Star,
  Target,
  UserRound,
} from "lucide-react";

import { MobileAppShell } from "@/app/components/layout/MobileAppShell";
import { FadeIn } from "@/app/components/shared/FadeIn";
import { AnimatedTabPanel } from "@/app/components/shared/AnimatedTabPanel";

import { PerformanceAssessmentItem } from "@/app/features/performance/components/PerformanceAssessmentItem";
import { PerformanceStatusBadge } from "@/app/features/performance/components/PerformanceStatusBadge";
import { PerformanceTimeline } from "@/app/features/performance/components/PerformanceTimeline";
import { performanceContracts } from "@/app/features/performance/data";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          <Button asChild variant="ghost" className="px-0 text-emerald-700">
            <Link href="/performance">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to performance
            </Link>
          </Button>

          <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center">
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

  const overallProgress = Math.round(
    (contract.kpiProgress + contract.competencyProgress) / 2,
  );

  return (
    <MobileAppShell>
      <section className="px-4 py-5">
        <Button asChild variant="ghost" className="mb-4 px-0 text-emerald-700">
          <Link href="/performance">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to performance
          </Link>
        </Button>

        <FadeIn>
          <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-sm">
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-300">
                    Performance contract
                  </p>

                  <h2 className="mt-2 truncate text-2xl font-bold">
                    {contract.employeeName}
                  </h2>

                  <p className="mt-1 text-sm text-slate-400">
                    {contract.role} · {contract.department}
                  </p>
                </div>

                <PerformanceStatusBadge status={contract.status} />
              </div>

              <Separator className="my-5 bg-white/10" />

              <div className="grid grid-cols-2 gap-3">
                <SummaryBlock
                  icon={Target}
                  label="KPI progress"
                  value={`${contract.kpiProgress}%`}
                />

                <SummaryBlock
                  icon={Gauge}
                  label="Competency"
                  value={`${contract.competencyProgress}%`}
                />
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-xs font-medium text-slate-400">
                    Overall completion
                  </p>

                  <p className="text-xs font-bold text-emerald-300">
                    {overallProgress}%
                  </p>
                </div>

                <Progress value={overallProgress} className="h-2 bg-white/10" />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <FadeIn delay={0.08} className="px-4 pb-6">
        <Tabs defaultValue="kpis" className="w-full">
          <TabsList className="grid h-11 w-full grid-cols-4 rounded-2xl bg-slate-100 p-1">
            <TabsTrigger value="kpis" className="rounded-xl text-xs">
              KPIs
            </TabsTrigger>

            <TabsTrigger value="competencies" className="rounded-xl text-xs">
              Comp.
            </TabsTrigger>

            <TabsTrigger value="review" className="rounded-xl text-xs">
              Review
            </TabsTrigger>

            <TabsTrigger value="timeline" className="rounded-xl text-xs">
              Timeline
            </TabsTrigger>
          </TabsList>

          <TabsContent value="kpis" className="mt-4">
            <AnimatedTabPanel>
              <SectionTitle
                title="KPI targets"
                description="Measurable work targets for this cycle."
              />

              <div className="mt-3 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                {contract.kpis.map((item) => (
                  <PerformanceAssessmentItem key={item.id} item={item} />
                ))}
              </div>
            </AnimatedTabPanel>
          </TabsContent>

          <TabsContent value="competencies" className="mt-4">
            <AnimatedTabPanel>
              <SectionTitle
                title="Competencies"
                description="Behavioural and professional assessment areas."
              />

              <div className="mt-3 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                {contract.competencies.map((item) => (
                  <PerformanceAssessmentItem key={item.id} item={item} />
                ))}
              </div>
            </AnimatedTabPanel>
          </TabsContent>

          <TabsContent value="review" className="mt-4">
            <AnimatedTabPanel>
              <SectionTitle
                title="Review summary"
                description="Final score and rating will appear here after review."
              />

              <div className="mt-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <Star className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Final rating
                    </p>

                    {contract.finalScore && contract.rating ? (
                      <>
                        <p className="mt-2 text-3xl font-bold text-slate-950">
                          {contract.finalScore}
                        </p>

                        <p className="mt-1 text-sm font-semibold text-emerald-700">
                          {contract.rating}
                        </p>
                      </>
                    ) : (
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        This contract has not received a final score yet.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-3 rounded-3xl border border-dashed border-slate-300 bg-white p-5">
                <div className="flex gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
                    <ClipboardCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Current stage
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {contract.currentStage}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedTabPanel>
          </TabsContent>

          <TabsContent value="timeline" className="mt-4">
            <AnimatedTabPanel>
              <SectionTitle
                title="Workflow timeline"
                description="Track acknowledgement, self-appraisal, manager review, and HR approval."
              />

              <div className="mt-4">
                <PerformanceTimeline steps={contract.timeline} />
              </div>
            </AnimatedTabPanel>
          </TabsContent>
        </Tabs>
      </FadeIn>
    </MobileAppShell>
  );
}

type SummaryBlockProps = {
  icon: React.ElementType;
  label: string;
  value: string;
};

function SummaryBlock({ icon: Icon, label, value }: SummaryBlockProps) {
  return (
    <div className="rounded-2xl bg-white/10 p-3">
      <Icon className="h-4 w-4 text-emerald-300" />

      <p className="mt-2 text-lg font-bold text-white">{value}</p>

      <p className="mt-1 text-[11px] font-medium text-slate-400">{label}</p>
    </div>
  );
}

type SectionTitleProps = {
  title: string;
  description: string;
};

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div>
      <h3 className="text-base font-bold text-slate-950">{title}</h3>

      <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}
