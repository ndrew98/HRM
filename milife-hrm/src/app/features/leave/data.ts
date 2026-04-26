export type LeaveType = {
  id: string;
  name: string;
  entitled: number;
  used: number;
  remaining: number;
};

export type LeaveRequest = {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  totalDays: number;
  status: "Approved" | "Pending" | "Rejected" | "Returned";
  submittedOn: string;
};

export const leaveTypes: LeaveType[] = [
  {
    id: "annual",
    name: "Annual",
    entitled: 25,
    used: 7,
    remaining: 18,
  },
  {
    id: "sick",
    name: "Sick",
    entitled: 10,
    used: 2,
    remaining: 8,
  },
  {
    id: "study",
    name: "Study",
    entitled: 5,
    used: 0,
    remaining: 5,
  },
  {
    id: "compassionate",
    name: "Compassionate",
    entitled: 5,
    used: 1,
    remaining: 4,
  },
];

export const leaveRequests: LeaveRequest[] = [
  {
    id: "1",
    type: "Annual",
    startDate: "12 Aug 2026",
    endDate: "16 Aug 2026",
    totalDays: 5,
    status: "Approved",
    submittedOn: "01 Aug 2026",
  },
  {
    id: "2",
    type: "Sick",
    startDate: "03 Sep 2026",
    endDate: "04 Sep 2026",
    totalDays: 2,
    status: "Pending",
    submittedOn: "28 Aug 2026",
  },
  {
    id: "3",
    type: "Compassionate",
    startDate: "10 Oct 2026",
    endDate: "10 Oct 2026",
    totalDays: 1,
    status: "Returned",
    submittedOn: "02 Oct 2026",
  },
];