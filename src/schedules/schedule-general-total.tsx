import { Employee } from "../types/schedule-types";
import { calculateGeneralTotal } from "../utils/calculate";

import { ScheduleTotal } from "./schedule-total";

type Props = {
  employees: Employee[];
};

export const ScheduleGeneralTotal = ({ employees = [] }: Props) => {
  const totals = calculateGeneralTotal(employees);

  return (
    <div
      style={{
        display: "flex",
        marginBottom: "1rem",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{ width: "95%", display: "flex", justifyContent: "flex-end" }}
      >
        <ScheduleTotal {...totals} />
      </div>
    </div>
  );
};
