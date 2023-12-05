import { Grid, Paper, styled } from "@mui/material";
import { useState } from "react";
import MuiTypography from "../../atoms/MuiTypography";
import MuiButton from "../../atoms/MuiButton";
import theme from "../../../theme";
import MuiIcons from "../../atoms/Icon";
import MoveLeft from "../../../../public/assets/icons/MoveLeft.svg";
import {
  coninue_to,
  go_back,
  highEmphasiscolor,
  maincolor,
  mediumEmphasiscolor,
  not_get_otp,
  otp_start,
  otp_text,
  resend_otp,
  stroke_color,
  strucutural_stroke,
} from "../../../utils/constants";
import { setSpacing } from "../../../utils/function";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../services/routes";

export interface OTPModelProps {
  handleBackClick: () => void;
}
const OTPContainer = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  width: setSpacing(120),
  height: theme.spacing(168),
  boxShadow: "2px 6px 34px rgba(45, 45, 47, 0.1)",
});

const TypoOtpBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  columnGap: setSpacing(1.75),
  marginLeft: setSpacing(12),
  marginBottom: setSpacing(3.75),
  width: setSpacing(96),
});
const SignInBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  columnGap: setSpacing(1.75),
  marginTop: setSpacing(7),
  marginBottom: setSpacing(2),
  marginLeft: setSpacing(10),
  width: setSpacing(22),
});
const BottomContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
const Box = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
  gap: setSpacing(6.25),
  marginLeft: setSpacing(12),
  marginBottom: setSpacing(6.25),
  width: setSpacing(96),
});

const InputContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});
const AllButtonOtpStyle = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: setSpacing(96),
  marginLeft: setSpacing(12),
  gap: setSpacing(6.25),
});

const OTPCard = ({ handleBackClick }: OTPModelProps) => {
  const [otpDigits, setOtpDigits] = useState<string[]>(["", "", "", ""]);
  const navigate = useNavigate();
  const handleInputChange = (index: number, value: string) => {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue) || value === "") {
      const newOtpDigits = [...otpDigits];
      newOtpDigits[index] = value;
      setOtpDigits(newOtpDigits);
    }
  };
  const isContinueDisabled = otpDigits.some((digit) => digit === "");
  const buttonColor = isContinueDisabled
    ? theme.palette.primary[400]
    : maincolor;
  const validateOTP = (otpDigits: string[]): boolean => {
    if (otpDigits.some((digit) => !digit)) {
      alert("Please Enter OTP");
      return false;
    }
    return true;
  };

  const handleFormSubmit = async (otpDigits: string[]) => {
    console.log(otpDigits);
    const isvalidotp = validateOTP(otpDigits);
    if (isvalidotp) {
      navigate(ROUTES.CANDIDATES);
    }
  };

  return (
    <>
      <OTPContainer>
        <SignInBox>
          <MuiButton
            startIcon={<MuiIcons src={MoveLeft} alt={"MoveLeft"} />}
            children={
              <MuiTypography
                typoVariant={"caption3"}
                children={go_back}
                style={{
                  color: maincolor,
                }}
              />
            }
            sx={{
              textTransform: "none",
              width: setSpacing(22.5),
              height: setSpacing(5),
            }}
            style={{ background: stroke_color }}
            onClick={handleBackClick}
          />
        </SignInBox>

        <TypoOtpBox>
          <MuiTypography
            typoVariant={"h1"}
            children={otp_start}
            color={highEmphasiscolor}
            sx={{
              marginBottom: setSpacing(3),
            }}
          />
          <MuiTypography
            typoVariant={"body2"}
            color={mediumEmphasiscolor}
            children={otp_text}
          />
        </TypoOtpBox>
        <Box>
          <InputContainer>
            {otpDigits.map((digit, index) => (
              <input
                key={digit.indexOf(digit)}
                type="text"
                maxLength={1}
                value={digit}
                placeholder=""
                onChange={(e) => handleInputChange(index, e.target.value)}
                style={{
                  width: "20%",
                  height: setSpacing(9),
                  textAlign: "center",
                  border: `1px solid ${strucutural_stroke}`,
                  borderRadius: setSpacing(1),
                  outline: "none",
                }}
              />
            ))}
          </InputContainer>
        </Box>
        <AllButtonOtpStyle>
          <MuiButton
            variant="contained"
            children={
              <MuiTypography typoVariant="body1" children={coninue_to} />
            }
            sx={{
              width: setSpacing(96.25),
              height: setSpacing(11),
              padding: `${setSpacing(2)} ${setSpacing(4)} ${setSpacing(
                2
              )} ${setSpacing(4)}`,
              textTransform: "none",
              borderRadius: 1,
            }}
            onClick={() => handleFormSubmit(otpDigits)}
            style={{ color: stroke_color, background: buttonColor }}
          />
        </AllButtonOtpStyle>

        <BottomContainer>
          <Grid
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: setSpacing(5),
            }}
          >
            <MuiTypography
              typoVariant={"body2"}
              style={{ color: mediumEmphasiscolor }}
              children={not_get_otp}
            />
            <MuiTypography
              typoVariant={"body1"}
              style={{ color: maincolor }}
              children={resend_otp}
            />
          </Grid>
        </BottomContainer>
      </OTPContainer>
    </>
  );
};

export default OTPCard;
