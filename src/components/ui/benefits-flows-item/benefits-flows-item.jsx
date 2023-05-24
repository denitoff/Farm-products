import React from "react";
import { TitleSize } from "/src/components/ui/title/title";
import {
  CardContainer,
  StyledProductType,
  StyledCardIcon,
  StyledCardContent,
  TwoColumnWrapper,
  StyledTitle
} from "./style";

function BenefitFlowsItem({ card, titleLevel, className }) {
  return (
    <CardContainer type={card.feature}>
      <TwoColumnWrapper>
        <StyledCardIcon src={card.icon} alt="icon" />

        <div>
          <StyledProductType type={card.feature}>
            {" "}
            {card.productType}{" "}
          </StyledProductType>

          <StyledTitle
            className={className}
            size={TitleSize.VERYSMALL}
            titleLevel={titleLevel}
          >
            {card.title}
          </StyledTitle>
        </div>
      </TwoColumnWrapper>

      <StyledCardContent>{card.content}</StyledCardContent>
    </CardContainer>
  );
}

export default BenefitFlowsItem;
