import { Chip, ChipProps as MuiChipProps, SxProps } from "@mui/material";
import React from "react";
import theme from "../../../theme";

interface CustomChipProps extends MuiChipProps {
  styles?: React.CSSProperties;
  label: any;
  sx?: SxProps;
}

const CustomChip: React.FC<CustomChipProps> = ({
  styles,
  label,
  sx,
  ...muiChipProps
}: CustomChipProps) => {
  const labelStyles: Record<string, React.CSSProperties> = {
    CLEAR: {
      color: theme.palette.accent.green,
      backgroundColor: theme.palette.accent.lightGreen,
    },
    ENGAGE: {
      color: theme.palette.accent.green,
      backgroundColor: theme.palette.accent.lightGreen,
    },
    CONSIDER: {
      color: theme.palette.accent.yellow,
      backgroundColor: theme.palette.accent.lightYellow,
    },
    "ADVERSE ACTION": {
      color: theme.palette.accent.yellow,
      backgroundColor: theme.palette.accent.lightYellow,
    },
    SCHEDULED: {
      color: theme.palette.accent.blue,
      backgroundColor: theme.palette.accent.lightBlue,
    },
  };
  const chipStyles = labelStyles[label.toUpperCase()] || {};

  return (
    <Chip
      style={{ borderRadius: "4px", ...styles }}
      label={label.toUpperCase()}
      sx={{ ...sx, ...chipStyles } as SxProps}
      {...muiChipProps}
    />
  );
};

export default CustomChip;
