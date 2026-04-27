export const dashboardSummary = {
  totalEmployees: 128,
  pendingApprovals: 12,
  leaveRequests: 7,
  appraisalCompletion: 46,
  documentCompliance: 78,
};

export const quickActions = [
  {
    id: "apply-leave",
    label: "Apply Leave",
    href: "/leave",
    type: "leave",
  },
  {
    id: "upload-document",
    label: "Upload Doc",
    href: "/documents",
    type: "documents",
  },
  {
    id: "review-approvals",
    label: "Approvals",
    href: "/approvals",
    type: "approvals",
  },
  {
    id: "performance",
    label: "Performance",
    href: "/performance",
    type: "performance",
  },
];

export const dashboardActions = [
  {
    id: "action-001",
    title: "Leave approval pending",
    description: "Akosua Mensah requested 5 working days of annual leave.",
    meta: "Today",
    href: "/approvals",
  },
  {
    id: "action-002",
    title: "Performance review due",
    description: "Kwame Boateng’s KPI contract is awaiting manager review.",
    meta: "2 days",
    href: "/performance",
  },
  {
    id: "action-003",
    title: "Expired document",
    description: "Kwame Boateng’s National ID requires renewal.",
    meta: "Expired",
    href: "/documents",
  },
];

export const recentActivities = [
  {
    id: "activity-001",
    title: "Leave request approved",
    description: "Kojo Appiah’s sick leave was approved by HR.",
    time: "1h ago",
  },
  {
    id: "activity-002",
    title: "Document uploaded",
    description: "Ama Owusu uploaded a professional certificate.",
    time: "3h ago",
  },
  {
    id: "activity-003",
    title: "Appraisal submitted",
    description: "Akosua Mensah submitted self-appraisal scores.",
    time: "Yesterday",
  },
];

export const dashboardTrend = [
  {
    month: "Jan",
    approvals: 18,
    leave: 22,
  },
  {
    month: "Feb",
    approvals: 24,
    leave: 18,
  },
  {
    month: "Mar",
    approvals: 20,
    leave: 25,
  },
  {
    month: "Apr",
    approvals: 32,
    leave: 31,
  },
  {
    month: "May",
    approvals: 28,
    leave: 28,
  },
  {
    month: "Jun",
    approvals: 35,
    leave: 35,
  },
];