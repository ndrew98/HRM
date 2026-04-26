export type PerformanceStatus =
  | "Not Started"
  | "In Progress"
  | "Pending Review"
  | "Approved"
  | "Returned";

export type RatingValue = 1 | 2 | 3 | 4 | 5;

export type PerformanceContractItem = {
  id: string;
  title: string;
  description: string;
  weight: number;
  target: string;
  selfScore?: RatingValue;
  managerScore?: RatingValue;
  evidence?: string;
};

export type PerformanceTimelineStep = {
  id: string;
  title: string;
  actor: string;
  status: "Completed" | "Pending" | "Returned";
  date?: string;
  comment?: string;
};

export type PerformanceContract = {
  id: string;
  employeeName: string;
  role: string;
  department: string;
  cycle: string;
  status: PerformanceStatus;
  kpiProgress: number;
  competencyProgress: number;
  finalScore?: number;
  rating?: string;
  currentStage: string;
  kpis: PerformanceContractItem[];
  competencies: PerformanceContractItem[];
  timeline: PerformanceTimelineStep[];
};

export const activePerformanceCycle = {
  id: "cycle-2026",
  name: "2026 Annual Performance Cycle",
  period: "Jan 2026 - Dec 2026",
  status: "Active",
  completion: 46,
  contractsTotal: 128,
  contractsCompleted: 59,
  pendingReviews: 24,
};

export const performanceContracts: PerformanceContract[] = [
  {
    id: "perf-001",
    employeeName: "Akosua Mensah",
    role: "HR Officer",
    department: "Human Resources",
    cycle: "2026 Annual Performance Cycle",
    status: "In Progress",
    kpiProgress: 65,
    competencyProgress: 40,
    currentStage: "Self-appraisal in progress",
    kpis: [
      {
        id: "kpi-001",
        title: "Complete employee record audit",
        description: "Review and update active employee records for completeness.",
        weight: 30,
        target: "100% active employee records reviewed",
        selfScore: 4,
        evidence: "Audit checklist completed for all HR files.",
      },
      {
        id: "kpi-002",
        title: "Reduce leave processing delay",
        description: "Improve turnaround time for leave review and HR confirmation.",
        weight: 25,
        target: "Process leave requests within 2 working days",
        selfScore: 3,
      },
      {
        id: "kpi-003",
        title: "Improve document compliance",
        description: "Ensure required HR documents are uploaded for staff records.",
        weight: 45,
        target: "90% document completeness across active staff",
      },
    ],
    competencies: [
      {
        id: "comp-001",
        title: "Communication",
        description: "Communicates clearly with employees, managers, and HR team members.",
        weight: 30,
        target: "Clear and timely HR communication",
        selfScore: 4,
      },
      {
        id: "comp-002",
        title: "Confidentiality",
        description: "Handles sensitive employee records with care and discretion.",
        weight: 40,
        target: "Maintain strict confidentiality",
        selfScore: 5,
      },
      {
        id: "comp-003",
        title: "Problem solving",
        description: "Resolves HR process issues with practical judgement.",
        weight: 30,
        target: "Resolve employee issues promptly",
      },
    ],
    timeline: [
      {
        id: "step-001",
        title: "Contract created",
        actor: "HR Department",
        status: "Completed",
        date: "02 Jan 2026",
        comment: "Performance cycle published.",
      },
      {
        id: "step-002",
        title: "Employee acknowledgement",
        actor: "Akosua Mensah",
        status: "Completed",
        date: "05 Jan 2026",
      },
      {
        id: "step-003",
        title: "Self-appraisal",
        actor: "Akosua Mensah",
        status: "Pending",
      },
      {
        id: "step-004",
        title: "Manager review",
        actor: "Direct Manager",
        status: "Pending",
      },
    ],
  },
  {
    id: "perf-002",
    employeeName: "Kwame Boateng",
    role: "Sales Executive",
    department: "Sales",
    cycle: "2026 Annual Performance Cycle",
    status: "Pending Review",
    kpiProgress: 100,
    competencyProgress: 100,
    currentStage: "Pending manager review",
    kpis: [
      {
        id: "kpi-004",
        title: "Achieve monthly sales target",
        description: "Meet assigned new business production target.",
        weight: 50,
        target: "100% monthly sales target achievement",
        selfScore: 4,
        managerScore: 4,
      },
      {
        id: "kpi-005",
        title: "Improve policy persistency",
        description: "Support quality sales and reduce early lapses.",
        weight: 30,
        target: "Maintain strong persistency ratio",
        selfScore: 3,
        managerScore: 3,
      },
      {
        id: "kpi-006",
        title: "Customer follow-up",
        description: "Maintain timely client follow-up after sales.",
        weight: 20,
        target: "Follow up all new customers within 7 days",
        selfScore: 5,
      },
    ],
    competencies: [
      {
        id: "comp-004",
        title: "Customer focus",
        description: "Understands customer needs and provides helpful support.",
        weight: 40,
        target: "High-quality customer engagement",
        selfScore: 4,
      },
      {
        id: "comp-005",
        title: "Teamwork",
        description: "Works well with other sales team members.",
        weight: 30,
        target: "Support team sales initiatives",
        selfScore: 4,
      },
      {
        id: "comp-006",
        title: "Discipline",
        description: "Maintains call plans, reporting, and follow-up routines.",
        weight: 30,
        target: "Consistent sales discipline",
        selfScore: 3,
      },
    ],
    timeline: [
      {
        id: "step-005",
        title: "Contract acknowledged",
        actor: "Kwame Boateng",
        status: "Completed",
        date: "14 Apr 2026",
      },
      {
        id: "step-006",
        title: "Self-appraisal submitted",
        actor: "Kwame Boateng",
        status: "Completed",
        date: "18 Apr 2026",
      },
      {
        id: "step-007",
        title: "Manager review",
        actor: "Nana Owusu",
        status: "Pending",
      },
    ],
  },
  {
    id: "perf-003",
    employeeName: "Ama Owusu",
    role: "Accounts Officer",
    department: "Finance",
    cycle: "2026 Annual Performance Cycle",
    status: "Approved",
    kpiProgress: 100,
    competencyProgress: 100,
    finalScore: 4.08,
    rating: "Very Good",
    currentStage: "Final approval completed",
    kpis: [
      {
        id: "kpi-007",
        title: "Improve reconciliation accuracy",
        description: "Maintain accurate monthly reconciliations.",
        weight: 50,
        target: "Zero major reconciliation errors",
        selfScore: 4,
        managerScore: 4,
      },
      {
        id: "kpi-008",
        title: "Timely financial reporting",
        description: "Submit reports within agreed timelines.",
        weight: 50,
        target: "Reports submitted by deadline",
        selfScore: 4,
        managerScore: 4,
      },
    ],
    competencies: [
      {
        id: "comp-007",
        title: "Accuracy",
        description: "Maintains careful attention to financial details.",
        weight: 50,
        target: "High accuracy in finance work",
        selfScore: 4,
        managerScore: 4,
      },
      {
        id: "comp-008",
        title: "Accountability",
        description: "Owns assigned work and follows through.",
        weight: 50,
        target: "Strong ownership of assigned tasks",
        selfScore: 4,
        managerScore: 4,
      },
    ],
    timeline: [
      {
        id: "step-008",
        title: "Self-appraisal submitted",
        actor: "Ama Owusu",
        status: "Completed",
        date: "10 Apr 2026",
      },
      {
        id: "step-009",
        title: "Manager review completed",
        actor: "Michael Osei",
        status: "Completed",
        date: "15 Apr 2026",
      },
      {
        id: "step-010",
        title: "Final HR approval",
        actor: "HR Department",
        status: "Completed",
        date: "20 Apr 2026",
      },
    ],
  },
  {
    id: "perf-004",
    employeeName: "Kojo Appiah",
    role: "Operations Supervisor",
    department: "Operations",
    cycle: "2026 Annual Performance Cycle",
    status: "Returned",
    kpiProgress: 80,
    competencyProgress: 60,
    currentStage: "Returned for correction",
    kpis: [
      {
        id: "kpi-009",
        title: "Improve branch operations turnaround",
        description: "Reduce processing delays in daily operations.",
        weight: 60,
        target: "Reduce average processing time by 20%",
        selfScore: 3,
      },
      {
        id: "kpi-010",
        title: "Strengthen branch compliance",
        description: "Ensure operational checklist completion.",
        weight: 40,
        target: "Complete monthly compliance checklist",
      },
    ],
    competencies: [
      {
        id: "comp-009",
        title: "Leadership",
        description: "Guides team members and coordinates branch tasks.",
        weight: 50,
        target: "Effective team supervision",
        selfScore: 3,
      },
      {
        id: "comp-010",
        title: "Responsiveness",
        description: "Responds to operational issues quickly.",
        weight: 50,
        target: "Timely issue resolution",
      },
    ],
    timeline: [
      {
        id: "step-011",
        title: "Self-appraisal submitted",
        actor: "Kojo Appiah",
        status: "Completed",
        date: "12 Apr 2026",
      },
      {
        id: "step-012",
        title: "Manager returned appraisal",
        actor: "Esi Darko",
        status: "Returned",
        date: "16 Apr 2026",
        comment: "Please add evidence for branch compliance KPI.",
      },
    ],
  },
];