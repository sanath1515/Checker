import srcLogs from "../../public/assets/icons/Logs.svg";
import srcAnalysis from "../../public/assets/icons/Analysis.svg";
import srcAccount from "../../public/assets/icons/Account.svg";
import srcScreening from "../../public/assets/icons/Screening.svg";
import theme from "../theme";
export const numberOfPages = "10";
export const totalPages = "out of 84 results";
export const countForPage = "10 per page";
export const paginationCount = 3;
export const logoutModalTitle = "Confirm Logout";
export const questionAboutLogout = "Are you sure you want to logout?";
export const cancelButton = "Cancel";
export const logoutButton = "Logout";
export const navItems = [
  {
    src: srcLogs,
    text: "Logs",
  },
  {
    src: srcAnalysis,
    text: "Analytics",
  },
  {
    src: srcAccount,
    text: "Account",
  },
  {
    src: srcScreening,
    text: "Screenings",
  },
];

export const home = "Home not found";
export const Candidates = "Candidates Not found";
export const AdverseActions = "Adverse Actions not found";
export const AltAvatar = "Avatar not found";
export const AltLogout = "Logout not found";
export const AltLogo = "Logo Image Not Found";
export const DATE_PICKER = {
  fromLabel: "Reports From",
  toLabel: "Reports To",
  dateFormate: "DD/MM/YYYY",
};
export const SUCCESS_MESSAGE = "Pre-Advance Action notice successfully sent";

export const ReportFrom = "Reports From";
export const ReportTo = "Reports To";
export const ReportTitle = "Export Candidate Reports CSV";
export const ReportButton = "Export Report";

export const inValidEmail = "Invalid email format";
export const signup_start = "Please sign up to start exploring the platform";
export const sign_up = "Sign up";
export const sign_in = "Sign in";
export const email_Required = "Email is required";
export const password_Required = "Password is required";
export const password_size = "Password must be at least 5 characters long";
export const password_not_match = "Passwords do not match";
export const password_alert = "Wrong credentials !";
export const email_up = "Email";
export const placeholder_email = "abc@gmail.com";
export const password_up = "Password";
export const placeholder_password_field = "********";
export const confirm_password = "Confirm Password";
export const agree_text = "I agree to the";
export const privacy_text = "Privacy Policy";
export const already_member = "Already a member? ";
export const OTP_MESSAGE = "OTP has been sent to your email!";
export const DOWNLOAD_MESSAGE =
  "Download link was sucessfully sent to your email";
export const UserName = "James Rodriguez";
export const UserMail = "James.co";
export const previewNoticeModalTitle = "Pre-Adverse Action Notice";
export const assaultType = "Assault Domestic Violence";
export const attachmentTitle = "Attachments";
export const submitNoticeButton = "Submit Notice";
export const details: Record<string, string> = {
  "From: ": "kyle@checkr.com",
  "To: ": "",
  "subject: ": "Pre-adverse action notice - checkr-bpo",
};

export const conditions: string[] = [
  "Please carefully review the list of charges (in bold) and your contact information.",
  `Please note that we will send the corresponding post adverse action email automatically\nafter 7 days.`,
];

export const emailDataOne: string[] = [
  "Dear ",
  "You recently authorized checkr-bpo (“the company”) to obtain consumer reports and/or invistigate consumer reportsabout you from a consumer reporting agency. The Company is considering taking action in whole or in past\non information in such report(s) including the following specific items identified in the report prepared by Checkr,\nInc.",
];

export const emailDataTwo: string[] = [
  "If you wish to dispute the accuracy of the information in the report directly with the consumer reporting agency (i.e.,\nthe source of the informationcontained in the report), you should contact the agency identifield above directly.",
  "Sincerely,\nCheckr-bpo",
];

export const attachmentDetails: string[] = [
  "Summary of right under the FCRA",
  "Copy of background report",
];
export const checkBoxLabels: string[] = [
  "Driving while license suspended",
  "Assault Domestic Violence",
  "Unable to verify employment history at Dunder Mifflin",
];
export const preAdverseActionType =
  "Select the charges for the pre adverse action";
export const autoSendPostAdverseAction = "Auto send post adverse action";
export const previewNoticeButton = "Preview Notice";
export const numberDays = "7";
export const daysText = "Days";

export const password_required = "Password is required";
export const placeholder_field = "rhernandez@gmail.com";

export const login_credentials = "Please enter your login credentials";
export const pass_placeholder_field = "********";
export const email_required = "Email is required";
export const sign_in_with_google = "Sign in with Google";
export const sign_in_with_github = "Sign in with Github";
export const account_not_present = "Don’t have an account?" + " ";
export const remember_me = "Remember me";
export const forgot_password = "Forgot password?";
export const emailRegex = /^[^\s@]+@[^.@]+\.[^\s@.]+$/;
export const maincolor = theme.palette.primary.main;
export const mediumEmphasiscolor = theme.palette.textColor.mediumEmphasis;
export const highEmphasiscolor = theme.palette.textColor.highEmphasis;
export const stroke_color = theme.palette.structural.white;
export const strucutural_stroke = theme.palette.structural.stroke;
export const candidate_information = "Candidate Information";

export const Export = "Export";
export const ManualOrder = "Manual Order";

export const forgot_start = "No worries, we’ll send you reset instructions";
export const otp_start = "Please enter OTP";
export const otp_text = "OTP has been sent to your email";
export const not_get_otp = "Didn’t receive the OTP? ";
export const resend_otp = "Resend OTP";
export const reset_password = "Reset Password";
export const coninue_to = "Continue";
export const go_back = "Go Back";
export const Report_Information = "Report Information";

export const statusOptions: string[] = ["All Status", "Clear", "Consider"];
export const adverseStatusOptions: string[] = [
  "All Status",
  "Pending",
  "Scheduled",
  "Scheduled",
  "Dispute",
  "Canceled",
  "Undeliverable",
];
export const adjudicationOptions: string[] = [
  "All",
  "Engaged",
  "Pre adverse action",
];
export const searchBarPlaceholder = "Search any candidate";
export const tableTitle = "Candidates";
export const filterText = "Filter";
export const statusText = "Status";
export const adjudicationText = "Adjudication";
export const resultsFound = "results found";
export const COURT_SECTION = {
  tableHeader: "Court Searches",
  columnsData: ["SEARCH", "STATUS", "DATE", "", ""],
};

export const getChipColors = (status: string) => {
  if (status === "CLEAR" || status === "ENGAGE") {
    return {
      color: theme.palette.accent.green,
      backgroundColor: theme.palette.accent.lightGreen,
      borderRadius: theme.spacing(1),
    };
  } else if (status === "CONSIDER" || status === "ADVERSE ACTION") {
    return {
      color: theme.palette.accent.yellow,
      backgroundColor: theme.palette.accent.lightYellow,
      borderRadius: theme.spacing(1),
    };
  } else if (status === "SCHEDULED") {
    return {
      color: theme.palette.accent.blue,
      backgroundColor: theme.palette.accent.lightBlue,
      borderRadius: theme.spacing(1),
    };
  } else {
    return { color: "inherit", backgroundColor: "inherit" };
  }
};

export const candidateInitialState = {
  id: 0,
  status: "",
  adjudication: "",
  name: "",
  location: "",
  email: "",
  dob: "",
  phone: "",
  zipcode: "",
  driverLicence: "",
  socialSecurity: "",
  createdAt: "",
  date: "",
};
export const reportInitialState = {
  id: 2,
  status: "",
  adjudication: "",
  packageData: "",
  createdAt: "",
  completedDate: "",
  turnAroundTime: "",
};
export const passwordRegex = /^[a-zA-Z0-9]{6,16}$/;

export const API_URL = "https://be-bc119.bootcamp64.tk";
