import React from "react";
import { Box, Modal, SxProps, styled } from "@mui/material";
import MuiTypography from "../../atoms/MuiTypography";
import theme from "../../../theme";
import MuiButton from "../../atoms/MuiButton";
import {
  cancelButton,
  logoutButton,
  logoutModalTitle,
  questionAboutLogout,
} from "../../../utils/constants";

const Container = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "28.125rem",
  height: "9.5rem",
  borderRadius: "0.5rem",
  background: theme.palette.structural.white,
  padding: "0.9375rem",
});

const FirstInnerBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: "0.5rem",
});

const SecondInnerBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  gap: "0.5rem",
});

const cancelButtonStyles: SxProps = {
  border: `0.0625rem solid ${theme.palette.structural.stroke}`,
  bgColor: theme.palette.structural.white,
  textTransform: "none",
  height: "2.25rem",
  "&:hover": {
    border: `0.0625rem solid ${theme.palette.structural.stroke}`,
    bgColor: theme.palette.structural.white,
  },
};

const logoutButtonStyles: SxProps = {
  bgColor: theme.palette.primary[500],
  textTransform: "none",
  height: "2.25rem",
  "&:hover": {
    background: theme.palette.primary.main,
  },
};

export interface LogoutModelProps {
  open: boolean;
  handleClose?: () => void;
  handleLogout?: () => void;
}

const LogoutModal = ({ open, handleClose, handleLogout }: LogoutModelProps) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Container>
        <FirstInnerBox>
          <MuiTypography
            typoVariant="subtitle1"
            sx={{ color: theme.palette.textColor.highEmphasis }}
            children={logoutModalTitle}
          />
          <MuiTypography
            typoVariant="body2"
            sx={{ color: theme.palette.textColor.mediumEmphasis }}
            children={questionAboutLogout}
          />
        </FirstInnerBox>
        <SecondInnerBox>
          <MuiButton
            children={
              <MuiTypography
                children={cancelButton}
                typoVariant="body1"
                sx={{ color: theme.palette.textColor.mediumEmphasis }}
              />
            }
            variant="outlined"
            sx={cancelButtonStyles}
            onClick={handleClose}
          />
          <MuiButton
            children={
              <MuiTypography
                children={logoutButton}
                typoVariant="body1"
                sx={{ color: theme.palette.textColor.white }}
              />
            }
            variant="contained"
            sx={logoutButtonStyles}
            onClick={handleLogout}
          />
        </SecondInnerBox>
      </Container>
    </Modal>
  );
};

export default LogoutModal;
