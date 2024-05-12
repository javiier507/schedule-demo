export type Employee = {
  id: number;
  fullname: string;
  workHours: number;
  rate: number;
  schedules: Schedule[][];
};

export type Schedule = {
  id: number;
  time: string | null;
  period: Period;
  window: Window;
  type: Type;
};

export type Period = "am" | "pm";

export type Type = "projected" | "actual";

export type Window = "in" | "out";

export type ScheduleTotals = {
  hours: number;
  overtime: number;
  price: number;
};

export type Sale = {
  date: string;
  am: number;
  pm: number;
};
