import React from "react";

import BuyForm from "/src/components/blocks/buy-form/buy-form";
import ProductGallery from "/src/components/blocks/product-gallery/product-gallery";
import Title from "/src/components/ui/title/title";
import { TitleLevel } from "/src/components/ui/title/title";

import { StyledMain } from "./style";

function Buy({ products }) {
  function dataUpdate(data) {
    console.log(data);
  }

  return (
    <StyledMain>
      <Title titleLevel={TitleLevel.H1} visuallyHidden>
        {" "}
        Страница покупки фермерских продуктов.
      </Title>
      <BuyForm products={products} dataUpdate={dataUpdate}></BuyForm>

      <ProductGallery products={products} />
    </StyledMain>
  );
}

export default Buy;
