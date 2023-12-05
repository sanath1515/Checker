import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import ForgotCard from "./";
import { stroke_color } from "../../../utils/constants";
import { MemoryRouter } from "react-router-dom";

describe("ForgotCard Component", () => {
  const handleBackClick = jest.fn();
  test("renders without errors", () => {
    render(
      <MemoryRouter>
        <ForgotCard handleBackClick={handleBackClick} />
      </MemoryRouter>
    );
    expect(screen.getByText("Forgot password?")).toBeInTheDocument;
    expect(screen.getByText("No worries, we’ll send you reset instructions"))
      .toBeInTheDocument;
    expect(screen.getByText("Email")).toBeInTheDocument;
    expect(screen.getByRole("button", { name: "Reset Password" }))
      .toBeInTheDocument;
  });
  test("disables the Reset Password button when email is empty", () => {
    render(
      <MemoryRouter>
        <ForgotCard handleBackClick={handleBackClick} />
      </MemoryRouter>
    );
    const resetButton = screen.getByRole("button", { name: "Reset Password" });

    expect(resetButton).toBeDisabled;
    const emailInput = screen.getByPlaceholderText("Example@gmail.com");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(resetButton).not.toBeDisabled;
  });

  test("calls handleBackClick when the 'Go Back' button is clicked", () => {
    const handleBackClick = jest.fn();
    render(
      <MemoryRouter>
        <ForgotCard handleBackClick={handleBackClick} />
      </MemoryRouter>
    );
    const goBackButton = screen.getByAltText("Back image");
    fireEvent.click(goBackButton);
  });
  test("triggers setIsModelOpen on button click", () => {
    const handleBackClick = jest.fn();
    render(
      <MemoryRouter>
        <ForgotCard handleBackClick={handleBackClick} />
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText("Example@gmail.com");
    const resetButton = screen.getByText("Reset Password");

    fireEvent.change(emailInput, { target: { value: "example@gmail.com" } });
    fireEvent.click(resetButton);

    expect(resetButton).toBeDisabled;
    expect(handleBackClick).not.toHaveBeenCalled;
  });

  test("does not trigger setIsModelOpen if email is empty", () => {
    jest.useFakeTimers();
    const handleBackClick = jest.fn();
    render(
      <MemoryRouter>
        <ForgotCard handleBackClick={handleBackClick} />
      </MemoryRouter>
    );
    const emailInput = screen.getByPlaceholderText("Example@gmail.com");
    fireEvent.change(emailInput, { target: { value: "" } });
    const resetButton = screen.getByText("Reset Password");
    fireEvent.click(resetButton);

    jest.advanceTimersByTime(3600);
    expect(screen.queryByText("OTP has been sent to your email!"))
      .toBeInTheDocument;
  });

  test("does not trigger setIsModelOpen if email is not valid", () => {
    jest.useFakeTimers();
    const handleBackClick = jest.fn();
    render(
      <MemoryRouter>
        <ForgotCard handleBackClick={handleBackClick} />
      </MemoryRouter>
    );
    const emailInput = screen.getByPlaceholderText("Example@gmail.com");
    fireEvent.change(emailInput, { target: { value: "sample@.com" } });
    const resetButton = screen.getByText("Reset Password");
    fireEvent.click(resetButton);

    jest.advanceTimersByTime(3600);
    expect(screen.queryByText("OTP has been sent to your email!"))
      .toBeInTheDocument;
  });

  it("renders ConfirmationModel when isModelOpen is true", async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ForgotCard handleBackClick={handleBackClick} />
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText("Example@gmail.com");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    jest.useFakeTimers();

    fireEvent.click(getByText("Reset Password"));

    jest.advanceTimersByTime(3600);

    expect(getByText("OTP has been sent to your email!")).toBeInTheDocument();
  });
});
