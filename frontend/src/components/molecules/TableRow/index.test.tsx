import React from "react";
import { fireEvent, render } from "@testing-library/react";
import CustomTableRow, { TableRowProps } from ".";
import { MemoryRouter } from "react-router-dom";

describe("CustomTableRow", () => {
  const defaultProps: TableRowProps = {
    candidatename: "John Doe",
    adjudication: "-",
    status: "CLEAR",
    location: "Sukamanah",
    date: "9/7/2023",
    preNoticeDate: "9/8/2023",
    postNoticeDate: "9/9/2023",
    id: 1,
  };

  it("renders with default props", () => {
    const { getByText } = render(
      <MemoryRouter>
        <CustomTableRow {...defaultProps} />
      </MemoryRouter>
    );

    expect(getByText("John Doe")).toBeInTheDocument();
    expect(getByText("CLEAR")).toBeInTheDocument();
    expect(getByText("Sukamanah")).toBeInTheDocument();
    expect(getByText("9/7/2023")).toBeInTheDocument();
    expect(getByText("-")).toBeInTheDocument();
    expect(getByText("9/8/2023")).toBeInTheDocument();
    expect(getByText("9/9/2023")).toBeInTheDocument();

    fireEvent.click(getByText("John Doe"));
  });

  it("renders with searchName", () => {
    const { getByText } = render(
      <MemoryRouter>
        <CustomTableRow {...defaultProps} searchName="Search Name" />
      </MemoryRouter>
    );

    expect(getByText("Search Name")).toBeInTheDocument();
  });

  it("renders with custom cell width", () => {
    const { container } = render(
      <MemoryRouter>
        <CustomTableRow {...defaultProps} cellwidth="150px" />
      </MemoryRouter>
    );
    const cell = container.querySelector(".MuiTableCell-root");

    expect(cell).toHaveStyle("width: 150px");
  });
});
