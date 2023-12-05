import React from "react";
import { render } from "@testing-library/react";
import MuiTypography from ".";

describe("MuiTypography Component", () => {
  it("renders the component with the provided value", () => {
    const { getByText } = render(
      <MuiTypography children="Hello, World!" typoVariant={"h1"} />
    );
    const element = getByText("Hello, World!");
    expect(element).toBeInTheDocument();
  });

  it("applies the specified typography variant", () => {
    const { container } = render(
      <MuiTypography children="Hello, World!" typoVariant="h2" />
    );
    const typographyElement = container.querySelector("h2");
    expect(typographyElement).toBeInTheDocument();
  });

  it("passes the dataTestId prop to the component", () => {
    const { getByTestId } = render(
      <MuiTypography
        children="Hello, World!"
        typoVariant="body1"
        data-testid="test-typo"
      />
    );
    const element = getByTestId("test-typo");
    expect(element).toBeInTheDocument();
  });

  it("applies custom styles when styles prop is provided", () => {
    const customStyles = {
      color: "red",
      fontSize: "20px",
    };
    const { container } = render(
      <MuiTypography
        children="Hello, World!"
        typoVariant="body2"
        sx={customStyles}
      />
    );
    const typographyElement = container.querySelector("p");
    expect(typographyElement).toHaveStyle("color: red; font-size: 20px;");
  });
});
