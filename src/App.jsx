import "./App.css";
import SelectionBoard from "./Components/selectionBoard.jsx";
import GameGuide from "./Components/gameGuide.jsx";
import GameHeader from "./Components/GameHeader.jsx";
import GameBoard from "./Components/gameBoard.jsx";
import GameOverBoard from "./Components/gameOverBoard.jsx";
import useGameState from "./Hooks/gameState.js";
import startGame from "./Utils/startGame.js";
import { useState } from "react";
import { fetchPokemonData, processData } from "./services/pokemonApi.js";
import endGame from "./Utils/endGame.js";
function App() {
  const gameState = useGameState();
  const [hintUsed, setHintUsed] = useState(false);
  const allSelected =
    gameState.cacheData.length > 0 &&
    gameState.cacheData.every((data) => data.selected === true);
  const onTime = () => {
    endGame(gameState.gameEnd);
  };
  console.log(gameState.gameState);
  return (
    <>
      {(gameState.gameState === "Game Start" ||
        gameState.gameState === "Game Over") && (
        <GameHeader
          gameState={gameState}
          onTime={onTime}
          setHintUsed={setHintUsed}
        />
      )}

      {/* Main content area */}
      <main className="w-full flex-3 flex items-center justify-center pb-[20px] flex-col">
        {gameState.gameState === "Not started" && (
          <>
            <p
              className="absolute top-10 right-10 underline cursor-pointer"
              onClick={() => {
                gameState.showGameGuide();
              }}>
              How to play?
            </p>
            <SelectionBoard gameState={gameState} startGame={startGame} />
          </>
        )}
        {gameState.gameState === "Show Game Guide" && (
          <>
            <p
              className="absolute top-10 right-10 underline cursor-pointer"
              onClick={() => {
                gameState.hideGameGuide();
              }}>
              Go to selection page
            </p>
            <GameGuide hideGameGuide={gameState.hideGameGuide} />
          </>
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
            allSelected={allSelected}
            hintCount={gameState.hintCount}
            setHintCount={gameState.setHintCount}
            hintUsed={hintUsed}
            setScore={gameState.setScore}
            selectedTime={gameState.selectedTime}
          />
        )}
        {gameState.gameState === "Game Over" && (
          <GameOverBoard
            cardClickedTwice={gameState.cardClickedTwice}
            allSelected={allSelected}
          />
        )}
      </main>
    </>
  );
}

export default App;
