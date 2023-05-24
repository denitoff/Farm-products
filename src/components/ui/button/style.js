import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;

  ${(props) =>
    props.disabled
      ? css`
          background-color: lightgray;
          &:hover {
            background-color: lightgray;
          }
          &:active {
            box-shadow: lightgray;
          }
        `
      : css`
          background-color: ${(props) => props.theme.colorForButtonNormal};
          &:hover {
            background-color: ${(props) => props.theme.colorForButtonHover};
          }
          &:active {
            box-shadow: ${(props) => props.theme.boxShadowForButtonPressed};
          }
        `}

  border: none;
  color: ${(props) => props.theme.colorWhiteForText};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.lineHeightDefault};
  min-width: ${(props) => props.minwidth}px;
  max-width: ${(props) => props.minwidth}px;
  min-height: 60px;
  cursor: pointer;
  text-decoration: none;
`;
