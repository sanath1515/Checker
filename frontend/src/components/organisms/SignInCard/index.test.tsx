import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SignInCard from "./";
import { MemoryRouter } from "react-router-dom";
import {
  forgot_password,
  sign_in_with_google,
  sign_up,
} from "../../../utils/constants";

describe("SignInCard", () => {
  const mockHandleSignIn = jest.fn();
  it("renders without errors", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <SignInCard handleSignIn={mockHandleSignIn} />
      </MemoryRouter>
    );
    const SignElement = screen.getByRole("button", { name: "Sign in" });
    expect(SignElement).toBeInTheDocument();
  });

  it("handles email input correctly", () => {
    render(
      <MemoryRouter>
        <SignInCard handleSignIn={mockHandleSignIn} />
      </MemoryRouter>
    );
    const emailInput = screen.getByPlaceholderText("rhernandez@gmail.com");

    fireEvent.change(emailInput, { target: { value: "test.com" } });
    expect(emailInput).toHaveValue("test.com");

    const signInButton = screen.getByRole("button", { name: "Sign in" });
    fireEvent.click(signInButton);
  });

  it("handles password input correctly", () => {
    render(
      <MemoryRouter>
        <SignInCard handleSignIn={mockHandleSignIn} />
      </MemoryRouter>
    );
    const passwordInput = screen.getByPlaceholderText("********");

    fireEvent.change(passwordInput, { target: { value: "testPassword" } });
    expect(passwordInput).toHaveValue("testPassword");
  });

  it("handles form submission correctly", () => {
    const mockHandleSignIn = jest.fn();

    render(
      <MemoryRouter>
        <SignInCard handleSignIn={mockHandleSignIn} />
      </MemoryRouter>
    );
    const emailInput = screen.getByPlaceholderText("rhernandez@gmail.com");
    const passwordInput = screen.getByPlaceholderText("********");
    const signInButton = screen.getByRole("button", { name: "Sign in" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "testPassword" } });
    fireEvent.click(signInButton);

    expect(mockHandleSignIn).toHaveBeenCalledTimes(0);
  });

  it("handles empty password input", () => {
    render(
      <MemoryRouter>
        <SignInCard handleSignIn={mockHandleSignIn} />
      </MemoryRouter>
    );
    const passwordInput = screen.getByPlaceholderText("********");
    const signInButton = screen.getByRole("button", { name: "Sign in" });
    fireEvent.click(signInButton);
    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });
  it("Checking the checkbox click", () => {
    render(
      <MemoryRouter>
        <SignInCard handleSignIn={mockHandleSignIn} />
      </MemoryRouter>
    );
    const checkboxLabel = screen.getByLabelText("Remember me");

    fireEvent.click(checkboxLabel);

    const forgotPassword = screen.getByText(forgot_password);
    fireEvent.click(forgotPassword);

    const signUp = screen.getByText(sign_up);
    fireEvent.click(signUp);
  });
});
