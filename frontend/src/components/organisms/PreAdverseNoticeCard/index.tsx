import React, { useEffect, useState } from "react";
import { Box, Card, styled } from "@mui/material";
import theme from "../../../theme";
import {
  autoSendPostAdverseAction,
  candidateInitialState,
  checkBoxLabels,
  daysText,
  details,
  emailDataOne,
  emailDataTwo,
  numberDays,
  preAdverseActionType,
  previewNoticeButton,
} from "../../../utils/constants";
import MuiTypography from "../../atoms/MuiTypography";
import MuiButton from "../../atoms/MuiButton";
import CheckboxComponent from "../../atoms/Checkbox";
import PreviewNoticeModal from "../PreviewNoticeModal";
import StatusModal from "../StatusModal";
import {
  retrieveCandidateById,
  updateCandidateAdjudication,
} from "../../../services";
import { useNavigate, useParams } from "react-router-dom";
import { candidate } from "../../../utils/types";
import { ROUTES } from "../../../services/routes";

const Container = styled(Card)(({ width, height, styles }: CardProps) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  width: width ?? theme.spacing(264),
  height: height ?? theme.spacing(164),
  borderRadius: theme.spacing(3),
  ...styles,
}));

const FooterBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(3.75),
  borderTop: `${theme.spacing(0.25)} solid ${theme.palette.structural.stroke}`,
});

const FooterLeftBox = styled(Box)({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: theme.spacing(80.75),
});

const SpanBox = styled(Box)({
  display: "span",
  padding: theme.spacing(3.75),
  borderBottom: `${theme.spacing(0.25)} solid ${
    theme.palette.structural.stroke
  }`,
});

const MiddleBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: theme.spacing(200),
  padding: theme.spacing(3.75),
  gap: theme.spacing(2),
});

const CheckBoxList = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const DaysBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: theme.spacing(16),
  border: `${theme.spacing(0.25)} solid ${theme.palette.structural.stroke}`,
  borderRadius: theme.spacing(2),
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
});

const previewNoticeButtonStyles = {
  width: theme.spacing(33.25),
  height: theme.spacing(9),
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  borderRadius: theme.spacing(1.5),
  textTransform: "none",
  "&.Mui-disabled": {
    background: theme.palette.primary[400],
    color: theme.palette.structural.white,
  },
};

const checkBoxStyles = {
  padding: theme.spacing(1),
  color: theme.palette.structural.stroke,
  marginLeft: theme.spacing(2),
  marginBottom: theme.spacing(1),
  "&.Mui-disabled": {
    color: theme.palette.structural.stroke,
  },
};

interface CardProps {
  width?: string;
  height?: string;
  handlePreviewNoticeButton?: () => void;
  styles?: React.CSSProperties;
}

const PreAdverseNoticeCard = ({ width, height, styles }: CardProps) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState<candidate>(candidateInitialState);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      retrieveCandidateById(id).then((res) => {
        setData(res);
      });
    }
  }, []);

  const handleCheckboxChange = () => {
    setIsButtonDisabled(!isButtonDisabled);
  };

  const handlePreviewNoticeButton = () => {
    setIsModelOpen(true);
  };

  const handleSubmit = () => {
    setIsModelOpen(false);
    setIsSubmit(true);

    updateCandidateAdjudication(id!, "Adverse Action");

    setTimeout(() => {
      setIsSubmit(false);
      navigate(ROUTES.CANDIDATES);
    }, 4600);
  };

  const handleClose = () => {
    setIsModelOpen(false);
  };

  return (
    <Container width={width} height={height} styles={styles}>
      {Object.keys(details).map((key, index) => (
        <>
          <SpanBox key={index}>
            <MuiTypography
              children={key}
              typoVariant="caption3"
              sx={{
                color: theme.palette.textColor.highEmphasis,
              }}
            />
            <MuiTypography
              children={index === 1 ? data?.email : details[key]}
              typoVariant="caption3"
              sx={{
                color: theme.palette.textColor.mediumEmphasis,
              }}
            />
          </SpanBox>
        </>
      ))}
      <MiddleBox>
        {emailDataOne.map((value, index) => (
          <MuiTypography
            children={index === 0 ? value + data?.name + "," : value}
            typoVariant="body2"
            key={index}
            sx={{
              color: theme.palette.textColor.mediumEmphasis,
            }}
          />
        ))}

        <MuiTypography
          children={preAdverseActionType}
          typoVariant="caption3"
          sx={{
            color: theme.palette.textColor.highEmphasis,
            marginTop: theme.spacing(2.5),
          }}
        />

        {checkBoxLabels.map((value, index) => (
          <CheckBoxList key={index}>
            <CheckboxComponent
              label={
                <MuiTypography
                  children={value}
                  typoVariant="caption2"
                  sx={{ color: theme.palette.textColor.mediumEmphasis }}
                />
              }
              key={index}
              sx={checkBoxStyles}
              onChange={index === 1 ? handleCheckboxChange : () => {}}
              disabled={index === 0 || index === 2}
            />
          </CheckBoxList>
        ))}

        {emailDataTwo.map((value, index) => (
          <MuiTypography
            children={value}
            typoVariant="caption1"
            key={index}
            sx={{
              color: theme.palette.textColor.mediumEmphasis,
              whiteSpace: "pre-line",
            }}
          />
        ))}
      </MiddleBox>

      <FooterBox>
        <FooterLeftBox>
          <MuiTypography
            children={autoSendPostAdverseAction}
            typoVariant="body2"
            sx={{
              color: theme.palette.textColor.mediumEmphasis,
            }}
          />
          <DaysBox>
            <MuiTypography
              children={numberDays}
              typoVariant="body2"
              sx={{
                color: theme.palette.textColor.highEmphasis,
              }}
            />
          </DaysBox>
          <MuiTypography
            children={daysText}
            typoVariant="body2"
            sx={{
              color: theme.palette.textColor.mediumEmphasis,
            }}
          />
        </FooterLeftBox>
        <MuiButton
          children={
            <MuiTypography children={previewNoticeButton} typoVariant="body1" />
          }
          variant="contained"
          sx={previewNoticeButtonStyles}
          onClick={handlePreviewNoticeButton}
          disabled={isButtonDisabled}
        />
      </FooterBox>

      {isModelOpen && (
        <PreviewNoticeModal
          open={true}
          email={data?.email}
          name={data?.name}
          handleSubmit={handleSubmit}
          handleClose={handleClose}
        />
      )}
      {isSubmit && (
        <StatusModal
          open={true}
          message="Pre-Advance Action notice successfully sent"
          handleClose={handleClose}
        />
      )}
    </Container>
  );
};

export default PreAdverseNoticeCard;
