import React from "react";
import { render } from "@testing-library/react";
import SignInTemplate from ".";

describe("SignInTemplate Component", () => {
  it("renders left container with Privacy Policy image", () => {
    const { getByAltText } = render(<SignInTemplate />);
    const privacyPolicyImage = getByAltText("PrivacyPolicyImage");
    expect(privacyPolicyImage).toBeInTheDocument();
  });

  it("renders right container with default content", () => {
    const { getByText } = render(<SignInTemplate />);
    const defaultContent = getByText("Right Side Component");
    expect(defaultContent).toBeInTheDocument();
  });

  it("renders custom content in the right container", () => {
    const customContent = "Custom Right Side Content";
    const { getByText } = render(
      <SignInTemplate rightComponent={customContent} />
    );
    const customContentElement = getByText(customContent);
    expect(customContentElement).toBeInTheDocument();
  });
});
