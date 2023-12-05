import React, { useEffect, useState } from "react";
import LandingPageTemplate from "../../components/template/LandingPageTemplate";
import CandidateTable, {
  TableDataProps,
} from "../../components/organisms/CandidateTable";
import TableHeader from "../../components/organisms/TableHeader";
import PaginationCard from "../../components/molecules/PaginationCard";
import { Box, styled } from "@mui/material";
import { candidateTableHeaders } from "../../mocks/mock";
import theme from "../../theme";
import { getCandidatesData } from "../../services";
import CandidateHeader from "../../components/molecules/CandidateHeader";

const TableBox = styled(Box)({
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

const HeaderComponent = () => {
  return <CandidateHeader heading="Candidates" hidden={false} />;
};

const BodyComponent = () => {
  const [tableData, setTableData] = useState<TableDataProps[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [status, setStatus] = useState("All Status");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCandidatesData();
      setTableData(data);
    };

    fetchData();
  }, []);

  const filteredData = tableData.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    const matchesStatus =
      status === "All Status" || item.status === status.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const filterDataLength = filteredData.length.toString();
  return (
    <>
      <TableHeader
        width="100%"
        height={theme.spacing(15)}
        needMoreIcon={true}
        getSearchData={(searchData) => setSearchValue(searchData)}
        getFilterData={(statusData) => setStatus(statusData)}
      />
      <TableBox>
        <CandidateTable
          width="100%"
          candidateTableHeaders={candidateTableHeaders}
          TableData={filteredData}
        />
      </TableBox>
      <PaginationCard
        isFiltered={searchValue !== "" || status !== "All Status"}
        count={filterDataLength.padStart(2, "0")}
        width="100%"
        height={theme.spacing(14)}
      />
    </>
  );
};
const CandidatePage = () => {
  return <LandingPageTemplate header={<HeaderComponent />} content={<BodyComponent />} />;
};

export default CandidatePage;
