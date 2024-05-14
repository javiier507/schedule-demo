import { useState } from "react";

import { Employee, Schedule } from "../types/schedule-types";
import { calculateByEmployee, getTotalResultByIndex } from "../utils/calculate";

import { ScheduleEmployee } from "./schedule-employee";
import { ScheduleGeneralTotal } from "./schedule-general-total";

type Props = {
  employees: Employee[];
};

export const Schedules = (props: Props) => {
  const [employees, setEmployees] = useState<Employee[]>(props.employees);
  const totals = employees.map(calculateByEmployee);

  const handlerSetTime = (
    schedule: Schedule,
    indexEmployee: number,
    indexDay: number,
    indexTime: number
  ) => {
    const arrayData = [...employees];
    try {
      arrayData[indexEmployee].schedules[indexDay][indexTime].time =
        schedule.time;
      setEmployees(arrayData);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {employees.map((item, index) => (
        <ScheduleEmployee
          key={`employee-${item.id}`}
          employee={item}
          indexEmployee={index}
          handlerSetTime={handlerSetTime}
          scheduleTotalResult={getTotalResultByIndex(totals, index)}
        />
      ))}
      <ScheduleGeneralTotal scheduleTotalResults={totals} />
    </>
  );
};
