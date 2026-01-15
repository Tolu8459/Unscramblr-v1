import { Suspense } from "react";
import Game from "./gameClient";



export default function GamePage(){
  return(
    <div className="relative min-h-screen overflow-hidden ">
     
      <Suspense fallback={<div>Loading game...</div>}>
        <Game/>

      </Suspense>
    </div>
  );
}