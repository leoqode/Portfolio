import React, { useEffect, useState } from "react";
import "./DateComponent.css";

export interface Props {
  headerStyle: string;
  id: string;
}

const DateComponent: React.FC<Props> = ({ headerStyle, id }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  return (
    <div id={id} className={`date-component ${headerStyle}`}>
      <div className="date">{formatDate(currentDate)}</div>
      <div className="time">
        {formatTime(currentDate).split(':').map((part, index) => (
          <span key={index} className="time-part">{part}</span>
        ))}
      </div>
    </div>
  );
};

export default DateComponent;
