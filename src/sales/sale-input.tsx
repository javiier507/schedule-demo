type Props = {
  value: number;
  indexSale: number;
  handler: (value: number, indexSale: number) => void;
};

export const SaleInput = ({ value, handler, indexSale }: Props) => {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => handler(parseFloat(e.target.value || "0"), indexSale)}
      style={{ width: "100%" }}
    />
  );
};
