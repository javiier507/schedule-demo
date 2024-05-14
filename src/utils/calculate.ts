import {
  Schedule,
  Type,
  Employee,
  ScheduleTotalItem,
  ScheduleTotalResult,
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

export function calculateByEmployee(employee: Employee): ScheduleTotalResult {
  const projectedHours = calculateByWeek(employee.schedules, "projected");
  const actualHours = calculateByWeek(employee.schedules, "actual");

  const projected: ScheduleTotalItem = {
    hours: projectedHours,
    overtime:
      projectedHours - employee.workHours > 0
        ? projectedHours - employee.workHours
        : 0,
    cost: employee.rate * projectedHours,
  };

  const actual: ScheduleTotalItem = {
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

export function calculateGeneralTotal(
  scheduleTotalResults: ScheduleTotalResult[]
): ScheduleTotalResult {
  return scheduleTotalResults.reduce(
    (
      prev,
      current
    ): { projected: ScheduleTotalItem; actual: ScheduleTotalItem } => {
      return {
        projected: {
          hours: prev.projected.hours + current.projected.hours,
          overtime: prev.projected.overtime + current.projected.overtime,
          cost: prev.projected.cost + current.projected.cost,
        },
        actual: {
          hours: prev.actual.hours + current.actual.hours,
          overtime: prev.actual.overtime + current.actual.overtime,
          cost: prev.actual.cost + current.actual.cost,
        },
      };
    },
    {
      projected: {
        hours: 0,
        overtime: 0,
        cost: 0,
      },
      actual: {
        hours: 0,
        overtime: 0,
        cost: 0,
      },
    }
  );
}

export function getTotalResultByIndex(
  scheduleTotalResults: ScheduleTotalResult[],
  index: number
): ScheduleTotalResult {
  const result = scheduleTotalResults[index];
  if (!result) {
    return {
      projected: {
        hours: 0,
        overtime: 0,
        cost: 0,
      },
      actual: {
        hours: 0,
        overtime: 0,
        cost: 0,
      },
    };
  }
  return result;
}
