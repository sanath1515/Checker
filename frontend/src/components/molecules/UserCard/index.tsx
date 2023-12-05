import React from "react";
import { Box, Stack } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../theme";
import MuiIcon from "../../atoms/Icon";
import MuiTypography from "../../atoms/MuiTypography";

interface UserCardProps {
  title: string;
  subTitle: string;
  icon: any;
}
const CardStyle = styled(Box)({
  backgroundColor: theme.palette.primary[50],
  width: theme.spacing(82),
  height: theme.spacing(17.2),
  borderRadius: theme.spacing(3),
  padding: theme.spacing(3),
  border: `1px solid ${theme.palette.structural.stroke}`,
});

const IconBox = styled(Box)({
  backgroundColor: theme.palette.structural.white,
  width: theme.spacing(11.1),
  height: theme.spacing(11.1),
  paddingTop: theme.spacing(2),
  paddingLeft: theme.spacing(2.5),
  borderRadius: theme.spacing(3),
  border: `1px solid ${theme.palette.structural.stroke}`,
  alignItems: "center",
});
const Heading = styled(MuiTypography)({
  color: theme.palette.textColor.mediumEmphasis,
  paddingTop: theme.spacing(0.5),
});
const SubHeading = styled(MuiTypography)({
  color: theme.palette.textColor.highEmphasis,
});
const iconsstyle = {
  height: theme.spacing(6),
  width: theme.spacing(6),
};
const UserCard = ({ title, subTitle, icon }: UserCardProps) => {
  return (
    <CardStyle>
      <Stack direction="row" spacing={3}>
        <IconBox>
          <MuiIcon
            src={icon}
            style={iconsstyle}
            alt={"User Not Found"}
          ></MuiIcon>
        </IconBox>
        <Stack direction="column" spacing={0.3}>
          <Heading typoVariant="body2">{title}</Heading>
          <SubHeading typoVariant="body1">{subTitle}</SubHeading>
        </Stack>
      </Stack>
    </CardStyle>
  );
};

export default UserCard;
