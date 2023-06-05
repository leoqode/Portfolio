
const DateComponent = () => {
  const date = new Date()

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
  };
  
  const formattedDate = date.toLocaleString('en-US', options);
  
  return (

    <div>{formattedDate}</div>
  )
}

export default DateComponent
