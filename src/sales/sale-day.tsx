import { Sale } from "../types/schedule-types";

import { SaleInput } from "./sale-input";

type Props = {
  sale: Sale;
  indexSale: number;
  handler: (value: Sale, indexSale: number) => void;
};

export const SaleDay = ({ sale, indexSale, handler }: Props) => {
  return (
    <div style={{ width: "12.5%", display: "flex", flexWrap: "wrap" }}>
      <div style={{ width: "100%" }}>{sale.date}</div>
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "50%" }}>
          <SaleInput
            value={sale.am}
            indexSale={indexSale}
            handler={(value) => {
              handler({ ...sale, am: value }, indexSale);
            }}
          />
        </div>
        <div style={{ width: "50%" }}>
          <SaleInput
            value={sale.pm}
            indexSale={indexSale}
            handler={(value) => {
              handler({ ...sale, pm: value }, indexSale);
            }}
          />
        </div>
      </div>
    </div>
  );
};
