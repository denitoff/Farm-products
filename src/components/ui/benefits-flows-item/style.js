import styled from "styled-components";
import Title from "/src/components/ui/title/title";

export const CardContainer = styled.article`
  box-sizing: border-box;
  min-width: 540px;
  min-height: 200px;
  background-color: ${(props) =>
    props.type === "farm"
      ? props.theme.colorForPositiveCardBackground
      : props.theme.colorForNegativeCardBackground};
  margin-bottom: ${(props) => props.theme.indent};
  padding: ${(props) => props.theme.indent};
`;

export const StyledProductType = styled.span`
  display: block;
  background-color: ${(props) =>
    props.type === "farm"
      ? props.theme.colorForPositiveCardProductType
      : props.theme.colorForNegativeCardProductType};
  padding: 2px 10px;
`;

export const StyledCardIcon = styled.img`
  margin-left: ${(props) => props.theme.indent};
  margin-right: ${(props) => props.theme.indent};
`;

export const StyledCardContent = styled.p`
  margin: 0;
`;

export const TwoColumnWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTitle = styled(Title)`
  margin: 0;
`;
