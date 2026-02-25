import useTimer from "../Hooks/timer";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
function GameHeader({ gameState, onTime, setHintUsed }) {
  const time = useTimer(
    gameState.gameState,
    gameState.cacheData,
    gameState.selectedCardNumber,
    gameState.selectedTime,
  );
  useEffect(() => {
    if (gameState.score.Current > gameState.score.Best) {
      gameState.setScore((prev) => ({
        ...prev,
        Best: prev.Current,
      }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.score.Current]);
  if (time === 0) onTime();
  return (
    <header className="w-screen flex-0.5 flex items-center justify-between px-[20px]">
      <div className="flex flex-col gap-2">
        <p className="font-bold">Best Score: {gameState.score.Best}</p>{" "}
        <p className="font-bold">Score: {gameState.score.Current}</p>
      </div>
      <p className={`font-bold text-[#${time <= 10 ? "ff0000" : "00ff00"}]`}>
        {time}s
      </p>
      <div
        className="flex items-center flex-col gap-2 hintCountBox"
        onClick={() => {
          if (gameState.hintCount > 0) {
            setHintUsed(true);
            gameState.setHintCount((prev) => prev - 1);
            setTimeout(() => {
              setHintUsed(false);
            }, 2500);
          }
        }}>
        <FontAwesomeIcon
          icon={gameState.hintCount > 0 ? faEye : faEyeSlash}
          className="text-2xl"
        />{" "}
        <p className="hintCount text-pink-300">{gameState.hintCount}</p>
        <p className="font-bold">
          {gameState.hintCount > 0 ? "Use hint" : "No hint"}
        </p>
      </div>
    </header>
  );
}

export default GameHeader;
