import React from "react";
import { Box, Divider, Modal, styled } from "@mui/material";
import theme from "../../../theme";
import MuiTypography from "../../atoms/MuiTypography";
import MuiIcons from "../../atoms/Icon";
import Close from "../../../../public/assets/icons/Close.svg";
import Attachment from "../../../../public/assets/icons/Attachment.svg";
import MuiButton from "../../atoms/MuiButton";
import {
  assaultType,
  attachmentDetails,
  attachmentTitle,
  conditions,
  details,
  emailDataOne,
  emailDataTwo,
  previewNoticeModalTitle,
  submitNoticeButton,
} from "../../../utils/constants";

export interface PreviewNoticeModalProps {
  open: boolean;
  handleSubmit?: () => void;
  handleClose?: () => void;
  email?: string;
  name?: string;
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
  justifyContent: "space-between",
  width: theme.spacing(174),
  height: theme.spacing(171.5),
  borderRadius: theme.spacing(2),
});

const CustomDivider = styled(Divider)({
  color: theme.palette.structural.stroke,
});

const HeaderContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(3.75),
});

const MiddleContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  margin: theme.spacing(3.75),
  height: theme.spacing(135.75),
  gap: theme.spacing(2),
});

const FooterContainer = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  padding: theme.spacing(2.5),
});

const SpanBox = styled(Box)({
  display: "span",
});

const ListBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: theme.spacing(148.5),
  height: theme.spacing(17.75),
  borderRadius: theme.spacing(1),
  paddingLeft: theme.spacing(7.5),
  background: theme.palette.accent.lightRed,
});

const UnOrderList = styled("li")({
  color: theme.palette.accent.red,
});

const EmailBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginTop: theme.spacing(3.75),
});

const AttachmentBox = styled(Box)({
  display: "flex",
  gap: theme.spacing(3),
});

const AttachmentDetailsBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.25),
});

const submitButtonStyles = {
  padding: "8px 16px",
  gap: theme.spacing(1),
  borderRadius: theme.spacing(1.5),
  width: theme.spacing(31.75),
  height: theme.spacing(9),
  textTransform: "none",
};

const PreviewNoticeModal = ({
  open,
  handleSubmit,
  handleClose,
  email,
  name,
}: PreviewNoticeModalProps) => {
  return (
    <CustomModal open={open} onClose={() => {}}>
      <Container>
        <HeaderContainer>
          <MuiTypography
            children={previewNoticeModalTitle}
            typoVariant="subtitle1"
            sx={{ color: theme.palette.textColor.highEmphasis }}
          />
          <MuiIcons src={Close} alt="Close Icon" onClick={handleClose} />
        </HeaderContainer>

        <CustomDivider />

        <MiddleContainer>
          {Object.keys(details).map((key, index) => (
            <SpanBox key={index}>
              <MuiTypography
                children={key}
                typoVariant="caption3"
                sx={{ color: theme.palette.textColor.highEmphasis }}
              />
              <MuiTypography
                children={index === 1 ? email : details[key]}
                typoVariant="caption3"
                sx={{ color: theme.palette.textColor.mediumEmphasis }}
              />
            </SpanBox>
          ))}
          <ListBox>
            {conditions.map((value, index) => (
              <ul key={index}>
                <UnOrderList>
                  <MuiTypography
                    children={value}
                    typoVariant="caption2"
                    sx={{ whiteSpace: "pre-line" }}
                  />
                </UnOrderList>
              </ul>
            ))}
          </ListBox>

          {emailDataOne.map((value, index) => (
            <EmailBox key={index}>
              <MuiTypography
                children={index === 0 ? value + name + "," : value}
                typoVariant="caption2"
                key={index}
                sx={{
                  color: theme.palette.textColor.mediumEmphasis,
                  whiteSpace: "pre-line",
                }}
              />
            </EmailBox>
          ))}

          <ul
            style={{
              color: theme.palette.textColor.mediumEmphasis,
              marginLeft: theme.spacing(7.5),
            }}
          >
            <li>
              <MuiTypography
                children={assaultType}
                typoVariant="caption2"
                sx={{ color: theme.palette.textColor.mediumEmphasis }}
              />
            </li>
          </ul>

          {emailDataTwo.map((value, index) => (
            <EmailBox>
              <MuiTypography
                children={value}
                typoVariant="caption2"
                key={index}
                sx={{
                  color: theme.palette.textColor.mediumEmphasis,
                  whiteSpace: "pre-line",
                }}
              />
            </EmailBox>
          ))}

          <MuiTypography
            children={attachmentTitle}
            typoVariant="caption3"
            sx={{
              color: theme.palette.textColor.highEmphasis,
              marginTop: theme.spacing(2.5),
            }}
          />

          <AttachmentDetailsBox>
            {attachmentDetails.map((value, index) => (
              <AttachmentBox key={index}>
                <MuiIcons src={Attachment} alt="AttachmentPin" />
                <MuiTypography
                  children={value}
                  key={index}
                  typoVariant="caption2"
                  sx={{ color: theme.palette.textColor.mediumEmphasis }}
                />
              </AttachmentBox>
            ))}
          </AttachmentDetailsBox>
        </MiddleContainer>

        <CustomDivider />

        <FooterContainer>
          <MuiButton
            children={
              <MuiTypography
                children={submitNoticeButton}
                typoVariant="body1"
              />
            }
            variant="contained"
            sx={submitButtonStyles}
            onClick={handleSubmit}
          />
        </FooterContainer>
      </Container>
    </CustomModal>
  );
};

export default PreviewNoticeModal;
