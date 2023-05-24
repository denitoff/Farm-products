import styled from "styled-components";
import { ReactComponent as Logo } from "/src/assets/logo.svg";
import { Link } from "react-router-dom";

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LogoImage = styled(Logo)`
  height: 44px;
  width: 44px;
`;

export const LogoText = styled.span`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
`;

export const LogoNotLink = styled.span`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 20px;
`;
