import React from "react";
import { render, screen } from "@testing-library/react";
import { TableData, candidateTableHeaders } from "../../../mocks/mock";
import CandidateTable from ".";
import { MemoryRouter } from "react-router-dom";

describe("CandidateTable", () => {
  it("renders the table headers correctly", () => {
    render(
      <MemoryRouter>
        <CandidateTable
          TableData={TableData}
          candidateTableHeaders={candidateTableHeaders}
        />
      </MemoryRouter>
    );

    candidateTableHeaders.forEach((header) => {
      const headerElement = screen.getByText(header);
      expect(headerElement).toBeInTheDocument();
      expect(headerElement.tagName).toBe("SPAN");
    });
  });
});
