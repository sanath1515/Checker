import React from "react";
import LandingPageTemplate from "../../components/template/LandingPageTemplate";
import CandidateHeader from "../../components/molecules/CandidateHeader";
import AdverseActionsTable from "../../components/organisms/AdverseActionsTable";
import TableHeader from "../../components/organisms/TableHeader";
import theme from "../../theme";
import PaginationCard from "../../components/molecules/PaginationCard";
import { Box } from "@mui/material";
import styled from "styled-components";

const TableContainer = styled(Box)({
  height: "70vh",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "0",
  },

  " &::-webkit-scrollbar-thumb": {
    backgroundColor: "transparent",
  },

  " &::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
  backgroundColor: theme.palette.structural.white,

  "@media (min-width: 1440px) and (min-height: 900px)": {
    height: "74vh",
  },
  "@media (min-width: 1920px) and (min-height: 1080px)": {
    height: "77.5vh",
  },
});

const ActionBody = () => {
  return (
    <>
      <TableHeader
        width="100%"
        height={theme.spacing(15)}
        needMoreIcon={false}
        getSearchData={() => {}}
        getFilterData={() => {}}
      />
      <TableContainer>
        <AdverseActionsTable />
      </TableContainer>
      <PaginationCard width={"100%"} height={theme.spacing(15)} />
    </>
  );
};

const AdverseActionsPage = () => {
  return (
    <LandingPageTemplate
      header={<CandidateHeader heading="Adverse Actions" hidden={true} />}
      content={<ActionBody />}
    />
  );
};

export default AdverseActionsPage;
