import { createContext, useContext, useState } from "react";

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState(0);
  const [playing, setPlaying] = useState(false);

  function start() {
    setScore(0);
    setMolePosition(Math.floor(Math.random() * 9));
    setPlaying(true);
  }

  function restart() {
    setPlaying(false);
  }

  function whack() {
    setScore(score + 1);
    setMolePosition(Math.floor(Math.random() * 9));
  }

  const value = { score, molePosition, playing, start, restart, whack };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used inside GameProvider");
  }
  return context;
}
