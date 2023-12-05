import React from "react";
import { render } from "@testing-library/react";
import MuiButton from ".";

describe("MuiButton", () => {
  it("renders button with provided value", () => {
    const { getByText } = render(<MuiButton children="Click Me" />);
    const buttonElement = getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls onClick function when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <MuiButton children="Click Me" onClick={onClickMock} />
    );
    const buttonElement = getByText("Click Me");
    buttonElement.click();
    expect(onClickMock).toHaveBeenCalled();
  });

  it("disables the button when disabled prop is true", () => {
    const { getByText } = render(
      <MuiButton children="Disabled" disabled={true} />
    );
    const buttonElement = getByText("Disabled");
    expect(buttonElement).toBeDisabled();
  });

  it("renders startIcon when provided", () => {
    const { container } = render(
      <MuiButton children="Start Icon" startIcon={<span>Start</span>} />
    );
    const startIconElement = container.querySelector("span");
    expect(startIconElement).toBeInTheDocument();
  });

  it("renders endIcon when provided", () => {
    const { container } = render(
      <MuiButton children="End Icon" endIcon={<span>End</span>} />
    );
    const endIconElement = container.querySelector("span");
    expect(endIconElement).toBeInTheDocument();
  });

  it("applies custom styles", () => {
    const customStyles = {
      color: "red",
      backgroundColor: "blue",
    };
    const { container } = render(
      <MuiButton children="Styled" sx={customStyles} />
    );
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toHaveStyle("color: red");
  });
});
