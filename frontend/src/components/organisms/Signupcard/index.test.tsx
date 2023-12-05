import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SignUpCard from "./";
import { MemoryRouter } from "react-router-dom";
import { sign_in } from "../../../utils/constants";

describe("SignUpCard", () => {
  const mockHandleSignUp = jest.fn();
  it("renders the component", () => {
    const { getByText } = render(
      <MemoryRouter>
        <SignUpCard handleSignUp={mockHandleSignUp} />
      </MemoryRouter>
    );
    const signupelelement = screen.getByRole("button", { name: "Sign up" });
    const Emailelelement = getByText("Email");
    const Passwordelelement = getByText("Password");
    const ConfirmPasswordelelement = getByText("Confirm Password");
    expect(signupelelement).toBeInTheDocument();
    expect(Emailelelement).toBeInTheDocument();
    expect(Passwordelelement).toBeInTheDocument();
    expect(ConfirmPasswordelelement).toBeInTheDocument();
  });

  it("handles email input correctly", () => {
    render(
      <MemoryRouter>
        <SignUpCard handleSignUp={mockHandleSignUp} />
      </MemoryRouter>
    );
    const emailInput = screen.getByPlaceholderText("abc@gmail.com");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput).toHaveValue("test@example.com");
  });

  it("handles password input correctly", () => {
    render(
      <MemoryRouter>
        <SignUpCard handleSignUp={mockHandleSignUp} />
      </MemoryRouter>
    );
    const passwordInput = screen.getByPlaceholderText("********");

    fireEvent.change(passwordInput, { target: { value: "testPassword" } });
    expect(passwordInput).toHaveValue("testPassword");
  });

  it("handles form submission correctly", () => {
    const mockHandleSignUp = jest.fn();

    render(
      <MemoryRouter>
        <SignUpCard handleSignUp={mockHandleSignUp} />
      </MemoryRouter>
    );
    const emailInput = screen.getByPlaceholderText("abc@gmail.com");
    const passwordInput = screen.getByPlaceholderText("********");
    const signInButton = screen.getByRole("button", { name: "Sign up" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "testPassword" } });
    fireEvent.click(signInButton);

    expect(mockHandleSignUp).toHaveBeenCalledTimes(1);
  });

  it("handles empty password input", () => {
    render(
      <MemoryRouter>
        <SignUpCard handleSignUp={mockHandleSignUp} />
      </MemoryRouter>
    );
    const signUpButton = screen.getByRole("button", { name: "Sign up" });

    fireEvent.click(signUpButton);
    const passwordError = screen.getByTestId("password-error");
    expect(passwordError).toBeInTheDocument();
  });

  it("validates email format correctly", () => {
    render(
      <MemoryRouter>
        <SignUpCard handleSignUp={mockHandleSignUp} />
      </MemoryRouter>
    );
    const emailInput = screen.getByPlaceholderText("abc@gmail.com");
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.click(signUpButton);
    const emailError = screen.getByTestId("email-error");
    expect(emailError).toBeInTheDocument();
    expect(emailError).toHaveTextContent("Invalid email format");

    fireEvent.change(emailInput, { target: { value: "valid@example.com" } });
    fireEvent.click(signUpButton);

    expect(emailError).toBeInTheDocument();
  });

  it("validates password length correctly", () => {
    render(
      <MemoryRouter>
        <SignUpCard handleSignUp={mockHandleSignUp} />
      </MemoryRouter>
    );
    const passwordInput = screen.getByPlaceholderText("********");
    const confirmPasswordInput = screen.getByPlaceholderText("*******");
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    fireEvent.change(passwordInput, { target: { value: "short" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "short" } });
    fireEvent.click(signUpButton);
    const passwordError = screen.getByTestId("password-error");
    expect(passwordError).toBeInTheDocument();
    fireEvent.change(passwordInput, { target: { value: "validPassword" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "validPassword" },
    });
    fireEvent.click(signUpButton);
    expect(passwordError).toBeInTheDocument();
    expect(mockHandleSignUp).toHaveBeenCalledTimes(5);
  });
  it("validates when passwords do not match", () => {
    render(
      <MemoryRouter>
        <SignUpCard handleSignUp={mockHandleSignUp} />
      </MemoryRouter>
    );
    const passwordInput = screen.getByPlaceholderText("********");
    const confirmPasswordInput = screen.getByPlaceholderText("*******");
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "mismatched123" },
    });
    fireEvent.click(signUpButton);
    const passwordError = screen.getByTestId("password-error");
    expect(passwordError).toBeInTheDocument();
    expect(passwordError).toHaveTextContent("Passwords do not match");
  });

  it("Checking the checkbox click", () => {
    render(
      <MemoryRouter>
        <SignUpCard handleSignUp={mockHandleSignUp} />
      </MemoryRouter>
    );
    const checkboxLabel = screen.getByLabelText("I agree to the");

    fireEvent.click(checkboxLabel);

    const signIn = screen.getByText(sign_in);
    fireEvent.click(signIn);
  });
});
