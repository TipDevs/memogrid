function GameGuide() {
  return (
    <div
      className={`flex flex-col w-[80%] max-w-[450px] items-center justify-center bg-[#ffffff00] rounded-lg backdrop-blur-2xl shadow-md p-[10px] fade-in gap-5`}>
      <h1 className="font-extrabold text-lg">MemoGrid - Game Guide Page</h1>
      <div className="flex flex-col gap-2">
        <section>
          <h2 className="font-bold">How to play?</h2>
          <ol>
            <li>On the selection page, select a difficulty card</li>
            <li>Wait for game tiles to load</li>
            <li>
              On the game board page, click on game tiles to test your
              intellectual
            </li>
            <li>
              If you have hint, click use hint to reveal the tiles you have
              clicked before
            </li>
          </ol>
        </section>
        <section>
          <h2 className="font-bold">Game rules:</h2>
          <ul>
            <li>Do not click on a game tile twice to avoid losing the game</li>
            <li>
              Complete clicking on all game tiles exactly once before time runs
              out
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default GameGuide;
