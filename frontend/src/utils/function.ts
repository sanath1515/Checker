import theme from "../theme"

export const setSpacing=(val:number)=>{
    return theme.spacing(val)
}


export const formatDate = (date: string) => {
    const parsedDate = new Date(date);
    const formattedDate = `${parsedDate.getMonth() + 1}/${
      parsedDate.getDate()
    }/${parsedDate.getFullYear()}`;
    return formattedDate;
  };
  
 

  export const formatDateOfBirth = (dob: string) => {
    const parsedDate = new Date(dob);
    const formattedDate = `${parsedDate.getFullYear()}-${(
      parsedDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${parsedDate.getDate().toString().padStart(2, "0")}`;
  
    const today = new Date();
    const age = today.getFullYear() - parsedDate.getFullYear();
  
    return `${formattedDate} (${age})`;
  };
  


  export const formatCreatedDateOfCandidate = (dateStr: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };
  
    const parsedDate = new Date(dateStr);
    return parsedDate.toLocaleString('en-US', options);
  };