import {
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import MuiTypography from "../../atoms/MuiTypography";
import { InputField } from "../../atoms/TextField";
import CheckboxComponent from "../../atoms/Checkbox";
import MuiButton from "../../atoms/MuiButton";
import theme from "../../../theme";
import OpenEye from "../../../../public/assets/icons/openEye.svg";
import ClosedEye from "../../../../public/assets/icons/eyeclose.svg";
import google_icon from "../../../../public/assets/images/Logogoogle.svg";
import github_icon from "../../../../public/assets/images/github_logo.svg";
import MuiIcons from "../../atoms/Icon";
import {
  API_URL,
  account_not_present,
  emailRegex,
  email_required,
  email_up,
  forgot_password,
  highEmphasiscolor,
  inValidEmail,
  login_credentials,
  maincolor,
  mediumEmphasiscolor,
  pass_placeholder_field,
  passwordRegex,
  password_required,
  password_up,
  placeholder_field,
  remember_me,
  sign_in,
  sign_in_with_github,
  sign_in_with_google,
  sign_up,
  stroke_color,
  strucutural_stroke,
} from "../../../utils/constants";
import {  setSpacing } from "../../../utils/function";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../services/routes";
import axios from "axios";

export interface LoginProps {
  handleSignIn: (email: string, password: string) => void;
}
const MainContainer = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  width: setSpacing(120),
  height: setSpacing(168),
  boxShadow: "2px 6px 34px rgba(45, 45, 47, 0.1)",
});

const TypoBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  columnGap: setSpacing(1.75),
  marginTop: setSpacing(11.5),
  marginLeft: setSpacing(12),
  marginBottom: setSpacing(3.75),
  width: setSpacing(96),
});

const StyledBox = styled("div")({
  display: "flex",
  flexDirection: "column",

  gap: setSpacing(6.25),
  marginLeft: setSpacing(12),

  marginBottom: setSpacing(5.25),
  width: setSpacing(96),
});

const BottomContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: setSpacing(3.75),
});

const CheckBoxStyle = styled("div")({
  display: "flex",
});

const InputBox = styled("div")({
  display: "flex",
  marginBottom: setSpacing(0.5),
});
const AllButtonStyle = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: setSpacing(96),
  marginLeft: setSpacing(12),
  gap: setSpacing(6.25),
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

const SignInCard = ({ handleSignIn }: LoginProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError(email_required);
    } else if (!emailRegex.test(email)) {
      setEmailError(inValidEmail);
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password: string) => {
    if (!password ) {
      setPasswordError(password_required);
    } else if( !passwordRegex.test(password)){
      setPasswordError("Invalid password");
    }else {
      setPasswordError("");
    }
  };

  const handleFormSubmit = async () => {
    validateEmail(email);
    validatePassword(password);
    if (email  && password  && !emailError && !passwordError) {
      try {
        const res = await axios.post(`${API_URL}/users/auth/login`,{
          email,
          password
        })
        localStorage.setItem("token",res.data.token.token)
        console.log("res ",res);
        
        navigate(ROUTES.CANDIDATES);
      } catch (error) {
        alert("Wrong credentials !");
      }
    }
  };
  const handleRemember = (event: any) => {
    setRemember(!remember);
  };


  const buttonColor =
    email === "" || password === "" || passwordError || emailError ? theme.palette.primary[400] : maincolor;

  return (
    <>
      <MainContainer>
        <TypoBox>
          <MuiTypography
            typoVariant={"h1"}
            children={sign_in}
            color={highEmphasiscolor}
            sx={{
              marginBottom: "15px",
            }}
          />
          <MuiTypography
            typoVariant={"body2"}
            color={mediumEmphasiscolor}
            children={login_credentials}
          />
        </TypoBox>
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
                onChange={handleEmail}
                placeholder={placeholder_field}
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
                color={mediumEmphasiscolor}
              />
              <InputField
                value={password}
                onChange={handlePassword}
                placeholder={pass_placeholder_field}
                style={{ width: "100%" }}
                variant={"outlined"}
                error={passwordError !== ""}
                helperText={passwordError}
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

          <CheckBoxStyle>
            <Grid container style={{ display: "flex", alignItems: "center" }}>
              <Grid item>
                <CheckboxComponent
                  label={
                    <MuiTypography
                      typoVariant={"body1"}
                      color={mediumEmphasiscolor}
                      children={remember_me}
                    />
                  }
                  checked={remember}
                  onChange={handleRemember}
                  size="small"
                />
              </Grid>
              <Grid item style={{ marginLeft: "auto" }}>
                <MuiTypography
                  typoVariant={"body1"}
                  color={maincolor}
                  children={forgot_password}
                  onClick={() => navigate(ROUTES.FORGOT_PASSWORD)}
                  sx={{ cursor: "pointer" }}
                />
              </Grid>
            </Grid>
          </CheckBoxStyle>
        </StyledBox>
        <AllButtonStyle>
          <MuiButton
            variant="contained"
            children={<MuiTypography typoVariant="body1" children={sign_in} />}
            sx={{
              width: setSpacing(96.25),
              height: setSpacing(11),
              padding: `${setSpacing(2)} ${setSpacing(4)} ${setSpacing(
                2
              )} ${setSpacing(4)}`,
              textTransform: "none",
              borderRadius: 1,
            }}
            onClick={handleFormSubmit}
            style={{ color: stroke_color, background: buttonColor }}
          />
          <Divider>
            <MuiTypography
              typoVariant="body2"
              color={mediumEmphasiscolor}
              children={"or"}
            />
          </Divider>

          <MuiButton
            variant={"contained"}
            children={
              <MuiTypography
                typoVariant="body2"
                children={sign_in_with_google}
              />
            }
            startIcon={<MuiIcons src={google_icon} alt={"GoogleIcon"} />}
            sx={{
              width: setSpacing(96.25),
              height: setSpacing(12),
              border: `1px solid ${strucutural_stroke}`,
              padding: `${setSpacing(2)} ${setSpacing(4)} ${setSpacing(
                2
              )} ${setSpacing(4)}`,
              textTransform: "none",
              borderRadius: 1,
            }}
            style={{
              color: highEmphasiscolor ?? "",
              backgroundColor: stroke_color,
            }}
            onClick={() =>
              loginWithRedirect({
                // appState: { returnTo: "/candidates" },
                authorizationParams: { connection: "google-oauth2" },
              })
            }
          />
          <MuiButton
            variant="contained"
            children={
              <MuiTypography
                typoVariant="body2"
                children={sign_in_with_github}
              />
            }
            startIcon={<MuiIcons src={github_icon} alt={"GithubIcon"} />}
            sx={{
              width: setSpacing(96.25),
              height: setSpacing(12),
              border: `1px solid ${strucutural_stroke}`,
              padding: `8px 16px 8px 16px`,
              textTransform: "none",
              borderRadius: 1,
            }}
            style={{
              color: highEmphasiscolor ?? "",
              backgroundColor: stroke_color,
            }}
          />
        </AllButtonStyle>
        <BottomContainer>
          <Grid
            style={{
              display: "flex",
              alignItems: "center",
              gap: theme.spacing(1),
            }}
          >
            <MuiTypography
              typoVariant={"body1"}
              style={{ color: mediumEmphasiscolor }}
              children={account_not_present}
            />
            <MuiTypography
              typoVariant={"body1"}
              style={{ color: maincolor }}
              children={sign_up}
              onClick={() => navigate(ROUTES.SIGN_UP)}
              sx={{ cursor: "pointer" }}
            />
          </Grid>
        </BottomContainer>
      </MainContainer>
    </>
  );
};

export default SignInCard;
