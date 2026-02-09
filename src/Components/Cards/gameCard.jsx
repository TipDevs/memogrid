function GameCard(props) {
  return (
    <>
      <img src={props.image} alt={`${props.name} pokemon image`} className={`w-full`} />
      <h3 className="font-bold text-[0.5rem]">{props.name}</h3>
    </>
  );
}

export default GameCard;
