export interface Props {
  headerStyle: string;
  id: string;
};

const DateComponent = (props: Props) => {
  const date = new Date();



  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute:'numeric',
  };
  const formattedDate = date.toLocaleString("en-US", options);
  return <h1 id={props.id} className={props.headerStyle}>{formattedDate}</h1>;
};

export default DateComponent;
