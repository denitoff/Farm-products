import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import { StyledSection, TwoColumnsWrapper, StyledUl } from "./style";
import BenefitFlowsItem from "/src/components/ui/benefits-flows-item/benefits-flows-item";

function Benefits({ cards, titleLevel }) {
  return (
    <StyledSection>
      {cards?.length ? (
        <>
          <Title size={TitleSize.BIG} titleLevel={TitleLevel.H2}>
            Почему фермерские продукты лучше?
          </Title>

          <TwoColumnsWrapper>
            <StyledUl leftColumn>
              {cards.map((card) => {
                if (card.feature === "farm") {
                  return (
                    <li key={card.id}>
                      {" "}
                      <BenefitFlowsItem
                        titleLevel={TitleLevel.H3}
                        card={card}
                      />{" "}
                    </li>
                  );
                } else {
                  return "";
                }
              })}
            </StyledUl>

            <StyledUl rightColumn>
              {cards.map((card) => {
                if (card.feature === "shop") {
                  return (
                    <li key={card.id}>
                      {" "}
                      <BenefitFlowsItem
                        titleLevel={TitleLevel.H3}
                        card={card}
                      />{" "}
                    </li>
                  );
                } else {
                  return "";
                }
              })}
            </StyledUl>
          </TwoColumnsWrapper>
        </>
      ) : null}

      <Button link="/buy" minwidth={260}>
        Купить
      </Button>
    </StyledSection>
  );
}

export default Benefits;
