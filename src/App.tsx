import { SCHEDULE_EXAMPLE, SALES_EXAMPLES } from "./mock-data";

import { Sales } from "./sales";
import { Schedules } from "./schedules";

function App() {
  return (
    <div>
      <Sales sales={SALES_EXAMPLES} />
      <Schedules employees={SCHEDULE_EXAMPLE} />
    </div>
  );
}

export default App;
