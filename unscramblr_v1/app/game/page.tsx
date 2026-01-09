import { Suspense } from "react";
import Game from "./gameClient";

export default function GamePage(){
  return(
    <Suspense fallback={<div>Loading game...</div>}>
      <Game/>

    </Suspense>
  );
}