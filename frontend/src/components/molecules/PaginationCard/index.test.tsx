import React from "react";
import { render } from "@testing-library/react";
import PaginationCard from ".";
import {
  countForPage,
  numberOfPages,
  resultsFound,
  totalPages,
} from "../../../utils/constants";

describe("PaginationCard Component", () => {
  test("Renders with custom content and isFilterd as false", () => {
    const { getByText } = render(
      <PaginationCard width="100%" height="56px" isFiltered={false} />
    );
    expect(getByText(numberOfPages)).toBeInTheDocument();
    expect(getByText(totalPages)).toBeInTheDocument();
    expect(getByText(countForPage)).toBeInTheDocument();
  });

  test("Renders with custom content and isFilterd as true", () => {
    const { getByText } = render(
      <PaginationCard width="100%" height="56px" isFiltered={true} />
    );
    expect(getByText(resultsFound)).toBeInTheDocument();
  });
});
