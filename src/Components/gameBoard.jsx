import GameCard from "./Cards/gameCard";
import Loader from "./Loader/loader";
import { useEffect, useState } from "react";

function shuffleGameCard(cacheData) {
  const cacheDataCopy = [...cacheData];
  for (let i = cacheDataCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cacheDataCopy[i], cacheDataCopy[j]] = [cacheDataCopy[j], cacheDataCopy[i]];
  }
  return cacheDataCopy;
}

function GameBoard({
  cacheData,
  setCacheData,
  selectedCardNumber,
  apiFn,
  endGame,
  gameState,
  setCardClickedTwice,
  allSelected,
  setHintCount,
  hintUsed,
  setScore,
}) {
  const [threeSelectedTrue, setThreeSelectedTrue] = useState(0);
  useEffect(() => {
    if (cacheData.length === selectedCardNumber) return;

    apiFn.processData({
      cardNumber: selectedCardNumber,
      apiFn: apiFn.fetchPokemonData,
      setCacheData,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cacheData.length, selectedCardNumber]);

  function handleClick(id) {
    cacheData.find((data) => {
      if (data.id === id && data.selected === false) {
        setCacheData((prev) => {
          const updatedData = prev.map((data) =>
            data.id === id ? { ...data, selected: true } : data,
          );
          return shuffleGameCard(updatedData);
        });

        setScore((prev) => ({
          ...prev,
          Current: prev.Current + 1,
        }));
        setThreeSelectedTrue((prev) => prev + 1);
      } else if (data.id === id && data.selected === true) {
        setCardClickedTwice(true);
        endGame(gameState.gameEnd);
        setCacheData((prev) =>
          prev.map((data) => ({ ...data, selected: false })),
        );
        return;
      }
    });
  }
  if (allSelected) {
    endGame(gameState.gameEnd);
  }
  if (threeSelectedTrue >= 3 && threeSelectedTrue % 3 === 0) {
    setThreeSelectedTrue(0);
    setHintCount((prev) => prev + 1);
  }

  return (
    <div className="flex flex-col w-[80%] max-w-[450px] h-fit items-center justify-center bg-[#ffffff00] rounded-lg backdrop-blur-2xl shadow-md fade-in p-[10px]">
      {cacheData.length !== selectedCardNumber && <Loader />}
      {cacheData.length === selectedCardNumber && (
        <ul className="w-[100%] h-fit flex flex-wrap gap-[5px] items-center justify-center p-[5px]">
          {cacheData.map((item, index) => (
            <li
              key={item.name + index}
              className={`flex flex-col items-center justify-center w-[${selectedCardNumber > 10 ? 50 : 60}px] h-fit bg-[#ffffff00] rounded-lg backdrop-blur-2xl shadow-md card ${hintUsed && item.selected && "hint"}`}
              onClick={() => {
                handleClick(item.id);
              }}>
              <GameCard name={item.name} image={item.image} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GameBoard;
