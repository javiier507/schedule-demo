import { Employee, ScheduleTotalResult } from "../types/schedule-types";

import { ScheduleDay } from "./schedule-day";
import { ScheduleTotal } from "./schedule-total";

type Props = {
  employee: Employee;
  indexEmployee: number;
  handlerSetTime: (
    value: string,
    indexEmployee: number,
    indexDay: number,
    indexTime: number
  ) => void;
  scheduleTotalResult: ScheduleTotalResult;
};

export const ScheduleEmployee = ({
  employee,
  indexEmployee,
  handlerSetTime,
  scheduleTotalResult
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
            handlerSetTime={(value, indexDay, indexTime) =>
              handlerSetTime(value, indexEmployee, indexDay, indexTime)
            }
          />
        ))}
        <ScheduleTotal {...scheduleTotalResult} />
      </div>
    </div>
  );
};
