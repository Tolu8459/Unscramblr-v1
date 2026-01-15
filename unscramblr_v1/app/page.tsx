
import { Suspense } from "react";
import Home from "./HomeClient";
import BackgroundWords from "./game/backgroundWords/BackgroundWords";

export default function HomePage(){
    return(
        <div className="bg-gray-900 min-h-svh text-white flex flex-col items-center justify-center
        w-full px-4sm:px-6  lg:mx-auto bg-gradient-to-br from-[#0f2027] via-[#1b1f4a] to-[#2c5364] h-screen relative z-20">
          <BackgroundWords/>
            
            <Suspense fallback={<div>Loading score...</div>}>
                <Home/>
            </Suspense>
        </div>
    );
}