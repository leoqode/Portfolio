import { useEffect, useState } from "react";


export interface Props {
  headerStyle: string;
  id: string;
};

const DateComponent = (props: Props) => {
  const date = new Date();

  const [ currentStamp, setCurrentStamp] = useState('');

  


  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute:'numeric',
  };
  // @ts-ignore
  const formattedDate = date.toLocaleString("en-US", options);
  useEffect(() => {
    setCurrentStamp(formattedDate)
    return () => {
      currentStamp
    }
  },[setCurrentStamp, date.getSeconds()])
  
  return <h1 id={props.id} className={props.headerStyle}>{currentStamp}</h1>;
};

export default DateComponent;
