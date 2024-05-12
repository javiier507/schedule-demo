import { Sale } from "../types/schedule-types";
import { formatDatetime } from "../utils/format";
import { convertShortDateToUtc } from "../utils/convert";

import { SaleInput } from "./sale-input";

type Props = {
  sale: Sale;
  indexSale: number;
  handler: (value: Sale, indexSale: number) => void;
};

export const SaleDay = ({ sale, indexSale, handler }: Props) => {
  const utcDate = convertShortDateToUtc(new Date(sale.date));
  const formatedDate = `${formatDatetime(utcDate, {
    weekday: "long",
  })} ${formatDatetime(utcDate, { day: "2-digit" })}`;

  return (
    <div style={{ width: "12.5%", display: "flex", flexWrap: "wrap" }}>
      <div style={{ width: "100%" }}>{formatedDate}</div>
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
