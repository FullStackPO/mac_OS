import React, { useEffect, useState } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = {
    month: "long", // April
    weekday: "short", // Mon, Tue
    day: "numeric",
  };

  const formattedDate = dateTime.toLocaleDateString("en-US", options);

  let hours = dateTime.getHours();
  let minutes = dateTime.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // 0 becomes 12
  minutes = minutes < 10 ? "0" + minutes : minutes;


  const formattedTime = `${hours}:${minutes} ${ampm}`;

  return (<div style={{display:'flex', alignItems: "center"}}>
      <p style={{fontFamily:'system-ui'}}>{formattedDate.replaceAll(',','')} {formattedTime}</p>
    </div>
  );
};


export default DateTime;