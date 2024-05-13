import { Schedule } from "../types/schedule-types";

import { TimeInput } from "./time-input";

type Props = {
  schedule: Schedule[];
  indexDay: number;
  handlerSetTime: (value: string, indexDay: number, indexTime: number) => void;
};

export const ScheduleDay = ({ schedule = [], handlerSetTime, indexDay }: Props) => {
  return (
    <div style={{ width: "12.5%", display: "flex", flexWrap: "wrap" }}>
      {schedule.map((item, index) => (
        <div key={`time-${item.id}`} style={{ width: "50%" }}>
          <TimeInput
            value={item.time}
            indexTime={index}
            handlerSetTime={(value, indexTime) =>
              handlerSetTime(value, indexDay, indexTime)
            }
          />
        </div>
      ))}
    </div>
  );
};
