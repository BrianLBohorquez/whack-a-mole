import { useGame } from "./gameContext";

export default function Scoreboard() {
  const { score, restart } = useGame();

  return (
    <div className="scoreboard">
      <p>Score: {score}</p>
      <button onClick={restart}>Restart</button>
    </div>
  );
}
