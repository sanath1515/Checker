import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, styled } from "@mui/material";
import dayjs from "dayjs";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import theme from "../../../theme/index";
import MuiTypography from "../../atoms/MuiTypography";

export interface PropsType {
  label?: string;
  dateFormat?: string;
  onChange?: any;
  minDate?: dayjs.Dayjs;
  maxDate?: any;
}

const WraperBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexFlow: "column",
  gap: theme.spacing(1),
  width: theme.spacing(81.25),
  height: theme.spacing(16),
}));

const CustomCalendarIcon = styled(CalendarTodayOutlinedIcon)(({ theme }) => ({
  color: theme.palette.primary[400],
}));

const CustomDatePicker = styled(DatePicker)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    width: theme.spacing(80),
    height: theme.spacing(9),
    "& fieldset": {
      borderColor: "#E5E7ED",
      borderRadius: theme.spacing(1),
    },
    "&:hover fieldset": {
      borderColor: "#E5E7ED",
      borderRadious: theme.spacing(1),
    },
  },
}));

const MuiDatePicker = ({
  label,
  dateFormat,
  onChange,
  minDate,
  maxDate,
}: PropsType) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <WraperBox>
        <MuiTypography
          typoVariant="body2"
          sx={{ color: theme.palette.textColor.mediumEmphasis }}
          children={label}
        />
        <CustomDatePicker
          Data-testid="DatePicker"
          format={dateFormat}
          slots={{
            openPickerIcon: CustomCalendarIcon,
          }}
          showDaysOutsideCurrentMonth
          onChange={onChange}
          minDate={minDate}
          maxDate={maxDate}
        />
      </WraperBox>
    </LocalizationProvider>
  );
};

export default MuiDatePicker;
