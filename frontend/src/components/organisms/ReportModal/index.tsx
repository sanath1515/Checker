import React, { useState } from "react";
import { Box, Divider, Modal, styled } from "@mui/material";
import theme from "../../../theme";
import MuiTypography from "../../atoms/MuiTypography";
import MuiDatePicker from "../../molecules/MuiDatePicker";
import MuiButton from "../../atoms/MuiButton";
import {
  DATE_PICKER,
  ReportButton,
  ReportTitle,
} from "../../../utils/constants";
import dayjs from "dayjs";

interface ReportModalProps {
  open: boolean;
  submitModal?: () => void;
  handleClose?: () => void;
}

const ModalContainer = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.palette.structural.white,
  width: theme.spacing(176),
  height: theme.spacing(89),
  borderRadius: theme.spacing(1.5),
  borderColor: theme.palette.structural.stroke,
});

const TitleContainer = styled(MuiTypography)({
  color: theme.palette.textColor.highEmphasis,
  paddingTop: theme.spacing(4),
  paddingLeft: theme.spacing(4),
});

const StyledDivider = styled(Divider)({
  color: theme.palette.structural.stroke,
  paddingTop: theme.spacing(5),
});
const RowBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
});
const DateStyle = styled(Box)({
  paddingLeft: theme.spacing(4),
  paddingTop: theme.spacing(5),
});

const ButtonStyle = styled(Box)({
  paddingLeft: theme.spacing(140),
  paddingTop: theme.spacing(3.5),
});

const ReportModal = ({ open, submitModal, handleClose }: ReportModalProps) => {
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const today = dayjs();

  const isButtonDisabled = () => {
    return fromDate === null || toDate === null || fromDate > toDate;
  };

  const handleFromDateChange = (date: Date | null) => {
    setFromDate(date);
  };

  const handleToDateChange = (date: Date | null) => {
    setToDate(date);
  };

  return (
    <Modal open={open} onClose={handleClose} data-testid="ReportModal">
      <ModalContainer>
        <TitleContainer typoVariant="subtitle1">{ReportTitle}</TitleContainer>
        <StyledDivider />
        <RowBox>
          <DateStyle>
            <MuiDatePicker
              data-testid="FromDate"
              dateFormat={DATE_PICKER.dateFormate}
              label={DATE_PICKER.fromLabel}
              onChange={handleFromDateChange}
              maxDate={today}
            />
          </DateStyle>
          <DateStyle>
            <MuiDatePicker
              data-testid="ToDate"
              dateFormat={DATE_PICKER.dateFormate}
              label={DATE_PICKER.toLabel}
              onChange={handleToDateChange}
              maxDate={today}
              minDate={fromDate !== null ? dayjs(fromDate) : undefined}
            />
          </DateStyle>
        </RowBox>
        <Divider
          style={{
            color: theme.palette.structural.stroke,
            paddingBottom: theme.spacing(35),
          }}
        />
        <ButtonStyle>
          <MuiButton
            variant="contained"
            style={{
              textTransform: "none",
              borderRadius: theme.spacing(1.5),
              backgroundColor: isButtonDisabled()
                ? theme.palette.primary[400]
                : theme.palette.primary[500],
              color: theme.palette.structural.white,
            }}
            onClick={submitModal}
            disabled={isButtonDisabled()}
          >
            {ReportButton}
          </MuiButton>
        </ButtonStyle>
      </ModalContainer>
    </Modal>
  );
};

export default ReportModal;
