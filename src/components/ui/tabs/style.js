import styled, { css } from "styled-components";

export const TitleButton = styled.button`
  min-height: 37px;
  border: ${(props) => props.theme.buyPageComponentsBorder};

  ${(props) =>
    props.isActive
      ? css`
          background-color: ${(props) => props.theme.colorForActiveTabsButton};
        `
      : css`
          background-color: ${(props) => props.theme.colorTabsButton};
        `}
`;

export const TitleButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const ContentWrapper = styled.div`
  font-size: 14px;
  line-height: 21px;
`;

export const PriceAndWeight = styled.span`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d8ecfe;
  width: 140px;
  height: auto;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  padding: 8px 4px;
`;
