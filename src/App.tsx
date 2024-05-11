import { useState } from "react";
import "./App.css";

import { ScheduleEmployee } from "./schedule-employee";

import { Employee } from "./schedule";
import { SCHEDULE_EXAMPLE } from "./mock-data";

function App() {
  const [employees, setEmployees] = useState<Employee[]>(SCHEDULE_EXAMPLE);
  return employees.map((item, index) => (
    <ScheduleEmployee
      key={`employee-${item.id}`}
      employee={item}
      indexEmployee={index}
      handler={(value, indexEmployee, indexDay, indexTime) => {
        const employeesData = [...employees];
        try {
          employeesData[indexEmployee].schedules[indexDay][indexTime].time =
            value;
          setEmployees(employeesData);
        } catch (e) {
          console.error(e);
        }
      }}
    />
  ));
}

export default App;
