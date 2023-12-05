import user from '../../public/assets/icons/user.png';
import EmailIcon from '../../public/assets/icons/Email.png';
import DOBIcon from '../../public/assets/icons/Name.png';
import PhoneIon from '../../public/assets/icons/Phone.svg';
import LocationIon from '../../public/assets/icons/Location.svg';
import SecurityIon from '../../public/assets/icons/Security.png';
import CalendarIon from '../../public/assets/icons/Calendar.png';
export type CandidateInformation = {
  id: number;
  title: string;
  subtitle: string ;
  iconSrc: string;
};
export const CandidateData :CandidateInformation[]=[
  {
    id: 1,
    title: "Name",
    subtitle: "John Smith",
    iconSrc: user
  },
  {
    id: 2,
    title: "Email",
    subtitle: "John.smith@checkr.com",
    iconSrc: EmailIcon
  },
  {
    id: 3,
    title: "DOB",
    subtitle: "1990-09-10 (26)",
    iconSrc: DOBIcon
  },
  {
  id: 4,
    title: "Phone",
    subtitle: "(555) 555-5555",
    iconSrc: PhoneIon
  },
  {
    id: 5,
    title: "Zipcode",
    subtitle: "94158",
    iconSrc: LocationIon
  },
{
    id: 6,
    title: "Social Security",
    subtitle: "XXX-XX-6789",
    iconSrc: SecurityIon
},
 {
    id: 7,
    title: "Drivers License",
    subtitle: "FTEST1111 (CA)",
    iconSrc: DOBIcon
  
  },
  {
    id: 8,
    title: "Created At",
    subtitle: "Nov 29, 2016 11:05:57 AM",
    iconSrc: CalendarIon
  },
];
import TAT from '../../public/assets/icons/Clock.png';
import Calander from '../../public/assets/icons/Calendar-1.png';
import Adjucation from '../../public/assets/icons/hammer.png';
import  Package  from '../../public/assets/icons/pacakge.svg';
import Clear from '../../public/assets/icons/Clear.png';
import created from '../../public/assets/icons/createdlogo.svg';
export const Report_Data : CandidateInformation[] = [
  {
    id:1,
    title: "Status",
    subtitle: "Clear",
    iconSrc: Clear
  },
  {
    id:2,
    title: "Adjudication",
    subtitle: "-",
    iconSrc: Adjucation
  },
  {
    id:3,
    title: "Package",
    subtitle: "Employee Pro",
    iconSrc: Package
  },
{
    id:4,
    title: "Created At",
    subtitle: "Dec 1, 2016 12:00:00 PM",
    iconSrc: created
},
  {
    id:5,
    title: "Completed Date",
    subtitle: "Dec 4, 2016 12:00:00 PM",
    iconSrc: Calander
    },
  {
    id:6,
    title: "Turn Around Time",
    subtitle: "1 Day , 14 hours",
    iconSrc: TAT
  },
];

