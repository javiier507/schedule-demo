import {
  Schedule,
  Type,
  Employee,
  ScheduleTotals,
} from "../types/schedule-types";

export function timeToDatetime(time: string | null): Date | undefined {
  if (!time) return;

  const partTime = time.split(":") as any[];

  if (partTime.length !== 2) return;
  if (isNaN(partTime[0]) || isNaN(partTime[1])) return;

  const date = new Date();
  date.setUTCHours(partTime[0]);
  date.setUTCMinutes(partTime[1]);
  return date;
}

export function dateDifferenceInHours(
  dateInitial: any,
  dateFinal: any
): number {
  return (dateFinal - dateInitial) / 3_600_000;
}

export function calculateByDay(times: (Date | undefined)[]): number {
  const am =
    times[0] && times[1] ? dateDifferenceInHours(times[0], times[1]) : 0;
  const pm =
    times[2] && times[3] ? dateDifferenceInHours(times[2], times[3]) : 0;

  return am + pm;
}

export function calculateByWeek(schedules: Schedule[][], type: Type): number {
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

export function calculateByEmployee(employee: Employee): {
  projected: ScheduleTotals;
  actual: ScheduleTotals;
} {
  const projectedHours = calculateByWeek(employee.schedules, "projected");
  const actualHours = calculateByWeek(employee.schedules, "actual");

  const projected: ScheduleTotals = {
    hours: projectedHours,
    overtime:
      projectedHours - employee.workHours > 0
        ? projectedHours - employee.workHours
        : 0,
    cost: employee.rate * projectedHours,
  };

  const actual: ScheduleTotals = {
    hours: actualHours,
    overtime:
      actualHours - employee.workHours > 0
        ? actualHours - employee.workHours
        : 0,
    cost: employee.rate * actualHours,
  };

  return {
    projected,
    actual,
  };
}
