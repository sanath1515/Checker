import { render } from "@testing-library/react";
import React from "react";
import AdverseActionsPage from ".";
import { MemoryRouter } from "react-router-dom";
import { NavbarProvider } from "../../utils/navbarContext";

describe("rendering Adverse Actions Page Correctly", () => {
  it("should render the page", () => {
    render(
      <MemoryRouter>
        <NavbarProvider>
          <AdverseActionsPage />
        </NavbarProvider>
      </MemoryRouter>
    );
  });
});
