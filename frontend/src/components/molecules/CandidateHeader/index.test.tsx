import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CandidateHeader from ".";

describe("CandidateHeader Component", () => {
  it("should render the heading correctly", () => {
    render(<CandidateHeader heading="Candidates" />);

    expect(screen.getByText("Candidates")).toBeInTheDocument();
  });
  it("renders all the buttons", () => {
    render(<CandidateHeader heading="Candidates" />);
    const elements = screen.getAllByRole("button");
    elements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
  it("renders the modal", () => {
    render(<CandidateHeader heading="Candidates" />);
    fireEvent.click(screen.getByAltText("Download Image"));
    expect(
      screen.getByText("Export Candidate Reports CSV")
    ).toBeInTheDocument();
  });
});
