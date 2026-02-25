import { useState } from "react";
function useGameState() {
  const [gameState, setGameState] = useState("Not started");
  const [selectedTime, setSelectedTime] = useState(0);
  const [selectedCardNumber, setSelectedCardNumber] = useState(null);
  const [cacheData, setCacheData] = useState([]);
  const [cardClickedTwice, setCardClickedTwice] = useState(false);
  const [hintCount, setHintCount] = useState(0);
  const [score, setScore] = useState({ Current: 0, Best: 0 });
  const gameStart = (selectedTime, selectedCardNumber) => {
    setGameState("Game Start");
    setSelectedTime(selectedTime);
    setSelectedCardNumber(selectedCardNumber);
  };
  const gameEnd = () => {
    setGameState("Game Over");
    setSelectedTime(0);
    setSelectedCardNumber(null);
    setTimeout(() => {
      setGameState("Not started");
      setCardClickedTwice(false);
      setCacheData((prev) =>
        prev.map((data) => ({ ...data, selected: false })),
      );
      setScore((prev) => ({
        ...prev,
        Score: 0,
      }));
    }, 5000);
  };
  const showGameGuide = () => {
    setGameState("Show Game Guide");
  };
  const hideGameGuide = () => {
    setGameState("Not started");
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
    hintCount,
    setHintCount,
    score,
    setScore,
    showGameGuide,
    hideGameGuide,
  };
}

export default useGameState;
