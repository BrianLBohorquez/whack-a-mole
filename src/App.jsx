import { useGame } from "./game/gameContext";
import Welcome from "./game/welcome";
import Game from "./game/game";

export default function App() {
  const { playing } = useGame();

  return (
    <>
      <h1>Whack a Mole</h1>
      {playing ? <Game /> : <Welcome />}
    </>
  );
}
