import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CandidatePage from ".";
import { MemoryRouter } from "react-router-dom";
import { NavbarProvider } from "../../utils/navbarContext";

jest.mock("../../services/index", () => ({
  getCandidatesData: jest.fn(() =>
    Promise.resolve([
      {
        id: 1,
        name: "John Doe",
        adjudication: "Approved",
        status: "Active",
        location: "New York",
        date: "2023-09-11",
      },
      {
        id: 2,
        name: "Jane Doe",
        adjudication: "Pending",
        status: "Inactive",
        location: "Los Angeles",
        date: "2023-09-12",
      },
    ])
  ),
}));

describe("CandidatePage", () => {
  it("should display filtered results based on search input", async () => {
    render(
      <MemoryRouter>
        <NavbarProvider>
          <CandidatePage />
        </NavbarProvider>
      </MemoryRouter>
    );
    const searchInput = screen.getByPlaceholderText("Search any candidate");
    fireEvent.change(searchInput, { target: { value: "John" } });
    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.queryByText("Jane Doe")).not.toBeInTheDocument();
    });
  });

  it("should display filtered results based on status selection", async () => {
    render(
      <MemoryRouter>
        <NavbarProvider>
          <CandidatePage />
        </NavbarProvider>
      </MemoryRouter>
    );

    const filterBox = screen.getByText("Filter");
    fireEvent.click(filterBox);
    const statusSelect = screen.getByText("Clear");
    fireEvent.click(statusSelect);
    await waitFor(() => {
      expect(screen.getByText("results found")).toBeInTheDocument();
    });
  });
});
