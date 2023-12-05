import { Paper, Stack, styled } from "@mui/material";
import { useEffect, useState } from "react";
import MuiTypography from "../../atoms/MuiTypography";
import { InputField } from "../../atoms/TextField";
import MuiButton from "../../atoms/MuiButton";
import theme from "../../../theme";
import MuiIcons from "../../atoms/Icon";
import MoveLeft from "../../../../public/assets/icons/MoveLeft.svg";
import {
  OTP_MESSAGE,
  emailRegex,
  email_up,
  forgot_password,
  forgot_start,
  go_back,
  highEmphasiscolor,
  maincolor,
  mediumEmphasiscolor,
  stroke_color,
} from "../../../utils/constants";
import { setSpacing } from "../../../utils/function";
import OTPCard from "../Otpcard";
import StatusModal from "../StatusModal";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../services/routes";

export interface ForgetPasswordCardProps {
  handleBackClick?: () => void;
  handleForgot?: (email: string) => void;
}
const ForgotContainer = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  width: setSpacing(120),
  height: theme.spacing(168),
  boxShadow: "2px 6px 34px rgba(45, 45, 47, 0.1)",
});

const TypoForgotBox = styled("div")({
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

const StyledBox = styled("div")({
  display: "flex",
  flexDirection: "column",

  gap: setSpacing(6.25),
  marginLeft: setSpacing(12),

  marginBottom: setSpacing(6.25),
  width: setSpacing(96),
});

const InputBox = styled("div")({
  display: "flex",
  marginBottom: setSpacing(2),
});
const AllButtonForgotstyle = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: setSpacing(96),
  marginLeft: setSpacing(12),
  gap: setSpacing(6.25),
});

const ForgotCard = ({
  handleBackClick,
  handleForgot,
}: ForgetPasswordCardProps) => {
  const [email, setEmail] = useState<string>("");
  const [isModelOpen, setIsModelOpen] = useState<boolean>(false);
  const [isOTPSent, setIsOTPSent] = useState<boolean>(false);
  const [isForgetPasswordOpen, setIsForgetPasswordOpen] =
    useState<boolean>(true);
  const [emailError, setEmailError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isModelOpen) {
      setTimeout(() => {
        setIsModelOpen(false);
        setIsOTPSent(true);
      }, 3600);
    }
  }, [isModelOpen, isOTPSent]);

  const handleEmailChange = (e: any) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  };

  const validateEmail = (email: string): boolean => {
    if (!email) {
      setEmailError("Email required");
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid Email");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };
  const handleResetPassword = (email: any) => {
    const isvalidmail = validateEmail(email);
    if (isvalidmail && !emailError) {
      setIsModelOpen(true);
      setIsForgetPasswordOpen(false);
    }
  };

  const handleOTPBackClick = () => {
    setIsModelOpen(false);
    setIsOTPSent(false);
    setIsForgetPasswordOpen(true);
  };
  const buttonColor = email === "" ? theme.palette.primary[400] : maincolor;

  return (
    <>
      {isModelOpen && <StatusModal open={true} message={OTP_MESSAGE} />}
      {!isModelOpen && isOTPSent && (
        <OTPCard handleBackClick={handleOTPBackClick} />
      )}
      {isForgetPasswordOpen && (
        <ForgotContainer>
          <SignInBox>
            <MuiButton
              startIcon={<MuiIcons src={MoveLeft} alt={"Back image"} />}
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
                width: "90px",
                height: "20px",
              }}
              style={{ background: stroke_color }}
              onClick={() => navigate(ROUTES.SIGN_IN)}
            />
          </SignInBox>

          <TypoForgotBox>
            <MuiTypography
              typoVariant={"h1"}
              children={forgot_password}
              color={highEmphasiscolor}
              sx={{
                marginBottom: setSpacing(3),
              }}
            />
            <MuiTypography
              typoVariant={"body2"}
              color={mediumEmphasiscolor}
              children={forgot_start}
            />
          </TypoForgotBox>
          <StyledBox>
            <InputBox>
              <Stack gap={"0.3125rem"} width={"100%"}>
                <MuiTypography
                  typoVariant={"caption3"}
                  children={email_up}
                  color={mediumEmphasiscolor}
                />
                <InputField
                  value={email}
                  onChange={handleEmailChange}
                  placeholder={"Example@gmail.com"}
                  style={{ width: "100%" }}
                  variant={"outlined"}
                  type="email"
                  error={emailError !== ""}
                  helperText={emailError}
                  data-testid="email-error"
                />
              </Stack>
            </InputBox>
          </StyledBox>
          <AllButtonForgotstyle>
            <MuiButton
              variant="contained"
              children={
                <MuiTypography
                  typoVariant="body1"
                  children={"Reset Password"}
                />
              }
              sx={{
                width: setSpacing(96.25),
                height: setSpacing(11),
                padding: `${theme.spacing(2)} ${theme.spacing(
                  4
                )} ${theme.spacing(2)} ${theme.spacing(4)}`,
                textTransform: "none",
                borderRadius: 1,
              }}
              onClick={() => {
                handleResetPassword(email);
              }}
              style={{ color: stroke_color, background: buttonColor }}
            />
          </AllButtonForgotstyle>
        </ForgotContainer>
      )}
    </>
  );
};

export default ForgotCard;
