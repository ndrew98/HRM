export type PerformanceStatus =
  | "Not Started"
  | "In Progress"
  | "Pending Review"
  | "Approved"
  | "Returned";

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
  },
];