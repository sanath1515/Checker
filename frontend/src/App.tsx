import React, { useEffect } from "react";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
import SignInPage from "./pages/SignInPage";
import CandidateDetails from "./pages/CandidateDetails";
import CandidatePage from "./pages/CandidatePage";
import { Route, Routes } from "react-router-dom";
import AdverseActionsPage from "./pages/AdverseActionsPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import { NavbarProvider } from "./utils/navbarContext";
import { ROUTES } from "./services/routes";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { API_URL } from "./utils/constants";

const App = () => {
  const { isAuthenticated , user} = useAuth0();
  useEffect(() => {
    if ( isAuthenticated ) {
      onAuthLogin();
    }
  },[isAuthenticated])

  const onAuthLogin = async () => {
    const res = await axios.post(`${API_URL}/users/auth`,{
      email:user?.email
    })
    
    localStorage.setItem("token",res.data.token.token)
  }
  return (
    <ThemeProvider theme={theme}>
      <NavbarProvider>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
          <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
          <Route
            path={ROUTES.FORGOT_PASSWORD}
            element={<ForgotPasswordPage />}
          />
          <Route path={ROUTES.CANDIDATES} element={<CandidatePage />} />
          <Route
            path={ROUTES.CANDIDATE_DETAILS}
            element={<CandidateDetails />}
          />
          <Route
            path={ROUTES.ADVERSE_ACTIONS}
            element={<AdverseActionsPage />}
          />
        </Routes>
      </NavbarProvider>
    </ThemeProvider>
  );
};

export default App;
