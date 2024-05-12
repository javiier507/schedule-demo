import { Schedule } from "../types/schedule-types";

import { TimeInput } from "./time-input";

type Props = {
  schedule: Schedule[];
  indexDay: number;
  handler: (value: string, indexDay: number, indexTime: number) => void;
};

export const ScheduleDay = ({ schedule = [], handler, indexDay }: Props) => {
  return (
    <div style={{ width: "12.5%", display: "flex", flexWrap: "wrap" }}>
      {schedule.map((item, index) => (
        <div key={`time-${item.id}`} style={{ width: "50%" }}>
          <TimeInput
            value={item.time}
            indexTime={index}
            handler={(value, indexTime) =>
              handler(value, indexDay, indexTime)
            }
          />
        </div>
      ))}
    </div>
  );
};
