import React from "react";
import "../index.css"
import { createTheme } from "@mui/material";
declare module "@mui/material/styles" {
  interface TypographyVariants {
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    subtitle1: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    h1?: React.CSSProperties;
    h2?: React.CSSProperties;
    subtitle1?: React.CSSProperties;
    body1?: React.CSSProperties;
    body2?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
    caption3?: React.CSSProperties;
  }
  interface EmphasisColors {
    highEmphasis?: string;
    mediumEmphasis?: string;
    lowEmphasis?: string;
    stroke?: string;
    white?: string;
    iconLight?: string;
    iconDark?: string;
    overlay?: string;
  }
  interface AccentColors {
    blue: string;
    lightBlue: string;
    green: string;
    lightGreen: string;
    yellow: string;
    lightYellow: string;
    red: string;
    lightRed: string;
  }
  interface Palette {
    structural: EmphasisColors;
    textColor: EmphasisColors;
    accent: AccentColors;
  }

  interface PaletteOptions {
    structural: EmphasisColors;
    textColor: EmphasisColors;
    accent: AccentColors;
  }
  interface NewColors {
    50?: string;
    100?: string;
    300?: string;
    400?: string;
    500?: string;
    700?: string;
    highEmphasis?: string;
    mediumEmphasis?: string;
    lowEmphasis?: string;
    white?: string;
    blue?: string;
    lightBlue?: string;
    green?: string;
    lightGreen?: string;
    yellow?: string;
    lightYellow?: string;
    red?: string;
    lightRed?: string;
  }
  interface PaletteColor extends NewColors {}
  interface SimplePaletteColorOptions extends NewColors {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1: true;
    h2: true;
    subtitle1: true;
    body1: true;
    body2: true;
    caption1: true;
    caption2: true;
    caption3: true;
  }
}
const theme = createTheme({
  spacing:4,
  typography: {
    fontFamily: "Inter",
    h1: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "30px",
    },
    h2: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "28px",
    },
    subtitle1: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
    },
    body1: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
    },
    body2: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
    },
    caption1: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "18px",
    },
    caption2: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "18px",
    },
    caption3: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "18px",
    },
  },
  palette: {
    primary: {
      main: "#224DFF",
      50: "#FAFAFC",
      100: "#F7F8FA",
      300: "#EFF2FF",
      400: "#95AAFF",
      500: "#224DFF",
      700: "#1132B7",
    },
    textColor: {
      highEmphasis: "#2C2C2E",
      mediumEmphasis: "#696A6E",
      lowEmphasis: "#818287",
      white: "#FFFFFF",
    },
    structural: {
      white: "#FFFFFF",
      stroke: "#E5E7ED",
      iconLight: "#696A6E",
      iconDark: "#3E414D",
      overlay: "rgba(19, 20, 21, 0.72)",
    },
    accent: {
      blue: "#3E5FE2",
      lightBlue: "#F2F4FC",
      green: "#17A076",
      lightGreen: "#F2FCFB",
      yellow: "#A08817",
      lightYellow: "#FAF8EB",
      red: "#994D5B",
      lightRed: "#FCE5EA",
    },
  },
});
export default theme;
