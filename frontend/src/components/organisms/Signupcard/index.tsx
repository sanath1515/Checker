import {
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  styled,
} from "@mui/material";
import { useState } from "react";
import MuiTypography from "../../atoms/MuiTypography";
import { InputField } from "../../atoms/TextField";
import CheckboxComponent from "../../atoms/Checkbox";
import MuiButton from "../../atoms/MuiButton";
import theme from "../../../theme";
import OpenEye from "../../../../public/assets/icons/openEye.svg";
import ClosedEye from "../../../../public/assets/icons/eyeclose.svg";
import MuiIcons from "../../atoms/Icon";
import {
  API_URL,
  agree_text,
  already_member,
  confirm_password,
  emailRegex,
  email_Required,
  email_up,
  inValidEmail,
  passwordRegex,
  password_Required,
  password_alert,
  password_not_match,
  password_size,
  password_up,
  placeholder_email,
  placeholder_password_field,
  privacy_text,
  sign_in,
  sign_up,
  signup_start,
} from "../../../utils/constants";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../services/routes";
import axios from "axios";
export interface SignUpProps {
  handleSignUp: (email: string, password: string) => void;
}
const MainContainer = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  width: theme.spacing(120),
  height: theme.spacing(168),
  boxShadow: "2px 6px 34px rgba(45, 45, 47, 0.1)",
  margin: theme.spacing(25),
});

const TypoBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  columnGap: theme.spacing(1.75),
  marginTop: theme.spacing(13.5),
  marginLeft: theme.spacing(12),
  marginBottom: theme.spacing(3.75),
  width: theme.spacing(96),
});

const StyledBox = styled("div")({
  display: "flex",
  flexDirection: "column",

  gap: theme.spacing(6.25),
  marginLeft: theme.spacing(12),

  marginBottom: theme.spacing(6.25),
  width: theme.spacing(96),
});

const BottomContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(4.75),
});

const CheckBoxStyle = styled("div")({
  display: "flex",
});

const InputBox = styled("div")({
  display: "flex",
  marginBottom: theme.spacing(2),
});
const AllButtonStyle = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: theme.spacing(96),
  marginLeft: theme.spacing(12),
  gap: theme.spacing(6.25),
});

interface EndAdormentProps {
  handleClickShowPassword: () => void;
  showPassword: boolean;
}

const EndAdorment = ({
  handleClickShowPassword,
  showPassword,
}: EndAdormentProps) => {
  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        data-testid="visibleIcon"
        onClick={handleClickShowPassword}
        edge="end"
      >
        <MuiIcons
          src={showPassword ? OpenEye : ClosedEye}
          alt={showPassword ? "VisibleIcon" : "InvisibleIcon"}
        />
      </IconButton>
    </InputAdornment>
  );
};

const SignUpCard = ({ handleSignUp }: SignUpProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const handleconfirmPassword = (event: any) => {
    setConfirmPassword(event.target.value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  const validateEmail = (email: string) => {
    
    if (!email) {
      setEmailError(email_Required);
    } else if (!emailRegex.test(email)) {
      setEmailError(inValidEmail);
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password: string) => {
    if (!password) {
      setPasswordError(password_Required);
    } else if (password.length < 5 || confirmPassword.length < 5) {
      setPasswordError(password_size);
    }else if (!passwordRegex.test(password)) {
      setPasswordError("Invalid Password");
    }
     else if (password !== confirmPassword) {
      setPasswordError(password_not_match);
    } else {
      setPasswordError("");
    }
  };

  const handleFormSubmit = async () => {
    validateEmail(email);
    validatePassword(password);
    handleSignUp(email, password);

    if (email && password && !emailError && !passwordError) {
      try {
        const res = await axios.post(`${API_URL}/users/auth/signup`,{
          email,
          password
        })
        console.log("res ",res)
        navigate(ROUTES.SIGN_IN);
      } catch (error) {
        alert(password_alert);
      }
    }
  };

  const handleRemember = (event: any) => {
    setRemember(!remember);
  };
  const buttonColor =
    email === "" || password === "" || confirmPassword === ""
      ? theme.palette.primary[400]
      : theme.palette.primary.main;

  return (
    <>
      <MainContainer>
        <TypoBox>
          <MuiTypography
            typoVariant={"h1"}
            children={sign_up}
            color={"theme.palette.textColor.highEmphasis"}
            sx={{
              marginBottom: "15px",
            }}
          />
          <MuiTypography
            typoVariant={"body2"}
            color={theme.palette.textColor.mediumEmphasis}
            children={signup_start}
          />
        </TypoBox>
        <StyledBox>
          <InputBox>
            <Stack gap={"0.3125rem"} width={"100%"}>
              <MuiTypography
                typoVariant={"caption3"}
                children={email_up}
                color={theme.palette.textColor.mediumEmphasis}
              />
              <InputField
                value={email}
                onChange={handleEmail}
                placeholder={placeholder_email}
                style={{ width: "100%" }}
                variant={"outlined"}
                error={emailError !== ""}
                helperText={emailError}
                data-testid="email-error"
                size="small"
              />
            </Stack>
          </InputBox>
          <InputBox>
            <Stack gap={"0.3125rem"} width={"100%"}>
              <MuiTypography
                typoVariant={"caption3"}
                children={password_up}
                color={theme.palette.textColor.mediumEmphasis}
              />
              <InputField
                value={password}
                onChange={handlePassword}
                placeholder={placeholder_password_field}
                style={{ width: "100%" }}
                variant={"outlined"}
                error={passwordError !== ""}
                helperText={passwordError}
                data-testid="password-error"
                size="small"
                InputProps={{
                  type: showPassword ? "text" : "password",
                  endAdornment: (
                    <EndAdorment
                      handleClickShowPassword={handleClickShowPassword}
                      showPassword={showPassword}
                    />
                  ),
                }}
              />
            </Stack>
          </InputBox>

          <InputBox>
            <Stack gap={"0.3125rem"} width={"100%"}>
              <MuiTypography
                typoVariant={"caption3"}
                children={confirm_password}
                color={theme.palette.textColor.mediumEmphasis}
              />
              <InputField
                value={confirmPassword}
                onChange={handleconfirmPassword}
                placeholder={"*******"}
                style={{ width: "100%" }}
                variant={"outlined"}
                error={passwordError !== ""}
                helperText={passwordError}
                size="small"
                InputProps={{
                  type: showConfirmPassword ? "text" : "password",
                  endAdornment: (
                    <EndAdorment
                      handleClickShowPassword={handleClickShowConfirmPassword}
                      showPassword={showConfirmPassword}
                    />
                  ),
                }}
              />
            </Stack>
          </InputBox>
          <CheckBoxStyle>
            <Grid container style={{ display: "flex", alignItems: "center" }}>
              <CheckboxComponent
                label={
                  <MuiTypography
                    typoVariant={"body1"}
                    color={theme.palette.textColor.mediumEmphasis}
                    children={agree_text}
                  />
                }
                checked={remember}
                onChange={handleRemember}
                size="small"
              />

              <MuiTypography
                typoVariant={"body1"}
                color={theme.palette.primary.main}
                children={privacy_text}
              />
            </Grid>
          </CheckBoxStyle>
        </StyledBox>
        <AllButtonStyle>
          <MuiButton
            variant="contained"
            children={<MuiTypography typoVariant="body1" children={sign_up} />}
            sx={{
              width: theme.spacing(96.25),
              height: theme.spacing(11),
              padding: `${theme.spacing(2)} ${theme.spacing(4)} ${theme.spacing(
                2
              )} ${theme.spacing(4)}`,
              textTransform: "none",
              borderRadius: 1,
            }}
            onClick={handleFormSubmit}
            style={{
              color: theme.palette.structural.white,
              background: buttonColor,
            }}
          />
        </AllButtonStyle>
        <BottomContainer>
          <Grid
            style={{
              display: "flex",
              alignItems: "center",
              gap: theme.spacing(2),
            }}
          >
            <MuiTypography
              typoVariant={"body1"}
              style={{ color: theme.palette.textColor.mediumEmphasis }}
              children={already_member}
            />
            <MuiTypography
              typoVariant={"body1"}
              style={{ color: theme.palette.primary.main }}
              children={sign_in}
              onClick={() => navigate(ROUTES.SIGN_IN)}
              sx={{ cursor: "pointer" }}
            />
          </Grid>
        </BottomContainer>
      </MainContainer>
    </>
  );
};

export default SignUpCard;
