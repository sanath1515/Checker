import TableHeader from ".";
import { render, fireEvent, screen } from "@testing-library/react";
import theme from "../../../theme";

describe("TableHeader Component", () => {
  const mockGetData = jest.fn();

  test("renders TableHeader component", () => {
    const { getByText } = render(
      <TableHeader
        width="100%"
        height={theme.spacing(15)}
        needMoreIcon={true}
        getSearchData={mockGetData}
        getFilterData={mockGetData}
      />
    );

    expect(getByText("Candidate Information")).toBeInTheDocument();
  });

  test("search input field changes value", () => {
    const { getByPlaceholderText } = render(
      <TableHeader
        width="100%"
        height={theme.spacing(15)}
        needMoreIcon={false}
        getSearchData={mockGetData}
        getFilterData={mockGetData}
      />
    );

    const searchInput = getByPlaceholderText(
      "Search any candidate"
    ) as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: "John Doe" } });

    expect(searchInput.value).toBe("John Doe");
  });

  test("clicking on filter button opens menu", () => {
    const { getByText } = render(
      <TableHeader
        width="100%"
        height={theme.spacing(15)}
        needMoreIcon={true}
        getSearchData={mockGetData}
        getFilterData={mockGetData}
      />
    );

    const filterButton = getByText("Filter");
    fireEvent.mouseDown(filterButton);
  });

  test("clicking on status filter option calls getData with selected status", () => {
    const { getByText, getByTestId } = render(
      <TableHeader
        width="100%"
        height={theme.spacing(15)}
        needMoreIcon={true}
        getSearchData={mockGetData}
        getFilterData={mockGetData}
      />
    );

    const filterButton = getByTestId("filter-box");
    fireEvent.click(filterButton);

    const statusOption = getByText("Clear");
    fireEvent.click(statusOption);

    expect(mockGetData).toHaveBeenCalledWith("John Doe");
  });
});
