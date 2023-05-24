import styled, { css } from "styled-components";
import unchecked from "/src/assets/icons/unchecked.svg";
import checked from "/src/assets/icons/checked.svg";

export const Input = styled.input`
  box-sizing: border-box;
  width: 313px;
  height: 48px;
  border: ${(props) => props.theme.buyPageComponentsBorder};
  background-color: ${(props) => props.theme.colorForBuyPageBackground};
  padding: ${(props) => props.theme.indent};
`;

export const FormWrapper = styled.div`
  display: block;
  min-width: 355px;
`;

export const Form = styled.form``;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: auto;
  height: auto;
  margin-bottom: ${(props) => props.theme.indent};

  border: ${(props) => props.theme.buyPageComponentsBorder};
  box-shadow: ${(props) => props.theme.buyPageComponentsBoxShadow};
`;

export const LabelComponentForCheckBox = styled.span`
  display: flex;
  position: relative;
  width: 100%;
  user-select: none;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 90%;
    width: 24px;
    height: 24px;
    ${(props) =>
      props.isChecked
        ? css`
            background-image: url(${checked});
          `
        : css`
            background-image: url(${unchecked});
          `}
  }
`;
