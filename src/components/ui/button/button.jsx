import React from "react";
import { StyledButton } from "./style";

function Button({ children, link, minwidth, submit, disabled, className }) {
  return (
    <StyledButton
      className={className}
      minwidth={minwidth}
      disabled={disabled}
      {...(link ? { to: link } : { as: "button", type: "button" })}
      {...(submit ? { as: "button", type: "submit" } : {})}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
