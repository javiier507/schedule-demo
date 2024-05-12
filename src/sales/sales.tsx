import { useState } from "react";

import { Sale } from "../types/schedule-types";

import { SaleDay } from "./sale-day";
import { SaleTotal } from "./sale-total";

type Props = {
  sales: Sale[];
};

export const Sales = (props: Props) => {
  const [sales, setSales] = useState<Sale[]>(props.sales);

  const handlerUpdate = (value: Sale, indexSale: number) => {
    const arrayData = [...sales];
    try {
      arrayData[indexSale] = value;
      setSales(arrayData);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={{ display: "flex", marginBottom: "1rem" }}>
      <div style={{ width: "5%" }}>Sales</div>
      <div style={{ width: "95%", display: "flex" }}>
        {sales.map((item, index) => (
          <SaleDay
            key={`sale-${item.date}`}
            sale={item}
            indexSale={index}
            handler={handlerUpdate}
          />
        ))}
        <SaleTotal sales={sales} />
      </div>
    </div>
  );
};
