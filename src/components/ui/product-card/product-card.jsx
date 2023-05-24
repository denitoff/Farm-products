import React from "react";
import { Card, ProductImage, ProductDescription, StyledTitle } from "./style";
import { TitleLevel } from "/src/components/ui/title/title";
import Tabs from "/src/components/ui/tabs/tabs";

function ProductCards({ product }) {
  return (
    <>
      <Card key={product.id}>
        <ProductImage src={product.src} alt="фото продукта" />
        <ProductDescription>
          <StyledTitle titleLevel={TitleLevel.H3}>{product.name}</StyledTitle>
          <Tabs
            description={product.description}
            characteristics={product.characteristics}
            properties={product.properties}
            price={product.price}
            weigth={product.weigth}
          ></Tabs>
        </ProductDescription>
      </Card>
    </>
  );
}

export default ProductCards;
