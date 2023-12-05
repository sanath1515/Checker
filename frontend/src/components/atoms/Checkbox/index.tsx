import React from "react";
import { Checkbox, FormControlLabel, CheckboxProps } from "@mui/material";
import { SxProps } from "@mui/system";

export interface CustomCheckboxProps extends CheckboxProps {
  style?: React.CSSProperties;
  sx?: SxProps;
  label?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  checked?: boolean;
}

const CheckboxComponent: React.FC<CustomCheckboxProps> = ({
  style,
  sx,
  onChange,
  label,
  disabled = false,
  checked,
  ...muiCheckboxProps
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={onChange}
          style={style}
          sx={sx}
          disabled={disabled}
          checked={checked}
          {...muiCheckboxProps}
        />
      }
      label={label}
    />
  );
};

export default CheckboxComponent;
