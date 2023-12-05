
export type ActionType={
  id:string,
  name:string,
  status:string,
  preNoticeDate:string,
  postNoticeDate:string
  
}

export type ReportInfo = {
  id: number;
  status: string ;
  adjudication: string ;
  packageData: string;
  createdAt: string;
  completedDate: string;
  turnAroundTime: string;
};

export type candidate = {
  id: number;
  name: string;
  location: string;
  email: string;
  dob: string;
  phone: string;
  zipcode: string;
  driverLicence: string;
  socialSecurity: string;
  createdAt: string;
  date: string;
};

