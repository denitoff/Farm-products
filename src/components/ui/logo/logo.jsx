import React from "react";
import { LogoLink, LogoImage, LogoText, LogoNotLink } from "./style";
import { useLocation } from "react-router-dom";
import { AppRoutes } from "/src/app-routes";

function Logo() {
  const { pathname } = useLocation();

  return pathname === AppRoutes.MAIN ? (
    <LogoNotLink to={AppRoutes.MAIN}>
      <LogoImage />
      <LogoText>Фермерские продукты</LogoText>
    </LogoNotLink>
  ) : (
    <LogoLink to={AppRoutes.MAIN}>
      <LogoImage />
      <LogoText>Фермерские продукты</LogoText>
    </LogoLink>
  );
}

export default Logo;
