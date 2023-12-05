import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/styled-engine";
import { ThemeProvider } from "@mui/material";
import theme from "../src/theme/index";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <Story />
      </StyledEngineProvider>
    </ThemeProvider>
  ),
];
