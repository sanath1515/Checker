import React from "react";
import {
  render,
  fireEvent,
  screen,
} from "@testing-library/react";
import ReportModal from ".";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme";
const reportModalProps: any = {
  open: true,
  handleClose: jest.fn(),
};
describe("ReportModal", () => {
  const handleCloseMock = jest.fn();

  it("renders without crashing", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ReportModal open={true} handleClose={handleCloseMock} />
      </ThemeProvider>
    );
    expect(getByText("Export Candidate Reports CSV")).toBeInTheDocument();
  });

  test("renders CustomeDatePicker component", () => {
    render(
      <ThemeProvider theme={theme}>
        <ReportModal open={true} handleClose={handleCloseMock} />
      </ThemeProvider>
    );
    const elements = screen.getAllByRole("textbox");
    elements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
  it("calls the handleClose function when the modal is closed", () => {
    const handleCloseMock = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ReportModal open={true} handleClose={handleCloseMock} />
      </ThemeProvider>
    );

    fireEvent.click(getByText("Export Report"));

    expect(handleCloseMock).toBeCalledTimes(0);
  });
  it("updates fromDate state when handleFromDateChange is called", () => {
    const handleCloseMock = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ReportModal open={true} handleClose={handleCloseMock} />
      </ThemeProvider>
    );

    const fromDateInputs = screen.getAllByRole("textbox");
    const fromDateInput = fromDateInputs[0];
    const selectedFromDate = new Date(2023, 6, 10);

    fireEvent.change(fromDateInput, {
      target: { value: selectedFromDate.toISOString() },
    });
    const reportModalInstance = screen.getByTestId("ReportModal");
  });
  it("updates toDate state when handleToDateChange is called", () => {
    const handleCloseMock = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ReportModal open={true} handleClose={handleCloseMock} />
      </ThemeProvider>
    );

    const toDateInputs = screen.getAllByRole("textbox");
    const toDateInput = toDateInputs[1];

    const selectedToDate = new Date(2023, 6, 15);

    fireEvent.change(toDateInput, {
      target: { value: selectedToDate.toISOString() },
    });

    const reportModalInstance = screen.getByTestId("ReportModal");
  });
});
