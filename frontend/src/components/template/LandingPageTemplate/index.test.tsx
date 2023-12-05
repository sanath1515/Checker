import React from "react";
import { render } from "@testing-library/react";
import LandingPageTemplate from ".";
import { NavbarProvider } from "../../../utils/navbarContext";
import { MemoryRouter } from "react-router-dom";

jest.mock("@mui/material", () => {
  const actual = jest.requireActual("@mui/material");
  return {
    ...actual,
    useMediaQuery: jest.fn(),
  };
});

describe("LandingPageTemplate Component", () => {
  it("renders with all components provided", () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavbarProvider>
          <LandingPageTemplate
            header={<div>Custom Header</div>}
            content={<div>Custom Content</div>}
          />
        </NavbarProvider>
      </MemoryRouter>
    );

    expect(getByText("Custom Header")).toBeInTheDocument();
    expect(getByText("Custom Content")).toBeInTheDocument();
  });

  it("renders with no components provided", () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavbarProvider>
          <LandingPageTemplate />
        </NavbarProvider>
      </MemoryRouter>
    );

    expect(getByText("Header")).toBeInTheDocument();
    expect(getByText("Content")).toBeInTheDocument();
  });

  it("renders with only sidebar provided", () => {
    const { queryByText } = render(
      <MemoryRouter>
        <NavbarProvider>
          <LandingPageTemplate />
        </NavbarProvider>
      </MemoryRouter>
    );

    expect(queryByText("Custom Header")).toBeNull();
    expect(queryByText("Custom Content")).toBeNull();
  });

  it("renders with only header provided", () => {
    const { getByText, queryByText } = render(
      <MemoryRouter>
        <NavbarProvider>
          <LandingPageTemplate header={<div>Custom Header</div>} />
        </NavbarProvider>
      </MemoryRouter>
    );

    expect(getByText("Custom Header")).toBeInTheDocument();
    expect(queryByText("Custom Content")).toBeNull();
  });

  it("renders with only content provided", () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavbarProvider>
          <LandingPageTemplate content={<div>Custom Content</div>} />
        </NavbarProvider>
      </MemoryRouter>
    );

    expect(getByText("Custom Content")).toBeInTheDocument();
  });
});
