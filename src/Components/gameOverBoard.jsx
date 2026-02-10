function GameOverBoard(props) {
  return (
    <>
      <div
        className={`flex flex-col w-[80%] max-w-[450px] items-center justify-center bg-[#ffffff00] rounded-lg backdrop-blur-2xl shadow-md p-[10px] animate-[fadeIn_1s_ease-in-out]`}>
        {props.cacheData.every((data) => data.selected === true) && (
          <p className="text-white">
            Game Over!!! <span>You successfully pass the game ❤</span>
          </p>
        )}
        {props.cardClickedTwice ? (
          <p className="text-white">
            Game Over!!! <span>You clicked twice, try again 😔</span>
          </p>
        ) : (
          <p className="text-white">
            Game Over!!! <span>Time Up 😢</span>
          </p>
        )}
      </div>
    </>
  );
}

export default GameOverBoard;
