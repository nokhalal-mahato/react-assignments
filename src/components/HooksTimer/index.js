import { useEffect, useState } from "react";

const HooksTimer = () => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevData) => prevData + 1);
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  },[]);
  return (
    <div>
      <h1>Timer: {timer}</h1>
    </div>
  );
};
export default HooksTimer;
