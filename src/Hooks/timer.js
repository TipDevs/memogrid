import { useEffect, useState } from "react";

function useTimer(gameState, cacheData, selectedCardNumber, selectedTime) {
  const [time, setTime] = useState(selectedTime);
  useEffect(() => {
    let timer;
    if (gameState === "Game Start" && cacheData.length === selectedCardNumber) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState, cacheData, selectedCardNumber, selectedTime]);
  return time;
}

export default useTimer;
