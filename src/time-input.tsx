type Props = {
  value: string | null;
  indexSchedule: number;
  handler: (value: string, indexSchedule: number) => void;
};

export const TimeInput = ({ value, handler, indexSchedule }: Props) => {
  return (
    <input
      type="time"
      value={value || ""}
      onChange={(e) => handler(e.target.value, indexSchedule)}
      style={{ width: "100%" }}
    />
  );
};
