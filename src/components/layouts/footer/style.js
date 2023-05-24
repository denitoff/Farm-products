import styled from "styled-components";

export const StyledFooter = styled.footer`
  min-height: ${(props) => props.theme.headerFooterHeigth};
  display: flex;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  justify-content: space-between;
  align-items: center;
`;
