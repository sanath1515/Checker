import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import PreAdverseNoticeCard from ".";
import { checkBoxLabels } from "../../../utils/constants";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../../services", () => ({
  retrieveCandidateById: jest.fn(() =>
    Promise.resolve([
      {
        id: 1,
        name: "John Smith",
        adjudication: "-",
        status: "CLEAR",
        location: "Barrouallie",
        date: "2/22/2022",
        email: "john.smith@checkr.com",
        dob: "1990-09-10 (26)",
        phoneNo: "(555) 555-5555",
        zipcode: "94158",
        socialSecurity: "XXX-XX-6789",
        driverLicense: "FTEST1111 (CA)",
        createdAt: "2016-11-29 11:05:57",
        package: "Employee pro",
        reportCreatedAt: "2016-12-01 12:00:00",
        reportCompletionDate: "2016-12-04 12:00:00",
        turnAroundTime: "1 Day , 14 hours",
      },
    ])
  ),
  updateCandidateAdjudication: jest.fn(() =>
    Promise.resolve([
      {
        id: 1,
        name: "John Smith",
        adjudication: "Adverse Action",
        status: "CLEAR",
        location: "Barrouallie",
        date: "2/22/2022",
        email: "john.smith@checkr.com",
        dob: "1990-09-10 (26)",
        phoneNo: "(555) 555-5555",
        zipcode: "94158",
        socialSecurity: "XXX-XX-6789",
        driverLicense: "FTEST1111 (CA)",
        createdAt: "2016-11-29 11:05:57",
        package: "Employee pro",
        reportCreatedAt: "2016-12-01 12:00:00",
        reportCompletionDate: "2016-12-04 12:00:00",
        turnAroundTime: "1 Day , 14 hours",
      },
    ])
  ),
}));

describe("PreAdverseNoticeCard Component", () => {
  it("enables the button when the second checkbox is checked", () => {
    const handlePreviewNoticeButtonFn = jest.fn();

    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <PreAdverseNoticeCard
          handlePreviewNoticeButton={handlePreviewNoticeButtonFn}
        />
      </MemoryRouter>
    );
    const checkbox = getByLabelText(checkBoxLabels[1]);

    fireEvent.click(checkbox);

    const button = getByText("Preview Notice");
    expect(button).not.toBeDisabled();
  });

  it("disables the button when the second checkbox is unchecked", () => {
    const { getByRole, getByLabelText } = render(
      <MemoryRouter>
        <PreAdverseNoticeCard />
      </MemoryRouter>
    );
    const checkbox = getByLabelText(checkBoxLabels[1]);
    const button = getByRole("button", { name: "Preview Notice" });

    fireEvent.click(checkbox);
    fireEvent.click(checkbox);

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("Submitting the notice", async () => {
    const { getByRole, getByText, getByLabelText } = render(
      <MemoryRouter>
        <PreAdverseNoticeCard />
      </MemoryRouter>
    );
    const checkbox = getByLabelText(checkBoxLabels[1]);
    const button = getByRole("button", { name: "Preview Notice" });

    fireEvent.click(checkbox);
    fireEvent.click(button);

    expect(getByText("Submit Notice")).toBeInTheDocument();

    const submit = getByRole("button", { name: "Submit Notice" });

    fireEvent.click(submit);

    await waitFor(() => {
      expect(
        getByText("Pre-Advance Action notice successfully sent")
      ).toBeInTheDocument();
    });
  });
});
