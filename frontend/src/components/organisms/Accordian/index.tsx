import theme from "../../../theme";
import styled from "@emotion/styled";
import Arrow_Down from "../../../../public/assets/icons/Arrow_Down.png";
import { highEmphasiscolor } from "../../../utils/constants";
import { Accordion, AccordionSummary, Grid } from "@mui/material";
import MuiTypography from "../../atoms/MuiTypography";
import MuiIcons from "../../atoms/Icon";
import UserCard from "../../molecules/UserCard";
import { CandidateInformation } from "../../../utils/data";
import { setSpacing } from "../../../utils/function";
import AccordionDetails from "@mui/material/AccordionDetails";

interface AccordianProp {
  title: string;
  cardData: CandidateInformation[];
}
const CardGrid = styled(Grid)({
  flexDirection: "row",
  flexWrap: "wrap",
  display: "flex",
  gap: setSpacing(4),
  padding: setSpacing(4),
  backgroundColor: theme.palette.textColor.white,
});

const StyledAccordion = styled(Accordion)`
  width: 99%;
  border-radius: ${setSpacing(2)};
  box-shadow: ${setSpacing(0)} ${setSpacing(1)} ${setSpacing(7)}
    rgba(45, 45, 47, 0.1);
  background-color: ${theme.palette.textColor.white};
  padding-top: ${theme.spacing(1)};
  padding-bottom: ${theme.spacing(1)};
  font-family: ${theme.typography.fontFamily};
`;

const heightIcons = { height: setSpacing(6), width: setSpacing(6) };

const Accordian = ({ cardData, title }: AccordianProp) => {
  return (
    <StyledAccordion>
      <AccordionSummary
        expandIcon={
          <MuiIcons src={Arrow_Down} alt={"AroowIcon"} style={heightIcons} />
        }
      >
        <MuiTypography
          color={`${highEmphasiscolor}`}
          children={title}
          sx={{ fontWeight: "bold", marginLeft: theme.spacing(2) }}
          typoVariant={"subtitle1"}
        />
      </AccordionSummary>
      <AccordionDetails
        sx={{ borderTop: `1px solid ${theme.palette.structural.stroke}` }}
      >
        <div data-testid="item-style">
          <CardGrid>
            {cardData?.map((val) => (
              <UserCard
                key={val.id}
                title={val.title}
                subTitle={val.subtitle}
                icon={val.iconSrc}
              />
            ))}
          </CardGrid>
        </div>
      </AccordionDetails>
    </StyledAccordion>
  );
};

export default Accordian;
