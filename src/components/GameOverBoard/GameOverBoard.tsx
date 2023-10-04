import { FC } from "react";
import "./GameOverBoard.css";
import { IGameProps } from "../../interfaces/IGameProps.ts";

export const GameOverBoard: FC<IGameProps> = ({ startFn, tScore }) => {
  return (
    <div className='gameOverBoard'>
      <h2>Game Over</h2>
      <p>Press start to Play</p>
      <button onClick={startFn}>START</button>
      <p>Total Score: {tScore}</p>
    </div>
  );
};
