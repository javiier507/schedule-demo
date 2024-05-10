import { useState } from "react";
import "./App.css";

import { ScheduleEmployees } from "./schedule-employee";

import { SCHEDULE_EXAMPLE, Employee } from "./schedule";

function App() {
  const [employees, setEmployees] = useState<Employee[]>(SCHEDULE_EXAMPLE);
  return (
    <ScheduleEmployees
      employees={employees}
      handler={(value, indexEmployee, indexDay, indexSchedule) => {
        const employeesData = [...employees];
        try {
          employeesData[indexEmployee].schedule[indexDay][indexSchedule].time =
            value;
          setEmployees(employeesData);
        } catch (e) {
          console.error(e);
        }
      }}
    />
  );
}

export default App;
