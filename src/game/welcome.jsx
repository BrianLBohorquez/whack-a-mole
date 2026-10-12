import { useGame } from "./gameContext";

export default function Welcome() {
  const { start } = useGame();

  return (
    <section>
      <p>Welcome to Whack a Mole!</p>
      <p>
        Click the mole to score a point. Each time you hit it, the mole jumps to
        a new hole.
      </p>
      <button onClick={start}>Play</button>
    </section>
  );
}
