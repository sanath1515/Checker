import React from "react";
import TextField, { TextFieldProps, TextFieldVariants } from "@mui/material/TextField";
import { InputProps } from "@mui/material";

export interface InputFieldProps extends Omit<TextFieldProps, "variant"> {
  id?: string;
  variant?: TextFieldVariants;
  required?: boolean;
  customInputProps?: InputProps;
  error?: boolean;
  helperText?: string;
  placeholder?:string;
}

export const InputField: React.FC<InputFieldProps> = (props) => {
  return <TextField {...props}>{props.children}</TextField>;
};
