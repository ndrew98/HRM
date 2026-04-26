export type ApprovalStatus = "Pending" | "Approved" | "Returned" | "Rejected";

export type ApprovalType = "Leave" | "Performance" | "Document";

export type ApprovalStep = {
  id: string;
  actor: string;
  role: string;
  status: ApprovalStatus;
  date?: string;
  comment?: string;
};

export type ApprovalItem = {
  id: string;
  type: ApprovalType;
  title: string;
  employeeName: string;
  employeeRole: string;
  department: string;
  submittedOn: string;
  currentStage: string;
  status: ApprovalStatus;
  summary: string;
  details: {
    label: string;
    value: string;
  }[];
  timeline: ApprovalStep[];
};

export const approvals: ApprovalItem[] = [
  {
    id: "appr-001",
    type: "Leave",
    title: "Annual Leave Request",
    employeeName: "Akosua Mensah",
    employeeRole: "HR Officer",
    department: "Human Resources",
    submittedOn: "01 Aug 2026",
    currentStage: "Pending Manager Approval",
    status: "Pending",
    summary: "Akosua requested 5 working days of annual leave.",
    details: [
      {
        label: "Leave type",
        value: "Annual Leave",
      },
      {
        label: "Duration",
        value: "5 working days",
      },
      {
        label: "Period",
        value: "12 Aug 2026 - 16 Aug 2026",
      },
      {
        label: "Reason",
        value: "Family commitment",
      },
    ],
    timeline: [
      {
        id: "step-1",
        actor: "Akosua Mensah",
        role: "Employee",
        status: "Approved",
        date: "01 Aug 2026",
        comment: "Submitted request",
      },
      {
        id: "step-2",
        actor: "Nana Owusu",
        role: "Direct Manager",
        status: "Pending",
      },
      {
        id: "step-3",
        actor: "HR Department",
        role: "HR",
        status: "Pending",
      },
    ],
  },
  {
    id: "appr-002",
    type: "Performance",
    title: "Performance Contract Review",
    employeeName: "Kwame Boateng",
    employeeRole: "Sales Executive",
    department: "Sales",
    submittedOn: "15 Apr 2026",
    currentStage: "Pending HOD Review",
    status: "Pending",
    summary: "Kwame's 2026 KPI contract is awaiting HOD review.",
    details: [
      {
        label: "Cycle",
        value: "2026 Annual Performance Cycle",
      },
      {
        label: "KPI weight",
        value: "70%",
      },
      {
        label: "Competency weight",
        value: "30%",
      },
      {
        label: "Manager",
        value: "Nana Owusu",
      },
    ],
    timeline: [
      {
        id: "step-1",
        actor: "Kwame Boateng",
        role: "Employee",
        status: "Approved",
        date: "14 Apr 2026",
        comment: "Acknowledged contract",
      },
      {
        id: "step-2",
        actor: "Nana Owusu",
        role: "Manager",
        status: "Approved",
        date: "15 Apr 2026",
        comment: "Manager review completed",
      },
      {
        id: "step-3",
        actor: "Head of Sales",
        role: "HOD",
        status: "Pending",
      },
      {
        id: "step-4",
        actor: "HR Department",
        role: "HR",
        status: "Pending",
      },
    ],
  },
  {
    id: "appr-003",
    type: "Document",
    title: "Document Verification",
    employeeName: "Ama Owusu",
    employeeRole: "Accounts Officer",
    department: "Finance",
    submittedOn: "10 Mar 2026",
    currentStage: "Returned to Employee",
    status: "Returned",
    summary: "One uploaded certificate needs clearer scan quality.",
    details: [
      {
        label: "Document",
        value: "Professional Certificate",
      },
      {
        label: "Issue",
        value: "Document scan is unclear",
      },
      {
        label: "Required action",
        value: "Upload a clearer copy",
      },
    ],
    timeline: [
      {
        id: "step-1",
        actor: "Ama Owusu",
        role: "Employee",
        status: "Approved",
        date: "10 Mar 2026",
        comment: "Uploaded document",
      },
      {
        id: "step-2",
        actor: "HR Officer",
        role: "HR",
        status: "Returned",
        date: "11 Mar 2026",
        comment: "Please upload a clearer copy",
      },
    ],
  },
  {
    id: "appr-004",
    type: "Leave",
    title: "Sick Leave Request",
    employeeName: "Kojo Appiah",
    employeeRole: "Operations Supervisor",
    department: "Operations",
    submittedOn: "18 Feb 2026",
    currentStage: "Completed",
    status: "Approved",
    summary: "Kojo's sick leave request was approved by Manager and HR.",
    details: [
      {
        label: "Leave type",
        value: "Sick Leave",
      },
      {
        label: "Duration",
        value: "2 working days",
      },
      {
        label: "Period",
        value: "20 Feb 2026 - 21 Feb 2026",
      },
    ],
    timeline: [
      {
        id: "step-1",
        actor: "Kojo Appiah",
        role: "Employee",
        status: "Approved",
        date: "18 Feb 2026",
        comment: "Submitted request",
      },
      {
        id: "step-2",
        actor: "Esi Darko",
        role: "Direct Manager",
        status: "Approved",
        date: "18 Feb 2026",
        comment: "Approved",
      },
      {
        id: "step-3",
        actor: "HR Department",
        role: "HR",
        status: "Approved",
        date: "19 Feb 2026",
        comment: "Final approval completed",
      },
    ],
  },
];