import styled from "@emotion/styled";
import { Card, Divider, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import theme from "../../../theme";
import MuiIcons from "../../atoms/Icon";
import Logo from "../../../../public/assets/images/logo.svg";
import TypograpyIcon from "../../molecules/TypograpyIcon";
import Home from "../../../../public/assets/icons/Box.svg";
import Candidate from "../../../../public/assets/icons/Canditate.svg";
import Logout from "../../../../public/assets/icons/Logout.svg";
import Action from "../../../../public/assets/icons/Action.svg";
import {
  AdverseActions,
  AltAvatar,
  AltLogo,
  AltLogout,
  Candidates,
  UserMail,
  UserName,
  home,
  navItems,
} from "../../../utils/constants";
import AvatarIcon from "../../../../public/assets/images/avatar_image.svg";
import { Avatar } from "../../atoms/Avatar/index.stories";
import MuiTypography from "../../atoms/MuiTypography";
import LogoutModal from "../../molecules/LogoutModal";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useNavbar } from "../../../utils/navbarContext";
import { ROUTES } from "../../../services/routes";

const BoxStyle = styled(Card)({
  width: theme.spacing(61),
  height: "95vh",
  backgroundColor: theme.palette.structural.white,
  borderRadius: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const LogoStyle = styled(Box)({
  paddingTop: theme.spacing(7),
  paddingLeft: theme.spacing(7),
});
const IconStyle = styled(Box)({
  height: theme.spacing(11),
  width: theme.spacing(51.5),
  paddingLeft: theme.spacing(4.5),
  paddingTop: theme.spacing(4),
});
const DividerStyle = styled(Divider)({
  color: theme.palette.structural.stroke,
});
const LogoutStyle = styled(Box)({
  height: theme.spacing(15),
  width: theme.spacing(60),
  padding: theme.spacing(4),
  display: "flex",
  justifyContent: "space-between",
  marginBottom: theme.spacing(1.5),
});

const NameStyle = styled(MuiTypography)({
  color: theme.palette.textColor.highEmphasis,
});
const EmailStyle = styled(MuiTypography)({
  color: theme.palette.textColor.lowEmphasis,
});
const IconBox = styled(Box)({
  height: theme.spacing(92.5),
});
const NavBar = () => {
  const { homeSelected, setHomeSelected } = useNavbar();
  const { actionSelected, setActionSelected } = useNavbar();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const { logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleLogoutIconClick = () => {
    setIsLogoutModalOpen(true);
  };

  const onHandleLogout = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogoutModalOpen(false);
      localStorage.removeItem("token");
      navigate("/");
    } else {
      setIsLogoutModalOpen(false);
      logout({ logoutParams: { returnTo: "https://fe-bc119.bootcamp64.tk" } });
    }
  };

  return (
    <BoxStyle>
      <Stack>
        <LogoStyle>
          <MuiIcons src={Logo} alt={AltLogo} />
        </LogoStyle>
        <IconBox>
          <IconStyle>
            <TypograpyIcon
              iconSrc={Home}
              iconAlt={home}
              typographyProps={{
                typoVariant: "body1",
                children: "Home",
                color: theme.palette.textColor.highEmphasis,
              }}
            />
            <TypograpyIcon
              iconSrc={Candidate}
              iconAlt={Candidates}
              typographyProps={{
                typoVariant: "body1",
                children: "Candidates",
                style: {
                  color: homeSelected
                    ? theme.palette.primary[500]
                    : theme.palette.textColor.highEmphasis,
                  paddingLeft: theme.spacing(2.5),
                },
              }}
              backgroundColor={
                homeSelected
                  ? theme.palette.primary[300]
                  : theme.palette.structural.white
              }
              iconOnClick={() => {
                setHomeSelected(true);
                setActionSelected(false);
                navigate(ROUTES.CANDIDATES);
              }}
            />
            <TypograpyIcon
              iconSrc={Action}
              iconAlt={AdverseActions}
              typographyProps={{
                typoVariant: "body1",
                children: "Adverse Actions",
                style: {
                  color: actionSelected
                    ? theme.palette.primary[500]
                    : theme.palette.textColor.highEmphasis,
                  paddingLeft: theme.spacing(2.5),
                },
              }}
              backgroundColor={
                actionSelected
                  ? theme.palette.primary[300]
                  : theme.palette.structural.white
              }
              iconOnClick={() => {
                setActionSelected(true);
                setHomeSelected(false);
                navigate(ROUTES.ADVERSE_ACTIONS);
              }}
            />
            {navItems.map((item, index) => (
              <TypograpyIcon
                key={index}
                iconSrc={item.src}
                iconAlt={`${item.text} not found`}
                typographyProps={{
                  typoVariant: "body1",
                  color: theme.palette.textColor.highEmphasis,
                  children: item.text,
                }}
              ></TypograpyIcon>
            ))}
          </IconStyle>
        </IconBox>
      </Stack>
      <Stack>
        <DividerStyle />
        <LogoutStyle>
          <Avatar src={AvatarIcon} alt={AltAvatar} />
          <Stack
            direction="column"
            paddingLeft={theme.spacing(0.5)}
            width={theme.spacing(35)}
          >
            <NameStyle typoVariant="body1">{UserName}</NameStyle>
            <EmailStyle typoVariant="caption2">{UserMail}</EmailStyle>
          </Stack>
          <MuiIcons
            src={Logout}
            onClick={handleLogoutIconClick}
            alt={AltLogout}
            style={{
              width: theme.spacing(6),
              height: theme.spacing(8.5),
              paddingLeft: theme.spacing(1),
            }}
          />
        </LogoutStyle>
      </Stack>
      {isLogoutModalOpen && (
        <LogoutModal
          open={isLogoutModalOpen}
          handleClose={() => setIsLogoutModalOpen(false)}
          handleLogout={onHandleLogout}
        />
      )}
    </BoxStyle>
  );
};
export default NavBar;
