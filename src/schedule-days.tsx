import { Schedule } from "./schedule";

import { TimeInput } from "./time-input";

type Props = {
  schedule: Schedule[];
  indexDay: number;
  handler: (value: string, indexDay: number, indexSchedule: number) => void;
};

export const ScheduleDays = ({ schedule = [], handler, indexDay }: Props) => {
  return (
    <div style={{ width: "12.5%", display: "flex", flexWrap: "wrap" }}>
      {schedule.map((item, index) => (
        <div key={`schedule-${item.id}`} style={{ width: "50%" }}>
          <TimeInput
            value={item.time}
            indexSchedule={index}
            handler={(value, indexSchedule) =>
              handler(value, indexDay, indexSchedule)
            }
          />
        </div>
      ))}
    </div>
  );
};
