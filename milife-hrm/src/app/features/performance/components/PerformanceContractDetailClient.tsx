"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useMemo, useState } from "react";
import { ArrowLeft, ClipboardCheck, Gauge, Star, Target } from "lucide-react";

import { MobileAppShell } from "@/app/components/layout/MobileAppShell";
import { FadeIn } from "@/app/components/shared/FadeIn";
import { AnimatedTabPanel } from "@/app/components/shared/AnimatedTabPanel";

import { EditablePerformanceAssessmentItem } from "@/app/features/performance/components/EditablePerformanceAssessmentItem";
import { PerformanceStatusBadge } from "@/app/features/performance/components/PerformanceStatusBadge";
import { PerformanceTimeline } from "@/app/features/performance/components/PerformanceTimeline";
import type {
  PerformanceContract,
  PerformanceContractItem,
  RatingValue,
} from "@/app/features/performance/data";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type PerformanceContractDetailClientProps = {
  initialContract: PerformanceContract;
};

function updateItemScore(
  items: PerformanceContractItem[],
  itemId: string,
  score: RatingValue,
  scoreType: "self" | "manager",
) {
  return items.map((item) => {
    if (item.id !== itemId) {
      return item;
    }

    if (scoreType === "self") {
      return {
        ...item,
        selfScore: score,
      };
    }

    return {
      ...item,
      managerScore: score,
    };
  });
}

function calculateProgress(items: PerformanceContractItem[]) {
  if (items.length === 0) {
    return 0;
  }

  const scoredItems = items.filter(
    (item) => item.selfScore || item.managerScore,
  );

  return Math.round((scoredItems.length / items.length) * 100);
}

function calculateWeightedScore(items: PerformanceContractItem[]) {
  const totalWeight = items.reduce((total, item) => total + item.weight, 0);

  if (totalWeight === 0) {
    return 0;
  }

  const weightedScore = items.reduce((total, item) => {
    const score = item.managerScore ?? item.selfScore ?? 0;

    return total + score * item.weight;
  }, 0);

  return Number((weightedScore / totalWeight).toFixed(2));
}

function getRatingFromScore(score: number) {
  if (score >= 4.5) return "Outstanding";
  if (score >= 4) return "Very Good";
  if (score >= 3) return "Good";
  if (score >= 2) return "Needs Improvement";
  if (score > 0) return "Unsatisfactory";

  return "Not rated";
}

export function PerformanceContractDetailClient({
  initialContract,
}: PerformanceContractDetailClientProps) {
  const [contract, setContract] = useState(initialContract);

  const kpiProgress = calculateProgress(contract.kpis);
  const competencyProgress = calculateProgress(contract.competencies);

  const overallProgress = Math.round((kpiProgress + competencyProgress) / 2);

  const kpiScore = useMemo(
    () => calculateWeightedScore(contract.kpis),
    [contract.kpis],
  );

  const competencyScore = useMemo(
    () => calculateWeightedScore(contract.competencies),
    [contract.competencies],
  );

  const finalScore = useMemo(() => {
    if (kpiScore === 0 && competencyScore === 0) {
      return 0;
    }

    return Number((kpiScore * 0.7 + competencyScore * 0.3).toFixed(2));
  }, [kpiScore, competencyScore]);

  const rating = getRatingFromScore(finalScore);

  const canManagerReview = contract.status === "Pending Review";
  const canSubmitSelfAppraisal =
    contract.status !== "Approved" && contract.status !== "Pending Review";

  function handleKpiSelfScoreChange(itemId: string, score: RatingValue) {
    setContract((currentContract) => ({
      ...currentContract,
      kpis: updateItemScore(currentContract.kpis, itemId, score, "self"),
    }));
  }

  function handleKpiManagerScoreChange(itemId: string, score: RatingValue) {
    setContract((currentContract) => ({
      ...currentContract,
      kpis: updateItemScore(currentContract.kpis, itemId, score, "manager"),
    }));
  }

  function handleCompetencySelfScoreChange(itemId: string, score: RatingValue) {
    setContract((currentContract) => ({
      ...currentContract,
      competencies: updateItemScore(
        currentContract.competencies,
        itemId,
        score,
        "self",
      ),
    }));
  }

  function handleCompetencyManagerScoreChange(
    itemId: string,
    score: RatingValue,
  ) {
    setContract((currentContract) => ({
      ...currentContract,
      competencies: updateItemScore(
        currentContract.competencies,
        itemId,
        score,
        "manager",
      ),
    }));
  }

  function handleSubmitAppraisal() {
    if (finalScore === 0) {
      toast.error(
        "Please score at least one KPI or competency before submitting.",
      );
      return;
    }

    setContract((currentContract) => ({
      ...currentContract,
      status: "Pending Review",
      currentStage: "Submitted for manager review",
      finalScore,
      rating,
      timeline: currentContract.timeline.map((step) => {
        if (step.title !== "Self-appraisal") {
          return step;
        }

        return {
          ...step,
          status: "Completed",
          date: "Just now",
          comment: "Self-appraisal submitted from mobile workflow.",
        };
      }),
    }));

    toast.success("Appraisal submitted for review.");
  }

  function handleManagerApprove() {
    setContract((currentContract) => ({
      ...currentContract,
      status: "Approved",
      currentStage: "Manager review completed",
      finalScore,
      rating,
      timeline: currentContract.timeline.map((step) => {
        if (step.title !== "Manager review") {
          return step;
        }

        return {
          ...step,
          status: "Completed",
          date: "Just now",
          comment: "Manager review approved from mobile workflow.",
        };
      }),
    }));

    toast.success("Manager review approved.");
  }

  function handleManagerReturn() {
    setContract((currentContract) => ({
      ...currentContract,
      status: "Returned",
      currentStage: "Returned to employee for correction",
      timeline: currentContract.timeline.map((step) => {
        if (step.title !== "Manager review") {
          return step;
        }

        return {
          ...step,
          status: "Returned",
          date: "Just now",
          comment: "Returned for employee correction.",
        };
      }),
    }));

    toast.info("Appraisal returned to employee.");
  }

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
                <div className="rounded-2xl bg-white/10 p-3">
                  <Target className="h-4 w-4 text-emerald-300" />

                  <p className="mt-2 text-lg font-bold text-white">
                    {kpiProgress}%
                  </p>

                  <p className="mt-1 text-[11px] font-medium text-slate-400">
                    KPI progress
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-3">
                  <Gauge className="h-4 w-4 text-emerald-300" />

                  <p className="mt-2 text-lg font-bold text-white">
                    {competencyProgress}%
                  </p>

                  <p className="mt-1 text-[11px] font-medium text-slate-400">
                    Competency
                  </p>
                </div>
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
                description="Select self and manager scores from 1 to 5."
              />

              <div className="mt-3 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                {contract.kpis.map((item) => (
                  <EditablePerformanceAssessmentItem
                    key={item.id}
                    item={item}
                    onSelfScoreChange={handleKpiSelfScoreChange}
                    onManagerScoreChange={handleKpiManagerScoreChange}
                  />
                ))}
              </div>
            </AnimatedTabPanel>
          </TabsContent>

          <TabsContent value="competencies" className="mt-4">
            <AnimatedTabPanel>
              <SectionTitle
                title="Competencies"
                description="Score behavioural and professional assessment areas."
              />

              <div className="mt-3 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                {contract.competencies.map((item) => (
                  <EditablePerformanceAssessmentItem
                    key={item.id}
                    item={item}
                    onSelfScoreChange={handleCompetencySelfScoreChange}
                    onManagerScoreChange={handleCompetencyManagerScoreChange}
                  />
                ))}
              </div>
            </AnimatedTabPanel>
          </TabsContent>

          <TabsContent value="review" className="mt-4">
            <AnimatedTabPanel>
              <SectionTitle
                title="Review summary"
                description="Final score uses KPI 70% and competency 30%."
              />

              <div className="mt-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <Star className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Final calculated score
                    </p>

                    <p className="mt-2 text-3xl font-bold text-slate-950">
                      {finalScore > 0 ? finalScore : "-"}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-emerald-700">
                      {rating}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-xs font-medium text-slate-500">
                      KPI score
                    </p>

                    <p className="mt-1 text-lg font-bold text-slate-950">
                      {kpiScore || "-"}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-xs font-medium text-slate-500">
                      Competency score
                    </p>

                    <p className="mt-1 text-lg font-bold text-slate-950">
                      {competencyScore || "-"}
                    </p>
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

              {canManagerReview ? (
                <div className="mt-3 rounded-3xl border border-amber-100 bg-amber-50 p-4">
                  <p className="text-sm font-semibold text-amber-800">
                    Manager review required
                  </p>

                  <p className="mt-1 text-sm leading-6 text-amber-700">
                    Review the KPI and competency scores before approving or
                    returning this appraisal.
                  </p>
                </div>
              ) : null}

              {canSubmitSelfAppraisal ? (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="mt-4 h-11 w-full rounded-full bg-emerald-600 font-semibold text-white hover:bg-emerald-700">
                      Submit Appraisal
                    </Button>
                  </AlertDialogTrigger>

                  <AlertDialogContent className="rounded-3xl">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Submit appraisal?</AlertDialogTitle>

                      <AlertDialogDescription>
                        This will submit the current scores for review. You
                        should confirm the KPI and competency scores before
                        continuing.
                      </AlertDialogDescription>
                    </AlertDialogHeader>

                    <div className="rounded-2xl bg-slate-50 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-slate-500">
                          Final score
                        </p>

                        <p className="text-sm font-bold text-slate-950">
                          {finalScore > 0 ? finalScore : "-"}
                        </p>
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-sm font-medium text-slate-500">
                          Rating
                        </p>

                        <p className="text-sm font-bold text-emerald-700">
                          {rating}
                        </p>
                      </div>
                    </div>

                    <AlertDialogFooter>
                      <AlertDialogCancel className="rounded-full">
                        Cancel
                      </AlertDialogCancel>

                      <AlertDialogAction
                        className="rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
                        onClick={handleSubmitAppraisal}
                      >
                        Submit
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ) : null}

              {canManagerReview ? (
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-11 rounded-full border-purple-200 text-purple-700"
                      >
                        Return
                      </Button>
                    </AlertDialogTrigger>

                    <AlertDialogContent className="rounded-3xl">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Return appraisal?</AlertDialogTitle>

                        <AlertDialogDescription>
                          This will return the appraisal to the employee for
                          correction. Use this when scores, comments, or
                          evidence need to be improved.
                        </AlertDialogDescription>
                      </AlertDialogHeader>

                      <AlertDialogFooter>
                        <AlertDialogCancel className="rounded-full">
                          Cancel
                        </AlertDialogCancel>

                        <AlertDialogAction
                          className="rounded-full bg-purple-600 text-white hover:bg-purple-700"
                          onClick={handleManagerReturn}
                        >
                          Return
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="h-11 rounded-full bg-emerald-600 font-semibold text-white hover:bg-emerald-700">
                        Approve
                      </Button>
                    </AlertDialogTrigger>

                    <AlertDialogContent className="rounded-3xl">
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Approve manager review?
                        </AlertDialogTitle>

                        <AlertDialogDescription>
                          This will approve the current appraisal scores and
                          move the contract forward in the performance workflow.
                        </AlertDialogDescription>
                      </AlertDialogHeader>

                      <div className="rounded-2xl bg-slate-50 p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-slate-500">
                            Final score
                          </p>

                          <p className="text-sm font-bold text-slate-950">
                            {finalScore > 0 ? finalScore : "-"}
                          </p>
                        </div>

                        <div className="mt-2 flex items-center justify-between">
                          <p className="text-sm font-medium text-slate-500">
                            Rating
                          </p>

                          <p className="text-sm font-bold text-emerald-700">
                            {rating}
                          </p>
                        </div>
                      </div>

                      <AlertDialogFooter>
                        <AlertDialogCancel className="rounded-full">
                          Cancel
                        </AlertDialogCancel>

                        <AlertDialogAction
                          className="rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
                          onClick={handleManagerApprove}
                        >
                          Approve
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              ) : null}
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
