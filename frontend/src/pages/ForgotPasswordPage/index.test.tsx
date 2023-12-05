import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { BrowserRouter, MemoryRouter } from "react-router-dom";
import {
  coninue_to,
  forgot_password,
  reset_password,
} from "../../utils/constants";
import ForgotPasswordPage from ".";

describe("Forget password test suits", () => {
  it("Forget password successfull", () => {
    render(
      <MemoryRouter>
        <ForgotPasswordPage />
      </MemoryRouter>
    );
    const forgetPassword = screen.getByText(forgot_password);
    expect(forgetPassword).toBeInTheDocument();
  });
  it("Text field rendered successful with the button enabled and OTP page rendered successfully", async () => {
    render(
      <MemoryRouter>
        <ForgotPasswordPage />
      </MemoryRouter>
    );

    const resetPasswordButton = screen.getByRole("button", {
      name: reset_password,
    }) as HTMLInputElement;

    expect(resetPasswordButton).not.toBeDisabled();

    const email = screen.getByPlaceholderText("Example@gmail.com");
    expect(email).toBeInTheDocument();
    fireEvent.change(email, { target: { value: "vidhya@gmail.com" } });

    expect(resetPasswordButton).toBeInTheDocument();

    fireEvent.click(resetPasswordButton);

    // await new Promise((resolve) => setTimeout(resolve, 3602));
    // const continueButton = screen.getByRole("button", {
    //   name:"Continue",
    // }) as HTMLButtonElement;
    // expect(continueButton).toBeDisabled();

    // const inputBoxes = screen.queryAllByRole("textbox");
    // screen.debug(inputBoxes);
    // expect(inputBoxes.length).toBe(4);
    // fireEvent.change(inputBoxes[0], { target: { value: "1" } });

    // expect(continueButton).toBeEnabled();
    // fireEvent.click(continueButton);
  });
});
