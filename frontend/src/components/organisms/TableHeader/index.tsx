import React, { useState } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  styled,
  Menu,
  Divider,
  MenuItem,
} from "@mui/material";
import theme from "../../../theme";
import MuiTypography from "../../atoms/MuiTypography";
import { InputField } from "../../atoms/TextField";
import MuiIcons from "../../atoms/Icon";
import Search from "../../../../public/assets/icons/Search.svg";
import Filter from "../../../../public/assets/icons/Filter.svg";
import More from "../../../../public/assets/icons/More.svg";
import CheckboxComponent from "../../atoms/Checkbox";
import {
  adjudicationOptions,
  adjudicationText,
  adverseStatusOptions,
  candidate_information,
  filterText,
  searchBarPlaceholder,
  statusOptions,
  statusText,
} from "../../../utils/constants";

const Container = styled(Box)(
  ({ width, height }: { width: string; height: string }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: width,
    height: height,
    background: theme.palette.structural.white,
    border: `0.0625rem solid ${theme.palette.structural.stroke}`,
    borderRadius: `${theme.spacing(2.5)} ${theme.spacing(2.5)} 0px 0px`,
    padding: `${theme.spacing(2.5)} ${theme.spacing(3)}`,
  })
);

const RightBox = styled(Box)({
  display: "flex",
  justifyContent: "space-evenly",
  width: theme.spacing(110),
  height: theme.spacing(9),
});

const FilterBox = styled(IconButton)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: theme.spacing(22.5),
  border: `0.0625rem solid ${theme.palette.structural.stroke}`,
  borderRadius: theme.spacing(1.5),
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  gap: theme.spacing(2),
  "&:hover": {
    backgroundColor: "transparent",
  },
});

const MoreBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: theme.spacing(9),
  border: `0.0625rem solid ${theme.palette.structural.stroke}`,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  gap: theme.spacing(1),
});

const SearchField = styled(InputField)`
  & label.Mui-focused {
    border-color: ${theme.palette.structural.stroke};
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${theme.palette.structural.stroke} !important;
    }

    &.Mui-focused fieldset {
      border-color: ${theme.palette.structural.stroke} !important;
      border: 0.0625rem solid;
    }

    &:hover fieldset {
      border-color: ${theme.palette.structural.stroke} !important;
    }
  }
`;

const CustomMenu = styled(Menu)({
  "& .MuiPaper-root": {
    width: theme.spacing(71.25),
    height: theme.spacing(88),
    borderRadius: theme.spacing(1.5),
    border: `0.0625rem solid ${theme.palette.structural.stroke}`,
    marginTop: theme.spacing(2),
    overflow: "auto",
    scrollbarWidth: "thin",
    "&::-webkit-scrollbar": {
      width: theme.spacing(1.5),
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "transparent",
    },
  },
  "& .MuiMenu-paper": {
    top: "unset",
  },
});

const OptionsBox = styled(MenuItem)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  height: theme.spacing(8.75),
  "&:hover": {
    background: "transparent",
  },
});

interface TableHeaderProps {
  width: string;
  height: string;
  needMoreIcon: boolean;
  getSearchData: (searchValue: string) => void;
  getFilterData: (status: string) => void;
}

const TableHeader = ({
  width,
  height,
  needMoreIcon,
  getSearchData,
  getFilterData,
}: TableHeaderProps) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("All Status");

  const handleFilterClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    getSearchData(event.target.value);
  };

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
    getFilterData(status);
  };

  return (
    <Container width={width} height={height}>
      <MuiTypography
        children={candidate_information}
        typoVariant="subtitle1"
        sx={{ color: theme.palette.textColor.highEmphasis }}
      />
      <RightBox>
        <SearchField
          value={searchValue}
          placeholder={searchBarPlaceholder}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MuiIcons src={Search} alt="SearchIcon" />
              </InputAdornment>
            ),
          }}
          size="small"
          onChange={handleSearchChange}
        />
        <FilterBox
          disableRipple
          onClick={handleFilterClick}
          data-testid="filter-box"
        >
          <MuiIcons src={Filter} alt="FilterIcon" />
          <MuiTypography
            children={filterText}
            typoVariant="body1"
            sx={{ color: theme.palette.textColor.mediumEmphasis }}
          />
        </FilterBox>
        {needMoreIcon && (
          <MoreBox>
            <MuiIcons src={More} alt="MoreIcon" />
          </MoreBox>
        )}
      </RightBox>

      <CustomMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <OptionsBox>
          <MuiTypography
            typoVariant="body1"
            color={theme.palette.textColor.highEmphasis}
          >
            {filterText + "s"}
          </MuiTypography>
        </OptionsBox>

        <Divider sx={{ borderColor: theme.palette.structural.stroke }} />

        <OptionsBox>
          <MuiTypography
            typoVariant="body1"
            color={theme.palette.textColor.lowEmphasis}
          >
            {statusText}
          </MuiTypography>
        </OptionsBox>
        {needMoreIcon ? (
          <div>
            {statusOptions.map((value, index) => (
              <OptionsBox key={index} disableRipple>
                <CheckboxComponent
                  label={
                    <MuiTypography
                      typoVariant="caption2"
                      key={index}
                      color={theme.palette.textColor.highEmphasis}
                      children={value}
                    />
                  }
                  sx={{ color: theme.palette.structural.stroke }}
                  checked={selectedStatus === value}
                  onChange={() => handleStatusChange(value)}
                />
              </OptionsBox>
            ))}

            <OptionsBox>
              <MuiTypography
                typoVariant="body1"
                color={theme.palette.textColor.lowEmphasis}
              >
                {adjudicationText}
              </MuiTypography>
            </OptionsBox>

            {adjudicationOptions.map((value, index) => (
              <OptionsBox key={index} disableRipple>
                <CheckboxComponent
                  label={
                    <MuiTypography
                      typoVariant="caption2"
                      key={index}
                      color={theme.palette.textColor.highEmphasis}
                      children={value}
                    />
                  }
                  sx={{ color: theme.palette.structural.stroke }}
                />
              </OptionsBox>
            ))}
          </div>
        ) : (
          <div>
            {adverseStatusOptions.map((value, index) => (
              <OptionsBox key={index} disableRipple>
                <CheckboxComponent
                  label={
                    <MuiTypography
                      typoVariant="caption2"
                      key={index}
                      color={theme.palette.textColor.highEmphasis}
                      children={value}
                    />
                  }
                  sx={{ color: theme.palette.structural.stroke }}
                  checked={selectedStatus === value}
                />
              </OptionsBox>
            ))}
          </div>
        )}
      </CustomMenu>
    </Container>
  );
};

export default TableHeader;
