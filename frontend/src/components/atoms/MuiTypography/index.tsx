import { Typography, TypographyProps } from "@mui/material";
import React from "react";

export interface TypoProps extends TypographyProps {
  typoVariant:
    | "h1"
    | "h2"
    | "subtitle1"
    | "body1"
    | "body2"
    | "caption1"
    | "caption2"
    | "caption3";
}

const MuiTypography = ({ typoVariant, ...typoProps }: TypoProps) => {
  return <Typography variant={typoVariant} {...typoProps} />;
};

export default MuiTypography;
