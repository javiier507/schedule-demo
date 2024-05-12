import { ScheduleTotals } from "../types/schedule-types";

type Props = {
  projected: ScheduleTotals;
  actual: ScheduleTotals;
};

export const ScheduleTotal = ({ projected, actual }: Props) => {
  return (
    <div style={{ width: "12.5%", display: "flex", flexWrap: "wrap" }}>
      <div style={{ width: "100%", display: "flex", padding: 10 }}>
        <div style={{ width: "33.33%" }}>{projected.hours.toFixed(2)}</div>
        <div style={{ width: "33.33%" }}>{projected.overtime.toFixed(2)}</div>
        <div style={{ width: "33.33%" }}>{projected.price}</div>
      </div>
      <div style={{ width: "100%", display: "flex", padding: 10 }}>
        <div style={{ width: "33.33%" }}>{actual.hours.toFixed(2)}</div>
        <div style={{ width: "33.33%" }}>{actual.overtime.toFixed(2)}</div>
        <div style={{ width: "33.33%" }}>{actual.price.toFixed(2)}</div>
      </div>
    </div>
  );
};
