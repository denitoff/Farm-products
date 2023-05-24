import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: ${(props) => props.theme.colorForBuyPageBackground};
  display: flex;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  gap: ${(props) => props.theme.indent};
  height: 768px;
  padding-top: 40px;
  padding-bottom: 40px;
`;
