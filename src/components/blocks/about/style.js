import styled from "styled-components";
import { Section } from "/src/components/styled";
import aboutImage from "/src/assets/about-img-farmer.svg";
import circle from "/src/assets/circle.svg";

export const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  min-height: 600px;
  justify-content: center;
  background-color: ${(props) => props.theme.colorBlueForBackground};
  background-image: url(${aboutImage}), url(${circle});
  background-repeat: no-repeat;
  background-position: 850px bottom, 780px center;
`;

export const Text = styled.p`
  max-width: 50%;
`;
