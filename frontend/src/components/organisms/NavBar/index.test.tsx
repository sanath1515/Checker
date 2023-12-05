import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from ".";
import { useAuth0 } from "@auth0/auth0-react";
import { MemoryRouter } from "react-router-dom";
import { NavbarProvider } from "../../../utils/navbarContext";

jest.mock("@auth0/auth0-react", () => ({
  useAuth0: jest.fn(),
}));
const logoutMock = jest.fn();
(useAuth0 as jest.Mock).mockReturnValue({
  logout: logoutMock,
});

describe("NavBar Component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <NavbarProvider>
          <NavBar />
        </NavbarProvider>
      </MemoryRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
  it("renders the user name and email", () => {
    render(
      <MemoryRouter>
        <NavbarProvider>
          <NavBar />
        </NavbarProvider>
      </MemoryRouter>
    );
    const name = screen.getByText("James Rodriguez");
    const email = screen.getByText("James.co");

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});

describe("NavBar Component", () => {
  it("renders the NavBar component correctly", () => {
    render(
      <MemoryRouter>
        <NavbarProvider>
          <NavBar />
        </NavbarProvider>
      </MemoryRouter>
    );

    expect(screen.getByAltText("Logo Image Not Found")).toBeInTheDocument();

    expect(screen.getByText("Home")).toHaveStyle("color: rgb(44, 44, 46)");

    expect(screen.getByText("Candidates")).not.toHaveStyle("color: #007bff");
    expect(screen.getByText("Adverse Actions")).not.toHaveStyle(
      "color: #007bff"
    );

    expect(screen.queryByAltText("Logout not found")).toBeInTheDocument();
  });

  it("handles click on navigation icons", () => {
    render(
      <MemoryRouter>
        <NavbarProvider>
          <NavBar />
        </NavbarProvider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Candidates"));
    expect(screen.getByText("Home")).not.toHaveStyle("color: #007bff");

    fireEvent.click(screen.getByAltText("Adverse Actions not found"));
    expect(screen.getByText("Adverse Actions")).toHaveStyle(
      "color: rgb(34, 77, 255)"
    );

    expect(screen.getByText("Candidates")).not.toHaveStyle("color: #007bff");
  });

  it("opens the logout modal when the logout icon is clicked", () => {
    render(
      <MemoryRouter>
        <NavbarProvider>
          <NavBar />
        </NavbarProvider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByAltText("Logout not found"));
    expect(screen.getByText("Confirm Logout")).toBeInTheDocument();
    expect(
      screen.getByText("Are you sure you want to logout?")
    ).toBeInTheDocument();
  });

  it("closes the logout modal when cancel button is clicked", () => {
    render(
      <MemoryRouter>
        <NavbarProvider>
          <NavBar />
        </NavbarProvider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByAltText("Logout not found"));
    expect(screen.getByText("Confirm Logout")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Cancel"));
    expect(screen.queryByText("Confirm Logout")).not.toBeInTheDocument();
  });

  it("handles logout when logout button is clicked", () => {
    render(
      <MemoryRouter>
        <NavbarProvider>
          <NavBar />
        </NavbarProvider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByAltText("Logout not found"));
    expect(screen.getByText("Confirm Logout")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Logout"));

    expect(logoutMock).toBeCalledTimes(1);
  });
});
