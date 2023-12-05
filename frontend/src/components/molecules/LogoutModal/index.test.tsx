import React from "react";
import { render, screen } from "@testing-library/react";
import LogoutModal from ".";

const handleClose = jest.fn();
const handleLogout = jest.fn();

describe("LogoutModal", () => {
  it("renders correctly when open is true", () => {
    render(
      <LogoutModal
        open={true}
        handleClose={handleClose}
        handleLogout={handleLogout}
      />
    );

    expect(screen.getByText("Logout")).toBeInTheDocument();
    expect(
      screen.getByText("Are you sure you want to logout?")
    ).toBeInTheDocument();

    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("does not render when open is false", () => {
    render(
      <LogoutModal
        open={false}
        handleClose={handleClose}
        handleLogout={handleLogout}
      />
    );

    expect(screen.queryByText("Logout")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Are you sure you want to logout?")
    ).not.toBeInTheDocument();

    expect(screen.queryByText("Cancel")).not.toBeInTheDocument();
    expect(screen.queryByText("Logout")).not.toBeInTheDocument();
  });

  it("calls handleClose when Cancel button is clicked", () => {
    render(
      <LogoutModal
        open={true}
        handleClose={handleClose}
        handleLogout={handleLogout}
      />
    );

    screen.getByText("Cancel").click();

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls handleLogout when Logout button is clicked", () => {
    render(
      <LogoutModal
        open={true}
        handleClose={handleClose}
        handleLogout={handleLogout}
      />
    );

    screen.getByText("Logout").click();

    expect(handleLogout).toHaveBeenCalledTimes(1);
  });
});
