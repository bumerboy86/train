import { FC } from "react";
import { IGameProps } from "../../interfaces/IGameProps.ts";
import "./StartBoard.css";

export const StartBoard: FC<IGameProps> = ({ startFn, tScore }) => {
  return (
    <div className='startBoard'>
      <p>Press start to Play</p>
      <button onClick={startFn}>START</button>
      <p>Total Score: {tScore}</p>
    </div>
  );
};
