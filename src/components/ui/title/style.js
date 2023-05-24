import styled, { css } from "styled-components";
import { TitleSize } from "./title";

export const StyledTitle = styled.h1`
  font-size: ${(props) =>
    props.size === TitleSize.BIG
      ? "44"
      : props.size === TitleSize.SMALL
      ? "36"
      : props.size === TitleSize.VERYSMALL
      ? "18"
      : "24"}px;

  line-height: 41px;

  ${(props) =>
    props.visuallyHidden
      ? css`
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          border: 0;
          padding: 0;
          clip: rect(0 0 0 0);
          overflow: hidden;
        `
      : ""}
`;
