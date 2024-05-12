import { Employee } from "../schedule-types";

import { ScheduleDay } from "./schedule-day";
import { ScheduleTotal } from "./schedule-total";

type Props = {
  employee: Employee;
  indexEmployee: number;
  handler: (
    value: string,
    indexEmployee: number,
    indexDay: number,
    indexTime: number
  ) => void;
};

export const ScheduleEmployee = ({
  employee,
  indexEmployee,
  handler,
}: Props) => {
  return (
    <div style={{ display: "flex", marginBottom: "1rem" }}>
      <div style={{ width: "5%" }}>{employee.fullname}</div>
      <div style={{ width: "95%", display: "flex" }}>
        {employee.schedules.map((dayItem, dayIndex) => (
          <ScheduleDay
            key={`day-${dayIndex}`}
            schedule={dayItem}
            indexDay={dayIndex}
            handler={(value, indexDay, indexTime) =>
              handler(value, indexEmployee, indexDay, indexTime)
            }
          />
        ))}
        <ScheduleTotal employee={employee} />
      </div>
    </div>
  );
};
