import SelectionCard from "./Cards/selectionCard";
function SelectionBoard(props) {
  return (
    <>
      <div
        className={`flex flex-col w-[80%] max-w-[450px] items-center justify-center bg-[#ffffff00] rounded-lg backdrop-blur-2xl shadow-md p-[10px] animate-[fadeIn_1s_ease-in-out]`}>
        <div className="flex flex-col gap-[30px] items-center">
          <p className="text-center">
            Welcome to MemoGrid - A memory card game to test your intellectual
          </p>
          <div className="w-[100%] flex flex-col gap-[20px] items-center">
            <SelectionCard
              type="Easy"
              numberOfCards={10}
              gameTime={60}
              onClick={() => {
                props.startGame({
                  setGameStartFn: () => {
                    props.gameState.gameStart(60, 10);
                  },
                });
              }}
            />
            <SelectionCard
              type="Medium"
              numberOfCards={20}
              gameTime={45}
              onClick={() =>
                props.startGame({
                  setGameStartFn: () => {
                    props.gameState.gameStart(45, 20);
                  },
                })
              }
            />
            <SelectionCard
              type="Hard"
              numberOfCards={30}
              gameTime={30}
              onClick={() =>
                props.startGame({
                  setGameStartFn: () => {
                    props.gameState.gameStart(30, 30);
                  },
                })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default SelectionBoard;
