import React from "react";
import { render, screen } from "@testing-library/react";
import StatusModal from ".";
import { SUCCESS_MESSAGE } from "../../../utils/constants";

describe("StatusModal Component", () => {
  it("renders when open is true", () => {
    render(<StatusModal message={SUCCESS_MESSAGE} open={true} />);
    const modalContent = screen.getByText(SUCCESS_MESSAGE);
    expect(modalContent).toBeVisible();
  });

  it("does not render when open is false", () => {
    render(<StatusModal message={SUCCESS_MESSAGE} open={false} />);
    const modalContent = screen.queryByText(SUCCESS_MESSAGE);
    expect(modalContent).toBeNull();
  });
});
