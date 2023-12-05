import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../../theme";
import MuiTypography from "../../atoms/MuiTypography";
import { adverseActionTableHeaders } from "../../../mocks/mock";
import { fetchActions } from "../../../services";
import { ActionType } from "../../../utils/types";
import CustomChip from "../../atoms/Chip";
import { getChipColors } from "../../../utils/constants";
import { formatDate } from "../../../utils/function";

export interface ActionsTableProps {
  id: number;
  candidatename: string;
  status: string;
  preNoticeDate: string;
  postNoticeDate: string;
}

interface AdverseActionsTableProps {
  width?: string;
  height?: string;
}

const StyledTableHeader = styled(TableHead)({
  backgroundColor: theme.palette.primary[100],
  height: theme.spacing(8),
  position: "sticky",
  top: 0,
});
const StyledTableHeading = styled(MuiTypography)({
  color: theme.palette.textColor.mediumEmphasis,
});
const AdverseActionsTable = ({ width, height }: AdverseActionsTableProps) => {
  const [actionTableData, setActionTableData] = useState<ActionType[]>([]);
  useEffect(() => {
    fetchActions().then((data) => {
      setActionTableData(data);
    });
  }, []);
  return (
    <>
      <Box
        width={width}
        height={"100%"}
        boxShadow={"0px 4px 28px 0px #2D2D2F1A"}
        sx={{
          border: ` 1px solid ${theme.palette.structural.stroke}`,
          borderBottom: 0,
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            overflow: "auto",
            scrollbarWidth: "thin",
            boxShadow: "none",
            scrollbarColor: "transparent transparent",
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Table size="small">
            <StyledTableHeader>
              {adverseActionTableHeaders.map((headingName, index) => (
                <TableCell
                  key={adverseActionTableHeaders.indexOf(headingName)}
                  align={index === 2 || index === 3 ? "right" : "left"}
                  sx={{ height: theme.spacing(10.5) }}
                >
                  <StyledTableHeading typoVariant="caption1">
                    {headingName}
                  </StyledTableHeading>
                </TableCell>
              ))}
            </StyledTableHeader>
            <TableBody>
              {actionTableData.map((actionData: any) => (
                <TableRow key={actionData.id} sx={{ height: "48px" }}>
                  <TableCell width={theme.spacing(45)}>
                    <MuiTypography
                      typoVariant="body2"
                      sx={{ color: theme.palette.primary[500] }}
                    >
                      {actionData.name}
                    </MuiTypography>
                  </TableCell>
                  <TableCell width={theme.spacing(22.5)}>
                    <CustomChip label={actionData.actionStatus==="schedule"?"SCHEDULED":actionData.actionStatus.toUpperCase()}  sx={getChipColors(
                        actionData.actionStatus ? actionData.actionStatus.toUpperCase() : ""
                      )}  />
                  </TableCell>
                  <TableCell align="right" width={theme.spacing(50)}>
                    {formatDate(actionData.preNoticeTime)}
                  </TableCell>
                  <TableCell align="right" width={theme.spacing(53)}>
                    {formatDate(actionData.postNoticeTime)}
                  </TableCell>
                  <TableCell align="right" width={"244px"}></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default AdverseActionsTable;
