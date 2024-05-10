import { Schedule, Type } from "./schedule";

type Props = {
  schedule: Schedule[][];
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

export const ScheduleTotal = ({ schedule = [] }: Props) => {
  const projectedTotal = calculateByWeek(schedule, "projected");
  const actualTotal = calculateByWeek(schedule, "actual");

  return (
    <div style={{ width: "12.5%", display: "flex", flexWrap: "wrap" }}>
      <div style={{ width: "100%" }}>{projectedTotal}</div>
      <div style={{ width: "100%" }}>{actualTotal}</div>
    </div>
  );
};
