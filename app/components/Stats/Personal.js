import React, { useState, useEffect } from "react";

import Table from "./Table";
import personalData from "../../data/stats";

const PersonalStats = () => {
  const [data, setData] = useState(personalData);

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const careerStartTime = new Date("2019-06-17T09:00:00");
    setData({
      ...data,
      age: {
        label: "Years in industry",
        value: ((Date.now() - careerStartTime) / divisor).toFixed(11),
      },
    });
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h3>Some stats about me</h3>
      <Table data={Object.keys(data).map((key) => data[key])} />
    </>
  );
};

export default PersonalStats;
