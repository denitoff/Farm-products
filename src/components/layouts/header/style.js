import styled from "styled-components";
import Button from "/src/components/ui/button/button";

export const StyledHeader = styled.header`
  min-height: ${(props) => props.theme.headerFooterHeigth};
  display: flex;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  justify-content: space-between;
  align-items: center;
  box-shadow: ${(props) => props.theme.headerFooterBoxShadow};
`;

export const ToMainButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  border: none;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.lineHeightDefault};
  min-width: ${(props) => props.minwidth}px;
  max-width: ${(props) => props.minwidth}px;
  min-height: 60px;
  cursor: pointer;
  text-decoration: none;
  background-color: ${(props) => props.theme.colorWhite};
  color: ${(props) => props.theme.colorGrayForText};

  &:hover {
    background-color: ${(props) => props.theme.colorWhite};
  }

  &:active {
    background-color: ${(props) => props.theme.colorWhite};
  }
`;
