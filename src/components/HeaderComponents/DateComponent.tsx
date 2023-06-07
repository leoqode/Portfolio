export interface Props {
  headerStyle: string;
}

const DateComponent = (props: Props) => {
  const date = new Date();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
  };

  const formattedDate = date.toLocaleString("en-US", options);

  return <h1 className={props.headerStyle}>{formattedDate}</h1>;
};

export default DateComponent;
