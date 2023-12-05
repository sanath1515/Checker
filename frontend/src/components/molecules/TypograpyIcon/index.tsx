import Box from "@mui/material/Box";
import theme from "../../../theme";
import MuiTypography, { TypoProps } from "../../atoms/MuiTypography";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import MuiIcons from "../../atoms/Icon";

interface TypograpyIconProps {
  backgroundColor?: any;
  iconSrc: string;
  iconAlt: string;
  typographyProps: TypoProps;
  iconOnClick?: () => void;
  height?: string;
  width?: string;
  children?: React.ReactNode | string;
}

const TypograpyIcon = ({
  backgroundColor,
  height,
  width,
  typographyProps,
  ...props
}: TypograpyIconProps) => {
  const StyledBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    height: height ?? theme.spacing(12.25),
    width: width ?? theme.spacing(52.5),
    borderRadius: theme.spacing(1.5),
    backgroundColor: backgroundColor || theme.palette.structural.white,
    cursor: "pointer",
  });

  const InnerStyledBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(3.75),
    cursor: "pointer",
  });

  return (
    <>
      <Grid>
        <StyledBox onClick={props.iconOnClick}>
          <InnerStyledBox>
            <MuiIcons src={props.iconSrc} alt={props.iconAlt} />
            <MuiTypography
              style={{ paddingLeft: theme.spacing(3) }}
              {...typographyProps}
            />
          </InnerStyledBox>
        </StyledBox>
      </Grid>
    </>
  );
};

export default TypograpyIcon;
