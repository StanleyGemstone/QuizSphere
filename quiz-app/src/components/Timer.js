import React, { useState, useEffect } from 'react';

const Timer = ({ timeLimit }) => {
  const [time, setTime] = useState(timeLimit);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLimit]);

  return (
    <div>
      <h2>Time: {time}</h2>
    </div>
  );
};

export default Timer;
