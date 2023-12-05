import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface MuiButtonProps extends ButtonProps {}

const MuiButton = ({ ...buttonProps }: MuiButtonProps) => {
  return <Button {...buttonProps} disableElevation disableRipple />;
};

export default MuiButton;
