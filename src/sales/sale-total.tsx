import { Sale } from "../schedule-types";

type Props = {
  sales: Sale[];
};

export const SaleTotal = ({ sales }: Props) => {
  return (
    <div style={{ width: "12.5%", display: "flex", flexWrap: "wrap" }}>
      <div style={{ width: "100%", padding: 10 }}>
        {sales.reduce((prev, current) => prev + (current.am + current.pm), 0)}
      </div>
    </div>
  );
};
