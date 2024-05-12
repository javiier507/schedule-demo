type Props = {
  value: string | null;
  indexTime: number;
  handler: (value: string, indexTime: number) => void;
};

export const TimeInput = ({ value, handler, indexTime }: Props) => {
  return (
    <input
      type="time"
      value={value || ""}
      onChange={(e) => handler(e.target.value, indexTime)}
      style={{ width: "100%" }}
    />
  );
};
