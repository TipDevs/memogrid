import GameCard from "./Cards/gameCard";
import Loader from "./Loader/loader";
import { useEffect } from "react";

function GameBoard({
  cacheData,
  setCacheData,
  selectedCardNumber,
  apiFn,
  endGame,
  gameState,
  setCardClickedTwice
}) {
  useEffect(() => {
    if (cacheData.length === selectedCardNumber) return;

    apiFn.processData({
      cardNumber: selectedCardNumber,
      apiFn: apiFn.fetchPokemonData,
      setCacheData,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCardNumber]);

  function shuffleGameCard(cacheData) {
    const cacheDataCopy = [...cacheData];
    for (let i = cacheDataCopy.length - 1; i > 0; i--) {  
      const j = Math.floor(Math.random() * (i + 1));
      [cacheDataCopy[i], cacheDataCopy[j]] = [
        cacheDataCopy[j],
        cacheDataCopy[i],
      ];
    }
    return cacheDataCopy;
  }

  function handleClick(id) {
    cacheData.find((data) => {
      if (data.id === id && data.selected === false) {
        setCacheData((prev) =>
          prev.map((data) =>
            data.id === id ? { ...data, selected: true } : data,
          ),
        );
        setCacheData((prev) => shuffleGameCard(prev));
      } else if (data.id === id && data.selected === true) {
        endGame(gameState.gameEnd);
        setCacheData((prev) =>
          prev.map((data) => ({ ...data, selected: false })),
        );
        setCardClickedTwice(true);
      }
    });
  }

  return (
    <div className="flex flex-col w-[80%] max-w-[450px] h-fit items-center justify-center bg-[#ffffff00] rounded-lg backdrop-blur-2xl shadow-md animate-[fadeIn_1s_ease-in-out] p-[10px]">
      {cacheData.length !== selectedCardNumber && <Loader />}
      {cacheData.length === selectedCardNumber && (
        <ul className="w-[100%] h-fit flex flex-wrap gap-[5px] items-center justify-center p-[5px]">
          {cacheData.map((item, index) => (
            <li
              key={item.name + index}
              className={`flex flex-col items-center justify-center w-[${selectedCardNumber > 10 ? 50 : 60}px] h-fit bg-[#ffffff00] rounded-lg backdrop-blur-2xl shadow-md`}
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
