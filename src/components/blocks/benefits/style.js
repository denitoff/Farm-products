import styled from "styled-components";
import { Section, Ul } from "/src/components/styled";

export const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const TwoColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
`;

export const StyledUl = styled(Ul)`
  grid-column-start: ${(props) =>
    props.leftColumn ? "1" : props.rightColumn ? "-1" : ""};
`;
