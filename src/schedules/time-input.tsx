type Props = {
  value: string | null;
  indexTime: number;
  handlerSetTime: (value: string | null, indexTime: number) => void;
};

export const TimeInput = ({ value, handlerSetTime, indexTime }: Props) => {
  return (
    <input
      type="time"
      value={value || ""}
      onChange={(e) => handlerSetTime(e.target.value || null, indexTime)}
      style={{ width: "100%" }}
    />
  );
};
