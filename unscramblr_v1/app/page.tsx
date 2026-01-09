"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


 

function Home(){

  const [difficulty,setDifficulty] = useState("");
  console.log(difficulty);
 const router = useRouter();

 function startGame(){
  router.push(`/game?difficulty=${difficulty}`)
 }

  return(
    <div className="relative min-h-dvh overflow-hidden bg-slate-900">

      <span className="absolute top-50 left-30 text-7xl font-bold text-white/30  animate-float [animation-delay: -2s]"> U </span>

      <span className="absolute top-1/2 left-10 text-7xl font-bold text-white/30 animate-float [animation-delay: -8s] "> A </span>

      <span className="absolute top-70 left-90 text-7xl font-bold text-white/30 animate-float"> G </span>

      <span className="absolute top-60 left-80 text-7xl font-bold text-white/30 animate-float"> I </span>

      <span className="absolute top-20 left-100 text-7xl font-bold text-white/30 animate-float"> z </span>

      <span className="absolute top-50 right-10 text-7xl font-bold text-white/30 animate-float"> K </span>

      <span className="absolute top-90 right-10 text-7xl font-bold text-white/30 animate-float"> G </span>

      <span className="absolute top-30 left-1/2  translate-y-1/2 text-7xl font-bold text-white/30 animate-float"> B </span>

      <span className="absolute top-30 right-60 translate-y-1/2 text-7xl font-bold text-white/30 animate-float"> F </span>

      <span className="absolute top-80 left-1/4  translate-y-1/2 text-7xl font-bold text-white/30 animate-float"> M </span>

      <span className="absolute top-60 right-1/20  translate-y-1/2 text-7xl font-bold text-white/30 animate-float"> l </span>

      <span className="absolute top-10 left-10 translate-y-1/2 text-7xl font-bold text-white/30 animate-float">  r</span>

      <span className="absolute top-30 left-1/4  translate-y-1/2 text-7xl font-bold text-white/30 animate-float"> o </span>

       <span className="absolute top-70 right-1/6  translate-y-1/2 text-7xl font-bold text-white/30 animate-float"> M </span>

      <span className="absolute top-40 right-1/4  translate-y-1/2 text-7xl font-bold text-white/30 animate-float"> M </span>

         <span className="absolute top-20 left-1/3 translate-y-1/2 text-7xl font-bold text-white/30 animate-float"> M </span>









    



      <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center 
        w-full px-4sm:px-6  lg:mx-auto bg-gradient-to-br from-[#0f2027] via-[#1b1f4a] to-[#2c5364] h-screen">

       

        
         <h1 className="lg:mt-64 mt-120 text-8xl italic tracking-tight">Lexicon</h1>
        <p className="text-2xl mt-8">Beat the scramble</p>

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

      
      
    </div>
  )
}
export default Home;
