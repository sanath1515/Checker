import React from "react";
import MuiIcons from "../../atoms/Icon";
import PrivacyPolicy from "../../../../public/assets/images/PrivacyPolicy.svg";
import { Grid, styled } from "@mui/material";
import theme from "../../../theme";

const TemplateContainer = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#F7F8FA",
});

const LeftContainer = styled(TemplateContainer)({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
});

interface SignInTemplateProps {
  rightComponent?: React.ReactNode;
}

const SignInTemplate = ({ rightComponent }: SignInTemplateProps) => {
  return (
    <Grid container>
      <LeftContainer item xs={6} md={6}>
        <MuiIcons src={PrivacyPolicy} alt="PrivacyPolicyImage" />
      </LeftContainer>
      <TemplateContainer item xs={12} md={6}>
        {rightComponent ?? "Right Side Component"}
      </TemplateContainer>
    </Grid>
  );
};

export default SignInTemplate;
