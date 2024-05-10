import { Employee } from "./schedule";

import { ScheduleDays } from "./schedule-days";
import { ScheduleTotal } from "./schedule-total";

type Props = {
  employees: Employee[];
  handler: (
    value: string,
    indexEmployee: number,
    indexDay: number,
    indexSchedule: number
  ) => void;
};

export const ScheduleEmployees = ({ employees = [], handler }: Props) => {
  return (
    <>
      {employees.map((item, index) => (
        <div
          key={`employee-${item.id}`}
          style={{ display: "flex", marginBottom: "1rem" }}
        >
          <div style={{ width: "5%" }}>{item.fullname}</div>
          <div style={{ width: "95%", display: "flex" }}>
            {item.schedule.map((dayItem, dayIndex) => (
              <ScheduleDays
                key={`day-${dayIndex}`}
                schedule={dayItem}
                indexDay={dayIndex}
                handler={(value, indexDay, indexSchedule) =>
                  handler(value, index, indexDay, indexSchedule)
                }
              />
            ))}
            <ScheduleTotal schedule={item.schedule} />
          </div>
        </div>
      ))}
    </>
  );
};
