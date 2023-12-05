import { useEffect, useState } from "react";
import LandingPageTemplate from "../../components/template/LandingPageTemplate";
import MuiTypography from "../../components/atoms/MuiTypography";
import Accordian from "../../components/organisms/Accordian";
import { CandidateData, Report_Data } from "../../utils/data";
import { Grid, Stack, styled } from "@mui/material";
import {
  Report_Information,
  candidateInitialState,
  candidate_information,
  highEmphasiscolor,
  mediumEmphasiscolor,
  reportInitialState,
  stroke_color,
  strucutural_stroke,
} from "../../utils/constants";
import Back from "../../../public/assets/icons/BackIcon.svg";
import {formatCreatedDateOfCandidate, formatDateOfBirth, setSpacing } from "../../utils/function";
import MuiButton from "../../components/atoms/MuiButton";
import theme from "../../theme";
import {
  retrieveCandidateById,
  updateCandidateAdjudication,
} from "../../services";
import MuiIcons from "../../components/atoms/Icon";
import { ReportInfo, candidate } from "../../utils/types";
import CourtSearchTable from "./body";
import PreAdverseNoticeCard from "../../components/organisms/PreAdverseNoticeCard";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../services/routes";

const MainContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingRight: setSpacing(4),
  alignItems: "center",
  paddingLeft: setSpacing(3),
});

const StyledStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: setSpacing(2),
  height: setSpacing(6),
});

const CandidateStyle = styled(Grid)({
  height: "86vh",
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
});

const CandidateDetails = () => {
  const [data, setData] = useState<candidate>(candidateInitialState);
  const [reportData, setReportData] = useState<ReportInfo>(reportInitialState);
  const [isPreAdverseAction, setIsPreAdverseAction] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();
console.log('hary'+id);
  const fetchData = async () => {
    try {
      const candidate = await retrieveCandidateById(id!);
      setData(candidate);
      setReportData(candidate);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEngage = async () => {
    await updateCandidateAdjudication(id!, "ENGAGE");
    navigate(ROUTES.CANDIDATES);
  };

  const handleBackButton = () => {
    setIsPreAdverseAction(false);
    if (!isPreAdverseAction) {
      navigate(ROUTES.CANDIDATES);
    }
  };

  return (
    <LandingPageTemplate
      header={
        <MainContainer>
          <StyledStack>
            <MuiIcons src={Back} alt="Back" onClick={handleBackButton} />
            <MuiTypography
              children={
                isPreAdverseAction ? "Pre-Adverse Action Notice" : data?.name
              }
              typoVariant={isPreAdverseAction ? "subtitle1" : "h1"}
              sx={{ color: highEmphasiscolor }}
            />
          </StyledStack>
          {!isPreAdverseAction && (
            <Stack direction="row" spacing={3}>
              <MuiButton
                variant="contained"
                style={{
                  color: mediumEmphasiscolor,
                  backgroundColor: stroke_color,
                  borderRadius: 6,
                  border: `1px solid ${strucutural_stroke}`,
                }}
                children={"Pre-Adverse Action"}
                onClick={() => setIsPreAdverseAction(true)}
                sx={{ textTransform: "none" }}
              />

              <MuiButton
                variant="contained"
                style={{
                  color: stroke_color,
                  backgroundColor: theme.palette.primary[500],
                  borderRadius: "6",
                  height: setSpacing(9),
                }}
                children={"Engage"}
                onClick={handleEngage}
                sx={{ textTransform: "none" }}
              />
            </Stack>
          )}
        </MainContainer>
      }
      content={
        !isPreAdverseAction ? (
          <>
            <CandidateStyle data-testid="accordian">
              <Stack gap={setSpacing(6)}>
                <Accordian
                  title={candidate_information}
                  cardData={[
                    {
                      id: CandidateData[0].id,
                      title: CandidateData[0].title,
                      subtitle: data.name,
                      iconSrc: CandidateData[0].iconSrc,
                    },
                    {
                      id: CandidateData[1].id,
                      title: CandidateData[1].title,
                      subtitle: data.email,
                      iconSrc: CandidateData[1].iconSrc,
                    },
                    {
                      id: CandidateData[2].id,
                      title: CandidateData[2].title,
                      subtitle: formatDateOfBirth(data.dob),
                      iconSrc: CandidateData[2].iconSrc,
                    },
                    {
                      id: CandidateData[3].id,
                      title: CandidateData[3].title,
                      subtitle: data.phone,
                      iconSrc: CandidateData[3].iconSrc,
                    },
                    {
                      id: CandidateData[4].id,
                      title: CandidateData[4].title,
                      subtitle: data.zipcode,
                      iconSrc: CandidateData[4].iconSrc,
                    },
                    {
                      id: CandidateData[5].id,
                      title: CandidateData[5].title,
                      subtitle: data.socialSecurity,
                      iconSrc: CandidateData[5].iconSrc,
                    },
                    {
                      id: CandidateData[6].id,
                      title: CandidateData[6].title,
                      subtitle: data.driverLicence,
                      iconSrc: CandidateData[6].iconSrc,
                    },
                    {
                      id: CandidateData[7].id,
                      title: CandidateData[7].title,
                      subtitle: formatCreatedDateOfCandidate(data.createdAt),
                      iconSrc: CandidateData[7].iconSrc,
                    },
                  ]}
                />

                <Stack>
                  <Accordian
                    title={Report_Information}
                    cardData={[
                      {
                        id: Report_Data[0].id,
                        title: Report_Data[0].title,
                        subtitle:reportData.status.charAt(0).toUpperCase() + reportData.status.substring(1),
                        iconSrc: Report_Data[0].iconSrc,
                      },
                      {
                        id: Report_Data[1].id,
                        title: Report_Data[1].title,
                        subtitle:
                          reportData.adjudication.charAt(0).toUpperCase()+reportData.adjudication.substring(1),
                        iconSrc: Report_Data[1].iconSrc,
                      },
                      {
                        id: Report_Data[2].id,
                        title: Report_Data[2].title,
                        subtitle: reportData.packageData,
                        iconSrc: Report_Data[2].iconSrc,
                      },
                      {
                        id: Report_Data[3].id,
                        title: Report_Data[3].title,
                        subtitle: formatCreatedDateOfCandidate(reportData.createdAt),
                        iconSrc: Report_Data[3].iconSrc,
                      },
                      {
                        id: Report_Data[4].id,
                        title: Report_Data[4].title,
                        subtitle: formatCreatedDateOfCandidate(reportData.completedDate),
                        iconSrc: Report_Data[4].iconSrc,
                      },
                      {
                        id: Report_Data[5].id,
                        title: Report_Data[5].title,
                        subtitle: reportData.turnAroundTime,
                        iconSrc: Report_Data[5].iconSrc,
                      },
                    ]}
                  />
                </Stack>
                <CourtSearchTable />
              </Stack>
            </CandidateStyle>
          </>
        ) : (
          <PreAdverseNoticeCard width="inherit" />
        )
      }
    />
  );
};

export default CandidateDetails;
