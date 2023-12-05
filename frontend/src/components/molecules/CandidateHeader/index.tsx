import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import MuiTypography from "../../atoms/MuiTypography";
import theme from "../../../theme";
import MuiButton from "../../atoms/MuiButton";
import Download from "../../../../public/assets/icons/Download.svg";
import Plus from "../../../../public/assets/icons/Plus.svg";
import MuiIcon from "../../atoms/Icon";
import {
  DOWNLOAD_MESSAGE,
  Export,
  ManualOrder,
} from "../../../utils/constants";
import ReportModal from "../../organisms/ReportModal";
import StatusModal from "../../organisms/StatusModal";

interface CandidateHeaderProps {
  heading: string;
  hidden?: boolean;
}

const HeaderStyle = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});
const TextStyle = styled(MuiTypography)({
  color: theme.palette.textColor.highEmphasis,
});

const CandidateHeader = ({ heading, hidden }: CandidateHeaderProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const openReportModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  const submitModal = () => {
    setOpenModal(false);
    setSuccessModal(true);

    setTimeout(() => {
      setSuccessModal(false);
    }, 4600);
  };
  return (
    <>
      <HeaderStyle>
        <TextStyle typoVariant="h1" children={heading}></TextStyle>
        {!hidden && (
          <Stack direction="row" spacing={2.5}>
            <MuiButton
              variant="outlined"
              onClick={openReportModal}
              startIcon={<MuiIcon src={Download} alt="Download Image" />}
              sx={{
                color: theme.palette.textColor.mediumEmphasis,
                textTransform: "none",
                borderRadius: "6px",
                borderColor: theme.palette.structural.stroke,
                "&:hover": {
                  borderColor: theme.palette.structural.stroke,
                  backgound: theme.palette.structural.stroke,
                },
              }}
            >
              {Export}
            </MuiButton>
            <MuiButton
              variant="contained"
              startIcon={<MuiIcon src={Plus} alt="Manual Image not found" />}
              sx={{
                textTransform: "none",
                ":hover": {
                  background: theme.palette.primary[500],
                },
              }}
            >
              {ManualOrder}
            </MuiButton>
          </Stack>
        )}
      </HeaderStyle>
      {openModal && (
        <ReportModal
          open={true}
          submitModal={submitModal}
          handleClose={closeModal}
        />
      )}
      {successModal && (
        <StatusModal
          open={true}
          handleClose={closeModal}
          message={DOWNLOAD_MESSAGE}
        />
      )}
    </>
  );
};

export default CandidateHeader;
