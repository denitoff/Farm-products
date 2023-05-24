import React from "react";
import { StyledTitle } from "./style";

export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  VERYSMALL: "verysmall"
};

export const TitleLevel = {
  H1: "1",
  H2: "2",
  H3: "3",
  H4: "4",
  H5: "5",
  H6: "6"
};

function Title({ children, size, titleLevel, className, visuallyHidden }) {
  return (
    <StyledTitle
      visuallyHidden={visuallyHidden}
      className={className}
      size={size}
      as={`h${titleLevel}`}
    >
      {children}
    </StyledTitle>
  );
}

export default Title;
