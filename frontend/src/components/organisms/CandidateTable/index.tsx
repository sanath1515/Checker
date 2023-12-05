import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  Box,
  TableHead,
  TableCell,
  TableRow,
} from "@mui/material";
import CustomTableRow from "../../molecules/TableRow";
import styled from "@emotion/styled";
import theme from "../../../theme";
import MuiTypography from "../../atoms/MuiTypography";

export interface TableDataProps {
  candidateId: number;
  name: string;
  adjudication: string;
  status: string;
  location: string;
  date: string;
}
interface CandidateTableProps {
  width?: string;
  height?: string;
  candidateTableHeaders: string[];
  TableData: TableDataProps[];
  styles?: React.CSSProperties;
}

interface StyledBoxProps {
  width?: string;
  height?: string;
  styles?: React.CSSProperties;
}
const StyledBox = styled(Box)(({ styles }: StyledBoxProps) => ({
  overflowX: "auto",
  ...styles,
}));

const StyledHead = styled(TableHead)({
  backgroundColor: theme.palette.primary[100],
  height: theme.spacing(8),
});

const StyledTypoHeading = styled(MuiTypography)({
  color: theme.palette.textColor.mediumEmphasis,
});

const CandidateTable = ({
  width,
  height,
  styles,
  candidateTableHeaders,
  TableData,
}: CandidateTableProps) => {
  return (
    <StyledBox
      width={width ?? "100%"}
      height={height ?? "100%"}
      sx={{
        border: `1px solid ${theme.palette.structural.stroke}`,
        borderBottom: 0,
        ...styles,
      }}
    >
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table size="small">
          <StyledHead>
            <TableRow>
              {candidateTableHeaders.map((headingData, index) => (
                <TableCell
                  key={candidateTableHeaders.indexOf(headingData)}
                  align={index === 4 ? "center" : "left"}
                  sx={{ height: theme.spacing(10.5) }}
                >
                  <StyledTypoHeading typoVariant="caption1">
                    {headingData}
                  </StyledTypoHeading>
                </TableCell>
              ))}
            </TableRow>
          </StyledHead>
          <TableBody>
            {TableData.map((rowData) => (
              <CustomTableRow
                key={rowData?.candidateId}
                id={rowData.candidateId}
                candidatename={rowData?.name}
                adjudication={rowData?.adjudication}
                status={rowData?.status}
                location={rowData?.location}
                date={rowData?.date}
                cellwidth={theme.spacing(45)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledBox>
  );
};

export default CandidateTable;
