"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets :["latin"],
  weight : ["600","700"],
});



 

 export default function Home(){

  const [difficulty,setDifficulty] = useState("");
  console.log(difficulty);
 const router = useRouter();

 function startGame(){
  router.push(`/game?difficulty=${difficulty}`)
 }

  return(
    
     <div className="flex flex-col items-center justify-center mt-16" >

          

       

        
         <h1 className={`${fredoka.className} text-8xl text-slate-50 font-bold mt-16 tracking-tight italic drop-shadow-[0_4px_20px_rgba(255,255,255,0.15)]`}>Lexicon</h1>
        <p className="text-2xl mt-4 text-white/90 italic">Beat the scramble</p>

         <select className=" flex justify-center mt-3 w-56
          rounded-2xl bg-[#0b1026]/90 backdrop-blur-xl
          border border-white/15 overflow-hidden shadow-xl" onChange={(e)=>setDifficulty(e.target.value)}>
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
         </select>

            <button   className="group relative px-16 py-4 rounded-full font-semibold tracking-widest text-white text-2xl
            bg-gradient-to-r from-[#6366f1] via-[#7c3aed] to-[#4f46e5]
            shadow-[0_0_30px_rgba(99,102,241,0.45)]
            transition-all duration-200 ease-out
            hover:scale-105 hover:shadow-[0_0_45px_rgba(124,58,237,0.65)]
            active:scale-95 mt-8" onClick={startGame}>Play</button>

        
       
      </div>

      
      
  
  )
}

 