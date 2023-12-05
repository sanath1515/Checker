import { Grid, styled } from "@mui/material";
import React from "react";
import theme from "../../../theme";
import { setSpacing } from "../../../utils/function";
import NavBar from "../../organisms/NavBar";

interface DashBoardTemplateProps {
  header?: React.ReactElement;
  content?: React.ReactElement;
}

const Container = styled(Grid)({
  display: "flex",
  padding: setSpacing(5),
  gap: setSpacing(5),
  backgroundColor: "#F7F8FA",
  height: "100vh",
});

const RightBox = styled(Grid)({
  margin: "0",
  display: "flex",
  flexDirection: "column",
  paddingTop: setSpacing(5),
  gap: setSpacing(5),
  width: "100%",
});

const NavigationBar = styled(Grid)({});

const Header = styled(Grid)(({ header }: { header: React.ReactNode }) => ({
  border: header ? "none" : `1px solid ${theme.palette.grey[500]}`,
}));

const ScrollableContent = styled(Grid)(
  ({ scrollablecontent }: { scrollablecontent: React.ReactNode }) => ({
    border: scrollablecontent ? "none" : "1px solid grey",
    scrollbarWidth: "thin",
    scrollbarColor: "transparent transparent",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "transparent",
    },
  })
);

const LandingPageTemplate = ({ header, content }: DashBoardTemplateProps) => {
  return (
    <Container>
      <NavigationBar>
        <NavBar />
      </NavigationBar>
      <RightBox>
        <Header header={header} className="header">
          {header ?? "Header"}
        </Header>
        <ScrollableContent scrollablecontent={content} className="maincontent">
          {content ?? "Content"}
        </ScrollableContent>
      </RightBox>
    </Container>
  );
};

export default LandingPageTemplate;
