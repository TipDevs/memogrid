import { useState } from "react";
function useGameState() {
  const [gameState, setGameState] = useState("Not started");
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedCardNumber, setSelectedCardNumber] = useState(null);
  const [cacheData, setCacheData] = useState([]);
  const [cardClickedTwice, setCardClickedTwice] = useState(false);
  const gameStart = (selectedTime, selectedCardNumber) => {
    setGameState("Game Start");
    setSelectedTime(selectedTime);
    setSelectedCardNumber(selectedCardNumber);
  };
  const gameEnd = () => {
    setGameState("Game Over");
    setSelectedTime(null);
    setSelectedCardNumber(null);
    setTimeout(() => {
      setGameState("Not started");
      setCardClickedTwice(false);
    }, 5000);
  };
  return {
    gameState,
    gameStart,
    gameEnd,
    selectedTime,
    selectedCardNumber,
    cacheData,
    setCacheData,
    cardClickedTwice,
    setCardClickedTwice,
  };
}

export default useGameState;
