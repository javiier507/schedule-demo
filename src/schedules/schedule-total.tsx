import { Employee } from "../types/schedule-types";
import { calculateByWeek } from "../utils/calculate";

type Props = {
  employee: Employee;
};

export const ScheduleTotal = ({ employee }: Props) => {
  const projectedTotal = calculateByWeek(employee.schedules, "projected");
  const actualTotal = calculateByWeek(employee.schedules, "actual");

  return (
    <div style={{ width: "12.5%", display: "flex", flexWrap: "wrap" }}>
      <div style={{ width: "100%", display: "flex", padding: 10 }}>
        <div style={{ width: "33.33%" }}>{projectedTotal.toFixed(2)}</div>
        <div style={{ width: "33.33%" }}>
          {projectedTotal - employee.workHours > 0
            ? (projectedTotal - employee.workHours).toFixed(2)
            : 0}
        </div>
        <div style={{ width: "33.33%" }}>
          {(employee.rate * projectedTotal).toFixed(2)}
        </div>
      </div>
      <div style={{ width: "100%", display: "flex", padding: 10 }}>
        <div style={{ width: "33.33%" }}>{actualTotal.toFixed(2)}</div>
        <div style={{ width: "33.33%" }}>
          {actualTotal - employee.workHours > 0
            ? (actualTotal - employee.workHours).toFixed(2)
            : 0}
        </div>
        <div style={{ width: "33.33%" }}>
          {(employee.rate * actualTotal).toFixed(2)}
        </div>
      </div>
    </div>
  );
};
