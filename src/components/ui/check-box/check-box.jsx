import React, { useState } from "react";
import { Label } from "./style";
import { VisuallyHiddenInput } from "/src/components/styled";

function CheckBox({ text, labelComponent, name, value, onChange }) {
  const LabelComponent = labelComponent;
  const [checked, setChecked] = useState(false);

  return (
    <Label>
      <VisuallyHiddenInput
        onClick={() => setChecked(!checked)}
        onChange={onChange}
        name={name}
        value={value}
        type="checkbox"
      />

      <LabelComponent isChecked={checked}>{text}</LabelComponent>
    </Label>
  );
}

export default CheckBox;
