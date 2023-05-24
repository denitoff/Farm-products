import React, { useState } from "react";
import {
  TitleButton,
  TitleButtonWrapper,
  ContentWrapper,
  PriceAndWeight
} from "./style";

function Tabs({ description, characteristics, properties, price, weigth }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <TitleButtonWrapper>
        <TitleButton
          {...(activeTab === 1 ? { isActive: true } : { isActive: false })}
          onClick={() => setActiveTab(1)}
        >
          Описание
        </TitleButton>
        <TitleButton
          {...(activeTab === 2 ? { isActive: true } : { isActive: false })}
          onClick={() => setActiveTab(2)}
        >
          Характеристики
        </TitleButton>
        <TitleButton
          {...(activeTab === 3 ? { isActive: true } : { isActive: false })}
          onClick={() => setActiveTab(3)}
        >
          Свойства
        </TitleButton>
      </TitleButtonWrapper>

      {activeTab === 1 ? (
        <ContentWrapper>
          <p>{description}</p>
          <PriceAndWeight>
            {" "}
            {price}руб./{weigth}гр.
          </PriceAndWeight>
        </ContentWrapper>
      ) : null}

      {activeTab === 2 ? (
        <ContentWrapper>
          <p>
            <b>Масса:</b>
            {characteristics.mass}
          </p>

          <p>
            <b> Срок годности:</b> {characteristics.shelfLife}
          </p>
          <p>
            <b>Порода:</b> {characteristics.breed}
          </p>
          <p>
            <b>Место происхождения:</b>
            {characteristics.madeIn}
          </p>
        </ContentWrapper>
      ) : null}
      {activeTab === 3 ? (
        <ContentWrapper>
          <p>
            <b>Энергетическая ценность:</b> {properties.callories}
          </p>
          <p>
            <b>Пищевая ценность: </b>
            {properties.nutritional}
          </p>
        </ContentWrapper>
      ) : null}
    </>
  );
}

export default Tabs;
