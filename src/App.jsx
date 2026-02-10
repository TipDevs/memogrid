import "./App.css";
import SelectionBoard from "./Components/selectionBoard.jsx";
import GameBoard from "./Components/gameBoard.jsx";
import GameOverBoard from "./Components/gameOverBoard.jsx";
import useGameState from "./Hooks/gameState.js";
import startGame from "./Utils/startGame.js";
import { fetchPokemonData, processData } from "./services/pokemonApi.js";
import useTimer from "./Hooks/timer.js";
import endGame from "./Utils/endGame.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
let hintCount = 0;
function App() {
  const gameState = useGameState();
  const time = useTimer(
    gameState.gameState,
    gameState.cacheData,
    gameState.selectedCardNumber,
  );
  return (
    <>
      {/* Header with score and hint status */}
      {gameState.gameState !== "Not started" && (
        <header className="w-screen flex-0.5 flex items-center justify-between px-[20px]">
          <div className="flex flex-col gap-2">
            <p className="font-bold">Best Score: {0}</p>{" "}
            <p className="font-bold">Score: {0}</p>
          </div>
          <p
            className={`font-bold text-[#${gameState.selectedTime - time <= 10 ? "ff0000" : "00ff00"}]`}>
            {time}s
          </p>
          <div className="flex items-center flex-col gap-2">
            <FontAwesomeIcon
              icon={hintCount > 0 ? faEye : faEyeSlash}
              className="text-2xl"
            />{" "}
            <p className="font-bold">
              {hintCount > 0 ? "Use hint" : "No hint"}
            </p>
          </div>
        </header>
      )}

      {/* Main content area */}
      <main className="w-full flex-3 flex items-center justify-center pb-[20px]">
        {gameState.gameState === "Not started" && (
          <SelectionBoard gameState={gameState} startGame={startGame} />
        )}
        {gameState.gameState === "Game Start" && (
          <GameBoard
            cacheData={gameState.cacheData}
            setCacheData={gameState.setCacheData}
            selectedCardNumber={gameState.selectedCardNumber}
            apiFn={{ fetchPokemonData, processData }}
            endGame={endGame}
            gameState={gameState}
            setCardClickedTwice={gameState.setCardClickedTwice}
          />
        )}
        {time === gameState.selectedTime && endGame(gameState.gameEnd)}
        {gameState.gameState === "Game Over" && (
          <GameOverBoard
            time={time}
            selectedTime={gameState.selectedTime}
            cacheData={gameState.cacheData}
            cardClickedTwice={gameState.cardClickedTwice}
          />
        )}
      </main>
    </>
  );
}

export default App;
