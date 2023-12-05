import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CourtSearchTable from ".";
import { Fetch_CourtData } from "../../../services";

jest.mock("../../../services", () => ({
  Fetch_CourtData: jest.fn(() =>
    Promise.resolve([
      {
        id: 1,
        search: "Search 1",
        status: "Status 1",
        date: "Date 1",
      },
      {
        id: 2,
        search: "Search 2",
        status: "Status 2",
        date: "Date 2",
      },
      {
        id: 3,
        search: "Search 1",
        status: undefined,
        date: "Date 1",
      },
    ])
  ),
}));

describe("CourtSearchTable", () => {
  it("renders the table header", () => {
    render(<CourtSearchTable />);
    const tableHeader = screen.getByText("Court Searches"); // Replace with the actual text
    expect(tableHeader).toBeInTheDocument();
  });

  it("renders table rows with data", async () => {
    render(<CourtSearchTable />);
    await waitFor(() => {
      const searchCells = screen.getByText("SEARCH");
      const statusCells = screen.getByText("STATUS");
      const dateCells = screen.getByText("DATE");

      expect(searchCells).toBeInTheDocument();
      expect(statusCells).toBeInTheDocument();
      expect(dateCells).toBeInTheDocument();
    });
  });
});
