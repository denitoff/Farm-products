import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Button from "/src/components/ui/button/button";
import { StyledHeader, ToMainButton } from "./style";
import { AppRoutes } from "/src/app-routes";

import { useLocation } from "react-router-dom";

const buttons = [
  {
    to: AppRoutes.MAIN,
    button: (
      <ToMainButton key={AppRoutes.MAIN} link={AppRoutes.MAIN} minwidth={260}>
        На главную
      </ToMainButton>
    )
  },
  {
    to: AppRoutes.BUY,
    button: (
      <Button key={AppRoutes.BUY} link={AppRoutes.BUY} minwidth={260}>
        Купить
      </Button>
    )
  }
];

function Header() {
  const { pathname } = useLocation();

  return (
    <StyledHeader>
      <Logo />
      <nav>
        {buttons
          .filter((button) => button.to !== pathname)
          .map((button) => button.button)}
      </nav>
    </StyledHeader>
  );
}

export default Header;
