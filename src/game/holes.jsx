import { useGame } from "./gameContext";

const HOLES = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export default function Holes() {
  const { molePosition, whack } = useGame();

  return (
    <ul className="holes">
      {HOLES.map((hole) => (
        <li key={hole} className="hole">
          {hole === molePosition ? (
            <div className="mole" onClick={whack}></div>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
