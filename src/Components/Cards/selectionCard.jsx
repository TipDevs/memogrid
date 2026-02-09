import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faBarChart } from "@fortawesome/free-solid-svg-icons";
function SelectionCard(props) {
  return (
    <button
      className="flex flex-col items-center gap-[10px] w-[80%] bg-purple-300 rounded-lg backdrop-blur-2xl shadow-md p-[10px]"
      onClick={props.onClick}>
      <div className="flex gap-[20px]">
        <div className="flex flex-col items-center gap-[10px]">
          <div className="h-[50px] w-[50px] bg-red-400 rounded-[50%] flex items-center justify-center">
            <FontAwesomeIcon
              icon={faBarChart}
              className="text-white m-auto block"
              size="2x"
            />
          </div>
          <h3 className="text-bold">
            {props.numberOfCards} <span>cards</span>
          </h3>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <div className="h-[50px] w-[50px] bg-red-300 rounded-[50%] flex items-center justify-center">
            <FontAwesomeIcon
              icon={faClock}
              className="text-white m-auto block"
              size="2x"
            />
          </div>
          <h3 className="text-bold">
            {props.gameTime} <span>seconds</span>
          </h3>
        </div>
      </div>
    </button>
  );
}

export default SelectionCard;
