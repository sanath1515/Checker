import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import PreviewNoticeModal from ".";
import { previewNoticeModalTitle } from "../../../utils/constants";

describe("PreviewNoticeModal Component", () => {
  it("renders when open is true", () => {
    render(<PreviewNoticeModal open={true} />);
    const modalContent = screen.getByText(previewNoticeModalTitle);
    expect(modalContent).toBeVisible();
  });

  it("does not render when open is false", () => {
    render(<PreviewNoticeModal open={false} />);
    const modalContent = screen.queryByText(previewNoticeModalTitle);
    expect(modalContent).toBeNull();
  });

  it("closes the modal when the close icon is clicked", () => {
    render(<PreviewNoticeModal open={true} handleSubmit={jest.fn()} />);

    const closeIcon = screen.getByAltText("Close Icon");
    fireEvent.click(closeIcon);
  });
});
