import { useEffect, useState } from "react";


export interface Props {
  headerStyle: string;
  id: string;
};

const DateComponent = (props: Props) => {
  const date = new Date();

  const [ currentStamp, setCurrentStamp] = useState(date);

  


  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute:'numeric',
  };
  const formattedDate = date.toLocaleString("en-US", options);
  useEffect(() => {
    return () => {
      {formattedDate}
    }
  },[setCurrentStamp, date.getSeconds()])
  
  return <h1 id={props.id} className={props.headerStyle}>{formattedDate}</h1>;
};

export default DateComponent;
