export const reportSummary = {
  totalEmployees: 128,
  activeEmployees: 112,
  pendingApprovals: 12,
  appraisalCompletion: 46,
  documentCompliance: 78,
  leaveUtilization: 34,
};

export const headcountByDepartment = [
  { department: "Sales", employees: 42 },
  { department: "Operations", employees: 28 },
  { department: "Finance", employees: 18 },
  { department: "HR", employees: 12 },
  { department: "IT", employees: 4 },
];

export const leaveUsageByMonth = [
  { month: "Jan", annual: 22, sick: 8 },
  { month: "Feb", annual: 18, sick: 10 },
  { month: "Mar", annual: 25, sick: 12 },
  { month: "Apr", annual: 31, sick: 9 },
  { month: "May", annual: 28, sick: 11 },
  { month: "Jun", annual: 35, sick: 7 },
];

export const staffMovementByMonth = [
  { month: "Jan", hires: 5, exits: -2 },
  { month: "Feb", hires: 3, exits: -1 },
  { month: "Mar", hires: 7, exits: -4 },
  { month: "Apr", hires: 4, exits: -2 },
  { month: "May", hires: 6, exits: -3 },
  { month: "Jun", hires: 2, exits: -1 },
];

export const performanceRatings = [
  { rating: "Outstanding", count: 8 },
  { rating: "Very Good", count: 24 },
  { rating: "Good", count: 51 },
  { rating: "Needs Improvement", count: 11 },
  { rating: "Unsatisfactory", count: 3 },
];

export const approvalStatusBreakdown = [
  { status: "Pending", count: 12 },
  { status: "Approved", count: 48 },
  { status: "Returned", count: 6 },
  { status: "Rejected", count: 3 },
];

export const radialMetrics = [
  {
    label: "Appraisals",
    value: 46,
    description: "Cycle completion",
  },
  {
    label: "Documents",
    value: 78,
    description: "Compliance score",
  },
  {
    label: "Leave",
    value: 34,
    description: "Utilization",
  },
];

export const reportCategories = [
  "Overview",
  "Headcount",
  "Leave",
  "Performance",
  "Approvals",
] as const;

export type ReportCategory = (typeof reportCategories)[number];