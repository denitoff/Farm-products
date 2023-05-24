import styled from "styled-components";
import Title from "/src/components/ui/title/title";

export const StyledTitle = styled(Title)`
  margin: 0;
`;

export const Card = styled.article`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 727px;
  height: auto;
  background-color: ${(props) => props.theme.colorWhite};
  border: ${(props) => props.theme.buyPageComponentsBorder};
  gap: ${(props) => props.theme.indent};
  padding: ${(props) => props.theme.indent};
`;

export const ProductImage = styled.img`
  width: 248px;
  height: 248px;
  object-fit: cover;
`;

export const ProductDescription = styled.div`
  width: 419px;
  height: auto;
  align-self: flex-start;
`;
