import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import AdverseActionsTable from ".";

jest.mock("../../../services", () => ({
  fetchActions: jest.fn(() =>
    Promise.resolve([
      {
        id: "1",
        name: "John Smith",
        actionStatus: "SCHEDULED",
        preNoticeTime: "02/22/2022",
        postNoticeTime: "02/22/2022",
      },
      {
        id: "2",
        name: "Serene",
        actionStatus: "SCHEDULED",
        preNoticeTime: "03/13/2022",
        postNoticeTime: "03/13/2022",
      },
    ])
  ),
}));

describe("AdverseActionsTable", () => {
  it("renders the table headers", () => {
    render(<AdverseActionsTable />);
    const headers = screen.getAllByRole("columnheader");
    expect(headers).toHaveLength(5);
    expect(headers[0]).toHaveTextContent("NAME");
    expect(headers[1]).toHaveTextContent("STATUS");
    expect(headers[2]).toHaveTextContent("PRE NOTICE DATE");
    expect(headers[3]).toHaveTextContent("POST NOTICE DATE");
  });

  it("renders the table rows with mock data", async () => {
    render(<AdverseActionsTable />);
    await waitFor(() => {
      expect(screen.getByText("John Smith")).toBeInTheDocument();
      expect(screen.getByText("Serene")).toBeInTheDocument();
    });
  });
});
