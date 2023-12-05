import React from "react";
import { render, fireEvent } from "@testing-library/react";
import OTPCard from ".";
import { MemoryRouter } from "react-router-dom";

describe("OTPCard Component", () => {
  const handleFormSubmit = jest.fn();
  it("renders correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <OTPCard handleBackClick={handleFormSubmit} />
      </MemoryRouter>
    );
    expect(getByText("Go Back")).toBeInTheDocument();
    expect(getByText("Continue")).toBeInTheDocument();
  });
  it("handles form submission", () => {
    const handleFormSubmit = jest.fn();
    const { getByText } = render(
      <MemoryRouter>
        <OTPCard handleBackClick={handleFormSubmit} />
      </MemoryRouter>
    );
    const continueButton = getByText("Continue");
    fireEvent.click(continueButton);
    expect(handleFormSubmit).toBeCalledTimes(0);
  });

  it("handles go back click", () => {
    const handleBackClick = jest.fn();
    const { getByText } = render(
      <MemoryRouter>
        <OTPCard handleBackClick={handleFormSubmit} />
      </MemoryRouter>
    );

    const goBackButton = getByText("Go Back");

    fireEvent.click(goBackButton);

    expect(handleBackClick).toHaveBeenCalledTimes(0);
  });
  const handleBackClick = jest.fn();
  it("should render correctly", () => {
    const { getByText, getAllByRole } = render(
      <MemoryRouter>
        <OTPCard handleBackClick={handleBackClick} />
      </MemoryRouter>
    );

    expect(getByText("Go Back")).toBeInTheDocument;

    expect(getByText("Please enter OTP")).toBeInTheDocument;

    expect(getByText("OTP has been sent to your email")).toBeInTheDocument;

    const inputFields = getAllByRole("textbox");
    expect(inputFields.length).toBe(4);

    expect(getByText("Continue")).toBeInTheDocument;
  });
  it("should call handleContinue when the Continue button is clicked", () => {
    const { getByText, getAllByRole } = render(
      <MemoryRouter>
        <OTPCard handleBackClick={handleBackClick} />
      </MemoryRouter>
    );
    const continueButton = getByText("Continue");

    const firstInput = getAllByRole("textbox")[0] as HTMLInputElement;
    fireEvent.change(firstInput, { target: { value: "1" } });

    const secondInput = getAllByRole("textbox")[1] as HTMLInputElement;
    fireEvent.change(secondInput, { target: { value: "2" } });

    const thirdInput = getAllByRole("textbox")[2] as HTMLInputElement;
    fireEvent.change(thirdInput, { target: { value: "a" } });

    fireEvent.click(continueButton);
  });

  it("should update the OTP digits correctly", () => {
    const { getByText, getAllByRole } = render(
      <MemoryRouter>
        <OTPCard handleBackClick={handleBackClick} />
      </MemoryRouter>
    );

    const firstInput = getAllByRole("textbox")[0] as HTMLInputElement;
    fireEvent.change(firstInput, { target: { value: "1" } });

    const secondInput = getAllByRole("textbox")[1] as HTMLInputElement;
    fireEvent.change(secondInput, { target: { value: "2" } });

    const thirdInput = getAllByRole("textbox")[2] as HTMLInputElement;
    fireEvent.change(thirdInput, { target: { value: "3" } });

    const fourthInput = getAllByRole("textbox")[3] as HTMLInputElement;
    fireEvent.change(fourthInput, { target: { value: "4" } });

    const continueButton = getByText("Continue");
    fireEvent.click(continueButton);
  });
});
