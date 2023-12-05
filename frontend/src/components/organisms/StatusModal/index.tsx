import React from "react";
import { Box, Modal, styled } from "@mui/material";
import MuiIcons from "../../atoms/Icon";
import CheckGif from "../../../../public/assets/gifs/CheckGif.gif";
import MuiTypography from "../../atoms/MuiTypography";
import theme from "../../../theme";

interface StatusModalProps {
  message: string;
  open: boolean;
  handleClose?: () => void;
}

const CustomModal = styled(Modal)({
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  "&:focus": {
    outline: "none",
  },
});

const Container = styled(Box)({
  backgroundColor: `${theme.palette.structural.white}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "43.5rem",
  height: "26.5rem",
  borderRadius: "0.5rem",
  paddingX: "1.25rem",
  paddingY: "1.25rem",
});

const StatusModal = ({ message, open, handleClose }: StatusModalProps) => {
  return (
    <CustomModal open={open} onClose={handleClose}>
      <Container>
        <MuiIcons
          src={CheckGif}
          alt="StatusCheckImage"
          style={{ width: "12.5rem", height: "12.5rem" }}
        />
        <MuiTypography
          children={message}
          typoVariant="h2"
          sx={{ color: theme.palette.textColor.highEmphasis }}
        />
      </Container>
    </CustomModal>
  );
};

export default StatusModal;
