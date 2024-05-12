import { Employee, Schedule, Type } from "../schedule-types";

type Props = {
  employee: Employee;
};

function timeToDatetime(time: string | null): Date | undefined {
  if (!time) return;

  const partTime = time.split(":") as any[];

  if (partTime.length !== 2) return;
  if (isNaN(partTime[0]) || isNaN(partTime[1])) return;

  const date = new Date();
  date.setUTCHours(partTime[0]);
  date.setUTCMinutes(partTime[1]);
  return date;
}

const dateDifferenceInHours = (dateInitial: any, dateFinal: any) =>
  (dateFinal - dateInitial) / 3_600_000;

function calculateByDay(times: (Date | undefined)[]) {
  const am =
    times[0] && times[1] ? dateDifferenceInHours(times[0], times[1]) : 0;
  const pm =
    times[2] && times[3] ? dateDifferenceInHours(times[2], times[3]) : 0;

  return am + pm;
}

function calculateByWeek(schedules: Schedule[][], type: Type) {
  return schedules.reduce(
    (acum, currentSchedule) =>
      acum +
      calculateByDay(
        currentSchedule
          .filter((x) => x.type === type)
          .map((x) => timeToDatetime(x.time))
      ),
    0
  );
}

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
