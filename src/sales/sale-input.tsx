type Props = {
  value: number;
  indexSale: number;
  handlerSetSale: (value: number, indexSale: number) => void;
};

export const SaleInput = ({ value, handlerSetSale, indexSale }: Props) => {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => handlerSetSale(parseFloat(e.target.value || "0"), indexSale)}
      style={{ width: "100%" }}
    />
  );
};
