import { useState } from "react";

import { ScheduleEmployee } from "./schedule-employee";
import { Employee } from "../types/schedule-types";

type Props = {
  employees: Employee[];
};

export const Schedules = (props: Props) => {
  const [employees, setEmployees] = useState<Employee[]>(props.employees);

  const handlerUpdate = (
    value: string,
    indexEmployee: number,
    indexDay: number,
    indexTime: number
  ) => {
    const employeesData = [...employees];
    try {
      employeesData[indexEmployee].schedules[indexDay][indexTime].time = value;
      setEmployees(employeesData);
    } catch (e) {
      console.error(e);
    }
  };

  return employees.map((item, index) => (
    <ScheduleEmployee
      key={`employee-${item.id}`}
      employee={item}
      indexEmployee={index}
      handler={handlerUpdate}
    />
  ));
};
