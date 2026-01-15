"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import React, { useState,useEffect } from "react"; 
import { WORDS } from "@/lib/words";
import { scrambleWord } from "@/lib/scramble";
import { shuffle } from "@/lib/shuffle";
import { useRouter } from "next/navigation";
import type { WordItem } from "@/lib/words";

export default function Game(){

  const searchParams = useSearchParams();
  const router = useRouter();

  const difficultyLevel = (searchParams.get("difficulty") as "easy" | "medium" |"hard" )|| "easy";
  console.log(difficultyLevel)

  

  
  const list = WORDS[difficultyLevel];
  const [currentIndex,setCurrentIndex] = useState(0);
  const CurrentCard = list[currentIndex];
  const currentWord = CurrentCard.word

 
  const [word,setWord] = useState("");
  const [scrambled,setScrambled] = useState("");
  const [clue,setClue] = useState("");

  const [wordList,setWordList] = useState<WordItem[]>([]);
 
  useEffect(()=>{
   const source = WORDS[difficultyLevel];
    if (!WORDS[difficultyLevel]?.length) return;

    const gameWords = shuffle(source).slice(0,20);
    setWordList(gameWords);
    setCurrentIndex(0);

  },[difficultyLevel])

  useEffect(()=>{
    if(!wordList.length) return;

     const item = wordList[currentIndex];
     if (!item)return;
    setWord(item.word)
    setScrambled(scrambleWord(item.word))
    setClue(item.clue)


  },[currentIndex,wordList])

  const[countDown,setCountDown] = useState(20);

   function nextWord () {
    
    if (currentIndex === 19 ){
      router.push("/game/score")
      router.push(`/game/score?score=${score}`);
     
    } else{
      setCurrentIndex(prev => prev +1);
    }
    

    setCountDown(20)
    
    
    
  }

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCountDown(prev=>{
        {if (prev===0 )return 0}

        return prev-1;

      })
    },1000)

    
  },[])

   useEffect(()=>{
    if(countDown===0){
      nextWord();
       setCountDown(20)
    }
   
  },[countDown]);


  const [answer,setAnswer] = useState("");
  function typing(e:React.ChangeEvent<HTMLInputElement>){
    setAnswer(e.target.value)
  };

  const [result,setResult] = useState<string|null>(null);

  const [score,setScore] = useState(0)

  function checkAnswer(){
    setResult(
      answer.trim().toLowerCase() === word.toLowerCase() ? "correct" : "wrong"
    );
    if(answer.trim().toLowerCase() === word.toLowerCase()){
      setScore(prev => prev + 1)

    }
    setAnswer("");
    nextWord();

    setTimeout(()=>{
      setResult(null);
    },700)
    
    

  }

    return(
      
        <div className="min-h-screen w-ful bg-slate-950 bg-gradient-to-br from-indigo-950/40 via-slate-950 to-cyan-950/30 flex justify-center items-center px-4 text-white text-xl"> 
        
          
          
          

          <div   className="w-[95%]  bg-slate-900/80 backdrop-blur-lg shadow-[0_0_60px_rgba(99,102,241,0.25)]
          rounded-2xl p-6 border border-blue-800 max-h-screen  flex  items-center h-[90vh] py-4 mt-4 mb-4 flex-col relative">

            
          <div className="flex flex-row justify-between w-full">
            
            <p>Time:{countDown}</p>
            <p>question {currentIndex + 1}</p>
          </div>
                  
                    
              <div className="flex w-full max-h-16 flex flex-col self-center items-center mt-32" >
                    <p className="text-4xl font-semibold mb-4"> {scrambled}</p>
                  <p className="clue">clue:{clue}</p>
                             
              </div>

              {result && (
              <div
                className={`mt-4 text-5xl font-bold transition-all duration-300 mt-16
                  ${result === "correct"
                    ? "text-green-400 drop-shadow-[0_0_12px_rgba(74,222,128,0.9)]"
                    : "text-red-400 drop-shadow-[0_0_12px_rgba(248,113,113,0.9)]"}
                `}
              >
                {result === "correct" ? "✔" : "✖"}
              </div>
            )}
              

              
                  
                   
                
                  

              <div className="flex flex-col lg:mt-32 mt-72 w-full px-4 ">
            <input type="text" className=" h-12 border border-blue-900 rounded-2xl bg-[#12151c] " placeholder="your answer" id="answer" onChange={typing} value={answer}/>

            <button id="SubmitBtn" onClick={checkAnswer} className="w-full h-12 bg-blue-400 mt-4 rounded-xl">Check</button>
            <button onClick={nextWord} className="w-full h-12 bg-blue-600 mt-4 rounded-xl ">next</button>
          </div>
          
                   
          </div>

          
          


          

          
                        
                
                
                
                
          
        </div>
        
    );
}
