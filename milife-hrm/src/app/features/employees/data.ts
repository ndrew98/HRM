export type  Employee = {
  id: string;
  staffId: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  branch: string;
  jobTitle: string;
  supervisor: string;
  employmentType: string;
  dateJoined: string;
  status: string;
  leaveBalance: string;
  documents: string;
  appraisalStatus: string;
}

export const employees: Employee[] = [
  {
    id: "1",
    staffId: "MIL-0012",
    name: "Akosua Mensah",
    email: "akosua.mensah@milife.com",
    phone: "+233 24 000 1234",
    department: "Human Resources",
    branch: "Head Office",
    jobTitle: "HR Officer",
    supervisor: "Dorcas Appiah",
    employmentType: "Full-time",
    dateJoined: "12 Jan 2022",
    status: "Active",
    leaveBalance: "18 days",
    documents: "6 uploaded",
    appraisalStatus: "Contract acknowledged",
  },
  {
    id: "2",
    staffId: "MIL-0048",
    name: "Kwame Boateng",
    email: "kwame.boateng@milife.com",
    phone: "+233 24 000 5678",
    department: "Sales",
    branch: "Kumasi Branch",
    jobTitle: "Sales Executive",
    supervisor: "Nana Owusu",
    employmentType: "Full-time",
    dateJoined: "03 Feb 2026",
    status: "Probation",
    leaveBalance: "5 days",
    documents: "3 uploaded",
    appraisalStatus: "KPI setup pending",
  },
  {
    id: "3",
    staffId: "MIL-0075",
    name: "Ama Owusu",
    email: "ama.owusu@milife.com",
    phone: "+233 24 000 9012",
    department: "Finance",
    branch: "Head Office",
    jobTitle: "Accounts Officer",
    supervisor: "Michael Osei",
    employmentType: "Full-time",
    dateJoined: "18 Aug 2021",
    status: "Active",
    leaveBalance: "12 days",
    documents: "8 uploaded",
    appraisalStatus: "Self-appraisal pending",
  },
  {
    id: "4",
    staffId: "MIL-0104",
    name: "Kojo Appiah",
    email: "kojo.appiah@milife.com",
    phone: "+233 24 000 3456",
    department: "Operations",
    branch: "Takoradi Branch",
    jobTitle: "Operations Supervisor",
    supervisor: "Esi Darko",
    employmentType: "Full-time",
    dateJoined: "25 May 2020",
    status: "Suspended",
    leaveBalance: "0 days",
    documents: "5 uploaded",
    appraisalStatus: "On hold",
  },
];