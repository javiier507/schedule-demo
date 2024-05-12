import { Employee, ScheduleTotals } from "../types/schedule-types";
import { calculateByWeek } from "../utils/calculate";
import { ScheduleTotal } from "./schedule-total";

type Props = {
  employee: Employee;
};

export const ScheduleTotalEmployee = ({ employee }: Props) => {
  const projectedTotal = calculateByWeek(employee.schedules, "projected");
  const actualTotal = calculateByWeek(employee.schedules, "actual");

  const projectTotals: ScheduleTotals = {
    hours: projectedTotal,
    overtime:
      projectedTotal - employee.workHours > 0
        ? projectedTotal - employee.workHours
        : 0,
    price: employee.rate * projectedTotal,
  };

  const actualTotals: ScheduleTotals = {
    hours: actualTotal,
    overtime:
      actualTotal - employee.workHours > 0
        ? actualTotal - employee.workHours
        : 0,
    price: employee.rate * actualTotal,
  };

  return <ScheduleTotal projected={projectTotals} actual={actualTotals} />;
};
