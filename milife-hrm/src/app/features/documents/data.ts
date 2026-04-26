export type DocumentStatus = "Verified" | "Pending" | "Expired" | "Missing";

export type DocumentCategory =
  | "Employee"
  | "Contract"
  | "Certificate"
  | "Policy"
  | "Leave"
  | "Performance";

export type DocumentItem = {
  id: string;
  title: string;
  category: DocumentCategory;
  employeeName?: string;
  uploadedBy: string;
  uploadedOn: string;
  status: DocumentStatus;
  fileType: "PDF" | "DOCX" | "JPG" | "PNG";
  size: string;
  expiryDate?: string;
};

export const documents: DocumentItem[] = [
  {
    id: "doc-001",
    title: "Appointment Letter",
    category: "Contract",
    employeeName: "Akosua Mensah",
    uploadedBy: "HR Department",
    uploadedOn: "12 Jan 2022",
    status: "Verified",
    fileType: "PDF",
    size: "240 KB",
  },
  {
    id: "doc-002",
    title: "Professional Certificate",
    category: "Certificate",
    employeeName: "Ama Owusu",
    uploadedBy: "Ama Owusu",
    uploadedOn: "10 Mar 2026",
    status: "Pending",
    fileType: "PDF",
    size: "1.2 MB",
  },
  {
    id: "doc-003",
    title: "Medical Report",
    category: "Leave",
    employeeName: "Kojo Appiah",
    uploadedBy: "Kojo Appiah",
    uploadedOn: "18 Feb 2026",
    status: "Verified",
    fileType: "JPG",
    size: "780 KB",
  },
  {
    id: "doc-004",
    title: "Staff Handbook",
    category: "Policy",
    uploadedBy: "HR Department",
    uploadedOn: "01 Jan 2026",
    status: "Verified",
    fileType: "PDF",
    size: "2.4 MB",
  },
  {
    id: "doc-005",
    title: "National ID",
    category: "Employee",
    employeeName: "Kwame Boateng",
    uploadedBy: "HR Department",
    uploadedOn: "03 Feb 2026",
    status: "Expired",
    fileType: "PNG",
    size: "540 KB",
    expiryDate: "15 Apr 2026",
  },
  {
    id: "doc-006",
    title: "KPI Evidence File",
    category: "Performance",
    employeeName: "Akosua Mensah",
    uploadedBy: "Akosua Mensah",
    uploadedOn: "15 Apr 2026",
    status: "Pending",
    fileType: "DOCX",
    size: "320 KB",
  },
];

export const documentCategories: ("All" | DocumentCategory)[] = [
  "All",
  "Employee",
  "Contract",
  "Certificate",
  "Policy",
  "Leave",
  "Performance",
];