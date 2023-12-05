import React from "react";
import { Box, Pagination, styled } from "@mui/material";
import theme from "../../../theme";
import MuiTypography from "../../atoms/MuiTypography";
import {
  countForPage,
  numberOfPages,
  paginationCount,
  resultsFound,
  totalPages,
} from "../../../utils/constants";
import ArrowDown from "../../../../public/assets/icons/ChevronDown-Small.svg";
import MuiIcons from "../../atoms/Icon";

interface PaginationCardProps {
  isFiltered?: boolean;
  count?: string;
  width: string;
  height: string;
}

const Container = styled(Box)(({ width, height }: PaginationCardProps) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: width,
  height: height,
  background: theme.palette.structural.white,
  border: `0.0625rem solid ${theme.palette.structural.stroke}`,
  borderTop: 0,
  borderRadius: "0rem 0rem 0.625rem 0.625rem",
  padding: "0.625rem 0.75rem",
}));

const LeftInnerBox = styled(Box)({
  display: "flex",
  gap: "0.1875rem",
  alignItems: "center",
});

const InnerBox = styled(Box)({
  display: "flex",
  gap: "0.625rem",
  alignItems: "center",
});

const SelectBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: theme.spacing(25.75),
  height: theme.spacing(6.5),
  border: `0.0625rem solid ${theme.palette.structural.stroke}`,
  borderRadius: theme.spacing(1),
  gap: theme.spacing(3),
});

const paginationStyles = {
  ".css-ny2ze-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
    background: theme.palette.primary[300],
    color: theme.palette.primary[500],
  },
};

const PaginationCard = ({
  width,
  height,
  isFiltered,
  count,
}: PaginationCardProps) => {
  return (
    <Container width={width} height={height}>
      {!isFiltered ? (
        <>
          <InnerBox>
            <LeftInnerBox>
              <MuiTypography
                children={numberOfPages}
                typoVariant="caption2"
                sx={{ color: theme.palette.textColor.highEmphasis }}
              />
              <MuiTypography
                children={totalPages}
                typoVariant="caption2"
                sx={{ color: theme.palette.textColor.mediumEmphasis }}
              />
            </LeftInnerBox>
            <SelectBox>
              <MuiTypography
                children={countForPage}
                typoVariant="caption2"
                sx={{ color: theme.palette.textColor.highEmphasis }}
              />
              <MuiIcons src={ArrowDown} alt="ChevronDownIcon" />
            </SelectBox>
          </InnerBox>
          <Pagination
            count={paginationCount}
            size="small"
            sx={paginationStyles}
            shape="rounded"
          />
        </>
      ) : (
        <LeftInnerBox>
          <MuiTypography
            children={count}
            typoVariant="caption2"
            sx={{ color: theme.palette.textColor.highEmphasis }}
          />
          <MuiTypography
            children={resultsFound}
            typoVariant="caption2"
            sx={{ color: theme.palette.textColor.mediumEmphasis }}
          />
        </LeftInnerBox>
      )}
    </Container>
  );
};

export default PaginationCard;
