import React from "react";
import { PriceTitle, PriceValue } from "./style";
function OrderPrice({ totalPrice }) {
  return (
    <PriceTitle>
      Цена:
      <PriceValue>{totalPrice} руб.</PriceValue>
    </PriceTitle>
  );
}

export default OrderPrice;
