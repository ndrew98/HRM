import Link from "next/link";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  FileText,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound,
  WalletCards,
} from "lucide-react";

import { MobileAppShell } from "@/app/components/layout/MobileAppShell";
import { StatusBadge } from "@/app/components/shared/StatusBadge";
import { FadeIn } from "@/app/components/shared/FadeIn";
import { AnimatedTabPanel } from "@/app/components/shared/AnimatedTabPanel";
import { employees } from "@/app/features/employees/data";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type EmployeeProfilePageProps = {
  params: Promise<{
    id: string;
  }>;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default async function EmployeeProfilePage({
  params,
}: EmployeeProfilePageProps) {
  const { id } = await params;
  const employee = employees.find((item) => item.id === id);

  if (!employee) {
    return (
      <MobileAppShell>
        <section className="px-4 py-6">
          <Button asChild variant="ghost" className="px-0 text-emerald-700">
            <Link href="/employees">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to employees
            </Link>
          </Button>
          <FadeIn>
            <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center">
              <p className="text-sm font-semibold text-slate-900">
                Employee not found
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                The employee profile you are looking for does not exist.
              </p>
            </div>
          </FadeIn>
        </section>
      </MobileAppShell>
    );
  }

  return (
    <MobileAppShell>
      <section className="px-4 py-5">
        <Button asChild variant="ghost" className="mb-4 px-0 text-emerald-700">
          <Link href="/employees">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to employees
          </Link>
        </Button>
        <FadeIn>
          <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-sm">
            <div className="p-5">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16 rounded-3xl border border-white/10">
                  <AvatarFallback className="rounded-3xl bg-emerald-500 text-lg font-bold text-white">
                    {getInitials(employee.name)}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h2 className="truncate text-xl font-bold">
                        {employee.name}
                      </h2>

                      <p className="mt-1 text-sm font-medium text-slate-300">
                        {employee.staffId}
                      </p>
                    </div>

                    <StatusBadge status={employee.status} />
                  </div>

                  <p className="mt-3 text-sm font-semibold text-white">
                    {employee.jobTitle}
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    {employee.department} · {employee.branch}
                  </p>
                </div>
              </div>

              <Separator className="my-5 bg-white/10" />

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-xs font-medium text-slate-300">
                    Profile completion
                  </p>

                  <p className="text-xs font-bold text-emerald-300">82%</p>
                </div>

                <Progress value={82} className="h-2 bg-white/10" />

                <p className="mt-2 text-xs leading-5 text-slate-400">
                  Missing emergency contact and one employment document.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <FadeIn delay={0.08} className="px-4 pb-6">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid h-11 w-full grid-cols-4 rounded-2xl bg-slate-100 p-1">
            <TabsTrigger value="overview" className="rounded-xl text-xs">
              Overview
            </TabsTrigger>

            <TabsTrigger value="leave" className="rounded-xl text-xs">
              Leave
            </TabsTrigger>

            <TabsTrigger value="documents" className="rounded-xl text-xs">
              Docs
            </TabsTrigger>

            <TabsTrigger value="performance" className="rounded-xl text-xs">
              Perf.
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-4 ">
            <AnimatedTabPanel className="space-y-5">
              <ProfileSection title="Employment details">
                <ProfileInfoRow
                  icon={Building2}
                  label="Department"
                  value={employee.department}
                />

                <ProfileInfoRow
                  icon={BriefcaseBusiness}
                  label="Job title"
                  value={employee.jobTitle}
                />

                <ProfileInfoRow
                  icon={MapPin}
                  label="Branch"
                  value={employee.branch}
                />

                <ProfileInfoRow
                  icon={ShieldCheck}
                  label="Supervisor"
                  value={employee.supervisor}
                />

                <ProfileInfoRow
                  icon={CalendarDays}
                  label="Date joined"
                  value={employee.dateJoined}
                />
              </ProfileSection>

              <ProfileSection title="Contact details">
                <ProfileInfoRow
                  icon={Mail}
                  label="Work email"
                  value={employee.email}
                />

                <ProfileInfoRow
                  icon={Phone}
                  label="Phone"
                  value={employee.phone}
                />
              </ProfileSection>
            </AnimatedTabPanel>
          </TabsContent>

          <TabsContent value="leave" className="mt-4">
            <AnimatedTabPanel>
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <WalletCards className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Annual leave balance
                    </p>

                    <p className="mt-1 text-2xl font-bold text-slate-950">
                      {employee.leaveBalance}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Leave history and requests will appear here when connected
                      to the backend.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedTabPanel>
          </TabsContent>

          <TabsContent value="documents" className="mt-4">
            <AnimatedTabPanel>
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <FileText className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Employee documents
                    </p>

                    <p className="mt-1 text-2xl font-bold text-slate-950">
                      {employee.documents}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Appointment letters, certificates, contracts, and IDs will
                      be managed here.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedTabPanel>
          </TabsContent>

          <TabsContent value="performance" className="mt-4">
            <AnimatedTabPanel>
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <UserRound className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Current appraisal status
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {employee.appraisalStatus}
                    </p>

                    <div className="mt-4">
                      <div className="mb-2 flex items-center justify-between">
                        <p className="text-xs font-medium text-slate-500">
                          Cycle progress
                        </p>

                        <p className="text-xs font-bold text-emerald-700">
                          45%
                        </p>
                      </div>

                      <Progress value={45} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedTabPanel>
          </TabsContent>
        </Tabs>
      </FadeIn>
    </MobileAppShell>
  );
}

type ProfileSectionProps = {
  title: string;
  children: React.ReactNode;
};

function ProfileSection({ title, children }: ProfileSectionProps) {
  return (
    <section>
      <h3 className="mb-3 text-base font-bold text-slate-950">{title}</h3>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        {children}
      </div>
    </section>
  );
}

type ProfileInfoRowProps = {
  icon: React.ElementType;
  label: string;
  value: string;
};

function ProfileInfoRow({ icon: Icon, label, value }: ProfileInfoRowProps) {
  return (
    <div className="border-b border-slate-100 px-4 py-4 last:border-b-0">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-medium text-slate-500">{label}</p>

          <p className="mt-1 truncate text-sm font-semibold text-slate-950">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}
