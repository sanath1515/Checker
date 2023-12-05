import React from "react";
import TableRow from "@mui/material/TableRow";
import styled from "@emotion/styled";
import theme from "../../../theme";
import { TableCell } from "@mui/material";
import MuiTypography from "../../atoms/MuiTypography";
import CustomChip from "../../atoms/Chip";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../utils/function";

export interface TableRowProps {
  id: number;
  candidatename?: string;
  adjudication?: string;
  status?: React.ReactNode;
  location?: string;
  date?: string;
  preNoticeDate?: string;
  postNoticeDate?: string;
  cellwidth?: string;
  cellheight?: string;
  cellstyles?: React.CSSProperties;
  rowwidth?: string;
  rowheight?: string;
  rowstyles?: React.CSSProperties;
  searchName?: string;
}

const StyledTableRow = styled(TableRow)<Omit<TableRowProps, "id">>(
  ({ rowwidth, rowheight, rowstyles }) => ({
    backgroundColor: theme.palette.structural.white,
    width: rowwidth ?? theme.spacing(264),
    height: rowheight ?? theme.spacing(12),
    ...rowstyles,
  })
);

const StyledCell = styled(TableCell)<Omit<TableRowProps, "id">>(
  ({ cellwidth, cellheight, cellstyles }) => ({
    alignContent: "start",
    width: cellwidth ??theme.spacing(53.5),
    height: cellheight ?? theme.spacing(12),
    ...cellstyles,
  })
);

const StyledName = styled(MuiTypography)({
  color: theme.palette.primary[500],
  cursor: "pointer",
});

const StyledAdjudication = styled(MuiTypography)({
  color: theme.palette.textColor.lowEmphasis,
});

const StyledTypo = styled(MuiTypography)({
  color: theme.palette.textColor.highEmphasis,
});

const CustomTableRow = ({
  id,
  candidatename,
  adjudication,
  status,
  location,
  date,
  preNoticeDate,
  postNoticeDate,
  cellwidth,
  cellheight,
  cellstyles,
  rowheight,
  rowstyles,
  rowwidth,
  searchName,
}: TableRowProps) => {
  const navigate = useNavigate();
  return (
    <StyledTableRow
      rowwidth={rowwidth}
      rowheight={rowheight}
      rowstyles={rowstyles}
    >
      {candidatename && (
        <StyledCell
          cellwidth={cellwidth}
          cellheight={cellheight}
          cellstyles={cellstyles}
        >
          <StyledName
            typoVariant="body2"
            onClick={() => navigate(`/candidatesDetails/${id}`)}
          >
            {candidatename}
          </StyledName>
        </StyledCell>
      )}
      {searchName && (
        <StyledCell
          cellwidth={cellwidth}
          cellheight={cellheight}
          cellstyles={cellstyles}
        >
          <StyledName typoVariant="body1">{searchName}</StyledName>
        </StyledCell>
      )}
      {adjudication && (
        <StyledCell
          cellwidth={cellwidth}
          cellheight={cellheight}
          cellstyles={cellstyles}
        >
          {adjudication === "-" ? (
            <StyledAdjudication typoVariant="body2">
              {adjudication}
            </StyledAdjudication>
          ) : (
            <CustomChip label={adjudication} />
          )}
        </StyledCell>
      )}
      <StyledCell
        cellwidth={cellwidth}
        cellheight={cellheight}
        cellstyles={cellstyles}
      >
        <CustomChip label={status} />
      </StyledCell>
      {location && (
        <StyledCell
          cellwidth={cellwidth}
          cellheight={cellheight}
          cellstyles={cellstyles}
        >
          <StyledTypo typoVariant="body2">{location}</StyledTypo>
        </StyledCell>
      )}
      {date && (
        <StyledCell
          cellwidth={cellwidth}
          cellheight={cellheight}
          cellstyles={cellstyles}
          align="center"
        >
          <StyledTypo typoVariant="body2">{formatDate(date)}</StyledTypo>
        </StyledCell>
      )}
      {preNoticeDate && (
        <StyledCell
          cellwidth={cellwidth}
          cellheight={cellheight}
          cellstyles={cellstyles}
          align="right"
        >
          <StyledTypo typoVariant="body2">{formatDate(preNoticeDate)}</StyledTypo>
        </StyledCell>
      )}
      {postNoticeDate && (
        <StyledCell
          cellwidth={cellwidth}
          cellheight={cellheight}
          cellstyles={cellstyles}
          align="right"
        >
          <StyledTypo typoVariant="body2">{formatDate(postNoticeDate)}</StyledTypo>
        </StyledCell>
      )}
    </StyledTableRow>
  );
};

export default CustomTableRow;
