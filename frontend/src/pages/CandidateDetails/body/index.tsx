import React, { useEffect, useState } from "react";
import { Fetch_CourtData } from "../../../services";
import {
  Box,
  Card,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import { formatDate, setSpacing } from "../../../utils/function";
import theme from "../../../theme";
import MuiTypography from "../../../components/atoms/MuiTypography";
import {
  COURT_SECTION,
  getChipColors,
  highEmphasiscolor,
  mediumEmphasiscolor,
} from "../../../utils/constants";
import CustomChip from "../../../components/atoms/Chip";

const Container = styled(Box)({
  height: setSpacing(14),
  padding: setSpacing(1),
  width: "100%",
  display: "flex",
  alignItems: "center",
});

const TableHeadComponent = styled(TableHead)({
  backgroundColor: theme.palette.primary[100],
  borderTop: `1px ${theme.palette.structural.stroke} solid`,
  height: setSpacing(10),
});

const StyleTableCell = styled(TableCell)({
  width: theme.spacing(45),
});
const CourtSearchTable = () => {
  const [courtData, setCourtData] = useState([]);
  useEffect(() => {
    Fetch_CourtData().then((response) => {
      setCourtData(response);
    });
  }, []);
  return (
    <Card
      sx={{
        border: `0.5px solid ${theme.palette.structural.stroke}`,
        boxShadow: "none",
      }}
    >
      <Stack>
        <Container>
          <MuiTypography
            children={COURT_SECTION.tableHeader}
            typoVariant={"subtitle1"}
            color={`${highEmphasiscolor}`}
            sx={{ fontWeight: "bold", marginLeft: theme.spacing(2) }}
          />
        </Container>
        <TableContainer component={Paper}>
          <Table aria-label="simple table" size="small">
            <TableHeadComponent>
              <TableRow>
                {COURT_SECTION.columnsData.map((heading, index) => (
                  <StyleTableCell
                    key={index}
                    align={index === 2 ? "right" : "left"}
                  >
                    <MuiTypography
                      children={heading}
                      sx={{ color: mediumEmphasiscolor }}
                      typoVariant="body1"
                    />
                  </StyleTableCell>
                ))}
              </TableRow>
            </TableHeadComponent>

            <TableBody>
              {courtData.map((row: any) => (
                <TableRow key={row.id}>
                  <StyleTableCell sx={{ color: theme.palette.primary[500] }}>
                    {row.search}
                  </StyleTableCell>

                  <StyleTableCell>
                    <CustomChip
                      label={row.status ? row.status.toUpperCase() : ""}
                      sx={getChipColors(
                        row.status ? row.status.toUpperCase() : ""
                      )}
                    />
                  </StyleTableCell>

                  <StyleTableCell align="right">{formatDate(row.verificationDate)}</StyleTableCell>
                  <StyleTableCell></StyleTableCell>
                  <StyleTableCell></StyleTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Card>
  );
};

export default CourtSearchTable;
