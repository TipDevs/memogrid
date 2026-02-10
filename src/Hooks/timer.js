import { useEffect, useState } from "react";

function useTimer(gameState, cacheData, selectedCardNumber) {
  const [time, setTime] = useState(0);
  useEffect(() => {
    let timer;
    if (gameState === "Game Start" && cacheData.length  === selectedCardNumber) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      (() => {
        setTime(0);
      })();
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [gameState, cacheData, selectedCardNumber]);
  return time;
}

export default useTimer;
